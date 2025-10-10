// src/components/quality/QualityStandards.jsx
import { qualityData } from "../../data/quality.details";
import { tone } from "../careers/colorClassnames";
import Icon from "../common/Icon";

export default function QualityStandards() {
  const { standards } = qualityData;

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary-gold/10 text-primary-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Icon name="award" className="w-4 h-4 mr-2 inline" />
            Regulatory Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-navy mb-6 leading-tight">
            Meeting and Exceeding{" "}
            <span className="text-secondary-coral">Quality Standards</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We comply with all relevant regulatory frameworks and continuously
            exceed minimum requirements to deliver exceptional care quality.
          </p>
        </div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {standards.map((standard, index) => {
            const c = tone(standard.color, "secondary-coral");
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`w-16 h-16 ${c.bgSoft} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:${c.bg} transition-all duration-300`}
                  >
                    <Icon
                      name={standard.icon}
                      className={`w-8 h-8 ${c.text} group-hover:text-white transition-colors duration-300`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary-navy mb-3 group-hover:text-secondary-coral transition-colors duration-300">
                      {standard.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {standard.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compliance Highlight Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 border border-gray-100 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary-coral/10 to-secondary-teal/10 rounded-full transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary-gold/10 to-secondary-purple/10 rounded-full transform -translate-x-12 translate-y-12"></div>

          <div className="relative text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-secondary-coral to-secondary-teal rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="shield-check" className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-navy mb-4">
              Proven Track Record of Excellence
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto text-lg">
              Our consistent high ratings and regulatory compliance demonstrate
              our unwavering commitment to quality care delivery.
            </p>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-secondary-coral mb-2">
                Outstanding
              </div>
              <div className="text-gray-600 font-medium mb-1">CIW Rating</div>
              <div className="text-gray-500 text-sm">
                Across all inspected services
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-secondary-teal mb-2">
                100%
              </div>
              <div className="text-gray-600 font-medium mb-1">
                Compliance Rate
              </div>
              <div className="text-gray-500 text-sm">
                All regulatory requirements met
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary-gold mb-2">
                15+
              </div>
              <div className="text-gray-600 font-medium mb-1">
                Years Experience
              </div>
              <div className="text-gray-500 text-sm">
                Consistently high standards
              </div>
            </div>
          </div>
        </div>

        {/* Quality Commitments */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-secondary-coral/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon
                name="check-circle"
                className="w-6 h-6 text-secondary-coral"
              />
            </div>
            <h4 className="text-lg font-bold text-primary-navy mb-2">Safe</h4>
            <p className="text-gray-600 text-sm">
              Protected from avoidable harm and abuse
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-secondary-teal/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon
                name="trending-up"
                className="w-6 h-6 text-secondary-teal"
              />
            </div>
            <h4 className="text-lg font-bold text-primary-navy mb-2">
              Effective
            </h4>
            <p className="text-gray-600 text-sm">
              Achieving good outcomes and experiences
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-secondary-purple/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="heart" className="w-6 h-6 text-secondary-purple" />
            </div>
            <h4 className="text-lg font-bold text-primary-navy mb-2">Caring</h4>
            <p className="text-gray-600 text-sm">
              Compassionate, dignified, and respectful
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-primary-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="users" className="w-6 h-6 text-primary-gold" />
            </div>
            <h4 className="text-lg font-bold text-primary-navy mb-2">
              Responsive
            </h4>
            <p className="text-gray-600 text-sm">
              Meeting individual needs and preferences
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
