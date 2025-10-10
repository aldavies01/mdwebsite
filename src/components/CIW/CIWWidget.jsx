// src/components/CIW/CIWWidget.jsx
import { useEffect, useMemo, useRef } from "react";

/**
 * CIWWidget (robust)
 * - Primary: renders widget inside an iframe using document.write (parser-like).
 * - Auto-resizes height AND width to the widget's natural size; centers in card.
 * - Defensive: waits for the iframe to be attached before writing, logs progress.
 * - Fallback: if iframe path fails, tries direct (in-page) script injection.
 */
export default function CIWWidget({ id, src, title = "Regulatory Ratings" }) {
  const frameRef = useRef(null);
  const directRef = useRef(null);

  const url = useMemo(
    () =>
      src ||
      (id ? `https://digital.careinspectorate.wales/widget/${id}` : null),
    [id, src]
  );

  useEffect(() => {
    if (!url) return;

    let cleanupFns = [];
    let usedFallback = false;

    const log = (...args) => console.log("[CIW]", ...args);
    const warn = (...args) => console.warn("[CIW]", ...args);
    const error = (...args) => console.error("[CIW]", ...args);

    const tryIframeStrategy = async () => {
      const iframe = frameRef.current;
      if (!iframe) {
        warn("iframe not mounted yet");
        return;
      }

      // Ensure the frame is in the DOM before we write to it.
      await new Promise((r) => requestAnimationFrame(r));

      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      if (!doc) {
        warn("iframe document not available; falling back to direct injection");
        usedFallback = true;
        tryDirectInjection();
        return;
      }

      log("writing widget script into iframe:", url);

      // Write a full HTML document so the <script> is parser-inserted
      doc.open();
      doc.write(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <style>
      html, body { margin: 0; padding: 0; }
      #ciw-root { display: block; }
    </style>
  </head>
  <body>
    <div id="ciw-root"></div>
    <script type="text/javascript" src="${url}"></script>
  </body>
</html>`);
      doc.close();

      // Auto-size both height and width to content
      const resize = () => {
        try {
          const b = doc.body;
          if (!b) return;
          const naturalH = Math.max(
            b.scrollHeight,
            b.offsetHeight,
            b.clientHeight
          );
          const naturalW = Math.max(
            b.scrollWidth,
            b.offsetWidth,
            b.clientWidth
          );

          iframe.style.height = `${Math.max(naturalH + 8, 40)}px`;
          iframe.style.width = `${Math.max(naturalW, 200)}px`;
        } catch (e) {
          // ignore
        }
      };

      // Observers & timers for late-rendering widgets
      const mo = new MutationObserver(resize);
      mo.observe(doc.documentElement, { childList: true, subtree: true });
      cleanupFns.push(() => mo.disconnect());

      iframe.onload = resize;
      const t1 = setTimeout(resize, 120);
      const t2 = setTimeout(resize, 450);
      const t3 = setTimeout(resize, 1200);
      cleanupFns.push(() => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      });

      // Final guard: if still nothing after 1.5s, fallback
      const t4 = setTimeout(() => {
        try {
          const hasContent =
            (doc.body && doc.body.innerText.trim()) ||
            (doc.body && doc.body.children.length > 0);
          if (!hasContent && !usedFallback) {
            warn(
              "iframe strategy produced no visible DOM; trying direct injection fallback"
            );
            usedFallback = true;
            tryDirectInjection();
          }
        } catch {}
      }, 1500);
      cleanupFns.push(() => clearTimeout(t4));
    };

    const tryDirectInjection = () => {
      const mount = directRef.current;
      if (!mount) return;

      mount.innerHTML = "";
      const s = document.createElement("script");
      s.type = "text/javascript";
      s.src = url;
      s.async = false;
      s.defer = false;

      s.onload = () => log("direct injection script loaded");
      s.onerror = (e) => error("direct injection failed to load", e);

      mount.appendChild(s);

      // Basic watchdog: if nothing appears, at least we'll see the empty container
      const t = setTimeout(() => {
        const hasNodes = mount.querySelector("*:not(script)");
        if (!hasNodes)
          warn(
            "direct injection loaded but no DOM added (script may require true parser insertion)"
          );
      }, 1200);
      cleanupFns.push(() => clearTimeout(t));
    };

    // Start with iframe strategy
    tryIframeStrategy();

    return () => {
      cleanupFns.forEach((fn) => {
        try {
          fn();
        } catch {}
      });
      // clear iframe
      const iframe = frameRef.current;
      if (iframe) {
        try {
          iframe.src = "about:blank";
        } catch {}
      }
      // clear direct container
      const mount = directRef.current;
      if (mount) mount.innerHTML = "";
    };
  }, [url]);

  if (!url) return null;

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-primary-navy mb-2">{title}</h2>
        <p className="text-lg text-gray-600">
          Official ratings, powered by Care Inspectorate Wales.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        {/* Center wrapper so narrow widget looks neat in a wide card */}
        <div className="flex justify-center">
          <iframe
            ref={frameRef}
            title="CIW Ratings Widget"
            // initial safe size; will be auto-updated
            style={{
              border: 0,
              width: 420,
              height: 140,
              overflow: "hidden",
              maxWidth: "100%",
            }}
            scrolling="no"
          />
        </div>

        {/* Fallback mount (hidden until used) */}
        <div ref={directRef} style={{ display: "none" }} />

        <p className="mt-4 text-xs text-gray-500">
          This widget automatically updates after each inspection.
        </p>
      </div>
    </div>
  );
}
