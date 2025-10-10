import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ACCENTS = {
  teal: {
    bar: "bg-secondary-teal",
    chip: "bg-secondary-teal/10 text-secondary-teal border-secondary-teal/20",
    glow: "shadow-secondary-teal/10",
  },
  coral: {
    bar: "bg-secondary-coral",
    chip: "bg-secondary-coral/10 text-secondary-coral border-secondary-coral/20",
    glow: "shadow-secondary-coral/10",
  },
  gold: {
    bar: "bg-primary-gold",
    chip: "bg-primary-gold/15 text-primary-navy border-primary-gold/30",
    glow: "shadow-primary-gold/10",
  },
  navy: {
    bar: "bg-primary-navy",
    chip: "bg-primary-navy/10 text-primary-navy border-primary-navy/20",
    glow: "shadow-primary-navy/10",
  },
};

export default function WhyMDCare({
  title = "Why M&D Care",
  intro = "What sets us apart",
  items = [],
  ctaHref = "/about",
  ctaText = "How we work",
  id = "why-md-care",
  tone = "offwhite", // "offwhite" | "white"
}) {
  const toneClass = tone === "offwhite" ? "bg-gray-50" : "bg-white";

  const ROWS = items.length
    ? items
    : [
        {
          img: "/images/stock/stock-1.jpg",
          alt: "Warm, specialist residential home",
          heading: "Specialist, person-centred care",
          summary: "Tailored support that puts the person first",
          text: "Our PBS-led approach builds comprehensive support plans around each individual's unique needs, preferences, and goals. We focus on the person, not the condition, creating environments where everyone can thrive.",
          tags: ["PBS", "Co-production", "Individual-focused"],
          accent: "teal",
        },
        {
          img: "/images/stock/stock-2.jpg",
          alt: "Supported living home interior",
          heading: "Independence first",
          summary: "Building skills and confidence for life",
          text: "We believe in empowering people to live as independently as possible. Our skilled teams work alongside individuals to develop practical life skills, build community connections, and achieve personal goals at their own pace.",
          tags: ["Skills Development", "Community", "Empowerment"],
          accent: "coral",
        },
        {
          img: "/images/stock/stock-3.jpg",
          alt: "Professional care team",
          heading: "Experienced, values-driven teams",
          summary: "Qualified professionals who truly care",
          text: "Our carefully selected teams combine extensive training with genuine compassion. Through continuous professional development, regular supervision, and our strong safeguarding culture, we ensure consistently high standards of care.",
          tags: ["Professional Training", "Safeguarding", "Quality Care"],
          accent: "gold",
        },
      ];

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`py-8 sm:py-12 ${toneClass} relative overflow-hidden`}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #1e293b 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #1e293b 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-block bg-primary-gold/15 text-primary-navy px-5 py-2.5 rounded-full text-sm font-semibold mb-4 border border-primary-gold/20 shadow-sm">
            {intro}
          </div>
          <h2
            id={`${id}-title`}
            className="text-3xl lg:text-4xl font-bold text-primary-navy leading-tight"
          >
            {title}
          </h2>
        </div>

        {/* Card-style rows */}
        <div className="space-y-6">
          {ROWS.map((row, idx) => {
            const accent = ACCENTS[row.accent] || ACCENTS.teal;
            const flip = idx % 2 === 1;
            return (
              <article
                key={idx}
                className={`bg-white/60 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl ${accent.glow} border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-center">
                  {/* Image */}
                  <div
                    className={
                      flip ? "lg:col-span-5 lg:order-2" : "lg:col-span-5"
                    }
                  >
                    <div className="relative h-40 sm:h-48 md:h-52 lg:h-60 rounded-xl lg:rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={row.img}
                        alt={row.alt || row.heading}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={
                      flip
                        ? "lg:col-span-7 lg:order-1 lg:pr-4"
                        : "lg:col-span-7 lg:pl-4"
                    }
                  >
                    {/* Accent bar with glow effect */}
                    <div className="relative mb-4">
                      <div
                        className={`h-1.5 w-20 rounded-full ${accent.bar} relative`}
                      />
                      <div
                        className={`absolute inset-0 h-1.5 w-20 rounded-full ${accent.bar} blur-sm opacity-50`}
                      />
                    </div>

                    <h3 className="text-3xl font-bold text-gray-900 mb-3">
                      {row.heading}
                    </h3>

                    {/* Summary text - only show if it exists */}
                    {row.summary && (
                      <p className="text-lg font-medium text-primary-navy/80 mb-3">
                        {row.summary}
                      </p>
                    )}

                    {/* Main description text */}
                    <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-4">
                      {row.text}
                    </p>

                    {/* Enhanced Tags */}
                    {(row.tags?.length ?? 0) > 0 && (
                      <div className="flex flex-wrap gap-2.5">
                        {row.tags.slice(0, 3).map((t, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium border ${accent.chip} backdrop-blur-sm shadow-sm`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Enhanced CTA */}
        <div className="mt-10 text-center">
          <Link
            to={ctaHref}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-semibold
                       bg-primary-navy text-white border-2 border-primary-navy
                       hover:bg-white hover:text-primary-navy hover:shadow-lg
                       transition-all duration-300 transform hover:-translate-y-0.5
                       shadow-lg hover:shadow-xl"
          >
            {ctaText}
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

WhyMDCare.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      alt: PropTypes.string,
      heading: PropTypes.string.isRequired,
      summary: PropTypes.string,
      text: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string),
      accent: PropTypes.oneOf(["teal", "coral", "gold", "navy"]),
    })
  ),
  ctaHref: PropTypes.string,
  ctaText: PropTypes.string,
  id: PropTypes.string,
  tone: PropTypes.oneOf(["offwhite", "white"]),
};
