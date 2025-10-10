// components/careers/roles/RoleDisplay.jsx
import RoleCard from "./RoleCard.jsx";

function RoleDisplay({ roles, categories, selectedCategory, ctaData }) {
  // Filter roles based on selected category
  const filteredRoles =
    selectedCategory === "all"
      ? roles
      : roles.filter((role) => role.category === selectedCategory);

  // Get category info for header
  const selectedCategoryData = categories.find(
    (cat) => cat.id === selectedCategory
  );

  return (
    <section
      id="roles"
      className="py-16 bg-gradient-to-br from-gray-50 to-secondary-light-blue/20"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-navy mb-4">
            {selectedCategory === "all"
              ? "All Available Roles"
              : selectedCategoryData?.name || "Roles"}
          </h2>
          <p className="text-lg text-gray-600">
            {selectedCategory === "all"
              ? "Explore all the opportunities we have available"
              : selectedCategoryData?.description || ""}
          </p>
        </div>

        {/* Show number of roles */}
        <div className="text-center mb-8">
          <span className="text-primary-navy font-semibold">
            {filteredRoles.length}{" "}
            {filteredRoles.length === 1 ? "role" : "roles"} available
          </span>
        </div>

        {/* Roles Display */}
        {filteredRoles.length > 0 ? (
          <div className="space-y-12">
            {filteredRoles.map((role) => (
              <RoleCard key={role.id} role={role} ctaData={ctaData} />
            ))}
          </div>
        ) : (
          // No roles found
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <svg
                className="w-16 h-16 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No roles found in this category
            </h3>
            <p className="text-gray-500">
              Try selecting a different category or check back soon for new
              opportunities.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default RoleDisplay;
