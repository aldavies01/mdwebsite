// src/components/careers/BenefitsGrid.jsx
import PropTypes from "prop-types";
import { rolesData } from "../../data/roles";
import Icon from "../common/Icon";
import { tone, toneToClasses } from "./colorClassnames";

// Fallback if rolesData.benefits isn't defined yet
const FALLBACK_BENEFITS = [
  {
    icon: "money",
    title: "Competitive Salary",
    description:
      "Fair compensation packages that reward your skills and experience",
    color: "primary-gold",
  },
  {
    icon: "lightbulb",
    title: "Training & Development",
    description:
      "Comprehensive training programs and career progression opportunities",
    color: "secondary-teal",
  },
  {
    icon: "heart",
    title: "Meaningful Work",
    description: "Make a real difference in people's lives every single day",
    color: "secondary-coral",
  },
  {
    icon: "users",
    title: "Supportive Team",
    description:
      "Work alongside passionate colleagues who care about each other",
    color: "secondary-purple",
  },
  {
    icon: "clock",
    title: "Work-Life Balance",
    description:
      "Flexible working arrangements and genuine respect for your personal time",
    color: "secondary-light-blue",
  },
  {
    icon: "trending-up",
    title: "Career Growth",
    description:
      "Clear progression pathways and opportunities to advance your career",
    color: "primary-navy",
  },
];

function BenefitCard({ icon, title, description, color }) {
  const c = tone(color, "primary-gold"); // safe default
  return (
    <div
      className={`bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 ${c.border}`}
    >
      <div
        className={`w-12 h-12 sm:w-16 sm:h-16 ${c.bgSoft} rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 transition`}
      >
        <Icon name={icon} className={`w-6 h-6 sm:w-8 sm:h-8 ${c.text}`} />
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-primary-navy mb-2 sm:mb-3">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
        {description}
      </p>
    </div>
  );
}
BenefitCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
};

export default function BenefitsGrid() {
  // Prefer rolesData.benefits if you decide to add it to data/roles.js later
  const benefits = rolesData.benefits?.length
    ? rolesData.benefits
    : FALLBACK_BENEFITS;

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-secondary-coral/10 text-secondary-coral px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            Why Choose M&amp;D Care
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-navy mb-4 sm:mb-6 leading-tight">
            More Than Just <br />
            <span className="text-secondary-coral">A Job</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We believe in investing in our people. Here&apos;s what makes
            M&amp;D Care a great place to build your career.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {benefits.map((b, i) => (
            <BenefitCard key={i} {...b} />
          ))}
        </div>
      </div>
    </section>
  );
}
