const COLOR = {
  "primary-gold": {
    from: "from-primary-gold",
    to: "to-primary-gold/70",
    text: "text-primary-gold",
    border: "border-primary-gold",
    bgSoft: "bg-primary-gold/20",
  },
  "secondary-teal": {
    from: "from-secondary-teal",
    to: "to-secondary-teal/70",
    text: "text-secondary-teal",
    border: "border-secondary-teal",
    bgSoft: "bg-secondary-teal/20",
  },
  "secondary-coral": {
    from: "from-secondary-coral",
    to: "to-secondary-coral/70",
    text: "text-secondary-coral",
    border: "border-secondary-coral",
    bgSoft: "bg-secondary-coral/20",
  },
  "secondary-purple": {
    from: "from-secondary-purple",
    to: "to-secondary-purple/70",
    text: "text-secondary-purple",
    border: "border-secondary-purple",
    bgSoft: "bg-secondary-purple/20",
  },
};

export function AwardCard({ award }) {
  const c = COLOR[award.color] || COLOR["primary-gold"];
  return (
    <div className="group">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left: Visual */}
        <div className="w-full sm:w-auto lg:w-1/2 flex justify-center">
          <div
            className={`relative bg-gradient-to-br ${c.from} ${c.to} rounded-3xl shadow-2xl group-hover:scale-105 lg:group-hover:scale-110 group-hover:rotate-1 lg:group-hover:rotate-2 transition-all duration-700 hover:shadow-3xl max-w-2xl w-full overflow-hidden ring-1 ring-white/30`}
          >
            <div className="relative h-56 sm:h-72 lg:h-[380px] overflow-hidden">
              <img
                src={award.image}
                alt={`${award.title}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              {/* Badges */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-3 inline-block">
                  {award.achievement}
                </div>
                <div className="text-2xl font-bold">{award.year}</div>
              </div>
            </div>
            {/* Decorative sparkles */}
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-white/40 rounded-full animate-bounce" />
            <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-white/40 rounded-full animate-pulse" />
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2">
          <div className="text-center lg:text-left space-y-5 px-4 lg:px-0">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-primary-navy mb-3 group-hover:text-secondary-coral transition-colors">
                {award.title}
              </h3>
              <span
                className={`${c.bgSoft} ${c.text} inline-block px-5 py-2 rounded-full font-bold`}
              >
                {award.organization || "—"}
              </span>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {award.description}
            </p>
            <div
              className={`bg-gradient-to-r ${c.from} via-transparent to-transparent p-6 rounded-2xl border-l-4 ${c.border} max-w-2xl mx-auto lg:mx-0`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 w-12 h-12 ${c.bgSoft} rounded-xl flex items-center justify-center mt-1`}
                >
                  <svg
                    className={`w-6 h-6 ${c.text}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-primary-navy mb-1">
                    Real Impact
                  </h4>
                  <p className="text-gray-700">
                    {award.impact ||
                      "Recognising meaningful outcomes for people we support."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
