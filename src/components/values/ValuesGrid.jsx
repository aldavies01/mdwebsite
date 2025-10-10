// src/components/values/ValuesGrid.jsx
import PropTypes from "prop-types";
import Icon from "../common/Icon";
import { tone } from "../careers/colorClassnames";

// This grid accepts items in either format:
// - { iconName: "heart", title: "...", color: "secondary-coral" }
// - { icon: <svg .../>, title: "...", color: "secondary-coral" }  (your current data)
function ValueTile({ iconName, icon, title, color }) {
  const c = tone(color, "secondary-coral");

  return (
    <div
      className={`rounded-2xl p-5 sm:p-6 text-center border ${c.bgSoft} ${c.border?.replace("border-", "border-") || "border-transparent"} hover:shadow-lg transition-all duration-300 group`}
    >
      {/* Icon holder */}
      <div
        className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 ${c.bgSoft} rounded-xl mb-3 sm:mb-4 group-hover:scale-105 transition-transform`}
      >
        {iconName ? (
          <Icon name={iconName} className={`w-7 h-7 sm:w-8 sm:h-8 ${c.text}`} />
        ) : (
          // If you're still passing inline SVG in your page array, we render it:
          <div className={`${c.text} w-7 h-7 sm:w-8 sm:h-8`}>{icon}</div>
        )}
      </div>

      <h3 className="font-bold text-primary-navy text-base sm:text-lg">
        {title}
      </h3>
    </div>
  );
}

ValueTile.propTypes = {
  iconName: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

// Section wrapper
export default function ValuesGrid({ values }) {
  return (
    <section className="py-8 sm:py-12 bg-primary-navy text-white/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {values.slice(0, 6).map((v, i) => (
            <ValueTile
              key={v.title + i}
              iconName={v.iconName}
              icon={v.icon}
              title={v.title}
              color={v.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

ValuesGrid.propTypes = {
  values: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.string, // OR pass `icon` as ReactNode
      icon: PropTypes.node,
      title: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};
