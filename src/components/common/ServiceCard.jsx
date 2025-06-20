function ServiceCard({ service }) {
  return (
    <div
      className={`${service.bgColor} rounded-2xl p-8 text-white relative overflow-hidden group hover:scale-[1.02] transition-all duration-500 cursor-pointer shadow-xl hover:shadow-2xl min-h-[400px] flex flex-col`}
    >
      {/* Background pattern/overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors duration-300">
            {service.icon}
          </div>
          <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
          <p className="text-lg opacity-90 font-medium">{service.subtitle}</p>
        </div>

        {/* Features */}
        <div className="flex-grow">
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-80">
            What we provide:
          </h4>
          <ul className="space-y-3">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Stats */}
        {service.stats && (
          <div className="mt-6 pt-6 border-t border-white/20">
            <div className="grid grid-cols-2 gap-4">
              {service.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold">{stat.number}</div>
                  <div className="text-xs opacity-80 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Button */}
        <div className="mt-6">
          <button className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 rounded-xl py-3 px-6 font-semibold transition-all duration-300 backdrop-blur-sm group-hover:scale-105">
            Learn More
            <svg
              className="w-4 h-4 inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
