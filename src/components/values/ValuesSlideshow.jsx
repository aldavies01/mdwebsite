// src/components/values/ValuesSlideshow.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { tone } from "../careers/colorClassnames";
import Icon from "../common/Icon";

const QUOTES = [
  {
    value: "Aspirational",
    color: "secondary-teal",
    text: "At M&D Care, we set goals together and celebrate every success - no matter how small.",
    person: "Sarah, Support Worker",
    imageUrl: "/images/stock/stock-1.jpg",
  },
  {
    value: "Kind",
    color: "secondary-coral",
    text: "Kindness is at the heart of every interaction, from morning routines to life-changing milestones.",
    person: "James, Registered Manager",
    imageUrl: "/images/stock/stock-2.jpg",
  },
  {
    value: "Collaborative",
    color: "secondary-purple",
    text: "Working as one team with families and professionals makes care stronger and more personal.",
    person: "Amira, Deputy Manager",
    imageUrl: "/images/stock/stock-3.jpg",
  },
  {
    value: "Courageous",
    color: "secondary-light-blue",
    text: "It takes courage to speak up - and we do it every day for the people we support.",
    person: "Lee, Senior Support Worker",
    imageUrl: "/images/stock/stock-4.jpg",
  },
  {
    value: "Passionate",
    color: "primary-gold",
    text: "Passion drives us to go above and beyond - care isn’t just a job, it’s who we are.",
    person: "Nia, Director of HR",
    imageUrl: "/images/stock/stock-5.jpg",
  },
  {
    value: "Innovative",
    color: "primary-navy",
    text: "We embrace new ideas and technologies to make sure our care is always evolving.",
    person: "Michelle, Developments Director",
    imageUrl: "/images/stock/stock-6.jpg",
  },
];

export default function ValuesSlideshow({
  quotes = QUOTES,
  intervalMs = 7000,
}) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);

  const next = () => setI((p) => (p + 1) % quotes.length);
  const prev = () => setI((p) => (p - 1 + quotes.length) % quotes.length);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(next, intervalMs);
    return () => clearInterval(timer.current);
  }, [paused, intervalMs]);

  // Precompute tones to avoid re-calculating on every render
  const tones = useMemo(
    () => quotes.map((q) => tone(q.color, "secondary-coral")),
    [quotes]
  );

  return (
    <section
      className="relative py-12 sm:py-16 lg:py-20 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Slides */}
        <div className="relative">
          {quotes.map((q, idx) => {
            const active = idx === i;
            const c = tones[idx];

            return (
              <div
                key={`${q.value}-${idx}`}
                className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                  active ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                aria-hidden={!active}
              >
                {/* Card container */}
                <div
                  className={`rounded-3xl shadow-xl border overflow-hidden transition-colors ${c.bgSoft} border-gray-100`}
                >
                  {/* Grid: image + quote */}
                  <div className="grid md:grid-cols-2">
                    {/* Image side */}
                    <div className="relative h-64 sm:h-80 md:h-full">
                      {q.imageUrl ? (
                        <img
                          src={q.imageUrl}
                          alt={q.value}
                          className="absolute inset-0 w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className={`absolute inset-0 ${c.bg}`} />
                      )}
                      {/* soft gradient for legibility on edges */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-black/0 to-black/0" />
                    </div>

                    {/* Quote side */}
                    <div className="flex items-center">
                      <div className="p-6 sm:p-8 lg:p-12">
                        <div
                          className={`inline-flex px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide mb-4 ${c.bg} text-primary-navy`}
                        >
                          {q.value}
                        </div>

                        <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-navy leading-tight mb-4">
                          “{q.text}”
                        </blockquote>

                        {/* <div className="text-gray-700 font-medium">
                          {q.person}
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Set an explicit height so absolute slides don't collapse */}
          <div className="invisible">
            <div className="rounded-3xl h-[28rem] sm:h-[32rem] md:h-[26rem]" />
          </div>

          {/* Controls */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous quote"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary-navy backdrop-blur px-3 py-3 rounded-full shadow transition-colors"
          >
            <Icon name="chevron-left" className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next quote"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary-navy backdrop-blur px-3 py-3 rounded-full shadow transition-colors"
          >
            <Icon name="chevron-right" className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {quotes.map((_, idx) => {
            const c = tones[idx];
            return (
              <button
                key={`dot-${idx}`}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === i
                    ? `${c.bg} scale-[1.15]`
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            );
          })}
        </div>

        {/* Play/Pause indicator (subtle) */}
        {/* <div className="absolute -top-2 right-4 text-xs text-gray-500">
          {paused ? "Paused" : "Playing"}
        </div> */}
      </div>
    </section>
  );
}
