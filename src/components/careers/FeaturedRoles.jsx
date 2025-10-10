// src/components/careers/FeaturedRoles.jsx
import { rolesData } from "../../data/roles";
import { tone } from "./colorClassnames";
import Icon from "../common/Icon";

export default function FeaturedRoles() {
  // Pick the first 3 roles for the snapshot; change as you like.
  const featured = rolesData.roles.slice(0, 3);

  return (
    <section
      id="current-vacancies"
      className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-primary-navy/10 border border-primary-navy/20 text-primary-navy px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Icon name="briefcase" className="w-4 h-4 mr-2" />
            Current Opportunities
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-navy mb-6 leading-tight">
            Featured <span className="text-secondary-coral">Positions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here's a snapshot of some of our current openings. Check out all
            available positions on our dedicated vacancies page.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-16">
          {featured.map((job, index) => {
            const c = tone(job.color, "secondary-coral");
            const hasOpenPositions = typeof job.openPositions === "number";
            const hasLocations = Boolean(job.locations);

            return (
              <div
                key={job.id}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group hover:-translate-y-1"
              >
                {/* Color accent bar */}
                <div className={`h-1 ${c.bg}`} />

                <div className="p-6">
                  {/* Position badge */}
                  <div className="mb-4">
                    <span
                      className={`${c.bgSoft} ${c.text} px-3 py-1.5 rounded-full text-sm font-semibold border ${c.border || "border-current/20"}`}
                    >
                      {hasOpenPositions
                        ? `${job.openPositions} ${
                            job.openPositions === 1 ? "position" : "positions"
                          } available`
                        : job.level}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-primary-navy group-hover:text-secondary-coral transition-colors duration-300 mb-3">
                    {job.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    {job.description}
                  </p>

                  {/* Location */}
                  {hasLocations && (
                    <div className="flex items-center text-gray-500 mb-6 text-sm">
                      <Icon name="map-pin" className="w-4 h-4 mr-2" />
                      <span>{job.locations}</span>
                    </div>
                  )}

                  {/* CTA Button */}
                  <a
                    href={rolesData.cta.primaryButton.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`block w-full ${c.bg} hover:${c.bgHover || c.bg + "/90"} text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 text-center text-sm`}
                  >
                    Learn More
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 inline-block">
            <h3 className="text-xl font-bold text-primary-navy mb-3">
              Don't See Your Perfect Role?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Explore our complete list of current opportunities
            </p>
            <a
              href={rolesData.cta.primaryButton.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center bg-primary-navy hover:bg-primary-navy/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-sm hover:shadow-md"
            >
              View All Current Vacancies
              <Icon name="arrow-right" className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
