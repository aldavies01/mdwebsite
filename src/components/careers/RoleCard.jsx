// components/careers/roles/RoleCard.jsx
function RoleCard({ role, ctaData }) {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
      {/* Color accent bar */}
      <div className={`h-2 bg-${role.color}`}></div>

      <div className="p-4 sm:p-6 lg:p-8">
        {/* Role Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-navy">
              {role.title}
            </h3>
            <div
              className={`bg-${role.color}/20 text-${role.color} px-3 py-1 rounded-full text-xs sm:text-sm font-semibold self-start`}
            >
              {role.level}
            </div>
          </div>

          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
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
            <span className="text-sm sm:text-base">
              {role.workPatterns.join(", ")} opportunities available
            </span>
          </div>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            {role.fullDescription}
          </p>
        </div>

        {/* Role Details Grid - Mobile First Approach */}
        <div className="space-y-6 sm:space-y-8 mb-6 sm:mb-8">
          {/* Mobile: Stack vertically, Desktop: Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Key Responsibilities */}
            <div className="order-1">
              <h4 className="font-bold text-primary-navy mb-3 sm:mb-4 flex items-center text-sm sm:text-base">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                Key Responsibilities
              </h4>
              <ul className="space-y-2">
                {role.keyResponsibilities.map((responsibility, index) => (
                  <li
                    key={index}
                    className="flex items-start text-xs sm:text-sm text-gray-600"
                  >
                    <div
                      className={`w-1.5 h-1.5 bg-${role.color} rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0`}
                    ></div>
                    <span className="leading-relaxed">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="order-2">
              <h4 className="font-bold text-primary-navy mb-3 sm:mb-4 flex items-center text-sm sm:text-base">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0"
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
                Requirements
              </h4>
              <ul className="space-y-2">
                {role.requirements.map((requirement, index) => (
                  <li
                    key={index}
                    className="flex items-start text-xs sm:text-sm text-gray-600"
                  >
                    <div
                      className={`w-1.5 h-1.5 bg-${role.color} rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0`}
                    ></div>
                    <span className="leading-relaxed">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="order-3">
              <h4 className="font-bold text-primary-navy mb-3 sm:mb-4 flex items-center text-sm sm:text-base">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0"
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
                What We Offer
              </h4>
              <ul className="space-y-2">
                {role.benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start text-xs sm:text-sm text-gray-600"
                  >
                    <div
                      className={`w-1.5 h-1.5 bg-${role.color} rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0`}
                    ></div>
                    <span className="leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career Progression */}
            <div className="order-4 sm:col-span-2 lg:col-span-1">
              <h4 className="font-bold text-primary-navy mb-3 sm:mb-4 flex items-center text-sm sm:text-base">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0"
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
                Career Progression
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {role.careerProgression}
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        {role.testimonial && (
          <div
            className={`bg-${role.color}/5 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-6 sm:mb-8`}
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-0">
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 bg-${role.color}/20 rounded-full flex items-center justify-center sm:mr-4 flex-shrink-0 self-start`}
              >
                <svg
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-${role.color}`}
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
              <div className="flex-1">
                <blockquote className="text-sm sm:text-base text-gray-700 italic mb-3 leading-relaxed">
                  "{role.testimonial.quote}"
                </blockquote>
                <div className="text-xs sm:text-sm">
                  <div className="font-semibold text-primary-navy">
                    {role.testimonial.author}
                  </div>
                  <div className={`text-${role.color}`}>
                    {role.testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Apply Button - Mobile Optimized */}
        <div className="text-center">
          <a
            href={ctaData.primaryButton.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center bg-${role.color} text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg w-full sm:w-auto min-h-[48px] touch-manipulation`}
          >
            <span className="mr-2">Apply for {role.title} Positions</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default RoleCard;
