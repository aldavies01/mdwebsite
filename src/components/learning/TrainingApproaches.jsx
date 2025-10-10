// src/components/learning/TrainingApproaches.jsx
import { learningDevelopmentData } from "../../data/careers.learningDevelopment";
import { tone } from "../careers/colorClassnames";
import Icon from "../common/Icon";

export default function TrainingApproaches() {
  const { trainingApproaches } = learningDevelopmentData;

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary-gold/10 text-primary-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Icon name="graduation-cap" className="w-4 h-4 mr-2 inline" />
            Training Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-navy mb-6 leading-tight">
            Our Training <span className="text-secondary-coral">Approach</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We deliver training that goes beyond mandatory requirements,
            focusing on individual understanding, reflection, and continuous
            improvement through proven methodologies.
          </p>
        </div>

        {/* Training Approaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {trainingApproaches.map((approach, index) => {
            const c = tone(approach.color, "secondary-coral");
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
                      <Icon
                        name={approach.icon}
                        className="w-8 h-8 text-white"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-primary-navy mb-2 group-hover:text-secondary-coral transition-colors duration-300">
                        {approach.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {approach.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-primary-navy mb-3 uppercase tracking-wider">
                      Key Components
                    </h4>
                    {approach.features.map((feature, featureIndex) => (
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
            Beyond Mandatory Requirements
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our training philosophy emphasizes understanding, reflection, and
            practical application. We don't just teach compliance - we develop
            skilled, confident care professionals.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300">
              <Icon
                name="users"
                className="w-8 h-8 text-primary-gold mx-auto mb-3"
              />
              <div className="text-lg font-bold mb-1">Expert Facilitators</div>
              <div className="text-white/80 text-sm">
                Subject matter experts lead all training
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300">
              <Icon
                name="lightbulb"
                className="w-8 h-8 text-primary-gold mx-auto mb-3"
              />
              <div className="text-lg font-bold mb-1">Practical Focus</div>
              <div className="text-white/80 text-sm">
                Real-world application in every session
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300">
              <Icon
                name="trending-up"
                className="w-8 h-8 text-primary-gold mx-auto mb-3"
              />
              <div className="text-lg font-bold mb-1">Continuous Growth</div>
              <div className="text-white/80 text-sm">
                Ongoing development throughout your career
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
