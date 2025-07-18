function StatsBanner() {
  const stats = [
    {
      number: "650+",
      label: "Passionate Colleagues",
      buttonText: "Join Our Team",
      buttonLink: "/careers",
      icon: (
        <svg
          className="w-8 h-8 text-primary-gold"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      number: "214+",
      label: "Aspirational People We Support",
      buttonText: "Our Services",
      buttonLink: "/services",
      icon: (
        <svg
          className="w-8 h-8 text-primary-gold"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      number: "11",
      label: "Awards Recognised Regionally and Nationally Since 2021",
      buttonText: "View Awards",
      buttonLink: "/about/awards",
      icon: (
        <svg
          className="w-8 h-8 text-primary-gold"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
    },
    {
      number: "20",
      label: "Innovative Services in a Growing Portfolio",
      buttonText: "Explore Innovation",
      buttonLink: "/about/innovation",
      icon: (
        <svg
          className="w-8 h-8 text-primary-gold"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 bg-primary-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-300">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2 text-primary-gold">
                {stat.number}
              </div>
              <div className="text-white/90 font-medium leading-relaxed mb-6 h-16 flex items-center justify-center">
                {stat.label}
              </div>
              <a
                href={stat.buttonLink}
                className="inline-block bg-primary-gold text-primary-navy px-4 py-2 rounded-lg font-semibold text-sm hover:bg-primary-gold/90 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                {stat.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsBanner;
