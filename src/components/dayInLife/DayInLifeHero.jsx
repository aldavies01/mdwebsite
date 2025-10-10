// src/components/dayinlife/DayInLifeHero.jsx
import { dayInTheLifeData } from "../../data/careers.dayInTheLife";
import Icon from "../common/Icon";

export default function DayInLifeHero() {
  const { hero } = dayInTheLifeData;

  return (
    <section className="relative bg-primary-navy text-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary-gold rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-secondary-coral rounded-full animate-bounce" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary-teal rounded-full animate-ping" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            {hero.badge && (
              <div className="inline-block bg-primary-gold/20 text-primary-gold px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
                <Icon name="calendar" className="w-4 h-4 mr-2 inline" />
                {hero.badge}
              </div>
            )}

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {hero.title} <br />
              <span className="text-primary-gold">{hero.titleHighlight}</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/90 mb-4 font-medium">
              {hero.subtitle}
            </p>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8">
              {hero.description}
            </p>

            {/* Profile Card */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 mb-8 flex items-center gap-4">
              {hero.profileImage ? (
                <img
                  src={hero.profileImage}
                  alt={hero.profileName}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary-gold"
                />
              ) : (
                <div className="w-16 h-16 bg-primary-gold/20 rounded-full flex items-center justify-center border-2 border-primary-gold">
                  <Icon name="user" className="w-8 h-8 text-primary-gold" />
                </div>
              )}
              <div>
                <div className="font-bold text-lg">{hero.profileName}</div>
                <div className="text-primary-gold">{hero.profileRole}</div>
                <div className="text-white/70 text-sm">
                  {hero.profileTenure}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#timeline"
                className="bg-primary-gold text-primary-navy px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-primary-gold/90 hover:scale-105 transition-all duration-300 shadow-lg text-center inline-flex items-center justify-center gap-2"
              >
                <Icon name="clock" className="w-4 h-4" />
                Follow Emma's Day
              </a>

              <a
                href="/careers"
                className="bg-white/10 text-white border-2 border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-white hover:text-primary-navy transition-all duration-300 text-center inline-flex items-center justify-center gap-2"
              >
                <Icon name="briefcase" className="w-4 h-4" />
                View Open Positions
              </a>
            </div>
          </div>

          {/* Right: Stats Grid */}
          <div className="relative mt-8 lg:mt-0">
            <div className="grid grid-cols-2 gap-4">
              {hero.stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <Icon
                    name={stat.icon}
                    className="w-8 h-8 text-primary-gold mx-auto mb-3"
                  />
                  <div className="text-2xl font-bold text-primary-gold mb-1">
                    {stat.label}
                  </div>
                  <div className="text-white/80 text-sm">{stat.subtitle}</div>
                </div>
              ))}
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 bg-primary-gold w-12 h-12 rounded-full opacity-80 animate-bounce" />
            <div className="absolute -bottom-4 -left-4 bg-secondary-coral w-8 h-8 rounded-full opacity-60 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
