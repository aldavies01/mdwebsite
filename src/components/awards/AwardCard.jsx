// src/components/awards/AwardCard.jsx
export default function AwardCard({ award }) {
  return (
    <div className="group">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left: Visual */}
        <div className="w-full sm:w-auto lg:w-1/3 flex justify-center">
          <div
            className={`relative bg-gradient-to-br from-${award.color} to-${award.color}/70 rounded-2xl sm:rounded-3xl shadow-2xl group-hover:scale-105 lg:group-hover:scale-110 group-hover:rotate-1 lg:group-hover:rotate-3 transition-all duration-700 hover:shadow-3xl max-w-sm w-full overflow-hidden`}
          >
            {/* Image with fallback */}
            <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
              <img
                src={award.image}
                alt={`${award.title} - ${award.organization}`}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling.style.display = "flex";
                }}
              />
              {/* Trophy fallback */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm hidden items-center justify-center">
                <span
                  className="text-6xl sm:text-7xl lg:text-8xl opacity-80"
                  aria-hidden
                >
                  🏆
                </span>
              </div>
              {/* Readability overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Overlay badges */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
              <div className="bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4 inline-block">
                {award.achievement}
              </div>
              <div className="text-xl sm:text-2xl font-bold">{award.year}</div>
            </div>

            {/* Floating dots */}
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-4 sm:w-6 lg:w-8 h-4 sm:h-6 lg:h-8 bg-white/30 rounded-full animate-bounce" />
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-3 sm:w-4 lg:w-6 h-3 sm:h-4 lg:h-6 bg-white/40 rounded-full animate-pulse" />
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-2/3">
          <div className="text-center lg:text-left space-y-4 sm:space-y-6 px-4 lg:px-0">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-navy mb-3 sm:mb-4 group-hover:text-secondary-coral transition-colors duration-300 leading-tight">
                {award.title}
              </h3>
              <span
                className={`inline-block bg-${award.color}/10 text-${award.color} px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base lg:text-lg`}
              >
                {award.organization}
              </span>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {award.description}
            </p>

            {/* Impact */}
            <div
              className={`bg-gradient-to-r from-${award.color}/5 to-transparent p-4 sm:p-6 rounded-xl sm:rounded-2xl border-l-4 border-${award.color} max-w-2xl mx-auto lg:mx-0`}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div
                  className={`flex-shrink-0 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-${award.color}/20 rounded-lg sm:rounded-xl flex items-center justify-center mt-1`}
                >
                  <svg
                    className={`w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-${award.color}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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
                  <h4 className="font-bold text-primary-navy mb-1 sm:mb-2 text-sm sm:text-base">
                    Real Impact:
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {award.impact}
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
