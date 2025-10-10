// components/PBS/PBSWhatIsSection.jsx

function PBSWhatIsSection() {
  return (
    <section className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-navy mb-6">
              What is{" "}
              <span className="text-secondary-coral">
                Positive Behaviour Support?
              </span>
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-base sm:text-lg">
                At M&D Care, we use Positive Behaviour Support (PBS) as a
                comprehensive approach to understand and address challenging
                behaviors. Rather than simply managing behaviors, we seek to
                understand their underlying causes and functions.
              </p>
              <p>
                PBS helps us identify 'triggers' and 'factors' that contribute
                to challenging behaviors. By understanding these elements, we
                can make meaningful changes to the environment or adjust our
                support approaches to reduce the likelihood of challenging
                behaviors occurring.
              </p>
              <p>
                This evidence-based approach has been successfully implemented
                in Learning Disabilities services for many years and is
                increasingly used in Mental Health. At M&D Care, we believe PBS
                can be adapted across all facets of care, which is why we're
                implementing it gradually across all our services.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary-coral to-secondary-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary-navy">
                Our PBS Philosophy
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-secondary-coral rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">
                  Understanding behavior as communication
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-secondary-teal rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">
                  Creating positive environmental changes
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-secondary-purple rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">
                  Improving quality of life for everyone
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-primary-gold rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">
                  Evidence-based, person-centered approach
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PBSWhatIsSection;
