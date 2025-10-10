// src/components/about/AboutHero.jsx
import PropTypes from "prop-types";
import Icon from "../common/Icon";

function Stat({ value, label }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:bg-white/20 transition-colors duration-300">
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-gold mb-1 sm:mb-2">
        {value}
      </div>
      <div className="text-white font-semibold text-sm sm:text-base">
        {label}
      </div>
    </div>
  );
}
Stat.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default function AboutHero() {
  return (
    <section className="relative bg-primary-navy text-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Animated background elements — mirrored from QualityHero */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-16 h-16 sm:w-32 sm:h-32 bg-primary-gold rounded-full animate-pulse" />
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-12 h-12 sm:w-24 sm:h-24 bg-secondary-coral rounded-full animate-bounce" />
        <div className="absolute top-1/2 left-1/4 w-8 h-8 sm:w-16 sm:h-16 bg-secondary-teal rounded-full animate-ping" />
        <div className="absolute top-20 right-1/3 w-6 h-6 sm:w-12 sm:h-12 bg-secondary-purple rounded-full animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-block bg-primary-gold/20 text-primary-gold px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 animate-pulse">
              <Icon name="info" className="w-4 h-4 mr-2 inline" />
              About M&amp;D Care
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Family-Oriented <br />
              <span className="text-primary-gold">Care Excellence</span>
            </h1>

            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed mb-6 sm:mb-8">
              <p>
                We are a family-oriented business run by a passionate team of
                professionals, delivering specialist, bespoke care services
                throughout South West Wales.
              </p>
              <p>
                Our services include{" "}
                <span className="text-primary-gold font-semibold">
                  Residential Care
                </span>
                ,{" "}
                <span className="text-primary-gold font-semibold">
                  Supported Living
                </span>
                , and{" "}
                <span className="text-primary-gold font-semibold">
                  Domiciliary Care
                </span>{" "}
                for individuals with Autism, Learning Disabilities, Physical
                Disabilities, and Mental Health needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="/contact"
                className="bg-primary-gold text-primary-navy px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-primary-gold/90 hover:scale-105 transition-all duration-300 shadow-lg text-center text-sm sm:text-base inline-flex items-center justify-center gap-2"
              >
                <Icon name="handshake" className="w-4 h-4" />
                Get to Know Us
              </a>
              <a
                href="/services"
                className="bg-white/10 text-white border-2 border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-white hover:text-primary-navy transition-all duration-300 text-center text-sm sm:text-base inline-flex items-center justify-center gap-2"
              >
                <Icon name="heart" className="w-4 h-4" />
                Our Services
              </a>
            </div>
          </div>

          {/* Right: Image + glass stats */}
          <div className="relative order-1 lg:order-2 mt-2 lg:mt-0">
            <div className="relative h-64 sm:h-80 lg:h-96 xl:h-[430px] rounded-2xl overflow-hidden ring-1 ring-white/15 shadow-2xl">
              <img
                src="/images/company/awards.png"
                alt="M&D Care Awards Photo"
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay for cohesion on navy */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-navy/20 to-transparent pointer-events-none" />
            </div>

            {/* Stats grid styled like QualityHero */}
            <div className="mt-6 sm:mt-8">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-6">
                <Stat value="15+" label="Years of Excellence" />
                <Stat value="650+" label="Passtionate Team" />
                <Stat value="100+" label="Supported Individuals" />
                <Stat value="2x" label="Employer of the Year" />
              </div>
            </div>

            {/* Decorative elements (mirroring QualityHero) */}
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-primary-gold w-6 h-6 sm:w-12 sm:h-12 rounded-full opacity-80 animate-bounce" />
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-secondary-coral w-4 h-4 sm:w-8 sm:h-8 rounded-full opacity-60 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
