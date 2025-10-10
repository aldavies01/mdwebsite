// src/components/referrals/ReferralsHero.jsx
import { hero } from "../../data/referrals.content";
import { motion } from "framer-motion";

// Tailwind-safe color mapping for stat number accent
const STAT_ACCENT = {
  "secondary-teal": "text-secondary-teal",
  "secondary-coral": "text-secondary-coral",
  "secondary-purple": "text-secondary-purple",
  "primary-navy": "text-primary-gold", // using gold for contrast on navy bg
};

function ReferralsHero() {
  return (
    <section className="relative bg-primary-navy text-white py-16 md:py-20 overflow-hidden">
      {/* Animated background elements (subtle, reduced motion aware) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-16 left-10 w-24 h-24 bg-primary-gold rounded-full motion-safe:animate-pulse" />
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-secondary-coral rounded-full motion-safe:animate-bounce" />
        <div className="absolute top-1/2 left-1/4 w-14 h-14 bg-secondary-teal rounded-full motion-safe:animate-ping" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-block bg-primary-gold/20 text-primary-gold px-4 py-2 rounded-full text-sm font-semibold mb-5 md:mb-6">
              {hero.eyebrow}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 md:mb-6 leading-tight">
              {hero.title[0]} <br />
              <span className="text-primary-gold">{hero.title[1]}</span>
            </h1>

            <div className="space-y-5 md:space-y-6 text-base md:text-lg text-white/90 leading-relaxed">
              {hero.lead.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href={hero.primaryCta.href}
                className="bg-primary-gold text-primary-navy px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:bg-primary-gold/90 hover:scale-[1.02] transition-all duration-300 shadow-lg text-center"
              >
                {hero.primaryCta.label}
              </a>
              <a
                href={hero.secondaryCta.href}
                className="bg-secondary-coral text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:bg-secondary-coral/90 hover:scale-[1.02] transition-all duration-300 text-center"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </motion.div>

          {/* Right: Stats (2x2) */}
          <motion.div
            className="grid grid-cols-2 gap-4 sm:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08 },
              },
            }}
          >
            {hero.stats.map((stat, i) => (
              <motion.div
                key={i}
                className="p-5 sm:p-6 rounded-xl bg-white/10 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow will-change-transform"
                variants={{
                  hidden: { opacity: 0, y: 10, scale: 0.98 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.4, ease: "easeOut" },
                  },
                }}
                whileHover={{ y: -2 }}
              >
                <div
                  className={`text-2xl sm:text-3xl font-extrabold ${STAT_ACCENT[stat.color] || "text-white"}`}
                >
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base font-semibold text-white/90 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs sm:text-sm text-white/70 mt-0.5">
                  {stat.subtitle}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile: put a little spacing so cards don’t butt against bottom */}
        <div className="mt-6 lg:mt-0" />
      </div>
    </section>
  );
}

export default ReferralsHero;
