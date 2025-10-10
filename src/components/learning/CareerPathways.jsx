// src/components/learning/CareerPathways.jsx
import { useState } from "react";
import { learningDevelopmentData } from "../../data/careers.learningDevelopment";
import { tone } from "../careers/colorClassnames";
import Icon from "../common/Icon";

export default function CareerPathways() {
  const [activePathway, setActivePathway] = useState(0);
  const { careerPathways } = learningDevelopmentData;

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-secondary-teal/10 text-secondary-teal px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Icon name="trending-up" className="w-4 h-4 mr-2 inline" />
            Career Growth
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-navy mb-6 leading-tight">
            Career{" "}
            <span className="text-secondary-coral">Progression Pathways</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're proud of our progressive training management. Where talent is
            recognized, we provide clear opportunities for advancement through
            tailored development programs.
          </p>
        </div>

        {/* Desktop Career Path */}
        <div className="hidden lg:block mb-16">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-10 left-12 right-12 h-1 bg-gray-200 rounded-full z-0"></div>
            <div
              className="absolute top-10 left-12 h-1 bg-gradient-to-r from-secondary-coral to-secondary-teal rounded-full transition-all duration-500 z-10"
              style={{
                width: `calc(${((activePathway + 1) / careerPathways.length) * 100}% - 6rem)`,
              }}
            ></div>

            {/* Pathway Buttons */}
            <div className="grid grid-cols-4 gap-6 mb-12 relative z-20 mt-16">
              {careerPathways.map((pathway, index) => {
                const c = tone(pathway.color, "secondary-coral");
                const isActive = activePathway === index;
                return (
                  <div key={index} className="text-center">
                    <button
                      className={`w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-4 cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg ${
                        isActive
                          ? `${c.bg} scale-105 ring-2 ring-${pathway.color}/30`
                          : "bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setActivePathway(index)}
                    >
                      <Icon
                        name={pathway.icon}
                        className={`w-8 h-8 transition-colors duration-300 ${
                          isActive ? "text-white" : "text-gray-600"
                        }`}
                      />
                    </button>
                    <h3
                      className={`text-lg font-bold mb-1 transition-colors duration-300 ${
                        isActive ? "text-secondary-coral" : "text-primary-navy"
                      }`}
                    >
                      {pathway.title}
                    </h3>
                    <p
                      className={`text-sm ${
                        isActive ? "text-secondary-coral/80" : "text-gray-500"
                      }`}
                    >
                      {pathway.level}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Active Pathway Details */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              {careerPathways.map(
                (pathway, index) =>
                  activePathway === index && (
                    <div key={index} className="p-8">
                      {/* Header Section */}
                      <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                        <div
                          className={`w-16 h-16 ${tone(pathway.color, "secondary-coral").bg} rounded-xl flex items-center justify-center shadow-md`}
                        >
                          <Icon
                            name={pathway.icon}
                            className="w-8 h-8 text-white"
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-primary-navy mb-1">
                            {pathway.title}
                          </h3>
                          <p className="text-secondary-coral font-semibold">
                            {pathway.level}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                        {pathway.description}
                      </p>

                      {/* Content Grid */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-gray-50 rounded-xl p-6">
                          <h4 className="text-lg font-bold text-primary-navy mb-4 flex items-center gap-2">
                            <div className="w-6 h-6 bg-secondary-coral rounded-lg flex items-center justify-center">
                              <Icon
                                name="check-circle"
                                className="w-4 h-4 text-white"
                              />
                            </div>
                            Requirements & Training
                          </h4>
                          <div className="space-y-3">
                            {pathway.requirements.map((req, reqIndex) => (
                              <div
                                key={reqIndex}
                                className="flex items-start gap-3 bg-white rounded-lg p-3 shadow-sm"
                              >
                                <div className="w-2 h-2 bg-secondary-coral rounded-full flex-shrink-0 mt-2"></div>
                                <span className="text-gray-700 leading-relaxed text-sm">
                                  {req}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6">
                          <h4 className="text-lg font-bold text-primary-navy mb-4 flex items-center gap-2">
                            <div className="w-6 h-6 bg-secondary-teal rounded-lg flex items-center justify-center">
                              <Icon
                                name="arrow-up"
                                className="w-4 h-4 text-white"
                              />
                            </div>
                            Next Career Steps
                          </h4>
                          <div className="space-y-3">
                            {pathway.nextSteps.map((step, stepIndex) => (
                              <div
                                key={stepIndex}
                                className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm"
                              >
                                <div className="w-2 h-2 bg-secondary-teal rounded-full flex-shrink-0"></div>
                                <span className="text-gray-700 font-medium text-sm">
                                  {step}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>

        {/* Mobile Career Path */}
        <div className="lg:hidden space-y-6 mb-16">
          {careerPathways.map((pathway, index) => {
            const c = tone(pathway.color, "secondary-coral");
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              >
                <div className={`${c.bg} p-5`}>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon
                        name={pathway.icon}
                        className="w-7 h-7 text-white"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">
                        {pathway.title}
                      </h3>
                      <p className="text-white/90 text-sm">{pathway.level}</p>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-gray-600 mb-5 leading-relaxed">
                    {pathway.description}
                  </p>

                  <div className="space-y-5">
                    <div>
                      <h4 className="text-base font-bold text-primary-navy mb-3">
                        Requirements
                      </h4>
                      <div className="space-y-2">
                        {pathway.requirements.map((req, reqIndex) => (
                          <div
                            key={reqIndex}
                            className="flex items-start gap-3 bg-gray-50 rounded-lg p-3"
                          >
                            <div className="w-2 h-2 bg-secondary-coral rounded-full flex-shrink-0 mt-1.5"></div>
                            <span className="text-gray-600 leading-relaxed text-sm">
                              {req}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-primary-navy mb-3">
                        Next Steps
                      </h4>
                      <div className="space-y-2">
                        {pathway.nextSteps.map((step, stepIndex) => (
                          <div
                            key={stepIndex}
                            className="flex items-center gap-3 bg-gray-50 rounded-lg p-3"
                          >
                            <div className="w-2 h-2 bg-secondary-teal rounded-full flex-shrink-0"></div>
                            <span className="text-gray-600 font-medium text-sm">
                              {step}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200 rounded-2xl shadow-lg p-8 inline-block max-w-lg mx-auto relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-secondary-coral/10 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 bg-secondary-teal/10 rounded-full"></div>

            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-coral to-secondary-teal rounded-xl flex items-center justify-center mx-auto mb-6 shadow-md">
                <Icon name="trending-up" className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-primary-navy mb-4">
                Ready to Begin Your Career Journey?
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Every expert was once a beginner. Start your career with us and
                we'll provide all the training and support you need to succeed.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/careers"
                  className="bg-secondary-coral hover:bg-secondary-coral/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-sm hover:shadow-md text-sm"
                >
                  View Open Positions
                </a>

                <a
                  href="/contact"
                  className="bg-white border-2 border-secondary-coral/20 hover:border-secondary-coral hover:bg-secondary-coral/5 text-primary-navy hover:text-secondary-coral px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm"
                >
                  Ask About Training
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
