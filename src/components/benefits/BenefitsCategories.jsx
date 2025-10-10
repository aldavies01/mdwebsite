// src/components/benefits/BenefitsCategories.jsx
import { useState } from "react";
import { benefitsData } from "../../data/careers.benefits";
import Icon from "../common/Icon";
import { tone } from "../careers/colorClassnames";

function BenefitCard({ benefit, color }) {
  const c = tone(color, "primary-gold");

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-300">
      <div
        className={`w-10 h-10 ${c.bgSoft} rounded-lg flex items-center justify-center mb-3`}
      >
        <Icon name={benefit.icon} className={`w-5 h-5 ${c.text}`} />
      </div>
      <h4 className="text-base font-semibold text-primary-navy mb-2">
        {benefit.title}
      </h4>
      <p className="text-sm text-gray-600 leading-relaxed">
        {benefit.description}
      </p>
    </div>
  );
}

function CategoryCard({ category, isActive, onClick }) {
  const c = tone(category.color, "primary-gold");

  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 ${
        isActive
          ? `${c.border} ${c.bgSoft} shadow-lg`
          : "border-gray-200 hover:border-gray-300 hover:shadow-md"
      }`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 ${isActive ? c.bg : "bg-gray-100"} rounded-lg flex items-center justify-center`}
        >
          <Icon
            name={category.icon}
            className={`w-6 h-6 ${isActive ? "text-white" : "text-gray-600"}`}
          />
        </div>
        <div className="flex-1">
          <h3
            className={`text-lg font-bold mb-1 ${isActive ? c.text : "text-primary-navy"}`}
          >
            {category.name}
          </h3>
          <p className="text-sm text-gray-600">{category.description}</p>
        </div>
        <div
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
            isActive ? `${c.border} ${c.bg}` : "border-gray-300"
          }`}
        >
          {isActive && <div className="w-2 h-2 bg-white rounded-full" />}
        </div>
      </div>
    </button>
  );
}

export default function BenefitsCategories() {
  const [activeCategory, setActiveCategory] = useState(
    benefitsData.categories[0].id
  );
  const activeCategoryData = benefitsData.categories.find(
    (cat) => cat.id === activeCategory
  );

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary-navy/10 text-primary-navy px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Icon name="briefcase" className="w-4 h-4 mr-2 inline" />
            Complete Benefits Package
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-navy mb-6 leading-tight">
            Everything You Need to{" "}
            <span className="text-secondary-coral">Thrive</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive benefits across five key areas designed to
            support every aspect of your life and career.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Category Selector */}
          <div className="space-y-4">
            {benefitsData.categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                isActive={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              />
            ))}
          </div>

          {/* Right: Benefits Detail */}
          <div>
            {activeCategoryData && (
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-16 h-16 bg-${activeCategoryData.color} rounded-xl flex items-center justify-center`}
                  >
                    <Icon
                      name={activeCategoryData.icon}
                      className="w-8 h-8 text-white"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary-navy mb-2">
                      {activeCategoryData.name}
                    </h3>
                    <p className="text-gray-600">
                      {activeCategoryData.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeCategoryData.benefits.map((benefit, index) => (
                    <BenefitCard
                      key={index}
                      benefit={benefit}
                      color={activeCategoryData.color}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 sm:p-10 inline-block max-w-lg mx-auto relative overflow-hidden">
            <div className="absolute top-4 right-4 w-8 h-8 bg-primary-gold/10 rounded-full"></div>
            <div className="absolute bottom-6 left-6 w-6 h-6 bg-secondary-coral/10 rounded-full"></div>

            <div className="w-16 h-16 bg-secondary-coral/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Icon name="users" className="w-8 h-8 text-secondary-coral" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-primary-navy mb-4 leading-tight">
              Want to Learn More?
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our HR team is happy to discuss any of these benefits in detail.
              No question is too small!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/careers"
                className="bg-primary-navy hover:bg-primary-navy/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-sm hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Icon name="briefcase" className="w-4 h-4" />
                View Vacancies
              </a>
              <a
                href="mailto:careers@mdcare.co.uk"
                className="bg-white border-2 border-secondary-coral/20 hover:border-secondary-coral hover:bg-secondary-coral/5 text-primary-navy px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-sm hover:scale-105 flex items-center justify-center gap-2"
              >
                <Icon name="mail" className="w-4 h-4" />
                Ask Questions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
