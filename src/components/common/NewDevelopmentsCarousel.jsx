// src/components/services/NewDevelopmentsCarousel.jsx
import { useEffect, useRef, useState } from "react";

export default function NewDevelopmentsCarousel({
  images = [],
  altBase = "New development photo",
  heightClass = "h-48 md:h-56 lg:h-64", // control height per breakpoint
  roundedClass = "rounded-xl",
  ring = true,
  interval = 3000, // ms between slides
  pauseOnHover = true, // pause when hovered for better UX
}) {
  const [i, setI] = useState(0);
  const [hovered, setHovered] = useState(false);
  const timerRef = useRef(null);

  // Auto-rotate
  useEffect(() => {
    if (!images.length) return;

    // Respect user motion preferences
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;
    if (pauseOnHover && hovered) return;

    timerRef.current = setInterval(() => {
      setI((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timerRef.current);
  }, [images.length, interval, hovered, pauseOnHover]);

  // Stop timer if tab is hidden
  useEffect(() => {
    const onVis = () => {
      if (document.hidden && timerRef.current) clearInterval(timerRef.current);
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  if (!images.length) return null;

  return (
    <div
      className={[
        "relative overflow-hidden bg-gray-50",
        roundedClass,
        ring ? "ring-1 ring-gray-200" : "",
      ].join(" ")}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="New developments photos"
    >
      {/* Slides */}
      <div className={`relative ${heightClass}`}>
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`${altBase} ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              idx === i ? "opacity-100" : "opacity-0"
            }`}
            loading={idx === i ? "eager" : "lazy"}
          />
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Go to image ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-1.5 w-1.5 rounded-full transition-transform ${
              idx === i ? "bg-primary-navy scale-110" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
