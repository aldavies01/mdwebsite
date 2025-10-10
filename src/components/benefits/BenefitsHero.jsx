// src/components/benefits/BenefitsHero.jsx
import PropTypes from "prop-types";
import { benefitsData } from "../../data/careers.benefits";

function Stat({ value, label }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:bg-white/20 transition-colors duration-300">
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-gold mb-1 sm:mb-2">
        {value}
      </div>
      <div className="text-white/80 text-sm sm:text-base">{label}</div>
    </div>
  );
}
Stat.propTypes = { value: PropTypes.string, label: PropTypes.string };

export default function BenefitsHero() {
  const { hero } = benefitsData;

  return (
    <section className="relative bg-primary-navy text-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-16 h-16 sm:w-32 sm:h-32 bg-primary-gold rounded-full animate-pulse" />
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-12 h-12 sm:w-24 sm:h-24 bg-secondary-coral rounded-full animate-bounce" />
        <div className="absolute top-1/2 left-1/4 w-8 h-8 sm:w-16 sm:h-16 bg-secondary-teal rounded-full animate-ping" />
        <div className="absolute top-20 right-1/3 w-6 h-6 sm:w-12 sm:h-12 bg-secondary-purple rounded-full animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            {hero.badge && (
              <div className="inline-block bg-primary-gold/20 text-primary-gold px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 animate-pulse">
                {hero.badge}
              </div>
            )}

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              {hero.title} <br />
              <span className="text-primary-gold">{hero.titleHighlight}</span>
            </h1>

            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed">
              <p>{hero.description}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
              <a
                href="/careers"
                className="bg-primary-gold text-primary-navy px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-primary-gold/90 hover:scale-105 transition-all duration-300 shadow-lg text-center text-sm sm:text-base"
              >
                View Current Vacancies
              </a>

              <a
                href="/culture"
                className="bg-white/10 text-white border-2 border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-white hover:text-primary-navy transition-all duration-300 text-center text-sm sm:text-base"
              >
                Learn About Our Culture
              </a>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="relative mt-8 lg:mt-0">
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              {hero.stats.map((s, i) => (
                <Stat key={i} value={s.number} label={s.label} />
              ))}
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-primary-gold w-6 h-6 sm:w-12 sm:h-12 rounded-full opacity-80 animate-bounce" />
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-secondary-coral w-4 h-4 sm:w-8 sm:h-8 rounded-full opacity-60 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
