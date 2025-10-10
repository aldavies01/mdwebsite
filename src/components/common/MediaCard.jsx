import { useEffect, useId, useState } from "react";
import Icon from "./Icon";

export default function MediaCard({
  title,
  description,
  poster = "/images/placeholder.jpg",
  src,
  provider = "youtube", // "youtube" | "vimeo" | "file"
  autoPlayOnOpen = true,
  className = "",
}) {
  const [open, setOpen] = useState(false);
  const id = useId();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev);
  }, [open]);

  const iframeSrc =
    provider === "youtube"
      ? `${src}${src?.includes("?") ? "&" : "?"}rel=0&modestbranding=1${
          autoPlayOnOpen ? "&autoplay=1" : ""
        }`
      : provider === "vimeo"
        ? `${src}${src?.includes("?") ? "&" : "?"}${autoPlayOnOpen ? "autoplay=1" : ""}`
        : null;

  return (
    <>
      <div
        className={[
          "relative isolate overflow-hidden rounded-3xl border border-white/20 bg-white/60 shadow-xl backdrop-blur",
          className,
        ].join(" ")}
      >
        {/* Gradient blob accents */}
        <div
          aria-hidden
          className="absolute -top-16 -left-10 h-40 w-40 rounded-full bg-gradient-to-br from-secondary-coral/40 via-secondary-purple/30 to-secondary-teal/30 blur-2xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-16 -right-10 h-40 w-40 rounded-full bg-gradient-to-br from-primary-gold/40 via-secondary-teal/30 to-secondary-purple/30 blur-2xl"
        />

        {/* Poster image */}
        <div className="relative aspect-video w-full overflow-hidden rounded-t-3xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={poster}
            alt={`${title || "Video"} poster`}
            className="h-full w-full object-cover"
            loading="lazy"
          />

          {/* Gradient scrim for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0" />
        </div>

        {/* Play overlay */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group absolute inset-0 grid place-items-center focus:outline-none"
          aria-labelledby={`${id}-label`}
        >
          <span className="sr-only">Play media: {title}</span>
          <div className="rounded-full p-1 bg-white/70 backdrop-blur-sm shadow-xl">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-secondary-coral via-secondary-purple to-secondary-teal shadow-lg">
              <Icon name="play" className="h-7 w-7 text-white" />
            </div>
          </div>
        </button>

        {/* Caption block */}
        {(title || description) && (
          <div className="relative z-10 p-6 sm:p-7">
            {title && (
              <h3
                id={`${id}-label`}
                className="text-xl font-extrabold tracking-tight text-primary-navy"
              >
                {title}
              </h3>
            )}
            {description && (
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                {description}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Modal */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${id}-label`}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <button
            aria-label="Close video"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Video modal */}
          <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/20 bg-neutral-950 shadow-2xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 shadow"
              aria-label="Close"
            >
              <Icon name="x" className="h-5 w-5 text-gray-700" />
            </button>

            <div className="relative aspect-video w-full">
              {provider === "file" ? (
                <video
                  src={src}
                  controls
                  autoPlay={autoPlayOnOpen}
                  className="h-full w-full"
                  playsInline
                />
              ) : (
                <iframe
                  src={iframeSrc}
                  title={title || "Video"}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
