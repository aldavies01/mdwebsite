// src/components/awards/AwardsHero.jsx
export default function AwardsHero({ achievements }) {
  return (
    <section className="relative bg-gradient-to-br from-primary-navy via-primary-navy to-secondary-purple text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-primary-gold/20 rounded-full animate-pulse blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-24 sm:w-36 lg:w-48 h-24 sm:h-36 lg:h-48 bg-secondary-coral/30 rounded-full animate-bounce blur-xl sm:blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-secondary-teal/25 rounded-full animate-ping blur-lg sm:blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-primary-gold/20 backdrop-blur-sm text-primary-gold px-3 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold mb-6 sm:mb-8 animate-pulse border border-primary-gold/30">
            <span className="text-lg sm:text-2xl">🏆</span>
            <span className="hidden sm:inline">Award-Winning Excellence</span>
            <span className="sm:hidden">Award-Winning</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight px-2">
            Celebrating Our
            <span className="block text-transparent bg-gradient-to-r from-primary-gold via-secondary-coral to-secondary-teal bg-clip-text animate-pulse">
              Achievements
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
            Every award we receive represents the extraordinary dedication of
            our team and the positive impact we make in people's lives. These
            recognitions validate our commitment to excellence in care.
          </p>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-5xl mx-auto px-2">
            {achievements.map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-white/20 hover:bg-white/15 hover:scale-105 sm:hover:scale-110 transition-all duration-500 hover:border-primary-gold/50">
                  <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-gold mb-1 sm:mb-2 group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-white font-semibold mb-1 text-xs sm:text-sm lg:text-base">
                    {stat.label}
                  </div>
                  <div className="text-white/70 text-xs sm:text-sm">
                    {stat.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
