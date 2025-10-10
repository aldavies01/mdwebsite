// components/PBS/PBSAdvantagesSection.jsx
import { advantages } from "../../data/pbs.details";

function PBSAdvantagesSection() {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-navy mb-6">
            The <span className="text-secondary-coral">Benefits</span> of PBS
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Our PBS approach creates positive outcomes for everyone - the people
            we support, their families, and our dedicated staff.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">{advantage.icon}</div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-primary-navy mb-4">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Outcome Highlight */}
        <div className="mt-12 bg-gradient-to-r from-secondary-coral to-secondary-purple rounded-2xl p-8 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Most Importantly
            </h3>
            <p className="text-lg sm:text-xl opacity-90 leading-relaxed">
              Through PBS, the people we support live more fulfilled, meaningful
              lives with greater independence, choice, and dignity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PBSAdvantagesSection;
