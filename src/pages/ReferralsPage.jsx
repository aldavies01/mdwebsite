function ReferralsPage() {
  const quickStats = [
    {
      number: "24hrs",
      label: "Average Response Time",
      subtitle: "Standard Referrals",
      color: "secondary-teal",
    },
    {
      number: "95%",
      label: "Successful Placements",
      subtitle: "2024 Statistics",
      color: "secondary-coral",
    },
    {
      number: "15+",
      label: "Years Experience",
      subtitle: "Assessment & Placement",
      color: "secondary-purple",
    },
    {
      number: "24/7",
      label: "Emergency Line",
      subtitle: "Always Available",
      color: "primary-navy",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-primary-navy text-white py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary-gold rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-secondary-coral rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary-teal rounded-full animate-ping"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-1 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-block bg-primary-gold/20 text-primary-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Professional Referrals
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Making a <br />
                <span className="text-primary-gold">Referral</span>
              </h1>
              <div className="space-y-6 text-lg text-white/90 leading-relaxed">
                <p>
                  We understand that making a referral is an important decision.
                  Our experienced team is here to guide you through the process
                  and ensure the best possible outcomes for those in need of
                  support.
                </p>
                <p>
                  From emergency placements to planned transitions, we provide
                  comprehensive assessment and person-centered care planning for
                  all referrals.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="/referrals/form"
                  className="bg-primary-gold text-primary-navy px-8 py-4 rounded-xl font-semibold hover:bg-primary-gold/90 hover:scale-105 transition-all duration-300 shadow-lg text-center"
                >
                  Make a Referral
                </a>
                <a
                  href="#emergency"
                  className="bg-secondary-coral text-white px-8 py-4 rounded-xl font-semibold hover:bg-secondary-coral/90 hover:scale-105 transition-all duration-300 text-center"
                >
                  Emergency Referral
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              Whether you need to understand our process, make a referral, or
              get emergency support, we're here to help guide you through each
              step.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Assessment Process */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 flex flex-col">
              <div className="h-2 bg-secondary-teal"></div>
              <div className="p-8 text-center flex flex-col flex-grow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-teal/20 rounded-2xl mb-6 group-hover:bg-secondary-teal/30 transition-colors duration-300 mx-auto">
                  <svg
                    className="w-8 h-8 text-secondary-teal"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-navy mb-4 group-hover:text-secondary-teal transition-colors duration-300">
                  Assessment Process
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  Learn about our comprehensive 5-step assessment process and
                  what to expect at each stage.
                </p>
                <button className="w-full bg-secondary-teal text-white py-3 px-4 rounded-xl font-semibold hover:bg-secondary-teal/90 transition-colors duration-300 mt-auto">
                  View Process
                </button>
              </div>
            </div>

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
                  Complete our referral form to begin the placement process.
                  We'll respond within 24 hours.
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
      {/* Assessment Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-secondary-light-blue/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary-navy/10 text-primary-navy px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Our Professional Process
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-navy mb-6 leading-tight">
              Assessment <br />
              <span className="text-secondary-coral">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive 10-step assessment process ensures we fully
              understand individual needs and can provide the most appropriate
              support and placement.
            </p>
          </div>

          {/* Process Timeline */}
          <div className="relative max-w-6xl mx-auto">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-secondary-teal via-secondary-coral via-secondary-purple to-primary-navy rounded-full hidden lg:block"></div>

            {/* Process Steps */}
            <div className="space-y-8">
              {/* Step 1: Receive Referral */}
              <div className="relative flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 lg:pr-12 text-center lg:text-right">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="flex items-center justify-center lg:justify-end mb-4">
                      <div className="w-8 h-8 bg-secondary-teal/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-secondary-teal font-bold text-sm">
                          1
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-secondary-teal">
                        Receive Referral
                      </h3>
                    </div>
                    <div className="collapsible-content">
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Multiple referral pathways available for maximum
                        accessibility and convenience.
                      </p>
                      <details className="group">
                        <summary className="cursor-pointer text-secondary-teal font-semibold text-sm hover:text-secondary-teal/80 transition-colors duration-200">
                          View Details →
                        </summary>
                        <div className="mt-3 p-4 bg-secondary-teal/5 rounded-lg border-l-3 border-secondary-teal">
                          <p className="text-gray-700 text-sm leading-relaxed">
                            Referrals can be made via Brokerage systems, online
                            forms, phone calls, or email. The referral can be
                            initiated by the person themselves, their family, or
                            any professional involved in their care.
                          </p>
                        </div>
                      </details>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-secondary-teal rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10 hidden lg:flex">
                  <svg
                    className="w-6 h-6 text-white"
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
                <div className="w-full lg:w-1/2 lg:pl-12"></div>
              </div>

              {/* Step 2: Initial Discussion */}
              <div className="relative flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 lg:pr-12"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-secondary-coral rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10 hidden lg:flex">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="w-full lg:w-1/2 lg:pl-12">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-secondary-coral/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-secondary-coral font-bold text-sm">
                          2
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-secondary-coral">
                        Initial Discussion
                      </h3>
                    </div>
                    <div className="collapsible-content">
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Professional consultation to understand support
                        requirements and determine suitability.
                      </p>
                      <details className="group">
                        <summary className="cursor-pointer text-secondary-coral font-semibold text-sm hover:text-secondary-coral/80 transition-colors duration-200">
                          View Details →
                        </summary>
                        <div className="mt-3 p-4 bg-secondary-coral/5 rounded-lg border-l-3 border-secondary-coral">
                          <p className="text-gray-700 text-sm leading-relaxed">
                            Conducted via Teams or phone call to understand
                            initial support requirements. If we feel we can
                            offer an assessment, all key care documentation will
                            be requested for review prior to the assessment.
                          </p>
                        </div>
                      </details>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Assessment */}
              <div className="relative flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 lg:pr-12 text-center lg:text-right">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="flex items-center justify-center lg:justify-end mb-4">
                      <div className="w-8 h-8 bg-secondary-purple/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-secondary-purple font-bold text-sm">
                          3
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-secondary-purple">
                        Assessment
                      </h3>
                    </div>
                    <div className="collapsible-content">
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Comprehensive assessment by qualified service managers
                        and specialists.
                      </p>
                      <details className="group">
                        <summary className="cursor-pointer text-secondary-purple font-semibold text-sm hover:text-secondary-purple/80 transition-colors duration-200">
                          View Details →
                        </summary>
                        <div className="mt-3 p-4 bg-secondary-purple/5 rounded-lg border-l-3 border-secondary-purple">
                          <p className="text-gray-700 text-sm leading-relaxed">
                            The service manager completes the assessment -
                            always by the manager whose placement is considered
                            most suitable. Assessments are completed by two
                            Managers; for specialist residential services, one
                            assessor will be a PBS Practitioner. The assessment
                            can be completed over multiple stages and in
                            different locations, depending on individual needs.
                          </p>
                        </div>
                      </details>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-secondary-purple rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10 hidden lg:flex">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                </div>
                <div className="w-full lg:w-1/2 lg:pl-12"></div>
              </div>

              {/* Step 4: MDT Follow up */}
              <div className="relative flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 lg:pr-12"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary-navy rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10 hidden lg:flex">
                  <svg
                    className="w-6 h-6 text-white"
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
                </div>
                <div className="w-full lg:w-1/2 lg:pl-12">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-primary-navy/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-primary-navy font-bold text-sm">
                          4
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-primary-navy">
                        MDT Follow up
                      </h3>
                    </div>
                    <div className="collapsible-content">
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Multi-disciplinary team discussion to finalize
                        assessment and plan transition.
                      </p>
                      <details className="group">
                        <summary className="cursor-pointer text-primary-navy font-semibold text-sm hover:text-primary-navy/80 transition-colors duration-200">
                          View Details →
                        </summary>
                        <div className="mt-3 p-4 bg-primary-navy/5 rounded-lg border-l-3 border-primary-navy">
                          <p className="text-gray-700 text-sm leading-relaxed">
                            A follow-up discussion with the MDT, typically held
                            via Teams, concludes the assessment and addresses
                            any remaining questions. During this meeting, we
                            discuss and agree on transitional requirements and
                            environmental specifications.
                          </p>
                        </div>
                      </details>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5: Placement Panel */}
              <div className="relative flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 lg:pr-12 text-center lg:text-right">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="flex items-center justify-center lg:justify-end mb-4">
                      <div className="w-8 h-8 bg-secondary-teal/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-secondary-teal font-bold text-sm">
                          5
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-secondary-teal">
                        Placement Panel
                      </h3>
                    </div>
                    <div className="collapsible-content">
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Internal review to ensure optimal placement
                        compatibility and individual needs matching.
                      </p>
                      <details className="group">
                        <summary className="cursor-pointer text-secondary-teal font-semibold text-sm hover:text-secondary-teal/80 transition-colors duration-200">
                          View Details →
                        </summary>
                        <div className="mt-3 p-4 bg-secondary-teal/5 rounded-lg border-l-3 border-secondary-teal">
                          <p className="text-gray-700 text-sm leading-relaxed">
                            Placements are reviewed at our internal placement
                            panel, where we discuss compatibility and individual
                            needs to ensure we offer the most suitable option
                            for each person.
                          </p>
                        </div>
                      </details>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-secondary-teal rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10 hidden lg:flex">
                  <svg
                    className="w-6 h-6 text-white"
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
                </div>
                <div className="w-full lg:w-1/2 lg:pl-12"></div>
              </div>

              {/* Step 6: Funding */}
              <div className="relative flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 lg:pr-12"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-secondary-coral rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10 hidden lg:flex">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <div className="w-full lg:w-1/2 lg:pl-12">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-secondary-coral/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-secondary-coral font-bold text-sm">
                          6
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-secondary-coral">
                        Funding
                      </h3>
                    </div>
                    <div className="collapsible-content">
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Financial arrangements and funding approval to ensure
                        sustainable support provision.
                      </p>
                      <details className="group">
                        <summary className="cursor-pointer text-secondary-coral font-semibold text-sm hover:text-secondary-coral/80 transition-colors duration-200">
                          View Details →
                        </summary>
                        <div className="mt-3 p-4 bg-secondary-coral/5 rounded-lg border-l-3 border-secondary-coral">
                          <p className="text-gray-700 text-sm leading-relaxed">
                            Costings are submitted, and funding is reviewed and
                            approved to ensure all financial arrangements are in
                            place before placement begins.
                          </p>
                        </div>
                      </details>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 7: Arrangements */}
              <div className="relative flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 lg:pr-12 text-center lg:text-right">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="flex items-center justify-center lg:justify-end mb-4">
                      <div className="w-8 h-8 bg-secondary-purple/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-secondary-purple font-bold text-sm">
                          7
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-secondary-purple">
                        Arrangements
                      </h3>
                    </div>
                    <div className="collapsible-content">
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Final preparations and legal safeguards to ensure a
                        smooth transition process.
                      </p>
                      <details className="group">
                        <summary className="cursor-pointer text-secondary-purple font-semibold text-sm hover:text-secondary-purple/80 transition-colors duration-200">
                          View Details →
                        </summary>
                        <div className="mt-3 p-4 bg-secondary-purple/5 rounded-lg border-l-3 border-secondary-purple">
                          <p className="text-gray-700 text-sm leading-relaxed">
                            The MDT confirms all arrangements for the move. If a
                            person lacks capacity regarding their care and
                            support needs, a Best Interest Meeting, led by the
                            MDT, will be conducted to develop the Deprivation of
                            Liberty Safeguards.
                          </p>
                        </div>
                      </details>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-secondary-purple rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10 hidden lg:flex">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <div className="w-full lg:w-1/2 lg:pl-12"></div>
              </div>

              {/* Step 8: Training */}
              <div className="relative flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 lg:pr-12"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary-navy rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10 hidden lg:flex">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div className="w-full lg:w-1/2 lg:pl-12">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-primary-navy/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-primary-navy font-bold text-sm">
                          8
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-primary-navy">
                        Training
                      </h3>
                    </div>
                    <div className="collapsible-content">
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Specialized staff preparation to ensure optimal support
                        delivery from day one.
                      </p>
                      <details className="group">
                        <summary className="cursor-pointer text-primary-navy font-semibold text-sm hover:text-primary-navy/80 transition-colors duration-200">
                          View Details →
                        </summary>
                        <div className="mt-3 p-4 bg-primary-navy/5 rounded-lg border-l-3 border-primary-navy">
                          <p className="text-gray-700 text-sm leading-relaxed">
                            Pre-placement training is completed on a needs basis
                            to ensure our team is fully prepared to provide the
                            specific support required for each individual.
                          </p>
                        </div>
                      </details>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 9: Placement */}
              <div className="relative flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 lg:pr-12 text-center lg:text-right">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="flex items-center justify-center lg:justify-end mb-4">
                      <div className="w-8 h-8 bg-primary-gold/80 rounded-full flex items-center justify-center mr-3">
                        <span className="text-primary-navy font-bold text-sm">
                          9
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-primary-gold">
                        Placement
                      </h3>
                    </div>
                    <div className="collapsible-content">
                      <p className="text-gray-600 leading-relaxed mb-4">
                        The beginning of personalized care and support in the
                        new environment.
                      </p>
                      <details className="group">
                        <summary className="cursor-pointer text-primary-gold font-semibold text-sm hover:text-primary-gold/80 transition-colors duration-200">
                          View Details →
                        </summary>
                        <div className="mt-3 p-4 bg-primary-gold/5 rounded-lg border-l-3 border-primary-gold">
                          <p className="text-gray-700 text-sm leading-relaxed">
                            Placement begins with full support implementation
                            and continuous monitoring to ensure smooth
                            transition and optimal care delivery.
                          </p>
                        </div>
                      </details>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary-gold rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10 hidden lg:flex">
                  <svg
                    className="w-6 h-6 text-primary-navy"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <div className="w-full lg:w-1/2 lg:pl-12"></div>
              </div>

              {/* Step 10: Review */}
              <div className="relative flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 lg:pr-12"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-secondary-coral to-primary-gold rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10 hidden lg:flex">
                  <svg
                    className="w-8 h-8 text-white"
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
                <div className="w-full lg:w-1/2 lg:pl-12">
                  <div className="bg-gradient-to-br from-secondary-coral/20 to-primary-gold/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-secondary-coral/50">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary-coral to-primary-gold rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold">10</span>
                      </div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-secondary-coral to-primary-gold bg-clip-text text-transparent">
                        Review
                      </h3>
                    </div>
                    <div className="collapsible-content">
                      <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                        Comprehensive evaluation to ensure optimal outcomes and
                        continuous improvement.
                      </p>
                      <details className="group">
                        <summary className="cursor-pointer bg-gradient-to-r from-secondary-coral to-primary-gold bg-clip-text text-transparent font-semibold text-sm transition-opacity duration-200 group-hover:opacity-80">
                          View Details →
                        </summary>
                        <div className="mt-3 p-4 bg-white/50 rounded-lg border-l-3 border-secondary-coral">
                          <p className="text-gray-700 text-sm leading-relaxed">
                            Internal placement review conducted after 4 weeks to
                            assess progress, address any concerns, and make
                            adjustments to ensure the placement continues to
                            meet individual needs effectively.
                          </p>
                        </div>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ReferralsPage;
