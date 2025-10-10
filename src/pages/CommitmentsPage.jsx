function CommitmentsPage() {
  const commitments = [
    {
      id: 1,
      title: "Commitment to Technology",
      content:
        "M&D Care is an organisation committed to innovative and modern approaches to service delivery in both our accommodation based and our community based services. Since 2008, the service has developed modern systems and Information Communication Technology infrastructures and embedded these into the anatomy of the organisation. In 2009, we made a commitment to function as a paperless service, and introduced a Terminal Server into the Business. We continue our drive towards a modern and a future proof organisation. As a social care provider, we consider technology to be a vital part of overcoming barriers in communication particularly with a mobile workforce, and significantly in rural areas. Technology and communication tools are also used in information flows between persons we support, family members, professionals and commissioners.",
      icon: (
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
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      accent: "secondary-teal",
    },
    {
      id: 2,
      title: "Commitment to the Welsh Language",
      content:
        "The Welsh Language Act 1993, put the Welsh language on an equal footing with the English language in Wales for all public sector bodies. At M&D Care, although the legislation does not require us to comply with the Welsh Language Act, we have a strong commitment to the Welsh language. The requests of people we support to communicate in Welsh are facilitated as much as possible due to the high demographic of Welsh-speaking M&D Care staff we employ. We are currently working on producing bilingual Statement and Purpose documents for each of the services and will develop a portfolio of key company documentation in both Welsh and English.",
      icon: (
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
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
      ),
      accent: "secondary-coral",
    },
    {
      id: 3,
      title: "Commitment to Anti-Slavery",
      content:
        "This organisation is committed to the continuous improvement of its services and views Colleagues learning and training as core to delivering a quality service. The Regulated Services (Service Providers and Responsible Individuals) (Wales) Regulations 2017 and its accompanying Statutory Guidance makes clear the importance of ongoing professional development and training of the workforce. We will continually review and revise our training to ensure that the Regulatory requirements are met. As part of our Induction process Colleagues are aware of the Modern Slavery Act and how to report any concerns. We also train our managers to ensure they understand their responsibilities and are carrying them out.",
      icon: (
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
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      accent: "secondary-purple",
    },
    {
      id: 4,
      title: "Commitment to the environment",
      content:
        "M&D Care recognises our responsibility to protect and preserve the environment for future generations. We are committed to reducing our environmental impact through sustainable practices, waste reduction, and energy efficiency across all our services. We actively promote environmental awareness among our colleagues and the people we support, encouraging sustainable practices in everyday activities. Regular monitoring and assessment of our environmental performance ensures we continue to improve our sustainability efforts.",
      icon: (
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
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      accent: "primary-gold",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section — styled like QualityHero */}
      {/* Hero Section — image-free, engaging */}
      <section className="relative bg-primary-navy text-white py-16 lg:py-20 overflow-hidden">
        {/* Animated brand bubbles */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute -top-8 -left-8 w-28 h-28 bg-primary-gold rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-6 right-10 w-16 h-16 bg-secondary-coral rounded-full animate-bounce" />
          <div className="absolute top-1/3 left-1/4 w-10 h-10 bg-secondary-teal rounded-full animate-ping" />
          <div className="absolute top-24 right-1/3 w-8 h-8 bg-secondary-purple rounded-full animate-pulse" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Content */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary-gold/20 text-primary-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Our Commitments
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Our Promise <br />
              <span className="text-primary-gold">to You</span>
            </h1>

            <div className="space-y-5 text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              <p>
                At M&amp;D Care, we’re dedicated to commitments that reflect who
                we are as an organisation: compassionate, respectful, and
                forward-thinking.
              </p>
              <p>
                These promises guide how we support people and how we keep
                improving-so our impact is positive and lasting across the
                communities we serve.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
              <a
                href="/contact"
                className="bg-primary-gold text-primary-navy px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-primary-gold/90 hover:scale-105 transition-all duration-300 shadow-lg text-center"
              >
                Get in Touch
              </a>
              <a
                href="/about"
                className="bg-white/10 text-white border-2 border-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-white hover:text-primary-navy transition-all duration-300 text-center"
              >
                Learn More About Us
              </a>
            </div>
          </div>

          {/* Glass “Promise Strip” (replaces image) */}
          <div className="mt-6 md:mt-10">
            <div className="grid [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))] gap-4 md:gap-6">
              {/* Technology */}
              <div className="rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/15 px-5 py-6 hover:bg-white/15 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-secondary-teal/20 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-secondary-teal"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">
                      Commitment to Technology
                    </div>
                    <p className="text-white/80 text-sm mt-1">
                      Paperless since 2009 and still innovating to improve care
                      and communication.
                    </p>
                  </div>
                </div>
              </div>

              {/* Welsh Language */}
              <div className="rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/15 px-5 py-6 hover:bg-white/15 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-secondary-coral/20 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-secondary-coral"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">
                      Commitment to the Welsh Language
                    </div>
                    <p className="text-white/80 text-sm mt-1">
                      Growing bilingual documents and enabling Welsh where it’s
                      requested.
                    </p>
                  </div>
                </div>
              </div>

              {/* Anti-Slavery */}
              <div className="rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/15 px-5 py-6 hover:bg-white/15 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-secondary-purple/20 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-secondary-purple"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">
                      Commitment to Anti-Slavery
                    </div>
                    <p className="text-white/80 text-sm mt-1">
                      Training and clear reporting so concerns are recognised
                      and acted on.
                    </p>
                  </div>
                </div>
              </div>

              {/* Environment */}
              <div className="rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/15 px-5 py-6 hover:bg-white/15 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-primary-gold/20 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-primary-gold"
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
                  <div>
                    <div className="font-semibold">
                      Commitment to the Environment
                    </div>
                    <p className="text-white/80 text-sm mt-1">
                      Reducing waste and energy use; improving sustainability
                      year on year.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-20">
            {commitments.map((commitment, index) => (
              <div key={commitment.id} className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-${commitment.accent}/20 rounded-xl mb-6`}
                  >
                    {commitment.icon}
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-primary-navy mb-4 leading-tight">
                    {commitment.title}
                  </h2>
                  <div
                    className={`w-16 h-1 bg-${commitment.accent} rounded-full mx-auto`}
                  ></div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10 border border-gray-100">
                  <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    {commitment.content}
                  </p>

                  {/* Additional info for specific commitments */}
                  {commitment.id === 4 && (
                    <div className="space-y-4">
                      <div className="p-6 bg-primary-gold/10 rounded-xl border-l-4 border-primary-gold">
                        <p className="text-gray-700 leading-relaxed">
                          <strong>Our Environmental Policy:</strong> We are
                          committed to reducing our environmental impact through
                          sustainable practices and continuous improvement in
                          our operations.
                        </p>
                      </div>

                      {/* PDF Download Section */}
                      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
                        <a
                          href="/documents/environmental-policy.pdf"
                          download="M&D-Care-Environmental-Policy.pdf"
                          className="inline-flex items-center gap-2
                          bg-primary-gold hover:bg-primary-gold/90
                          text-primary-navy px-6 py-3 rounded-lg font-semibold
                          transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          Download Environmental Policy
                        </a>
                        <a
                          href="/documents/environmental-policy.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-white
                          border-2 border-primary-gold/20
                          hover:border-primary-gold hover:bg-primary-gold/5
                          text-primary-navy px-6 py-3 rounded-lg font-semibold
                          transition-all duration-300"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                          View Policy
                        </a>
                      </div>
                    </div>
                  )}

                  {commitment.id === 3 && (
                    <div className="p-6 bg-secondary-purple/10 rounded-xl border-l-4 border-secondary-purple">
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Reporting & Support:</strong> Information and
                        help can be accessed through our dedicated reporting
                        channels. All colleagues are trained to recognize and
                        report concerns appropriately.
                      </p>
                    </div>
                  )}

                  {commitment.id === 2 && (
                    <div className="p-6 bg-secondary-coral/10 rounded-xl border-l-4 border-secondary-coral">
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Ongoing Development:</strong> We are actively
                        developing bilingual documentation and continue to
                        expand our Welsh language capabilities across all
                        services.
                      </p>
                    </div>
                  )}

                  {commitment.id === 1 && (
                    <div className="p-6 bg-secondary-teal/10 rounded-xl border-l-4 border-secondary-teal">
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Innovation Focus:</strong> Our commitment to
                        being paperless since 2009 demonstrates our
                        forward-thinking approach to sustainable and efficient
                        service delivery.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary-navy/10 text-primary-navy px-4 py-2 rounded-full text-sm font-semibold mb-6">
              How We Work
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-navy mb-6 leading-tight">
              Our Approach to <br />
              <span className="text-secondary-coral">Quality Care</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              These principles guide everything we do, ensuring we maintain the
              highest standards while staying true to our caring,
              person-centered approach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-primary-navy/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary-navy mb-3">
                Doing Things Right
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Following all regulations and best practices to ensure safe,
                quality care
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-secondary-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
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
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary-navy mb-3">
                Always Improving
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Learning from experience and constantly finding better ways to
                support people
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-secondary-coral/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary-navy mb-3">
                Being Open
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Clear communication with families, partners, and everyone we
                work with
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-secondary-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary-navy mb-3">
                Growing Together
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Supporting our team's development so they can provide the best
                care possible
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary-navy text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Want to Know More?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            We're always happy to discuss our commitments and how they shape the
            care we provide. Get in touch if you'd like to learn more about our
            approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary-gold text-primary-navy px-8 py-4 rounded-xl font-semibold hover:bg-primary-gold/90 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get in Touch
            </a>
            <a
              href="/about"
              className="bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-navy transition-all duration-300"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CommitmentsPage;
