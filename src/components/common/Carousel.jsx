import React, { useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

/** Minimal, reusable card with optional image + text overlay + body */
export function DefaultCard({
  item,
  className = "",
  overlay, // { title, subtitle, align: 'left'|'center'|'right', theme: 'light'|'dark' }
  body, // { title, summary, details }
}) {
  const alignMap = {
    left: "items-end text-left",
    center: "items-end text-center",
    right: "items-end text-right",
  };
  const overlayTheme =
    overlay?.theme === "dark" ? "text-white" : "text-gray-900";

  return (
    <article
      role="listitem"
      className={[
        "scroll-snap-item flex-shrink-0 w-[280px] sm:w-[360px] lg:w-[420px]",
        "rounded-xl overflow-hidden border border-gray-200 bg-white",
        className,
      ].join(" ")}
    >
      {/* image */}
      {item?.image && (
        <div className="relative aspect-[4/3] w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image}
            alt={item?.alt || item?.title || "carousel image"}
            className="h-full w-full object-cover"
            loading="lazy"
          />

          {/* overlay (optional) */}
          {(overlay?.title || overlay?.subtitle) && (
            <>
              {/* scrim only for dark theme to aid contrast */}
              {overlay?.theme === "dark" && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              )}
              <div
                className={[
                  "absolute inset-0 p-4 flex",
                  alignMap[overlay?.align || "left"],
                  overlayTheme,
                ].join(" ")}
              >
                <div className="w-full md:w-auto">
                  {overlay?.title && (
                    <h3 className="text-base sm:text-lg font-semibold">
                      {overlay.title}
                    </h3>
                  )}
                  {overlay?.subtitle && (
                    <p
                      className={[
                        "mt-1 text-xs sm:text-sm",
                        overlay?.theme === "dark"
                          ? "text-white/85"
                          : "text-gray-600",
                      ].join(" ")}
                    >
                      {overlay.subtitle}
                    </p>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* body (optional) */}
      {(body?.title || body?.summary || body?.details) && (
        <div className="p-4 sm:p-5">
          {body?.title && (
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              {body.title}
            </h4>
          )}
          {body?.summary && (
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              {body.summary}
            </p>
          )}
          {body?.details && (
            <p className="text-sm text-gray-500 leading-relaxed">
              {body.details}
            </p>
          )}
        </div>
      )}
    </article>
  );
}

DefaultCard.propTypes = {
  item: PropTypes.object,
  className: PropTypes.string,
  overlay: PropTypes.shape({
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    align: PropTypes.oneOf(["left", "center", "right"]),
    theme: PropTypes.oneOf(["light", "dark"]),
  }),
  body: PropTypes.shape({
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    summary: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    details: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  }),
};

export default function Carousel({
  items = [],
  renderItem, // (item, index) => ReactNode. If omitted, uses DefaultCard with overlay/body mapping.
  getOverlay,
  getBody,
  className = "",
  ariaLabel = "carousel",
  showDots = true,
}) {
  const ref = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    const el = ref.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanLeft(scrollLeft > 0);
    setCanRight(scrollLeft < scrollWidth - clientWidth - 10);

    const card = el.querySelector("[role='listitem']");
    const cardWidth = card?.offsetWidth || 420;
    const gap = 24; // gap-6
    const idx = Math.round(scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.max(0, Math.min(items.length - 1, idx)));
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, [items.length]);

  const scrollBy = (dir) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector("[role='listitem']");
    const cardWidth = card?.offsetWidth || 420;
    const gap = 24;
    const amount = cardWidth + gap;
    const target =
      dir === "left"
        ? Math.max(0, el.scrollLeft - amount)
        : Math.min(el.scrollWidth - el.clientWidth, el.scrollLeft + amount);
    el.scrollTo({ left: target, behavior: "smooth" });
  };

  const defaultRenderer = useMemo(() => {
    return (item, i) => (
      <DefaultCard
        key={i}
        item={item}
        overlay={getOverlay ? getOverlay(item) : undefined}
        body={getBody ? getBody(item) : undefined}
      />
    );
  }, [getOverlay, getBody]);

  return (
    <div className={["relative", className].join(" ")}>
      {/* arrows */}
      <button
        onClick={() => scrollBy("left")}
        aria-label="Previous"
        disabled={!canLeft}
        className={[
          "absolute left-2 top-1/2 -translate-y-1/2 z-20",
          "w-10 h-10 sm:w-11 sm:h-11 rounded-full",
          "bg-white shadow border border-gray-200",
          "flex items-center justify-center transition-opacity",
          canLeft ? "opacity-100" : "opacity-40 cursor-not-allowed",
        ].join(" ")}
      >
        <Icon name="chevron-left" className="w-5 h-5 text-gray-700" />
      </button>

      <button
        onClick={() => scrollBy("right")}
        aria-label="Next"
        disabled={!canRight}
        className={[
          "absolute right-2 top-1/2 -translate-y-1/2 z-20",
          "w-10 h-10 sm:w-11 sm:h-11 rounded-full",
          "bg-white shadow border border-gray-200",
          "flex items-center justify-center transition-opacity",
          canRight ? "opacity-100" : "opacity-40 cursor-not-allowed",
        ].join(" ")}
      >
        <Icon name="chevron-right" className="w-5 h-5 text-gray-700" />
      </button>

      {/* track */}
      <div
        ref={ref}
        role="list"
        aria-label={ariaLabel}
        className="
          relative flex gap-6 overflow-x-auto px-2 sm:px-4 lg:px-8 pb-2
          scroll-smooth scrollbar-hide
        "
      >
        {renderItem ? items.map(renderItem) : items.map(defaultRenderer)}
      </div>

      {/* dots (minimal) */}
      {showDots && items.length > 1 && (
        <div className="mt-3 flex items-center justify-center gap-2">
          {items.map((_, i) => (
            <span
              key={i}
              className={[
                "inline-block h-[3px] w-6 rounded-full",
                i === activeIndex ? "bg-gray-900" : "bg-gray-300",
              ].join(" ")}
            />
          ))}
        </div>
      )}

      {/* CSS helpers */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

Carousel.propTypes = {
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func,
  getOverlay: PropTypes.func,
  getBody: PropTypes.func,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
  showDots: PropTypes.bool,
};
