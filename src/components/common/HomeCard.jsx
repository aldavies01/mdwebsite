function HomeCard({ home }) {
  const getCQCBadgeColor = (rating) => {
    switch (rating) {
      case "Outstanding":
        return "bg-green-600 text-white";
      case "Good":
        return "bg-blue-600 text-white";
      case "Requires Improvement":
        return "bg-yellow-600 text-white";
      default:
        return "bg-gray-600 text-white";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Image Section */}
      <div className="relative h-48 bg-gray-200">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-coral/20 to-secondary-teal/20 flex items-center justify-center">
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <p className="text-sm">{home.name}</p>
          </div>
        </div>

        {/* CQC Rating Badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${getCQCBadgeColor(
              home.cqcRating
            )}`}
          >
            CQC: {home.cqcRating}
          </span>
        </div>

        {/* Capacity Badge */}
        <div className="absolute top-3 right-3">
          <span className="bg-white/90 text-primary-navy px-3 py-1 rounded-full text-xs font-semibold">
            {home.capacity}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-bold text-primary-navy group-hover:text-secondary-coral transition-colors duration-300">
            {home.name}
          </h3>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
            Est. {home.established}
          </span>
        </div>

        <div className="flex items-center text-gray-500 text-sm mb-4">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {home.address}
        </div>

        <p className="text-gray-600 leading-relaxed mb-4">{home.description}</p>

        {/* Features */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-primary-navy mb-2">
            Key Features:
          </h4>
          <div className="grid grid-cols-2 gap-1">
            {home.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center text-sm text-gray-600"
              >
                <div className="w-1.5 h-1.5 bg-secondary-coral rounded-full mr-2"></div>
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Specialties */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-primary-navy mb-2">
            Specialties:
          </h4>
          <div className="flex flex-wrap gap-2">
            {home.specialties.map((specialty, index) => (
              <span
                key={index}
                className="bg-secondary-coral/10 text-secondary-coral px-2 py-1 rounded text-xs font-medium"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-secondary-coral text-white py-3 px-4 rounded-xl font-semibold hover:bg-secondary-coral/90 transition-all duration-300">
            Learn More
          </button>
          <button className="flex-1 bg-gray-100 text-primary-navy py-3 px-4 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300">
            Contact Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
