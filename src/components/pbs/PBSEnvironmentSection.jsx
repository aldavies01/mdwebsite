// components/PBS/PBSEvidenceBasedSection.jsx
import Icon from "../common/Icon";
import { evidenceBasedPractice } from "../../data/pbs.details";

function PBSEvidenceBasedSection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-secondary-teal/10 text-secondary-teal px-4 py-2 rounded-full text-sm font-medium mb-6">
            Evidence-Based Practice
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-primary-navy mb-6 leading-tight">
            The Future of{" "}
            <span className="text-secondary-coral">Social Care</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {evidenceBasedPractice.description}
          </p>
        </div>

        {/* Care Models */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary-navy text-center mb-8">
            Widely Researched Models of Care
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {evidenceBasedPractice.models.map((model, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl hover:border-secondary-coral/20 transition-all duration-300 relative overflow-hidden"
              >
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary-coral via-secondary-teal to-primary-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Icon based on model type */}
                <div className="mb-4">
                  {index === 0 && (
                    <Icon
                      name="users"
                      className="w-10 h-10 text-secondary-teal mx-auto"
                    />
                  )}
                  {index === 1 && (
                    <Icon
                      name="shield-check"
                      className="w-10 h-10 text-secondary-coral mx-auto"
                    />
                  )}
                  {index === 2 && (
                    <Icon
                      name="lightbulb"
                      className="w-10 h-10 text-secondary-purple mx-auto"
                    />
                  )}
                  {index === 3 && (
                    <Icon
                      name="award"
                      className="w-10 h-10 text-primary-gold mx-auto"
                    />
                  )}
                </div>

                <h4 className="font-bold text-primary-navy group-hover:text-secondary-coral transition-colors duration-300 leading-snug">
                  {model}
                </h4>

                {/* Subtle background pattern */}
                <div className="absolute -bottom-2 -right-2 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  {index === 0 && (
                    <Icon
                      name="users"
                      className="w-full h-full text-secondary-teal"
                    />
                  )}
                  {index === 1 && (
                    <Icon
                      name="shield-check"
                      className="w-full h-full text-secondary-coral"
                    />
                  )}
                  {index === 2 && (
                    <Icon
                      name="lightbulb"
                      className="w-full h-full text-secondary-purple"
                    />
                  )}
                  {index === 3 && (
                    <Icon
                      name="award"
                      className="w-full h-full text-primary-gold"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Training & Education */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 mb-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Content */}
            <div className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <Icon
                  name="award"
                  className="w-6 h-6 text-secondary-coral flex-shrink-0 mt-1"
                />
                <div>
                  <h3 className="text-2xl font-bold text-primary-navy mb-3">
                    Training & Development
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {evidenceBasedPractice.training.description}
                  </p>
                  <div className="space-y-3">
                    {evidenceBasedPractice.training.features.map(
                      (feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-secondary-coral rounded-full"></div>
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="h-64 lg:h-full relative">
              <img
                src="/images/stock/stock-1.jpg"
                alt="Professional development in action"
                className="w-full h-full object-cover rounded-tl-2xl rounded-bl-2xl lg:rounded-bl-none lg:rounded-tr-2xl"
              />
            </div>
          </div>
        </div>

        {/* Active Support & PBS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Active Support */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Image */}
            <div className="h-48 relative">
              <img
                src="/images/stock/stock-2.jpg"
                alt="Working with individuals"
                className="w-full h-full object-cover rounded-t-2xl"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="users" className="w-6 h-6 text-secondary-teal" />
                <h3 className="text-2xl font-bold text-primary-navy">
                  Active Support
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                {evidenceBasedPractice.activeSupport.description}
              </p>
              <div className="space-y-3">
                {evidenceBasedPractice.activeSupport.benefits.map(
                  (benefit, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary-teal rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">{benefit}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* PBS Approach */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Image */}
            <div className="h-48 relative">
              <img
                src="/images/stock/stock-3.jpg"
                alt="Working with individuals"
                className="w-full h-full object-cover rounded-t-2xl"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Icon
                  name="shield-check"
                  className="w-6 h-6 text-secondary-coral"
                />
                <h3 className="text-2xl font-bold text-primary-navy">
                  Positive Behaviour Support
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                {evidenceBasedPractice.pbsApproach.description}
              </p>
              <div className="space-y-3">
                {evidenceBasedPractice.pbsApproach.principles
                  .slice(0, 4)
                  .map((principle, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary-coral rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">{principle}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* PBM ABMU */}
        <div className="bg-primary-navy rounded-2xl p-8 shadow-lg text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="shield" className="w-6 h-6 text-primary-gold" />
              <h3 className="text-2xl font-bold">PBM ABMU Integration</h3>
            </div>
            <p className="text-white/90 leading-relaxed mb-6">
              {evidenceBasedPractice.pbmABMU.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {evidenceBasedPractice.pbmABMU.monitoring.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PBSEvidenceBasedSection;
