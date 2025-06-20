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
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-primary-navy text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-block bg-primary-gold/20 text-primary-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Our Commitments
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Our Promise <br />
                <span className="text-primary-gold">to You</span>
              </h1>
              <div className="space-y-6 text-lg text-white/90 leading-relaxed">
                <p>
                  At M&D Care, we are dedicated to upholding commitments that
                  reflect our values as an organisation.
                </p>
                <p>
                  These commitments guide us in providing compassionate,
                  respectful, and forward-thinking support. We continually
                  embrace innovation to enhance our services, driven by our
                  purpose, we strive to make a positive, lasting impact on the
                  communities we serve.
                </p>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative h-96 bg-gray-200 rounded-2xl overflow-hidden">
              <img
                src="/images/hero/training.png"
                alt=""
                className="w-full h-full object-cover"
              />
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
