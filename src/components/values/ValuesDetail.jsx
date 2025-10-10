// src/components/values/ValuesDetail.jsx
import PropTypes from "prop-types";
import Icon from "../common/Icon";
import { tone } from "../careers/colorClassnames";

// One card
function ValueCard({ iconName, icon, title, description, example, color }) {
  const c = tone(color, "secondary-coral");

  return (
    <div className="group bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1">
      {/* Header */}
      <div className="relative p-5 sm:p-7 lg:p-8 pb-4 sm:pb-6">
        {/* soft circle accent */}
        <div className="absolute top-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity">
          <div
            className={`w-24 h-24 ${c.bg} rounded-full translate-x-6 -translate-y-6`}
          />
        </div>

        <div className="relative">
          {/* Icon pill */}
          <div
            className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 ${c.bgSoft} rounded-xl sm:rounded-2xl mb-4`}
          >
            {iconName ? (
              <Icon
                name={iconName}
                className={`w-7 h-7 sm:w-8 sm:h-8 ${c.text}`}
              />
            ) : (
              <div className={`${c.text} w-7 h-7 sm:w-8 sm:h-8`}>{icon}</div>
            )}
          </div>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-navy mb-2 group-hover:text-secondary-coral transition-colors">
            {title}
          </h3>

          {/* Decorative line uses tone color */}
          <div className={`w-12 h-1 ${c.bg} rounded-full`} />
        </div>
      </div>

      {/* Body */}
      <div className="px-5 sm:px-7 lg:px-8 pb-5 sm:pb-6 lg:pb-8">
        <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
          {description}
        </p>

        {/* In practice */}
        <div
          className={`relative p-4 sm:p-5 lg:p-6 ${c.bgSoft} rounded-xl sm:rounded-2xl border-l-4 ${c.border}`}
        >
          <div className="flex items-start gap-3">
            <div
              className={`flex-shrink-0 w-8 h-8 ${c.bgSoft} rounded-lg flex items-center justify-center mt-0.5`}
            >
              <Icon name="check-circle" className={`${c.text} w-4 h-4`} />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-primary-navy mb-1 sm:mb-2 text-sm sm:text-base">
                In Practice:
              </h4>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {example}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className={`${c.bg} h-1 opacity-40`} />
    </div>
  );
}

ValueCard.propTypes = {
  iconName: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  example: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

// Section wrapper
export default function ValuesDetail({ values }) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-secondary-light-blue/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-primary-navy/10 text-primary-navy px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4">
            <Icon name="heart" className="w-4 h-4" />
            Our Core Values
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-navy mb-4 leading-tight">
            Values in <br />
            <span className="text-secondary-coral">Action</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each value represents a commitment to the people we support and
            reflects how we approach every aspect of our work at M&amp;D Care.
          </p>
        </div>

        {/* Grid */}
        <div className="space-y-6 sm:space-y-8 lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-12 lg:space-y-0">
          {values.map((v, i) => (
            <ValueCard key={v.title + i} {...v} />
          ))}
        </div>
      </div>
    </section>
  );
}

ValuesDetail.propTypes = {
  values: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.string, // or pass `icon`
      icon: PropTypes.node,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      example: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};
