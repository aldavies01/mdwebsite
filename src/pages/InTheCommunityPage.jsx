import { useState } from "react";

function InTheCommunityPage() {
  const [activeInitiative, setActiveInitiative] = useState(0);

  // Community initiatives data
  const communityInitiatives = [
    {
      id: 1,
      title: "Local Sports Sponsorship",
      description:
        "Supporting grassroots sports teams across South West Wales, promoting health, wellbeing, and community spirit.",
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      color: "bg-secondary-coral",
      impact: "New community ties created",
      location: "Across Carmarthenshire & Swansea",
    },
    {
      id: 2,
      title: "Educational Partnerships",
      description:
        "Collaborating with local schools and colleges to provide QCF training for our staff members",
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
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      color: "bg-secondary-teal",
      impact: "400+ employees enrolled into further training",
      location: "Local schools & colleges",
    },
    {
      id: 3,
      title: "Charity Fundraising",
      description:
        "Our team actively participates in charity events, fundraising drives, and volunteer activities throughout the year.",
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
      color: "bg-secondary-purple",
      impact: "£25k+ raised in 2024",
      location: "Community-wide",
    },
    {
      id: 4,
      title: "Volunteering Projects",
      description:
        "Leading local environmental initiatives including community gardens and recycling programs, involving our passionate residents.",
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
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
      color: "bg-primary-gold",
      impact: "Active role in sustainable projects",
      location: "Llanelli & surrounding areas",
    },
  ];

  // Community stats
  const communityStats = [
    {
      number: "650+",
      label: "Local Jobs Created",
      subtitle: "Supporting local employment",
      color: "text-secondary-coral",
    },
    {
      number: "25+",
      label: "Community Events",
      subtitle: "Sponsored or participated",
      color: "text-secondary-teal",
    },
    {
      number: "5",
      label: "New Developments",
      subtitle: "Creating new opportunities",
      color: "text-secondary-purple",
    },
    {
      number: "100%",
      label: "Wales-Based",
      subtitle: "Proudly Welsh company",
      color: "text-primary-gold",
    },
  ];

  // Placeholder community stories - this will be connected to Contentful
  const communityStories = [
    {
      id: 1,
      title: "Supporting Llanelli RFC Youth Team",
      excerpt:
        "Our partnership with Llanelli RFC has helped provide new training equipment and opportunities for young players in the community...",
      category: "Sports",
      date: "March 2024",
      image: "/images/community/llanelli-rfc.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "Charity Fun Run Raises £5,000",
      excerpt:
        "Team M&D Care took part in the annual Carmarthen Bay Fun Run, raising vital funds for local children's charities...",
      category: "Charity",
      date: "February 2024",
      image: "/images/community/fun-run.jpg",
      featured: false,
    },
    {
      id: 3,
      title: "School Partnership Program Launch",
      excerpt:
        "We've launched an exciting new partnership with Coleg Sir Gâr, offering students real-world experience in care...",
      category: "Education",
      date: "January 2024",
      image: "/images/community/school-partnership.jpg",
      featured: false,
    },
    {
      id: 4,
      title: "Community Garden Project",
      excerpt:
        "Our residents and staff have created a beautiful community garden space, promoting wellbeing and environmental awareness...",
      category: "Environment",
      date: "December 2023",
      image: "/images/community/garden-project.jpg",
      featured: false,
    },
  ];

  const partnerships = [
    {
      name: "Llanelli RFC",
      type: "Sports Partnership",
      description: "Supporting youth development through rugby",
      logo: "/images/partners/llanelli-rfc-logo.png",
    },
    {
      name: "Coleg Sir Gâr",
      type: "Education Partnership",
      description: "Work experience and training opportunities",
      logo: "/images/partners/coleg-sir-gar-logo.png",
    },
    {
      name: "Carmarthenshire Council",
      type: "Local Authority",
      description: "Collaborative community initiatives",
      logo: "/images/partners/carmarthenshire-council-logo.png",
    },
    {
      name: "Local Charities Network",
      type: "Charity Collaboration",
      description: "Supporting various local charitable causes",
      logo: "/images/partners/local-charities-logo.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-navy via-primary-navy/95 to-primary-navy/90 text-white py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-16 sm:w-32 h-16 sm:h-32 bg-primary-gold rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-12 sm:w-24 h-12 sm:h-24 bg-secondary-coral rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-8 sm:w-16 h-8 sm:h-16 bg-secondary-teal rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/3 w-10 sm:w-20 h-10 sm:h-20 bg-secondary-coral rounded-full animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-block bg-primary-gold/20 text-primary-gold px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 animate-pulse">
                🌟 Community Impact
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Deep Roots in <br />
                <span className="text-transparent bg-gradient-to-r from-primary-gold via-secondary-coral to-secondary-teal bg-clip-text animate-pulse">
                  Our Community
                </span>
              </h1>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-white/90 leading-relaxed">
                <p>
                  M&D Care is more than a care provider - we're proud members of
                  the South West Wales community. From supporting local sports
                  teams to environmental initiatives, we believe in giving back
                  to the communities that support us.
                </p>
                <p className="text-primary-gold font-semibold">
                  Together, we're building stronger, more inclusive communities
                  for everyone.
                </p>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 hover:bg-white/20 transition-colors duration-300">
                  <div className="text-xl sm:text-2xl font-bold text-secondary-purple mb-1">
                    Passionate
                  </div>
                  <div className="text-white/80 text-xs sm:text-sm">
                    About Community Investment
                  </div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 hover:bg-white/20 transition-colors duration-300">
                  <div className="text-xl sm:text-2xl font-bold text-secondary-light-blue mb-1">
                    Aspirational
                  </div>
                  <div className="text-white/80 text-xs sm:text-sm">
                    Active Partnerships
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative mt-8 lg:mt-0">
              <div className="relative h-64 sm:h-80 lg:h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/hero/hiring.png"
                  alt="M&D Care Community Engagement"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.target.style.display = "none";
                    e.target.nextElementSibling.style.display = "flex";
                  }}
                />
                {/* Fallback placeholder - hidden by default */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-primary-gold/20 via-secondary-coral/20 to-secondary-teal/20 flex items-center justify-center"
                  style={{ display: "none" }}
                >
                  <div className="text-center text-gray-600">
                    <p className="text-base sm:text-lg font-medium">
                      Community Engagement
                    </p>
                    <p className="text-sm">Making a Difference Together</p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 bg-primary-gold w-8 sm:w-12 h-8 sm:h-12 rounded-full opacity-80 animate-bounce"></div>
              <div className="absolute -top-3 sm:-top-6 -left-3 sm:-left-6 bg-secondary-coral w-6 sm:w-8 h-6 sm:h-8 rounded-full opacity-60 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-block bg-secondary-coral/10 text-secondary-coral px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              Our Impact in Numbers
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-navy mb-4 leading-tight">
              Making a{" "}
              <span className="text-secondary-coral">
                Measurable Difference
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {communityStats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div
                  className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 ${stat.color}`}
                >
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base font-semibold text-primary-navy mb-1">
                  {stat.label}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  {stat.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Initiatives */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-secondary-light-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block bg-secondary-teal/10 text-secondary-teal px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              How We Give Back
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-navy mb-4 sm:mb-6 leading-tight">
              Community <span className="text-secondary-teal">Initiatives</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're actively involved in various community projects and
              partnerships that create positive change across South West Wales.
            </p>
          </div>

          {/* Desktop Interactive Initiatives */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-4 gap-4 mb-12">
              {communityInitiatives.map((initiative, index) => (
                <div
                  key={initiative.id}
                  className="text-center cursor-pointer"
                  onClick={() => setActiveInitiative(index)}
                >
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${
                      activeInitiative === index
                        ? `${initiative.color} scale-110 shadow-lg`
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                  >
                    {initiative.icon}
                  </div>
                  <h3
                    className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                      activeInitiative === index
                        ? "text-secondary-coral"
                        : "text-primary-navy"
                    }`}
                  >
                    {initiative.title}
                  </h3>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              {communityInitiatives.map(
                (initiative, index) =>
                  activeInitiative === index && (
                    <div key={index}>
                      <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                          <h3 className="text-2xl font-bold text-primary-navy mb-4">
                            {initiative.title}
                          </h3>
                          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                            {initiative.description}
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-secondary-coral/10 rounded-xl p-4">
                              <div className="text-secondary-coral font-bold text-lg mb-1">
                                Impact
                              </div>
                              <div className="text-gray-700">
                                {initiative.impact}
                              </div>
                            </div>
                            <div className="bg-secondary-teal/10 rounded-xl p-4">
                              <div className="text-secondary-teal font-bold text-lg mb-1">
                                Location
                              </div>
                              <div className="text-gray-700">
                                {initiative.location}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="relative h-80 bg-gray-200 rounded-xl overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-300/20 to-gray-400/20 flex items-center justify-center">
                            <div className="text-center text-gray-500">
                              <div className="w-16 h-16 mx-auto mb-4 opacity-50">
                                {initiative.icon}
                              </div>
                              <p className="text-sm font-medium">
                                {initiative.title}
                              </p>
                              <p className="text-xs">Community Initiative</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>

          {/* Mobile Initiatives */}
          <div className="lg:hidden space-y-6">
            {communityInitiatives.map((initiative, index) => (
              <div
                key={initiative.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`h-2 ${initiative.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-12 h-12 ${initiative.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                    >
                      {initiative.icon}
                    </div>
                    <h3 className="text-lg font-bold text-primary-navy">
                      {initiative.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {initiative.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-primary-navy font-semibold text-sm mb-1">
                        Impact
                      </div>
                      <div className="text-gray-600 text-xs">
                        {initiative.impact}
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-primary-navy font-semibold text-sm mb-1">
                        Location
                      </div>
                      <div className="text-gray-600 text-xs">
                        {initiative.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stories Section - Contentful Integration Ready */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block bg-secondary-purple/10 text-secondary-purple px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              Latest Stories
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-navy mb-4 sm:mb-6 leading-tight">
              Community <span className="text-secondary-purple">Stories</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Read about our recent community activities, partnerships, and the
              positive impact we're making together.
            </p>
          </div>

          {/* Featured Story */}
          {communityStories
            .filter((story) => story.featured)
            .map((story) => (
              <div
                key={story.id}
                className="bg-gradient-to-br from-secondary-purple/5 to-secondary-coral/5 rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12 border border-secondary-purple/20"
              >
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-secondary-purple/20 text-secondary-purple px-3 py-1 rounded-full text-xs font-semibold">
                        Featured Story
                      </span>
                      <span className="text-gray-500 text-sm">
                        {story.date}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-primary-navy mb-4">
                      {story.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {story.excerpt}
                    </p>
                    <button className="bg-secondary-purple text-white px-6 py-3 rounded-xl font-semibold hover:bg-secondary-purple/90 transition-colors duration-300">
                      Read Full Story
                    </button>
                  </div>
                  <div className="relative h-64 sm:h-80 bg-gray-200 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary-purple/20 to-secondary-coral/20 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <svg
                          className="w-16 h-16 mx-auto mb-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <p className="text-sm">{story.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {/* Story Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {communityStories
              .filter((story) => !story.featured)
              .map((story) => (
                <div
                  key={story.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="relative h-48 bg-gray-200 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300/20 to-gray-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-center text-gray-500">
                        <svg
                          className="w-12 h-12 mx-auto mb-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <p className="text-xs">{story.category}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-secondary-coral/10 text-secondary-coral px-2 py-1 rounded-full text-xs font-semibold">
                        {story.category}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {story.date}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-primary-navy mb-3 group-hover:text-secondary-coral transition-colors duration-300">
                      {story.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {story.excerpt}
                    </p>

                    <button className="text-secondary-coral font-semibold text-sm hover:text-secondary-coral/80 transition-colors duration-200">
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
          </div>

          {/* View All Stories CTA */}
          <div className="text-center mt-8 sm:mt-12">
            <a
              href="/community/stories"
              className="inline-flex items-center bg-primary-navy text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-primary-navy/90 hover:scale-105 transition-all duration-300 shadow-lg text-sm sm:text-base"
            >
              View All Community Stories
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
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

      {/* Partnerships Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-primary-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block bg-primary-gold/10 text-primary-gold px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              Working Together
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-navy mb-4 sm:mb-6 leading-tight">
              Community <span className="text-primary-gold">Partnerships</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We believe in the power of collaboration. Our partnerships with
              local organizations, businesses, and institutions create lasting
              positive change.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {partnerships.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <div className="text-center text-gray-400">
                    <svg
                      className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
                      />
                    </svg>
                    <p className="text-xs">Logo</p>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-primary-navy mb-2">
                  {partner.name}
                </h3>
                <div className="text-secondary-coral font-semibold text-sm mb-3">
                  {partner.type}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-navy via-primary-navy/95 to-primary-navy/90 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary-gold rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-secondary-coral rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary-teal rounded-full animate-ping"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Get Involved in{" "}
              <span className="text-primary-gold">Your Community</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Whether you're an individual, organization, or business, there are
              many ways to join us in making a positive impact in South West
              Wales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Volunteer Opportunities */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-primary-gold/20 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg
                  className="w-8 h-8 text-primary-gold"
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
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Volunteer With Us
              </h3>
              <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                Join our volunteer program and make a direct impact in your
                community through various initiatives and events.
              </p>
            </div>

            {/* Partnership Opportunities */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-secondary-teal/20 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Partner With Us
              </h3>
              <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                Create meaningful partnerships that benefit your organization
                and strengthen our shared community.
              </p>
            </div>

            {/* Sponsor Events */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-secondary-coral/20 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
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
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Sponsor Events
              </h3>
              <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                Support community events and initiatives that bring people
                together and create lasting positive change.
              </p>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-6 sm:p-8 inline-block border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Ready to Make a Difference?
              </h3>
              <p className="text-white/90 mb-6 sm:mb-8 text-sm sm:text-base">
                Get in touch to learn more about community involvement
                opportunities and how we can work together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-primary-gold text-primary-navy px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-primary-gold/90 hover:scale-105 transition-all duration-300 shadow-lg text-sm sm:text-base"
                >
                  Contact Us
                </a>
                <a
                  href="/careers"
                  className="bg-white/10 text-white border-2 border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-navy transition-all duration-300 text-sm sm:text-base"
                >
                  Join Our Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Pride Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-primary-navy/5 via-primary-navy/10 to-secondary-teal/5 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-4 sm:top-10 right-4 sm:right-10 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-primary-navy/10 rounded-full"></div>
            <div className="absolute bottom-4 sm:bottom-10 left-4 sm:left-10 w-12 sm:w-18 lg:w-24 h-12 sm:h-18 lg:h-24 bg-primary-navy/5 rounded-full"></div>

            <div className="relative">
              <div className="text-4xl sm:text-6xl lg:text-8xl font-serif text-secondary-coral/30 leading-none mb-6 sm:mb-8">
                "
              </div>

              <blockquote className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary-navy leading-relaxed mb-6 sm:mb-8 px-2 sm:px-4">
                We're not just based in Wales - we're proud to be part of the
                fabric of this community. Every day, we see the positive impact
                that comes from caring for our neighbors and supporting local
                initiatives.
              </blockquote>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-secondary-coral to-secondary-teal rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-8 sm:w-10 h-8 sm:h-10 text-white"
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
                <div className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-bold text-primary-navy">
                    Steffan Bowen
                  </div>
                  <div className="text-secondary-coral font-semibold text-base sm:text-lg">
                    Managing Director
                  </div>
                  <div className="text-gray-600 text-sm sm:text-base">
                    M&D Care Ltd
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

export default InTheCommunityPage;
