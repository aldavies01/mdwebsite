// components/careers/roles/RolesHero.jsx
function RolesHero({ heroData, ctaData }) {
  return (
    <section className="relative bg-primary-navy text-white py-16 lg:py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary-gold rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-secondary-coral rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary-teal rounded-full animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-block bg-primary-gold/20 text-primary-gold px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
              {heroData.badge}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              {heroData.title} <br />
              <span className="text-primary-gold">
                {heroData.titleHighlight}
              </span>
            </h1>

            <p className="text-xl text-white/90 leading-relaxed mb-8">
              {heroData.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={ctaData.primaryButton.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-gold text-primary-navy px-8 py-4 rounded-xl font-bold hover:bg-primary-gold/90 hover:scale-105 transition-all duration-300 shadow-lg text-center"
              >
                {ctaData.primaryButton.text}
              </a>
              <a
                href="#roles"
                className="bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-primary-navy transition-all duration-300 text-center"
              >
                Explore Roles Below
              </a>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {heroData.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors duration-300"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-primary-gold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Floating accents */}
            <div className="absolute -top-4 -right-4 bg-primary-gold w-12 h-12 rounded-full opacity-80 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 bg-secondary-coral w-8 h-8 rounded-full opacity-60 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RolesHero;
