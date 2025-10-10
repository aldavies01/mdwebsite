// src/components/quality/QualityFramework.jsx
import { qualityData } from "../../data/quality.details";
import { tone } from "../careers/colorClassnames";
import Icon from "../common/Icon";

export default function QualityFramework() {
  const { framework } = qualityData;

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-secondary-coral/10 text-secondary-coral px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Icon name="shield-check" className="w-4 h-4 mr-2 inline" />
            Quality Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-navy mb-6 leading-tight">
            {framework.title.split(" ").slice(0, 2).join(" ")}{" "}
            <span className="text-secondary-coral">
              {framework.title.split(" ").slice(2).join(" ")}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {framework.subtitle}
          </p>
        </div>

        {/* Framework Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {framework.pillars.map((pillar, index) => {
            const c = tone(pillar.color, "secondary-coral");
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
              >
                {/* Header with icon and color accent */}
                <div className={`${c.bgSoft} p-6 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full transform translate-x-8 -translate-y-8"></div>
                  <div className="relative flex items-center gap-4">
                    <div
                      className={`w-16 h-16 ${c.bg} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                    >
                      <Icon name={pillar.icon} className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-primary-navy mb-2 group-hover:text-secondary-coral transition-colors duration-300">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-primary-navy mb-3 uppercase tracking-wider">
                      Key Elements
                    </h4>
                    {pillar.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3"
                      >
                        <div
                          className={`w-2 h-2 ${c.bg} rounded-full flex-shrink-0 mt-2`}
                        ></div>
                        <span className="text-gray-600 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom accent */}
                <div className={`h-1 ${c.bg}`}></div>
              </div>
            );
          })}
        </div>

        {/* Summary Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-navy to-primary-navy/95 rounded-2xl p-8 sm:p-12 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">
            Quality That Makes a Difference
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive quality framework ensures that every aspect of our
            care delivery meets the highest standards while remaining flexible
            and responsive to individual needs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300">
              <Icon
                name="users"
                className="w-8 h-8 text-primary-gold mx-auto mb-3"
              />
              <div className="text-lg font-bold mb-1">Individual Focus</div>
              <div className="text-white/80 text-sm">
                Every person receives personalized care
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300">
              <Icon
                name="shield-check"
                className="w-8 h-8 text-primary-gold mx-auto mb-3"
              />
              <div className="text-lg font-bold mb-1">Safety Assured</div>
              <div className="text-white/80 text-sm">
                Comprehensive protection and security
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300">
              <Icon
                name="trending-up"
                className="w-8 h-8 text-primary-gold mx-auto mb-3"
              />
              <div className="text-lg font-bold mb-1">Always Improving</div>
              <div className="text-white/80 text-sm">
                Continuous enhancement and growth
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
