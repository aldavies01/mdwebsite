import PropTypes from "prop-types";
import Icon from "../common/Icon";
import { ABOUT_CARDS } from "../../data/about.cards.constants";

function Card({ title, description, icon, bgColor, linkText, linkUrl }) {
  return (
    <div
      className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-2xl 
                 transition-all duration-500 hover:-translate-y-2 border border-gray-100"
    >
      {/* Icon pill */}
      <div
        className={`${bgColor} w-14 h-14 sm:w-16 sm:h-16 rounded-2xl 
                    flex items-center justify-center mb-6 shadow-md`}
      >
        <Icon
          name={icon}
          className="w-7 h-7 sm:w-8 sm:h-8 text-primary-gold drop-shadow"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-extrabold text-primary-navy mb-3 leading-snug">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
        {description}
      </p>

      {/* Link */}
      <a
        href={linkUrl}
        className="inline-flex items-center font-semibold text-secondary-coral 
                   hover:text-secondary-coral/80 transition-colors text-sm sm:text-base group"
      >
        {linkText}
        <Icon
          name="arrow-right"
          className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
        />
      </a>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
  bgColor: PropTypes.string,
  linkText: PropTypes.string,
  linkUrl: PropTypes.string,
};

export default function AboutCardsGrid() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section heading */}
        <div className="text-center mb-14 sm:mb-20">
          <div className="inline-block bg-primary-gold/10 text-primary-navy px-4 py-2 rounded-full text-sm font-semibold mb-5">
            Learn More About Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-navy leading-tight">
            Discover More About <br />
            <span className="text-secondary-coral">M&amp;D Care</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore the different aspects that make M&amp;D Care a trusted
            partner in providing exceptional care across Wales.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ABOUT_CARDS.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
