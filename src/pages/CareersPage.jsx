function CareersPage() {
  const benefits = [
    {
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
      title: "Competitive Salary",
      description:
        "Fair compensation packages that reward your skills and experience",
      color: "primary-gold",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "Training & Development",
      description:
        "Comprehensive training programs and career progression opportunities",
      color: "secondary-teal",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: "Meaningful Work",
      description: "Make a real difference in people's lives every single day",
      color: "secondary-coral",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
      title: "Supportive Team",
      description:
        "Work alongside passionate colleagues who care about each other",
      color: "secondary-purple",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Work-Life Balance",
      description:
        "Flexible working arrangements and genuine respect for your personal time",
      color: "secondary-light-blue",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
      title: "Career Growth",
      description:
        "Clear progression pathways and opportunities to advance your career",
      color: "primary-navy",
    },
  ];

  const featuredRoles = [
    {
      title: "Support Workers",
      description:
        "Join our front-line care team and make a direct impact on people's lives",
      openPositions: 8,
      locations: "Multiple locations",
      color: "secondary-coral",
    },
    {
      title: "Senior Support Workers",
      description:
        "Lead by example and mentor new team members in our supportive environment",
      openPositions: 3,
      locations: "Llanelli & Swansea",
      color: "secondary-teal",
    },
    {
      title: "Team Leaders",
      description:
        "Shape the future of care delivery and develop our amazing teams",
      openPositions: 2,
      locations: "Specialist Services",
      color: "secondary-purple",
    },
  ];

  const requirements = [
    "Genuine passion for supporting others",
    "Excellent communication skills",
    "Reliable and trustworthy",
    "Willingness to learn and develop",
    "Valid DBS check (we can arrange this)",
    "Right to work in the UK",
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-block bg-primary-gold/20 text-primary-gold px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
                Join Our Team
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Build Your <br />
                <span className="text-primary-gold">Care Career</span>
              </h1>
              <div className="space-y-6 text-xl text-white/90 leading-relaxed">
                <p>
                  Join a team where your compassion and dedication make a real
                  difference. At M&D Care, we're not just offering jobs – we're
                  providing career opportunities in a sector that truly matters.
                </p>
                <p className="text-primary-gold font-semibold">
                  Ready to start a rewarding career in care?
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="#current-vacancies"
                  className="bg-primary-gold text-primary-navy px-8 py-4 rounded-xl font-bold hover:bg-primary-gold/90 hover:scale-105 transition-all duration-300 shadow-lg text-center"
                >
                  View Current Vacancies
                </a>
                <a
                  href="#apply"
                  className="bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-primary-navy transition-all duration-300 text-center"
                >
                  Submit Your CV
                </a>
              </div>
            </div>

            {/* Right: Stats */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors duration-300">
                  <div className="text-4xl font-bold text-primary-gold mb-2">
                    650+
                  </div>
                  <div className="text-white/80">Team Members</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors duration-300">
                  <div className="text-4xl font-bold text-primary-gold mb-2">
                    16
                  </div>
                  <div className="text-white/80">Open Positions</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors duration-300">
                  <div className="text-4xl font-bold text-primary-gold mb-2">
                    92%
                  </div>
                  <div className="text-white/80">Staff Retention</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors duration-300">
                  <div className="text-4xl font-bold text-primary-gold mb-2">
                    15+
                  </div>
                  <div className="text-white/80">Years Growing</div>
                </div>
              </div>

              {/* Floating accents */}
              <div className="absolute -top-4 -right-4 bg-primary-gold w-12 h-12 rounded-full opacity-80 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 bg-secondary-coral w-8 h-8 rounded-full opacity-60 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us - Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-secondary-coral/10 text-secondary-coral px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Why Choose M&D Care
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-navy mb-6 leading-tight">
              More Than Just <br />
              <span className="text-secondary-coral">A Job</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We believe in investing in our people. Here's what makes M&D Care
              a great place to build your career.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-${benefit.color}`}
              >
                <div
                  className={`w-16 h-16 bg-${benefit.color}/20 rounded-2xl flex items-center justify-center mb-4 hover:bg-${benefit.color}/30 transition-colors duration-300`}
                >
                  <div className={`text-${benefit.color}`}>{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-primary-navy mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Opportunities Snapshot */}
      <section
        id="current-vacancies"
        className="py-16 bg-gradient-to-br from-gray-50 to-secondary-light-blue/20"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary-navy/10 text-primary-navy px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Current Opportunities
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-navy mb-6 leading-tight">
              Featured <br />
              <span className="text-secondary-coral">Positions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Here's a snapshot of some of our current openings. Check out all
              available positions on our dedicated vacancies page.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredRoles.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105"
              >
                <div className={`h-2 bg-${job.color}`}></div>
                <div className="p-6">
                  <div className="text-center mb-4">
                    <div
                      className={`bg-${job.color}/20 text-${job.color} px-3 py-1 rounded-full text-sm font-semibold inline-block mb-3`}
                    >
                      {job.openPositions}{" "}
                      {job.openPositions === 1 ? "position" : "positions"}{" "}
                      available
                    </div>
                    <h3 className="text-xl font-bold text-primary-navy group-hover:text-secondary-coral transition-colors duration-300">
                      {job.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-4 text-center">
                    {job.description}
                  </p>

                  <div className="text-center text-sm text-gray-500 mb-4">
                    <svg
                      className="w-4 h-4 inline mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                    </svg>
                    {job.locations}
                  </div>

                  <button
                    className={`w-full bg-${job.color} text-white py-3 px-4 rounded-xl font-semibold hover:opacity-90 transition-opacity duration-300`}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Vacancies CTA */}
          <div className="text-center">
            <a
              href="/careers/vacancies"
              className="inline-flex items-center bg-primary-navy text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-navy/90 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              View All Current Vacancies
              <svg
                className="w-5 h-5 ml-2"
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
      </section>

      {/* Onboarding Journey - Show Stopper Section */}
      <section className="py-20 bg-gradient-to-br from-primary-navy via-primary-navy/90 to-primary-navy text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-1/4 w-40 h-40 bg-primary-gold rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-secondary-coral rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-10 w-24 h-24 bg-secondary-teal rounded-full animate-ping"></div>
          <div className="absolute top-20 right-20 w-20 h-20 bg-secondary-light-blue rounded-full animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-block bg-primary-gold/30 text-primary-gold px-6 py-3 rounded-full text-sm font-bold mb-8 animate-pulse">
              ✨ YOUR JOURNEY WITH US ✨
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              From Application to <br />
              <span className="text-primary-gold">Career Success</span>
            </h2>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              We've designed a comprehensive journey to support you every step
              of the way
            </p>
          </div>

          {/* Journey Timeline */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-gold via-secondary-coral to-secondary-teal rounded-full"></div>

            {/* Journey Steps */}
            <div className="space-y-16">
              {/* Step 1: Application */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12 text-right">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 hover:scale-105 group">
                    <h3 className="text-2xl font-bold text-primary-gold mb-3 group-hover:scale-110 transition-transform duration-300">
                      Application
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      Submit your CV or complete our simple online application
                      form. No complex requirements - just tell us about
                      yourself!
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-primary-gold rounded-full flex items-center justify-center border-4 border-white shadow-2xl hover:scale-125 transition-transform duration-500 z-10">
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
                <div className="w-1/2 pl-12"></div>
              </div>

              {/* Step 2: CV Screening */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-secondary-coral rounded-full flex items-center justify-center border-4 border-white shadow-2xl hover:scale-125 transition-transform duration-500 z-10">
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
                      d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                </div>
                <div className="w-1/2 pl-12">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 hover:scale-105 group">
                    <h3 className="text-2xl font-bold text-secondary-coral mb-3 group-hover:scale-110 transition-transform duration-300">
                      CV Screening
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      Our friendly HR team reviews your application. We look for
                      passion and potential, not just experience!
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3: Initial Call */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12 text-right">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 hover:scale-105 group">
                    <h3 className="text-2xl font-bold text-secondary-teal mb-3 group-hover:scale-110 transition-transform duration-300">
                      Initial Call
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      A relaxed phone chat to get to know each other better. Ask
                      us anything - we're here to help!
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-secondary-teal rounded-full flex items-center justify-center border-4 border-white shadow-2xl hover:scale-125 transition-transform duration-500 z-10">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="w-1/2 pl-12"></div>
              </div>

              {/* Step 4: Interview */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-secondary-purple rounded-full flex items-center justify-center border-4 border-white shadow-2xl hover:scale-125 transition-transform duration-500 z-10">
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div className="w-1/2 pl-12">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 hover:scale-105 group">
                    <h3 className="text-2xl font-bold text-secondary-purple mb-3 group-hover:scale-110 transition-transform duration-300">
                      Interview
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      Meet the team in a comfortable, conversational interview.
                      We want to see the real you!
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 5: Onboarding */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12 text-right">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 hover:scale-105 group">
                    <h3 className="text-2xl font-bold text-primary-gold mb-3 group-hover:scale-110 transition-transform duration-300">
                      Onboarding
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      Welcome to the family! We'll get you set up with
                      everything you need to succeed.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-primary-gold rounded-full flex items-center justify-center border-4 border-white shadow-2xl hover:scale-125 transition-transform duration-500 z-10">
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <div className="w-1/2 pl-12"></div>
              </div>

              {/* Step 6: Documentation Call */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-secondary-light-blue rounded-full flex items-center justify-center border-4 border-white shadow-2xl hover:scale-125 transition-transform duration-500 z-10">
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
                <div className="w-1/2 pl-12">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 hover:scale-105 group">
                    <h3 className="text-2xl font-bold text-secondary-light-blue mb-3 group-hover:scale-110 transition-transform duration-300">
                      Documentation Call
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      We'll guide you through all the paperwork and compliance
                      requirements. No stress - we make it simple!
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 7: Training & Induction */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12 text-right">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 hover:scale-105 group">
                    <h3 className="text-2xl font-bold text-secondary-coral mb-3 group-hover:scale-110 transition-transform duration-300">
                      Training & Induction
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      Comprehensive training covering everything from our values
                      to practical skills. Learn at your own pace!
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-secondary-coral rounded-full flex items-center justify-center border-4 border-white shadow-2xl hover:scale-125 transition-transform duration-500 z-10">
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div className="w-1/2 pl-12"></div>
              </div>

              {/* Step 8: Shadow Shift */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-secondary-teal rounded-full flex items-center justify-center border-4 border-white shadow-2xl hover:scale-125 transition-transform duration-500 z-10">
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
                <div className="w-1/2 pl-12">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 hover:scale-105 group">
                    <h3 className="text-2xl font-bold text-secondary-teal mb-3 group-hover:scale-110 transition-transform duration-300">
                      Shadow Shift
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      Work alongside experienced colleagues to see our values in
                      action. No pressure - just learning!
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 9: Wellbeing Call */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12 text-right">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 hover:scale-105 group">
                    <h3 className="text-2xl font-bold text-secondary-purple mb-3 group-hover:scale-110 transition-transform duration-300">
                      Wellbeing Call
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      We check in to see how you're settling in. Your wellbeing
                      matters to us - always!
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-secondary-purple rounded-full flex items-center justify-center border-4 border-white shadow-2xl hover:scale-125 transition-transform duration-500 z-10">
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <div className="w-1/2 pl-12"></div>
              </div>

              {/* Step 10: Continued Development */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-primary-gold to-secondary-coral rounded-full flex items-center justify-center border-4 border-white shadow-2xl hover:scale-125 transition-transform duration-500 z-10 animate-pulse">
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
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <div className="w-1/2 pl-12">
                  <div className="bg-gradient-to-br from-primary-gold/20 to-secondary-coral/20 backdrop-blur-sm rounded-2xl p-8 hover:from-primary-gold/30 hover:to-secondary-coral/30 transition-all duration-500 hover:scale-105 group border-2 border-primary-gold/50">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-primary-gold to-secondary-coral bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                      Continued Development
                    </h3>
                    <p className="text-white/90 leading-relaxed text-lg">
                      Your journey doesn't end here! Ongoing training, career
                      progression, and continuous support as you grow with us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 inline-block hover:bg-white/20 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-primary-gold mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-white/90 mb-6">
                Every great career story starts with a single step
              </p>
              <a
                href="/careers/apply"
                className="bg-primary-gold text-primary-navy px-8 py-4 rounded-xl font-bold hover:bg-primary-gold/90 hover:scale-105 transition-all duration-300 shadow-xl inline-block"
              >
                Begin Your Application
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Culture */}
            <div>
              <div className="inline-block bg-secondary-coral/10 text-secondary-coral px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Our Culture
              </div>
              <h2 className="text-4xl font-bold text-primary-navy mb-6 leading-tight">
                Where Values <br />
                <span className="text-secondary-coral">Come to Life</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                At M&D Care, our values aren't just words on a wall - they're
                lived every day by every team member. Join a workplace where you
                can truly be yourself while making a meaningful difference.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary-teal/10 rounded-xl p-4 text-center hover:bg-secondary-teal/20 transition-colors duration-300">
                  <div className="text-2xl font-bold text-secondary-teal">
                    Aspirational
                  </div>
                  <div className="text-sm text-gray-600">Supporting dreams</div>
                </div>
                <div className="bg-secondary-coral/10 rounded-xl p-4 text-center hover:bg-secondary-coral/20 transition-colors duration-300">
                  <div className="text-2xl font-bold text-secondary-coral">
                    Kind
                  </div>
                  <div className="text-sm text-gray-600">Genuine care</div>
                </div>
                <div className="bg-secondary-purple/10 rounded-xl p-4 text-center hover:bg-secondary-purple/20 transition-colors duration-300">
                  <div className="text-2xl font-bold text-secondary-purple">
                    Collaborative
                  </div>
                  <div className="text-sm text-gray-600">Working together</div>
                </div>
                <div className="bg-primary-gold/10 rounded-xl p-4 text-center hover:bg-primary-gold/20 transition-colors duration-300">
                  <div className="text-2xl font-bold text-primary-navy">
                    Passionate
                  </div>
                  <div className="text-sm text-gray-600">Driven by purpose</div>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="/about/values"
                  className="inline-flex items-center text-secondary-coral font-semibold hover:text-secondary-coral/80 transition-colors duration-200"
                >
                  Discover All Our Values
                  <svg
                    className="w-4 h-4 ml-2"
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

            {/* Right: Staff Testimonial */}
            <div className="relative">
              <div className="bg-gradient-to-br from-secondary-light-blue/20 to-secondary-coral/20 rounded-2xl p-8">
                <div className="text-6xl text-secondary-coral/30 font-serif leading-none mb-4">
                  "
                </div>
                <blockquote className="text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                  Working at M&D Care has completely changed my perspective on
                  what a job can be. It's not just work - it's a calling. Every
                  day I come home knowing I've made a real difference.
                </blockquote>

                <div className="flex items-center">
                  <div className="w-16 h-16 bg-secondary-coral/20 rounded-full flex items-center justify-center mr-4">
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-primary-navy text-lg">
                      Rachel Thomas
                    </div>
                    <div className="text-secondary-coral">
                      Senior Support Worker
                    </div>
                    <div className="text-gray-500 text-sm">
                      3 years at M&D Care
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-primary-gold w-8 h-8 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="apply" className="py-16 bg-primary-navy text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Join our team and start a career where every day brings the
            opportunity to positively impact someone's life. We'd love to hear
            from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href="/careers/apply"
              className="bg-primary-gold text-primary-navy px-10 py-5 rounded-2xl font-bold text-lg hover:bg-primary-gold/90 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Apply Online
            </a>
            <a
              href="mailto:careers@mdcare.co.uk"
              className="bg-white/10 text-white border-2 border-white/30 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-primary-navy transition-all duration-300"
            >
              Send Your CV
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block">
            <p className="text-white/90 mb-2">
              Questions about careers at M&D Care?
            </p>
            <p className="text-primary-gold font-semibold">
              📧 careers@mdcare.co.uk | 📞 01554 123 456
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CareersPage;
