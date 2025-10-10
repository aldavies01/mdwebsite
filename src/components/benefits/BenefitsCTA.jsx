// src/components/benefits/BenefitsCTA.jsx
import { benefitsData } from "../../data/careers.benefits";
import Icon from "../common/Icon";

export default function BenefitsCTA() {
  const { cta } = benefitsData;

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
              <Icon name="star" className="w-4 h-4 mr-2 inline" />
              Join Our Team
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {cta.title || "Ready to Join Our Team?"}
            </h2>

            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              {cta.description ||
                "These benefits are just the beginning. Discover what it's really like to be part of the M&D Care family."}
            </p>
          </div>

          {/* Primary Actions */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12">
            <a
              href={cta.primaryButton.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-gold text-primary-navy px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-primary-gold/90 hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-2"
            >
              <Icon name="briefcase" className="w-5 h-5" />
              {cta.primaryButton.text}
            </a>

            {cta.secondaryButton?.link && (
              <a
                href={cta.secondaryButton.link}
                className="bg-white/10 text-white border-2 border-white/30 px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-white hover:text-primary-navy transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <Icon name="heart" className="w-5 h-5" />
                {cta.secondaryButton.text}
              </a>
            )}
          </div>

          {/* Benefits Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors duration-300">
              <Icon
                name="shield-check"
                className="w-8 h-8 text-primary-gold mx-auto mb-3"
              />
              <div className="text-lg font-bold mb-1">From Day One</div>
              <div className="text-white/80 text-sm">
                Full benefits package starts immediately
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors duration-300">
              <Icon
                name="trending-up"
                className="w-8 h-8 text-primary-gold mx-auto mb-3"
              />
              <div className="text-lg font-bold mb-1">Above Industry</div>
              <div className="text-white/80 text-sm">
                25% better than standard offerings
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors duration-300">
              <Icon
                name="users"
                className="w-8 h-8 text-primary-gold mx-auto mb-3"
              />
              <div className="text-lg font-bold mb-1">Family Included</div>
              <div className="text-white/80 text-sm">
                Benefits extend to your loved ones
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors duration-300">
              <Icon
                name="heart"
                className="w-8 h-8 text-primary-gold mx-auto mb-3"
              />
              <div className="text-lg font-bold mb-1">Always Growing</div>
              <div className="text-white/80 text-sm">
                Benefits improve with your career
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-primary-gold mb-4">
              Questions About Benefits?
            </h3>
            <p className="text-white/90 mb-6">
              Our HR team is here to help. Get in touch to discuss any aspect of
              our benefits package or career opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`mailto:${cta.contact.email}`}
                className="inline-flex items-center gap-2 text-primary-gold hover:text-primary-gold/80 font-semibold transition-colors duration-200"
              >
                <Icon name="mail" className="w-4 h-4" />
                {cta.contact.email}
              </a>

              <div className="hidden sm:block w-px h-6 bg-white/30"></div>

              <a
                href={`tel:${cta.contact.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 text-primary-gold hover:text-primary-gold/80 font-semibold transition-colors duration-200"
              >
                <Icon name="phone" className="w-4 h-4" />
                {cta.contact.phone}
              </a>
            </div>

            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-white/70 text-sm">
                Available Monday - Friday, 9:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
