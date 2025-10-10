// src/components/dayinlife/TimelineOverview.jsx
// Carousel-style, Zander Whitehurst–inspired + ShiftContext + Enhanced stars
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { dayInTheLifeData } from "../../data/careers.dayInTheLife";
import Icon from "../common/Icon";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useShift } from "./ShiftContext";

function badgeClasses(key) {
  const map = {
    "primary-navy": "bg-primary-navy text-white",
    "primary-gold": "bg-primary-gold text-primary-navy",
    "secondary-teal": "bg-secondary-teal text-white",
    "secondary-coral": "bg-secondary-coral text-white",
    "secondary-purple": "bg-secondary-purple text-white",
  };
  return map[key] || "bg-primary-navy text-white";
}

function getShiftKey(type = "") {
  const t = (type || "").toLowerCase();
  if (t.includes("night")) return "night";
  if (t.includes("day")) return "day";
  return t || "day";
}

function EventCard({ event, index }) {
  const accents = [
    "secondary-coral",
    "secondary-teal",
    "secondary-purple",
    "primary-navy",
    "primary-gold",
  ];
  const accent = accents[index % accents.length];

  return (
    <motion.article
      role="listitem"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35 }}
      className="
        w-[320px] sm:w-[380px] lg:w-[440px]
        flex-shrink-0 scroll-snap-item
        rounded-2xl border border-slate-200/70 bg-white/90 backdrop-blur
        shadow-[0_8px_30px_rgba(2,6,23,0.06)] overflow-hidden relative
      "
    >
      {/* Hero (icon or optional image) */}
      <div className="relative h-40 sm:h-44 lg:h-48 bg-gradient-to-br from-gray-50 to-secondary-light-blue/10">
        {event.image ? (
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-white/90 backdrop-blur shadow-md border border-gray-100 flex items-center justify-center">
              <Icon name={event.icon} className="w-7 h-7 text-primary-navy" />
            </div>
          </div>
        )}
        {/* Time badge */}
        <span
          className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm ring-1 ring-black/5 ${badgeClasses(
            accent
          )}`}
        >
          {event.time}
          {event.duration ? ` • ${event.duration}` : ""}
        </span>
        {/* Subtle corner glow */}
        <span
          aria-hidden
          className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-white/30 blur-2xl"
        />
      </div>

      {/* Body */}
      <div className="p-4 sm:p-6 lg:p-7">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary-navy mb-2">
          {event.title}
        </h3>
        {event.summary ? (
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {event.summary}
          </p>
        ) : null}
      </div>

      {/* Accent rail */}
      <span
        aria-hidden
        className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-secondary-coral via-primary-gold to-secondary-purple"
      />
    </motion.article>
  );
}

export default function TimelineOverview() {
  const { timeline } = dayInTheLifeData;
  const { shift, setShift, isNight } = useShift();
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // compute current events by selected shift with fallback
  const current = useMemo(() => {
    const byShift = timeline?.timelines?.[shift];
    return byShift || { events: timeline?.events || [] };
  }, [timeline, shift]);

  const checkScrollPosition = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const cardWidth = container.querySelector("article")?.offsetWidth || 440;
    const gap = 24; // gap-6
    const amount = cardWidth + gap;
    const target =
      direction === "left"
        ? Math.max(0, container.scrollLeft - amount)
        : Math.min(
            container.scrollWidth - container.clientWidth,
            container.scrollLeft + amount
          );

    container.scrollTo({ left: target, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScrollPosition);
    checkScrollPosition();
    return () => el.removeEventListener("scroll", checkScrollPosition);
  }, []);

  // When the shift changes, snap back to the start and recompute arrows
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.scrollTo({ left: 0, behavior: "instant" });
    const id = requestAnimationFrame(checkScrollPosition);
    return () => cancelAnimationFrame(id);
  }, [shift]);

  return (
    <section
      id="timeline"
      className={`relative py-20 sm:py-24 overflow-hidden ${isNight ? "text-white" : "text-inherit"}`}
    >
      {/* Dynamic background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Base gradient */}
        <div
          className={`absolute inset-0 ${isNight ? "bg-gradient-to-b from-slate-900 via-slate-950 to-black" : "bg-gradient-to-b from-sky-50 via-white to-white"}`}
        />

        {/* Decorative blobs / stars depending on shift */}
        {isNight ? (
          <>
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />
            {/* Enhanced stars layer */}
            <div className="absolute inset-0 stars animate-twinkle" />
            {/* Moon orb */}
            <div className="absolute top-10 right-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-slate-200 to-slate-400 shadow-2xl ring-1 ring-white/20 animate-float" />
          </>
        ) : (
          <>
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary-gold/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-secondary-coral/25 blur-3xl" />
            {/* Sun orb */}
            <div className="absolute top-10 right-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-yellow-300 to-orange-300 shadow-2xl ring-1 ring-white/60 animate-pulse-slow" />
            {/* Soft clouds */}
            <div className="absolute left-6 top-16 cloud animate-drift" />
            <div className="absolute left-1/3 top-24 cloud cloud-sm animate-drift-slow" />
          </>
        )}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <span
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur border shadow-sm ${isNight ? "bg-white/10 text-white border-white/20" : "bg-white/70 text-primary-navy border-white/60"}`}
          >
            <Icon name={isNight ? "moon" : "sun"} className="w-4 h-4" />
            {`Daily Schedule - ${isNight ? "Night" : "Day"}`}
          </span>
          <h2
            className={`mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight ${isNight ? "text-white" : "text-primary-navy"}`}
          >
            <span
              className={`bg-clip-text text-transparent ${isNight ? "bg-gradient-to-r from-white via-indigo-200 to-fuchsia-200" : "bg-gradient-to-r from-primary-navy via-secondary-purple to-secondary-coral"}`}
            >
              {timeline.title}
            </span>
          </h2>
          <p
            className={`mt-4 text-lg max-w-3xl mx-auto leading-relaxed ${isNight ? "text-slate-300" : "text-slate-600"}`}
          >
            {timeline.subtitle}
          </p>
        </motion.div>

        {/* Shift chips (interactive, context-driven) */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {timeline.shifts.map((s, i) => {
            const key = s.key || getShiftKey(s.type);
            const active = key === shift;
            return (
              <motion.button
                type="button"
                key={i}
                onClick={() => setShift(key)}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
                className={`px-6 py-3 rounded-xl shadow-sm border text-sm sm:text-base transition-all
                  ${
                    active
                      ? isNight
                        ? "bg-white text-slate-900 border-white"
                        : "bg-primary-navy text-white border-primary-navy"
                      : isNight
                        ? "bg-white/10 text-white border-white/20 hover:bg-white/15"
                        : "bg-white/80 backdrop-blur text-primary-navy border-slate-200 hover:bg-white"
                  }
                `}
                aria-pressed={active}
              >
                <div className="font-bold">{s.type}</div>
                <div
                  className={`${active ? (isNight ? "text-slate-800/80" : "text-white/80") : isNight ? "text-slate-300" : "text-slate-600"} text-xs sm:text-sm`}
                >
                  {s.hours}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Full-width Carousel */}
      <div className="relative mx-2 sm:mx-4 lg:mx-8">
        {/* Nav buttons */}
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-label="Previous timeline events"
          className={`
            absolute left-1 top-1/2 -translate-y-1/2 z-20
            w-10 h-10 sm:w-12 sm:h-12 rounded-full backdrop-blur
            shadow-lg border flex items-center justify-center transition-all duration-200
            ${isNight ? "bg-white/10 border-white/20 text-white" : "bg-white/90 border-gray-200 text-gray-700"}
            ${canScrollLeft ? "hover:shadow-xl hover:scale-110 cursor-pointer" : "opacity-50 cursor-not-allowed"}
          `}
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Next timeline events"
          className={`
            absolute right-1 top-1/2 -translate-y-1/2 z-20
            w-10 h-10 sm:w-12 sm:h-12 rounded-full backdrop-blur
            shadow-lg border flex items-center justify-center transition-all duration-200
            ${isNight ? "bg-white/10 border-white/20 text-white" : "bg-white/90 border-gray-200 text-gray-700"}
            ${canScrollRight ? "hover:shadow-xl hover:scale-110 cursor-pointer" : "opacity-50 cursor-not-allowed"}
          `}
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>

        {/* Scroll container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto smooth-scroll scrollbar-hide px-2 sm:px-4 lg:px-8 pb-4"
          role="list"
          aria-label="Day in the life timeline events"
        >
          {current.events.map((ev, i) => (
            <EventCard
              key={`${ev.time || ev.title}-${i}`}
              event={ev}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* Under-carousel callout */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 mt-10">
        <div
          className={`relative rounded-2xl shadow-lg p-5 sm:p-7 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 text-center sm:text-left border ${isNight ? "bg-white/10 border-white/20 text-white" : "bg-white/80 backdrop-blur border-slate-200 text-primary-navy"}`}
        >
          <div className="flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-8 h-8 sm:w-9 sm:h-9 ${isNight ? "text-indigo-200" : "text-secondary-coral"} motion-safe:animate-pulse`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2.5l1.1 3.4a2 2 0 001.27 1.27l3.43 1.1-3.43 1.1a2 2 0 00-1.27 1.27L12 14.5l-1.1-3.39a2 2 0 00-1.27-1.27L6.2 8.27l3.43-1.1A2 2 0 0010.9 5.9L12 2.5zM18 15l.7 2.1c.13.38.43.68.81.81L21.6 18.6l-2.09.7a1.2 1.2 0 00-.81.81L18 22l-.7-2.09a1.2 1.2 0 00-.81-.81L14.4 18.6l2.09-.69c.38-.13.68-.43.81-.81L18 15z"
              />
            </svg>
          </div>

          <p
            className={`text-base sm:text-lg md:text-xl font-semibold leading-relaxed ${isNight ? "text-white" : "text-primary-navy"}`}
          >
            Every day is different - these events are typical anchors, but we
            adapt timings and activities around residents' needs.
          </p>

          <span
            className={`pointer-events-none absolute -right-10 -bottom-10 w-40 h-40 rounded-full blur-2xl ${isNight ? "bg-white/10" : "bg-primary-gold/20"}`}
          />
        </div>
      </div>

      {/* Utilities */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .smooth-scroll {
          scroll-behavior: smooth;
          scroll-snap-type: x proximity;
          -webkit-overflow-scrolling: touch;
          transform: translateZ(0);
          will-change: scroll-position;
        }
        .scroll-snap-item {
          scroll-snap-align: start;
          transform: translateZ(0);
        }
        @media (max-width: 640px) {
          .smooth-scroll {
            scroll-snap-type: x mandatory;
            overscroll-behavior-x: contain;
            scroll-padding-left: 8px;
            scroll-padding-right: 8px;
          }
          .scroll-snap-item {
            scroll-snap-align: center;
          }
        }
        @media (hover: none) and (pointer: coarse) {
          .smooth-scroll {
            scroll-snap-type: x mandatory;
            overscroll-behavior-x: contain;
          }
        }
        /* Day/Night extras */
        .stars {
          background-image:
            radial-gradient(
              2px 2px at 20% 30%,
              rgba(255, 255, 255, 1),
              rgba(255, 255, 255, 0)
            ),
            radial-gradient(
              2.5px 2.5px at 40% 80%,
              rgba(255, 255, 255, 0.95),
              rgba(255, 255, 255, 0)
            ),
            radial-gradient(
              2px 2px at 70% 20%,
              rgba(255, 255, 255, 0.9),
              rgba(255, 255, 255, 0)
            ),
            radial-gradient(
              2.2px 2.2px at 85% 60%,
              rgba(255, 255, 255, 1),
              rgba(255, 255, 255, 0)
            ),
            radial-gradient(
              2px 2px at 10% 70%,
              rgba(255, 255, 255, 0.9),
              rgba(255, 255, 255, 0)
            );
          background-repeat: no-repeat;
          background-size: 100% 100%;
          opacity: 0.9;
        }
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.9;
          }
          50% {
            opacity: 0.3;
          }
        }
        .animate-twinkle {
          animation: twinkle 4s ease-in-out infinite;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.9;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        .cloud {
          width: 180px;
          height: 60px;
          background: rgba(255, 255, 255, 0.7);
          filter: blur(10px);
          border-radius: 9999px;
        }
        .cloud-sm {
          width: 120px;
          height: 44px;
        }
        @keyframes drift {
          0% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(16px);
          }
          100% {
            transform: translateX(0px);
          }
        }
        .animate-drift {
          animation: drift 12s ease-in-out infinite;
        }
        .animate-drift-slow {
          animation: drift 18s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
