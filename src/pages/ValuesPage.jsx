function ValuesPage() {
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
      color: "secondary-teal",
      example:
        "Setting personal goals and celebrating achievements, no matter how small, to help individuals reach their full potential.",
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
      color: "secondary-coral",
      example:
        "Taking time to listen, showing empathy, and treating every person with dignity and respect in all our interactions.",
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
      color: "secondary-purple",
      example:
        "Building strong partnerships with families, healthcare professionals, and local communities to create comprehensive support networks.",
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
            d="M9 12l2 2 4-4m5.25 5.25a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
          />
        </svg>
      ),
      title: "Courageous",
      description:
        "We have the courage to advocate for what's right and make difficult decisions in the best interests of those we support",
      color: "secondary-light-blue",
      example:
        "Speaking up when we see opportunities for improvement, taking on challenging cases, and always doing what's right even when it's difficult.",
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
      color: "primary-gold",
      example:
        "Going above and beyond expectations, continuously improving our services, and advocating for the best interests of those we support.",
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
      color: "primary-navy",
      example:
        "Embracing new technologies, creative problem-solving, and evidence-based practices to enhance the quality of care we provide.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Hero Section */}
      <section className="relative bg-primary-navy text-white py-24 overflow-hidden">
        {/* Subtle animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary-gold rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-secondary-coral rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary-teal rounded-full animate-ping"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-block bg-primary-gold/30 text-primary-gold px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
                Our Values
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Values That <br />
                <span className="text-primary-gold animate-pulse">
                  Define Us
                </span>
              </h1>
              <div className="space-y-6 text-xl text-white/90 leading-relaxed">
                <p>
                  Our five core values aren't just principles - they're the
                  beating heart of everything we do at M&D Care. They guide our
                  decisions, shape our culture, and ensure we always put people
                  first.
                </p>
                <p className="text-primary-gold font-semibold">
                  See how these values come to life in our daily work and
                  interactions.
                </p>
              </div>
            </div>

            {/* Right: Interactive Values Grid */}
            <div className="relative">
              <div className="grid grid-cols-3 gap-6">
                {values.slice(0, 3).map((value, index) => (
                  <div
                    key={index}
                    className={`bg-${value.color}/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-${value.color}/30 hover:scale-110 transition-all duration-500 cursor-pointer border border-white/20 hover:border-${value.color}/50`}
                  >
                    <div
                      className={`text-${value.color} mb-3 transform hover:scale-125 transition-transform duration-300`}
                    >
                      {value.icon}
                    </div>
                    <h3 className="font-bold text-lg">{value.title}</h3>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-6 mt-6">
                {values.slice(3, 6).map((value, index) => (
                  <div
                    key={index + 3}
                    className={`bg-${value.color}/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-${value.color}/30 hover:scale-110 transition-all duration-500 cursor-pointer border border-white/20 hover:border-${value.color}/50`}
                  >
                    <div
                      className={`text-${value.color} mb-3 transform hover:scale-125 transition-transform duration-300`}
                    >
                      {value.icon}
                    </div>
                    <h3 className="font-bold text-lg">{value.title}</h3>
                  </div>
                ))}
              </div>

              {/* Enhanced floating accents */}
              <div className="absolute -top-4 -right-4 bg-primary-gold w-12 h-12 rounded-full opacity-80 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 bg-secondary-coral w-8 h-8 rounded-full opacity-60 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Values in Detail */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary-navy/10 text-primary-navy px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
              Our Core Values
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-primary-navy mb-6 leading-tight">
              Values in <br />
              <span className="text-secondary-coral">Action</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each value represents a commitment to the people we support and
              reflects how we approach every aspect of our work at M&D Care.
            </p>
          </div>

          <div className="space-y-12">
            {values.map((value, index) => (
              <div key={index} className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 bg-${value.color}/20 rounded-2xl mb-4 hover:bg-${value.color}/30 hover:scale-110 transition-all duration-500`}
                  >
                    <div
                      className={`text-${value.color} transform hover:scale-125 transition-transform duration-300`}
                    >
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-primary-navy mb-3 hover:text-secondary-coral transition-colors duration-300">
                    {value.title}
                  </h3>
                  <div
                    className={`w-16 h-2 bg-${value.color} rounded-full mx-auto`}
                  ></div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <p className="text-gray-600 text-lg leading-relaxed mb-6 text-center">
                    {value.description}
                  </p>

                  <div
                    className={`p-4 bg-${value.color}/10 rounded-2xl border-l-4 border-${value.color} hover:bg-${value.color}/20 transition-colors duration-300`}
                  >
                    <h4 className="font-bold text-primary-navy mb-2 text-base">
                      In Practice:
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {value.example}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Quote Section */}
      <section className="py-16 bg-gradient-to-br from-secondary-light-blue/30 via-secondary-coral/20 to-secondary-teal/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-secondary-coral/20 text-secondary-coral px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
              Values in Practice
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-navy mb-6 leading-tight">
              Values in <br />
              <span className="text-secondary-coral">Daily Action</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="text-8xl text-secondary-coral/30 font-serif leading-none mb-6 animate-pulse">
              "
            </div>

            <blockquote className="text-2xl lg:text-3xl text-gray-700 leading-relaxed mb-8 font-semibold">
              These values aren't just aspirations - they're how we actually
              work every day. Whether we're supporting someone with their
              morning routine or celebrating a personal achievement, our values
              guide every interaction.
            </blockquote>

            <div className="flex items-center justify-center">
              <div className="w-20 h-20 bg-secondary-coral/20 rounded-full flex items-center justify-center mr-6 hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-10 h-10 text-secondary-coral"
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
                <div className="font-bold text-primary-navy text-xl">
                  Sarah Williams
                </div>
                <div className="text-secondary-coral font-semibold">
                  Director of Care
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-24 bg-primary-navy text-white relative overflow-hidden">
        {/* Subtle animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary-gold rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-secondary-coral rounded-full animate-bounce"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Experience Our Values in Action
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            See how our values translate into exceptional care across all our
            services. Discover the difference that value-driven care can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/services"
              className="bg-primary-gold text-primary-navy px-10 py-5 rounded-2xl font-bold text-lg hover:bg-primary-gold/90 hover:scale-110 hover:rotate-1 transition-all duration-300 shadow-2xl hover:shadow-3xl"
            >
              Explore Our Services
            </a>
            <a
              href="/contact"
              className="bg-white/10 text-white border-2 border-white/30 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-primary-navy hover:scale-110 hover:-rotate-1 transition-all duration-300 backdrop-blur-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ValuesPage;
