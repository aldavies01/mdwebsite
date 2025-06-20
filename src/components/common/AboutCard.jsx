function AboutCard({
  title,
  description,
  icon,
  bgColor,
  textColor,
  linkText,
  linkUrl,
}) {
  return (
    <div
      className={`${bgColor} rounded-2xl p-8 text-primary-gold relative overflow-hidden group hover:scale-[1.02] transition-all duration-500 cursor-pointer shadow-xl hover:shadow-2xl min-h-[300px] flex flex-col`}
    >
      {/* Background pattern/overlay */}
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-500"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon */}
        <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors duration-300">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-4">{title}</h3>

        {/* Description */}
        <div className="flex-grow">
          <p className="text-white/90 leading-relaxed text-sm">{description}</p>
        </div>

        {/* Link */}
        <div className="mt-6">
          <a
            href={linkUrl}
            className="inline-flex items-center text-white font-semibold hover:text-white/80 transition-colors duration-300 group/link"
          >
            {linkText}
            <svg
              className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300"
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
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
