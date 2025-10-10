import { useState, useEffect } from "react";
import { client } from "../../../src/contentfulClient";

function CompanyNews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newsItems, setNewsItems] = useState([]);

  // Fetch articles from Contentful
  useEffect(() => {
    console.log("Fetching news from Contentful...");
    client
      .getEntries({
        content_type: "mdCareNews",
        order: "-fields.publishedDate",
        limit: 6,
      })
      .then((response) => {
        console.log("Contentful response:", response);
        const mappedArticles = response.items.map((item) => ({
          id: item.sys.id,
          date: new Date(item.fields.publishedDate).toLocaleDateString(
            "en-GB",
            {
              day: "numeric",
              month: "long",
              year: "numeric",
            }
          ),
          category: item.fields.category || "General",
          title: item.fields.title,
          excerpt: item.fields.excerpt,
          image: item.fields.coverImage?.fields?.file?.url,
          link: `/news/${item.fields.slug}`,
        }));
        setNewsItems(mappedArticles);
      })
      .catch(console.error);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (newsItems.length > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % newsItems.length);
      }, 6000);
      return () => clearInterval(timer);
    }
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
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block bg-secondary-coral/10 text-secondary-coral px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            Latest Updates
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-navy mb-4 sm:mb-6 leading-tight">
            Company <br />
            <span className="text-secondary-coral">News</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Stay up to date with the latest developments, achievements, and
            stories from across M&D Care
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* News Cards Container */}
          <div className="overflow-hidden rounded-xl sm:rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {newsItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="flex flex-col lg:grid lg:grid-cols-2 gap-0 lg:gap-8 bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden">
                    {/* Image Section */}
                    <div className="relative h-48 sm:h-56 lg:h-auto bg-gray-200 order-1 lg:order-none">
                      {item.image ? (
                        <img
                          // src={`${item.image}?w=800&h=600&fit=pad&bg=rgb:ffffff`}
                          // alt={item.title}
                          // className="absolute inset-0 w-full h-full object-contain"
                          src={`${item.image}?w=800&h=600&fit=fill`}
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/20 to-secondary-teal/20 flex items-center justify-center">
                          <p className="text-xs sm:text-sm">No Image</p>
                        </div>
                      )}
                      {/* Category Badge */}
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                        <span
                          className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${getCategoryColor(
                            item.category
                          )}`}
                        >
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-none">
                      <div className="text-xs sm:text-sm text-gray-500 font-medium mb-2">
                        {item.date}
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-navy mb-3 sm:mb-4 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">
                        {item.excerpt}
                      </p>
                      <a
                        href={item.link}
                        className="inline-flex items-center text-primary-navy font-semibold hover:text-primary-gold transition-colors duration-200 group text-sm sm:text-base"
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
          <div className="mt-6 sm:mt-8">
            {/* Mobile */}
            <div className="block sm:hidden">
              <div className="flex justify-center gap-2 mb-4">
                {newsItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary-navy scale-125"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <button
                    onClick={prevSlide}
                    className="bg-white border-2 border-gray-200 hover:border-primary-navy text-primary-navy p-2 rounded-lg hover:bg-primary-navy hover:text-white transition-all duration-300 shadow-md"
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
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    className="bg-white border-2 border-gray-200 hover:border-primary-navy text-primary-navy p-2 rounded-lg hover:bg-primary-navy hover:text-white transition-all duration-300 shadow-md"
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
                <a
                  href="/news"
                  className="bg-primary-navy text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-navy/90 transition-all duration-300 shadow-md"
                >
                  View All
                </a>
              </div>
            </div>

            {/* Desktop */}
            <div className="hidden sm:flex items-center justify-between">
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
              <a
                href="/news"
                className="bg-primary-navy text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-navy/90 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                View All News
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyNews;
