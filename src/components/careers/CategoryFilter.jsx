// components/careers/roles/CategoryFilter.jsx
function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  const renderIcon = (iconName, isSelected, color) => {
    const iconClass = `w-5 h-5 sm:w-6 sm:h-6 ${
      isSelected ? `text-${color}` : `text-gray-600 group-hover:text-${color}`
    }`;

    const icons = {
      heart: (
        <svg
          className={iconClass}
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
      users: (
        <svg
          className={iconClass}
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
      star: (
        <svg
          className={iconClass}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
      briefcase: (
        <svg
          className={iconClass}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
          />
        </svg>
      ),
    };

    return icons[iconName] || icons.heart;
  };

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block bg-secondary-coral/10 text-secondary-coral px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            Choose Your Path
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-navy mb-4 sm:mb-6 leading-tight">
            Explore Career <br />
            <span className="text-secondary-coral">Opportunities</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            From hands-on care to leadership roles, find the career path that
            matches your passion and ambition.
          </p>
        </div>

        {/* Category Cards - Mobile First Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* "All" category - Mobile Optimized */}
          <button
            onClick={() => onCategoryChange("all")}
            className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 text-left group touch-manipulation min-h-[120px] sm:min-h-[140px] ${
              selectedCategory === "all"
                ? "border-primary-gold bg-primary-gold/10 shadow-lg"
                : "border-gray-200 hover:border-primary-gold/50 hover:shadow-md active:scale-95"
            }`}
          >
            <div
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl mb-3 sm:mb-4 flex items-center justify-center ${
                selectedCategory === "all"
                  ? "bg-primary-gold/20"
                  : "bg-gray-100 group-hover:bg-primary-gold/10"
              }`}
            >
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 ${selectedCategory === "all" ? "text-primary-gold" : "text-gray-600 group-hover:text-primary-gold"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14-7l2 2 2-2M6 7l2-2-2-2"
                />
              </svg>
            </div>
            <h3
              className={`text-sm sm:text-lg font-bold mb-1 sm:mb-2 leading-tight ${
                selectedCategory === "all"
                  ? "text-primary-gold"
                  : "text-primary-navy group-hover:text-primary-gold"
              }`}
            >
              All Roles
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              View all available career opportunities
            </p>
          </button>

          {/* Category cards from data - Mobile Optimized */}
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 text-left group touch-manipulation min-h-[120px] sm:min-h-[140px] ${
                selectedCategory === category.id
                  ? `border-${category.color} bg-${category.color}/10 shadow-lg`
                  : "border-gray-200 hover:border-gray-300 hover:shadow-md active:scale-95"
              }`}
            >
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl mb-3 sm:mb-4 flex items-center justify-center ${
                  selectedCategory === category.id
                    ? `bg-${category.color}/20`
                    : `bg-gray-100 group-hover:bg-${category.color}/10`
                }`}
              >
                {renderIcon(
                  category.icon,
                  selectedCategory === category.id,
                  category.color
                )}
              </div>

              <h3
                className={`text-sm sm:text-lg font-bold mb-1 sm:mb-2 leading-tight ${
                  selectedCategory === category.id
                    ? `text-${category.color}`
                    : `text-primary-navy group-hover:text-${category.color}`
                }`}
              >
                {category.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {category.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryFilter;
