// src/components/learning/QCFStandards.jsx
import { learningDevelopmentData } from "../../data/careers.learningDevelopment";
import Icon from "../common/Icon";

export default function QCFStandards() {
  const { qcf } = learningDevelopmentData;

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-primary-navy via-primary-navy/95 to-primary-navy/90 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-primary-gold rounded-full blur-sm animate-pulse" />
        <div className="absolute bottom-32 right-1/4 w-24 h-24 bg-secondary-coral rounded-full blur-sm animate-bounce" />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-secondary-teal rounded-full blur-sm animate-ping" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary-gold/20 text-primary-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Icon name="award" className="w-4 h-4 mr-2 inline" />
            Professional Standards
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {qcf.title}
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            {qcf.description}
          </p>
        </div>

        {/* Main QCF Card */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 sm:p-12 mb-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-gold/10 rounded-full transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary-coral/10 rounded-full transform -translate-x-12 translate-y-12"></div>

          <div className="relative">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-primary-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon
                  name="shield-check"
                  className="w-10 h-10 text-primary-gold"
                />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Industry-Standard Qualifications
              </h3>
              <p className="text-white/80 leading-relaxed max-w-2xl mx-auto">
                QCF provides the structured learning framework that ensures all
                our team members meet the highest professional standards in
                social care.
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {qcf.metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-primary-gold/20 border border-primary-gold/30 rounded-xl p-6 hover:bg-primary-gold/30 hover:border-primary-gold/50 hover:scale-105 transition-all duration-300 cursor-pointer text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold mb-2 text-primary-gold">
                    {metric.number}
                  </div>
                  <div className="text-sm text-white/90">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* QCF Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors duration-300">
            <div className="w-12 h-12 bg-secondary-coral/20 rounded-lg flex items-center justify-center mb-4">
              <Icon
                name="graduation-cap"
                className="w-6 h-6 text-secondary-coral"
              />
            </div>
            <h4 className="text-lg font-bold mb-3">Structured Learning</h4>
            <p className="text-white/80 text-sm leading-relaxed">
              Clear progression through recognized qualification levels with
              defined learning outcomes
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors duration-300">
            <div className="w-12 h-12 bg-secondary-teal/20 rounded-lg flex items-center justify-center mb-4">
              <Icon
                name="check-circle"
                className="w-6 h-6 text-secondary-teal"
              />
            </div>
            <h4 className="text-lg font-bold mb-3">Industry Recognition</h4>
            <p className="text-white/80 text-sm leading-relaxed">
              Qualifications recognized across the social care sector, enhancing
              career mobility
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors duration-300">
            <div className="w-12 h-12 bg-secondary-purple/20 rounded-lg flex items-center justify-center mb-4">
              <Icon
                name="trending-up"
                className="w-6 h-6 text-secondary-purple"
              />
            </div>
            <h4 className="text-lg font-bold mb-3">Career Advancement</h4>
            <p className="text-white/80 text-sm leading-relaxed">
              Foundation for progression into senior and management roles within
              care
            </p>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-primary-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="users" className="w-8 h-8 text-primary-gold" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Complete Support Throughout Your QCF Journey
            </h3>

            <p className="text-white/90 mb-6 leading-relaxed">
              We don't just expect you to achieve QCF - we actively support you
              every step of the way. All QCF qualificaitons are fully funded,
              and you will be guided by people who are experts in their field.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-lg p-4">
                <Icon
                  name="Money"
                  className="w-6 h-6 text-primary-gold mx-auto mb-2"
                />
                <div className="font-semibold mb-1">Fully Funded</div>
                <div className="text-white/80 text-sm">
                  All QCF courses are fully funded
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <Icon
                  name="heart"
                  className="w-6 h-6 text-primary-gold mx-auto mb-2"
                />
                <div className="font-semibold mb-1">Personal Support</div>
                <div className="text-white/80 text-sm">
                  One-to-one guidance from experienced mentors
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
