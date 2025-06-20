import AboutCard from "../components/common/AboutCard";
import DirectorQuote from "../components/common/DirectorQuote";
import ServiceTimeline from "../components/common/ServiceTimeline";

function AboutPage() {
  // About cards data
  const aboutCards = [
    {
      id: 1,
      title: "Our People",
      description:
        "Meet our passionate team of care professionals who make the difference every day. From support workers to management, everyone at M&D Care shares our commitment to providing exceptional, person-centered care.",
      icon: (
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
      ),
      bgColor: "bg-primary-navy",
      linkText: "Meet Our Team",
      linkUrl: "/about/people",
    },
    {
      id: 2,
      title: "Our Values",
      description:
        "Discover the core values that guide everything we do - being Aspirational, Kind, Collaborative, Passionate, and Innovative. These principles shape our approach to care and our relationships with everyone we support.",
      icon: (
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
      ),
      bgColor: "bg-primary-navy",
      linkText: "Explore Our Values",
      linkUrl: "/about/values",
    },
    {
      id: 3,
      title: "Our Awards",
      description:
        "Recognition of our commitment to excellence in care. We've received 11 regional and national awards since 2021, reflecting our dedication to providing outstanding support and achieving positive outcomes.",
      icon: (
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
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
      bgColor: "bg-primary-navy",
      linkText: "View Our Awards",
      linkUrl: "/about/awards",
    },
    {
      id: 4,
      title: "Our Commitments",
      description:
        "Learn about our unwavering commitments to quality care, continuous improvement, regulatory compliance, and making a positive difference in the lives of those we support and their families.",
      icon: (
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
      ),
      bgColor: "bg-primary-navy",
      linkText: "Our Commitments",
      linkUrl: "/about/commitments",
    },
    {
      id: 5,
      title: "Our Quality",
      description:
        "Understanding our approach to quality assurance, governance, and continuous improvement. We maintain the highest standards through robust processes, regular evaluation, and commitment to excellence.",
      icon: (
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
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      bgColor: "bg-primary-navy",
      linkText: "Quality Standards",
      linkUrl: "/about/quality",
    },
  ];

  // Director quote data
  const directorQuoteData = {
    quote:
      "At M&D Care, we started with a focus on mental health and forensic care, gaining deep insights into diverse perspectives and communication. As we expanded to include Asperger's and Autism support, we emphasised creating personalised care plans tailored to each individual, rather than focusing solely on diagnoses. Our uniquely motivated staff are dedicated to providing customised care, embodying our belief that 'Diagnosis is not a barrier.'",
    name: "Director Name", // You can update this with the actual name
    title: "Director of Care",
    image: "/images/company/michelle.png", // Placeholder
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-primary-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-block bg-primary-gold/20 text-primary-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
                About M&D Care
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Family-Oriented <br />
                <span className="text-primary-gold">Care Excellence</span>
              </h1>
              <div className="space-y-6 text-lg text-white/90 leading-relaxed">
                <p>
                  We are a family-oriented business run by a passionate team of
                  professionals, delivering specialist, bespoke care services
                  throughout South West Wales.
                </p>
                <p>
                  Our services include{" "}
                  <span className="text-primary-gold font-semibold">
                    Residential Care
                  </span>
                  ,
                  <span className="text-primary-gold font-semibold">
                    {" "}
                    Supported Living
                  </span>
                  , and
                  <span className="text-primary-gold font-semibold">
                    {" "}
                    Domiciliary Care
                  </span>{" "}
                  for individuals with Autism, Learning Disabilities, Physical
                  Disabilities, and Mental Health needs.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="/contact"
                  className="bg-primary-gold text-primary-navy px-8 py-4 rounded-xl font-semibold hover:bg-primary-gold/90 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Get to Know Us
                </a>
                <a
                  href="/services"
                  className="bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-navy transition-all duration-300"
                >
                  Our Services
                </a>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="relative h-96 lg:h-[430px] bg-gray-200 rounded-2xl overflow-hidden">
                <img
                  src="/images/company/awards.png"
                  alt="M&D Care Awards Photo"
                />
              </div>
              {/* Floating stats */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary-navy">
                      15+
                    </div>
                    <div className="text-xs text-gray-500">Years</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-navy">
                      650+
                    </div>
                    <div className="text-xs text-gray-500">Team</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-navy">
                      214+
                    </div>
                    <div className="text-xs text-gray-500">Supported</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-navy">
                      11
                    </div>
                    <div className="text-xs text-gray-500">Awards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Cards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary-gold/10 text-primary-navy px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Learn More About Us
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-navy mb-6 leading-tight">
              Discover More About <br />
              <span className="text-secondary-coral">M&D Care</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore the different aspects that make M&D Care a trusted partner
              in providing exceptional care services across Wales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutCards.map((card) => (
              <AboutCard
                key={card.id}
                title={card.title}
                description={card.description}
                icon={card.icon}
                bgColor={card.bgColor}
                linkText={card.linkText}
                linkUrl={card.linkUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Director Quote */}
      <DirectorQuote {...directorQuoteData} />

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-block bg-secondary-teal/10 text-secondary-teal px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Our Standards
              </div>
              <h2 className="text-4xl font-bold text-primary-navy mb-6 leading-tight">
                Committed to <br />
                <span className="text-secondary-teal">Excellence</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  We are dedicated to maintaining the highest standards across
                  all aspects of our services, ensuring that every individual
                  receives the best possible care and support.
                </p>
                <p>
                  Our robust governance framework ensures accountability,
                  transparency, and continuous improvement in our practices. By
                  adhering to strict regulatory standards and regularly
                  evaluating our performance, we strive to exceed expectations
                  and deliver exceptional care that truly makes a difference in
                  the lives of those we support.
                </p>
              </div>

              {/* Key principles */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-secondary-teal rounded-full mr-3"></div>
                  <span className="text-gray-700 font-medium">
                    Regulatory Compliance
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-secondary-teal rounded-full mr-3"></div>
                  <span className="text-gray-700 font-medium">
                    Continuous Improvement
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-secondary-teal rounded-full mr-3"></div>
                  <span className="text-gray-700 font-medium">
                    Transparency
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-secondary-teal rounded-full mr-3"></div>
                  <span className="text-gray-700 font-medium">
                    Accountability
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Visual representation */}
            <div className="relative">
              <div className="bg-gradient-to-br from-secondary-teal/10 to-secondary-coral/10 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                    <div className="w-12 h-12 bg-secondary-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-6 h-6 text-secondary-teal"
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
                    <h3 className="font-bold text-primary-navy mb-2">
                      CQC Ratings
                    </h3>
                    <p className="text-sm text-gray-600">
                      Outstanding & Good ratings across all services
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                    <div className="w-12 h-12 bg-primary-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
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
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold text-primary-navy mb-2">
                      Innovation
                    </h3>
                    <p className="text-sm text-gray-600">
                      Cutting-edge approaches to care delivery
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                    <div className="w-12 h-12 bg-secondary-coral/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-6 h-6 text-secondary-coral"
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
                    <h3 className="font-bold text-primary-navy mb-2">
                      Training
                    </h3>
                    <p className="text-sm text-gray-600">
                      Continuous professional development
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                    <div className="w-12 h-12 bg-secondary-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-6 h-6 text-secondary-purple"
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
                    <h3 className="font-bold text-primary-navy mb-2">
                      Outcomes
                    </h3>
                    <p className="text-sm text-gray-600">
                      Measurable positive results
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Timeline */}
      <ServiceTimeline />
    </div>
  );
}

export default AboutPage;
