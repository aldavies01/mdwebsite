// src/components/awards/ImpactQuote.jsx
export default function ImpactQuote() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-gray-50 to-secondary-light-blue/10 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-4 sm:top-10 right-4 sm:right-10 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-primary-gold/10 rounded-full" />
          <div className="absolute bottom-4 sm:bottom-10 left-4 sm:left-10 w-12 sm:w-18 lg:w-24 h-12 sm:h-18 lg:h-24 bg-secondary-coral/10 rounded-full" />

          <div className="relative">
            <div className="text-4xl sm:text-6xl lg:text-8xl font-serif text-secondary-coral/30 leading-none mb-6 sm:mb-8">
              "
            </div>

            <blockquote className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary-navy leading-relaxed mb-6 sm:mb-8 px-2 sm:px-4">
              Every award we receive is a testament to our incredible team and
              the lives we've had the privilege to touch. But the real award is
              seeing the smiles, achievements, and independence of the people we
              support every day.
            </blockquote>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-secondary-coral to-secondary-teal rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-8 sm:w-10 h-8 sm:h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-bold text-primary-navy">
                  Steffan Bowen
                </div>
                <div className="text-secondary-coral font-semibold text-base sm:text-lg">
                  Managing Director
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
