import ServiceCard from "./ServiceCard";
import ServiceMap from "./ServiceMap";

function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Residential Care",
      subtitle: "Comfortable homes with 24/7 professional support",
      bgColor: "bg-secondary-coral",
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
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      features: [
        "Comfortable, homely living environments",
        "24/7 qualified nursing and care staff",
        "Personalized care planning and support",
        "Social activities and community engagement",
        "Family involvement and regular updates",
      ],
      stats: [
        { number: "24/7", label: "Support" },
        { number: "15+", label: "Years Experience" },
      ],
    },
    {
      id: 2,
      title: "Specialist Care",
      subtitle: "Expert support for complex health and behavioral needs",
      bgColor: "bg-secondary-purple",
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
      features: [
        "Specialized staff with advanced training",
        "Positive behavior support strategies",
        "Medical oversight and health monitoring",
        "Therapeutic interventions and activities",
        "Crisis intervention and support planning",
      ],
      stats: [
        { number: "100%", label: "Qualified Staff" },
        { number: "8", label: "Locations" },
      ],
    },
    {
      id: 3,
      title: "Supported Living",
      subtitle: "Promoting independence with flexible, person-centered support",
      bgColor: "bg-secondary-teal",
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
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
          />
        </svg>
      ),
      features: [
        "Flexible support tailored to individual needs",
        "Promoting independence and life skills",
        "Community integration and social connections",
        "Employment and education support",
        "Regular reviews and goal setting",
      ],
      stats: [
        { number: "95%", label: "Independence Rate" },
        { number: "50+", label: "Individuals Supported" },
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Services Cards Section */}
        <div className="mb-20">
          <div className="mb-16">
            {/* Modern header layout */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div className="lg:max-w-2xl">
                <div className="inline-block bg-primary-gold/10 text-primary-navy px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  What We Offer
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-primary-navy mb-4 leading-tight">
                  Comprehensive Care <br />
                  <span className="text-secondary-teal">Services</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Three specialized service areas designed to meet the unique
                  needs of every individual we serve across Wales
                </p>
              </div>

              <div className="flex-shrink-0">
                <div className="bg-primary-navy text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer">
                  View All Services
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
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="space-y-6">
            {/* Mobile: Stack all cards vertically */}
            <div className="lg:hidden space-y-6">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
              {/* New Developments - Mobile */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-8 min-h-[200px] flex items-center justify-between relative overflow-hidden group hover:scale-[1.02] hover:shadow-xl transition-all duration-500 cursor-pointer border-2 border-primary-gold/30">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-primary-navy mb-2">
                    New Developments
                  </h3>
                  <p className="text-lg text-gray-600 font-medium">
                    Exciting new services coming soon
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Stay tuned for updates
                  </p>
                </div>
                <div className="relative z-10 text-primary-gold transform group-hover:translate-x-2 transition-transform duration-300">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Desktop: 3 columns layout */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-3 gap-8 mb-8">
                {services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-12 h-48 flex items-center justify-between relative overflow-hidden group hover:scale-[1.01] hover:shadow-xl transition-all duration-500 cursor-pointer border-2 border-primary-gold/30">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <h3 className="text-4xl font-bold text-primary-navy mb-2">
                    New Developments
                  </h3>
                  <p className="text-xl text-gray-600 font-medium">
                    Exciting new services coming soon
                  </p>
                  <p className="text-lg text-gray-500 mt-2">
                    Expanding our reach to serve more communities
                  </p>
                </div>

                <div className="relative z-10 text-primary-gold transform group-hover:translate-x-3 transition-transform duration-300">
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div>
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div className="lg:max-w-2xl">
                <div className="inline-block bg-secondary-teal/10 text-secondary-teal px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Find Us
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-primary-navy mb-4 leading-tight">
                  Service <br />
                  <span className="text-secondary-coral">Locations</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Discover our care facilities across Wales and find the support
                  available in your local area
                </p>
              </div>

              <div className="flex gap-3">
                <button className="bg-white border-2 border-gray-200 hover:border-primary-navy text-primary-navy px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm">
                  Get Directions
                </button>
                <button className="bg-primary-navy text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-navy/90 transition-all duration-300 text-sm">
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          <div className="h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <ServiceMap />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
