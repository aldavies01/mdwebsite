function CompanyOverview() {
  const values = [
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
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      title: "Aspirational",
      description:
        "We believe in the potential of everyone and support people in working towards their goals and aspirations in life",
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
      title: "Kind",
      description:
        "Every interaction is guided by genuine kindness and understanding for the individuals we support",
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
      title: "Collaborative",
      description:
        "We work together with individuals, families, and communities to achieve the best possible outcomes",
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
            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
          />
        </svg>
      ),
      title: "Passionate",
      description:
        "Our deep commitment to care excellence drives everything we do for the people we serve",
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
      title: "Innovative",
      description:
        "We continuously evolve our approaches to provide the most effective and person-centered support",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-secondary-light-blue/10e">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary-gold/10 text-primary-navy px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Our Mission
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-navy mb-6 leading-tight">
            Opening doors to <br />
            <span className="text-secondary-coral">positive futures</span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* Left: Image with Mission Overlay */}
          <div className="relative bg-gray-200 rounded-2xl overflow-hidden min-h-[600px]">
            {/* Replace this div with your actual image */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/80 to-secondary-teal/60">
              {/* This is where your company photo will go */}
              <div className="absolute inset-0 flex items-center justify-center text-white/50">
                <img
                  src="/public/images/company/excellence.png"
                  alt="M&D Care team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Mission Text Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <blockquote className="text-lg leading-relaxed italic mb-4">
                "Our aim has always been to promote maximum independence and
                community integration within safe, nurturing environments."
              </blockquote>
              <p className="text-white/90 leading-relaxed">
                We believe in the potential of everyone and empowering people to
                face their individual challenges while providing support to
                become more independent.
              </p>
            </div>

            {/* Stats Overlay - Top Right */}
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4">
              <div className="grid grid-cols-1 gap-3 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary-navy">
                    15+
                  </div>
                  <div className="text-xs text-gray-600 uppercase tracking-wide font-medium">
                    Years
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-navy">11</div>
                  <div className="text-xs text-gray-600 uppercase tracking-wide font-medium">
                    Locations
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-navy">
                    200+
                  </div>
                  <div className="text-xs text-gray-600 uppercase tracking-wide font-medium">
                    Lives Supported
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Core Values */}
          <div>
            <h3 className="text-2xl font-bold text-primary-navy mb-8">
              Our Values Guide Everything We Do
            </h3>

            <div className="space-y-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary-navy/20 transition-all duration-300 group"
                >
                  <div className="flex items-start">
                    <div className="bg-secondary-light-blue text-primary-navy p-3 rounded-xl mr-4 group-hover:bg-primary-navy group-hover:text-white transition-all duration-300 flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary-navy mb-2">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button className="w-full bg-primary-navy text-white py-4 px-6 rounded-xl font-semibold hover:bg-primary-navy/90 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                Discover Our Story
                <svg
                  className="w-4 h-4 inline-block ml-2"
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyOverview;
