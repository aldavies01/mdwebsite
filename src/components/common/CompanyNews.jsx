import { useState, useEffect } from "react";

function CompanyNews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample news data - replace with real news
  const newsItems = [
    {
      id: 1,
      date: "March 15, 2024",
      category: "Award",
      title: "M&D Care Receives Outstanding CQC Rating",
      excerpt:
        "We're thrilled to announce our latest Care Quality Commission inspection resulted in an Outstanding rating across all areas...",
      image: "/images/news/cqc-award.jpg", // Replace with actual image
      link: "/news/cqc-outstanding-rating",
    },
    {
      id: 2,
      date: "February 28, 2024",
      category: "Community",
      title: "New Partnership with Local College",
      excerpt:
        "M&D Care has formed an exciting new partnership with Cardiff College to provide training opportunities for aspiring care professionals...",
      image: "/images/news/college-partnership.jpg",
      link: "/news/college-partnership",
    },
    {
      id: 3,
      date: "February 10, 2024",
      category: "Expansion",
      title: "Opening of New Specialist Care Facility",
      excerpt:
        "Our newest specialist care facility in Newport opened its doors this month, providing enhanced support for individuals with complex needs...",
      image: "/images/news/new-facility.jpg",
      link: "/news/newport-facility-opening",
    },
    {
      id: 4,
      date: "January 22, 2024",
      category: "Team",
      title: "Employee of the Year Awards 2024",
      excerpt:
        "Celebrating the outstanding dedication and compassion of our team members at our annual Employee of the Year ceremony...",
      image: "/images/news/employee-awards.jpg",
      link: "/news/employee-awards-2024",
    },
    {
      id: 5,
      date: "January 8, 2024",
      category: "Innovation",
      title: "Implementing New Assistive Technology",
      excerpt:
        "M&D Care continues to innovate with the introduction of cutting-edge assistive technology across all our services...",
      image: "/images/news/assistive-tech.jpg",
      link: "/news/assistive-technology-rollout",
    },
    {
      id: 6,
      date: "December 15, 2023",
      category: "Community",
      title: "Christmas Community Outreach Program",
      excerpt:
        "Our annual Christmas outreach program brought joy to local communities with festive activities and support initiatives...",
      image: "/images/news/christmas-outreach.jpg",
      link: "/news/christmas-outreach-2023",
    },
  ];

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [newsItems.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % newsItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case "award":
        return "bg-primary-gold text-primary-navy";
      case "community":
        return "bg-secondary-coral text-white";
      case "expansion":
        return "bg-secondary-teal text-white";
      case "team":
        return "bg-secondary-purple text-white";
      case "innovation":
        return "bg-primary-navy text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-secondary-coral/10 text-secondary-coral px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Latest Updates
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-navy mb-6 leading-tight">
            Company <br />
            <span className="text-secondary-coral">News</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay up to date with the latest developments, achievements, and
            stories from across M&D Care
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* News Cards Container */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {newsItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-2 gap-8 bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Image Section */}
                    <div className="relative h-64 lg:h-auto bg-gray-200">
                      {/* Placeholder for news image */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/20 to-secondary-teal/20 flex items-center justify-center">
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
                          <p className="text-sm">News Image</p>
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${getCategoryColor(
                            item.category
                          )}`}
                        >
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="text-sm text-gray-500 font-medium mb-2">
                        {item.date}
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold text-primary-navy mb-4 leading-tight">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                        {item.excerpt}
                      </p>

                      <a
                        href={item.link}
                        className="inline-flex items-center text-primary-navy font-semibold hover:text-primary-gold transition-colors duration-200 group"
                      >
                        Read Full Story
                        <svg
                          className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
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
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Navigation Arrows */}
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="bg-white border-2 border-gray-200 hover:border-primary-navy text-primary-navy p-3 rounded-xl hover:bg-primary-navy hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="bg-white border-2 border-gray-200 hover:border-primary-navy text-primary-navy p-3 rounded-xl hover:bg-primary-navy hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {newsItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary-navy scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            {/* View All News Button */}
            <a
              href="/news"
              className="bg-primary-navy text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-navy/90 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              View All News
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyNews;
