import { useState } from "react";
import { implementationSteps } from "../../data/pbs.details";
import Icon from "../common/Icon";

function PBSImplementationSection() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-secondary-coral/10 text-secondary-coral px-4 py-2 rounded-full text-sm font-medium mb-6">
            Our Process
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-primary-navy mb-6 leading-tight">
            How PBS Works at{" "}
            <span className="text-secondary-coral">M&D Care</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our systematic three-step approach ensures comprehensive support for
            every individual we care for.
          </p>
        </div>

        {/* Desktop Process Steps */}
        <div className="hidden lg:block">
          {/* Progress Line */}
          {/* <div className="relative mb-16">
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gray-200 rounded-full"></div>
            <div
              className="absolute top-16 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-secondary-coral to-primary-gold rounded-full transition-all duration-500"
              style={{
                width: `${((activeStep - 1) / (implementationSteps.length - 1)) * 75}%`,
              }}
            ></div>
          </div> */}

          {/* Step Cards */}
          <div className="grid grid-cols-3 gap-8 mb-16">
            {implementationSteps.map((step, index) => (
              <div key={step.id} className="relative group">
                <div
                  className={`p-8 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                    activeStep === step.id
                      ? "bg-gradient-to-br from-secondary-coral/5 to-primary-gold/5 border-secondary-coral shadow-xl shadow-secondary-coral/10"
                      : "bg-white border-gray-200 hover:border-secondary-coral/30 hover:shadow-lg shadow-sm"
                  }`}
                  onClick={() => setActiveStep(step.id)}
                >
                  <div className="text-center">
                    {/* Icon Container */}
                    <div className="relative mb-6">
                      <div
                        className={`w-20 h-20 mx-auto rounded-xl flex items-center justify-center transition-all duration-300 ${
                          activeStep === step.id
                            ? "bg-gradient-to-br from-secondary-coral to-primary-gold shadow-lg"
                            : "bg-gray-100 border border-gray-200 group-hover:bg-secondary-coral/10 group-hover:border-secondary-coral/30"
                        }`}
                      >
                        <Icon
                          name={step.iconName}
                          className={`w-8 h-8 transition-colors duration-300 ${
                            activeStep === step.id
                              ? "text-white"
                              : "text-gray-600 group-hover:text-secondary-coral"
                          }`}
                        />
                      </div>

                      {/* Step number */}
                      <div
                        className={`absolute -top-2 -right-2 w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                          activeStep === step.id
                            ? "bg-primary-gold text-primary-navy shadow-md"
                            : "bg-white text-gray-600 border border-gray-300 group-hover:border-secondary-coral group-hover:text-secondary-coral"
                        }`}
                      >
                        {step.id}
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                        activeStep === step.id
                          ? "text-primary-navy"
                          : "text-gray-800 group-hover:text-secondary-coral"
                      }`}
                    >
                      {step.title}
                    </h3>

                    {/* Status text */}
                    <p
                      className={`text-sm font-medium ${
                        activeStep === step.id
                          ? "text-secondary-coral"
                          : "text-gray-500 group-hover:text-gray-700"
                      }`}
                    >
                      {activeStep === step.id
                        ? "Active Step"
                        : "Click to explore"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Description Section */}
          <div className="bg-gradient-to-r from-primary-navy to-primary-navy/90 rounded-2xl p-10 shadow-xl">
            <div className="flex items-start gap-8">
              {/* Step indicator */}
              <div className="w-20 h-20 bg-gradient-to-br from-secondary-coral to-primary-gold rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-3xl font-bold text-white">
                  {activeStep}
                </span>
              </div>

              {/* Content */}
              {implementationSteps.map(
                (step) =>
                  activeStep === step.id && (
                    <div key={step.id} className="flex-1">
                      <div className="mb-6">
                        <span className="inline-block bg-primary-gold/20 text-primary-gold px-4 py-2 rounded-full text-sm font-medium mb-4">
                          Step {step.id} of {implementationSteps.length}
                        </span>
                        <h4 className="text-3xl font-bold text-white mb-2">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-xl text-white/90 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>

        {/* Mobile Process Steps */}
        <div className="lg:hidden space-y-6">
          {implementationSteps.map((step, index) => (
            <div key={step.id}>
              <div className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Top accent */}
                <div className="h-2 bg-gradient-to-r from-secondary-coral to-primary-gold"></div>

                <div className="p-8">
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-secondary-coral to-primary-gold rounded-xl flex items-center justify-center shadow-md">
                        <Icon
                          name={step.iconName}
                          className="w-7 h-7 text-white"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary-gold rounded-lg flex items-center justify-center shadow-md">
                        <span className="text-sm font-bold text-primary-navy">
                          {step.id}
                        </span>
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary-navy mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connection line */}
              {index < implementationSteps.length - 1 && (
                <div className="flex justify-center my-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-secondary-coral/60 to-primary-gold/60 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PBSImplementationSection;
