function DirectorQuote({ quote, name, title, image }) {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary-light-blue/20 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Quote */}
          <div>
            <div className="inline-block bg-primary-navy/10 text-primary-navy px-4 py-2 rounded-full text-sm font-semibold mb-6">
              From Our Leadership
            </div>

            {/* Large Quote Mark */}
            <div className="text-8xl text-primary-navy/20 font-serif leading-none mb-4">
              "
            </div>

            <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
              {quote}
            </blockquote>

            <div className="flex items-center">
              <div className="w-16 h-16 bg-primary-navy/10 rounded-full flex items-center justify-center mr-4">
                <svg
                  className="w-8 h-8 text-primary-navy"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <div className="font-bold text-primary-navy text-lg">
                  {name}
                </div>
                <div className="text-gray-600">{title}</div>
              </div>
            </div>
          </div>

          {/* Right: Image/Visual */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] bg-gray-200 rounded-2xl overflow-hidden">
              {image ? (
                <img
                  src={image}
                  alt={`${name} - ${title}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/20 to-secondary-coral/20 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <svg
                      className="w-20 h-20 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <p className="text-lg font-medium">Director Photo</p>
                  </div>
                </div>
              )}
            </div>

            {/* Floating accent elements */}
            <div className="absolute -top-4 -right-4 bg-primary-gold w-8 h-8 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 bg-secondary-coral w-6 h-6 rounded-full opacity-40"></div>

            {/* Philosophy highlight */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <p className="text-center text-primary-navy font-semibold text-lg">
                "Diagnosis is not a barrier"
              </p>
              <p className="text-center text-gray-600 text-sm mt-1">
                Our Core Philosophy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DirectorQuote;
