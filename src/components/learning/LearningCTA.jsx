// src/components/learning/LearningCTA.jsx
import { learningDevelopmentData } from "../../data/careers.learningDevelopment";
import Icon from "../common/Icon";

export default function LearningCTA() {
  const { cta } = learningDevelopmentData;

  return (
    <section className="py-16 sm:py-20 bg-primary-navy text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary-gold rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-secondary-coral rounded-full animate-bounce" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-secondary-teal rounded-full animate-ping" />
        <div className="absolute bottom-10 left-1/3 w-20 h-20 bg-secondary-purple rounded-full animate-pulse" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-block bg-primary-gold/20 text-primary-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Icon name="trending-up" className="w-4 h-4 mr-2 inline" />
              Start Your Journey
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {cta.title}
            </h2>

            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              {cta.description}
            </p>
          </div>

          {/* Primary Actions */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12">
            <a
              href={cta.primaryButton.link}
              className="bg-primary-gold text-primary-navy px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-primary-gold/90 hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-2"
            >
              <Icon name="briefcase" className="w-5 h-5" />
              {cta.primaryButton.text}
            </a>

            <a
              href={cta.secondaryButton.link}
              className="bg-white/10 text-white border-2 border-white/30 px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-white hover:text-primary-navy transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <Icon name="mail" className="w-5 h-5" />
              {cta.secondaryButton.text}
            </a>
          </div>

          {/* Learning Journey Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors duration-300">
              <Icon
                name="graduation-cap"
                className="w-8 h-8 text-primary-gold mx-auto mb-3"
              />
              <div className="text-lg font-bold mb-1">Expert Training</div>
              <div className="text-white/80 text-sm">
                Classroom-based learning with subject experts
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors duration-300">
              <Icon
                name="trending-up"
                className="w-8 h-8 text-primary-gold mx-auto mb-3"
              />
              <div className="text-lg font-bold mb-1">Clear Progression</div>
              <div className="text-white/80 text-sm">
                Four-level career pathway with defined steps
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors duration-300">
              <Icon
                name="award"
                className="w-8 h-8 text-primary-gold mx-auto mb-3"
              />
              <div className="text-lg font-bold mb-1">QCF Standards</div>
              <div className="text-white/80 text-sm">
                Industry-recognized qualifications with full support
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors duration-300">
              <Icon
                name="heart"
                className="w-8 h-8 text-primary-gold mx-auto mb-3"
              />
              <div className="text-lg font-bold mb-1">Values-Based</div>
              <div className="text-white/80 text-sm">
                Recruit for values, train for skills approach
              </div>
            </div>
          </div>

          {/* Success Stories Teaser */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Icon name="users" className="w-6 h-6 text-primary-gold" />
              <h3 className="text-xl font-bold text-primary-gold">
                Join Our Success Stories
              </h3>
            </div>
            <p className="text-white/90 mb-4 leading-relaxed">
              Every expert was once a beginner. Start your journey in care with
              M&D Care and discover how our investment in your development can
              transform both your career and the lives of those you support.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary-gold mb-1">
                  100%
                </div>
                <div className="text-white/80 text-sm">
                  Fully funded qualifications
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary-gold mb-1">
                  85%
                </div>
                <div className="text-white/80 text-sm">
                  Internal promotions to senior roles
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
