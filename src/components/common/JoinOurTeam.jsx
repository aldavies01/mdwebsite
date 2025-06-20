function JoinOurTeam() {
  const benefits = [
    {
      icon: (
        <svg
          className="w-6 h-6"
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
      text: "Competitive salary & benefits",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
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
      text: "Comprehensive training & development",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
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
      text: "Make a real difference in people's lives",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
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
      text: "Join a supportive, passionate team",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary-light-blue/20 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Main Content */}
          <div>
            <div className="inline-block bg-primary-gold/10 text-primary-navy px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Careers at M&D Care
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-primary-navy mb-6 leading-tight">
              Join Our <br />
              <span className="text-secondary-coral">Amazing Team</span>
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-8">
              <p>
                Are you a passionate individual, looking to work in a rewarding
                sector?
              </p>

              <p className="text-xl font-semibold text-primary-navy">
                We want to hear from you!
              </p>

              <p>
                Whether you are new to care, or have previous experience, if you
                share our values then we'd love to have you join our team.
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="/careers/vacancies"
                className="bg-primary-navy text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-navy/90 hover:scale-105 transition-all duration-300 text-center shadow-lg"
              >
                View Current Vacancies
              </a>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center text-gray-600 group"
                >
                  <div className="bg-primary-gold/20 text-primary-navy p-2 rounded-lg mr-3 group-hover:bg-primary-gold/30 transition-colors duration-200">
                    {benefit.icon}
                  </div>
                  <span className="text-sm font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className="relative">
            {/* Background Shape */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/10 to-secondary-teal/10 rounded-3xl transform rotate-6"></div>

            {/* Content Card */}
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="text-center">
                <div className="bg-primary-gold/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-primary-navy"
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

                <h3 className="text-2xl font-bold text-primary-navy mb-4">
                  Ready to Start Your Journey?
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Join a team where your compassion, dedication, and values make
                  a meaningful difference in the lives of the people we support
                  every day.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-navy">
                      650+
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">
                      Team Members
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-navy">
                      15+
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">
                      Years Excellence
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-primary-gold w-8 h-8 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 bg-secondary-coral w-6 h-6 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinOurTeam;
