function NextStep() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-secondary-teal/10 text-secondary-teal px-4 py-2 rounded-full text-sm font-semibold mb-6">
            How We Can Help
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-navy mb-6 leading-tight">
            Choose Your <br />
            <span className="text-secondary-teal">Next Step</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you need to understand our process, make a referral, or get
            emergency support, we're here to help guide you through each step.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Make a Referral */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 flex flex-col">
            <div className="h-2 bg-primary-navy"></div>
            <div className="p-8 text-center flex flex-col flex-grow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-navy/20 rounded-2xl mb-6 group-hover:bg-primary-navy/30 transition-colors duration-300 mx-auto">
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary-navy mb-4 group-hover:text-primary-navy transition-colors duration-300">
                Make a Referral
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                Complete our referral form to begin the placement process. We'll
                respond within 24 hours.
              </p>
              <button className="w-full bg-primary-navy text-white py-3 px-4 rounded-xl font-semibold hover:bg-primary-navy/90 transition-colors duration-300 mt-auto">
                Start Referral
              </button>
            </div>
          </div>

          {/* Emergency Referrals */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 flex flex-col">
            <div className="h-2 bg-secondary-coral"></div>
            <div className="p-8 text-center flex flex-col flex-grow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-coral/20 rounded-2xl mb-6 group-hover:bg-secondary-coral/30 transition-colors duration-300 mx-auto">
                <svg
                  className="w-8 h-8 text-secondary-coral"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary-navy mb-4 group-hover:text-secondary-coral transition-colors duration-300">
                Emergency Referrals
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                Urgent placement needed? Contact our emergency team for
                immediate support and rapid response.
              </p>
              <button className="w-full bg-secondary-coral text-white py-3 px-4 rounded-xl font-semibold hover:bg-secondary-coral/90 transition-colors duration-300 mt-auto">
                Emergency Line
              </button>
            </div>
          </div>

          {/* FAQs */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 flex flex-col">
            <div className="h-2 bg-secondary-purple"></div>
            <div className="p-8 text-center flex flex-col flex-grow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-purple/20 rounded-2xl mb-6 group-hover:bg-secondary-purple/30 transition-colors duration-300 mx-auto">
                <svg
                  className="w-8 h-8 text-secondary-purple"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary-navy mb-4 group-hover:text-secondary-purple transition-colors duration-300">
                FAQs
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                Find answers to common questions about our referral process,
                requirements, and services.
              </p>
              <button className="w-full bg-secondary-purple text-white py-3 px-4 rounded-xl font-semibold hover:bg-secondary-purple/90 transition-colors duration-300 mt-auto">
                View FAQs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NextStep;
