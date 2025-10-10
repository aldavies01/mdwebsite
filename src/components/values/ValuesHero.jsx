// src/components/values/ValuesHero.jsx
import { tone } from "../careers/colorClassnames";

function MiniValueTile({ value }) {
  const c = tone(value.color, "secondary-coral");
  return (
    <div
      className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center transition-all duration-300 cursor-pointer border ${c.bgSoft} border-white/20 hover:-translate-y-0.5 hover:shadow-lg`}
    >
      <div className={`mb-2 sm:mb-3 flex justify-center ${c.text}`}>
        <div className="w-6 h-6 sm:w-8 sm:h-8">{value.icon}</div>
      </div>
      <h3 className="font-bold text-sm sm:text-base lg:text-lg">
        {value.title}
      </h3>
    </div>
  );
}

export default function ValuesHero({ values = [] }) {
  const firstRow = values.slice(0, 3);
  const secondRow = values.slice(3, 6);

  return (
    <section className="relative bg-primary-navy text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* subtle animated background elements */}
      <div className="absolute inset-0 opacity-10 sm:opacity-20 pointer-events-none">
        <div className="absolute top-10 sm:top-16 lg:top-20 left-10 sm:left-16 lg:left-20 w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 bg-primary-gold rounded-full animate-pulse" />
        <div className="absolute bottom-10 sm:bottom-16 lg:bottom-20 right-10 sm:right-16 lg:right-20 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-secondary-coral rounded-full animate-bounce" />
        <div className="absolute top-1/2 left-1/4 w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 bg-secondary-teal rounded-full animate-ping" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* SIDE-BY-SIDE LAYOUT */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            <div className="inline-block bg-primary-gold/30 text-primary-gold px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              Our Values
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              Values That <br />
              <span className="text-primary-gold">Define Us</span>
            </h1>

            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed">
              <p>
                Our five core values aren&apos;t just principles — they&apos;re
                the beating heart of everything we do at M&amp;D Care. They
                guide our decisions, shape our culture, and ensure we always put
                people first.
              </p>
              <p className="text-primary-gold font-semibold">
                See how these values come to life in our daily work and
                interactions.
              </p>
            </div>
          </div>

          {/* Right: mini values grid (INSIDE hero) */}
          <div className="relative mt-8 lg:mt-0">
            {/* Mobile: stacked; Tablet+: 3x2 grid */}
            <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 lg:gap-6">
              {/* Top row */}
              <div className="sm:col-span-2 lg:col-span-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  {firstRow.map((v, i) => (
                    <MiniValueTile key={`top-${i}-${v.title}`} value={v} />
                  ))}
                </div>
              </div>
              {/* Bottom row */}
              <div className="sm:col-span-2 lg:col-span-3 mt-4 sm:mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  {secondRow.map((v, i) => (
                    <MiniValueTile key={`bot-${i}-${v.title}`} value={v} />
                  ))}
                </div>
              </div>
            </div>

            {/* floating accents */}
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-primary-gold w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 rounded-full opacity-60 sm:opacity-80 animate-bounce" />
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-secondary-coral w-6 sm:w-8 h-6 sm:h-8 rounded-full opacity-40 sm:opacity-60 animate-pulse" />
          </div>
        </div>
      </div>

      {/* scroll indicator (desktop only) */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center text-white/60">
        <span className="text-xs mb-2 font-medium">Scroll to explore</span>
        <svg
          className="w-5 h-5 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
