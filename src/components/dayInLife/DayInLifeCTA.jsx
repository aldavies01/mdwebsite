// src/components/dayinlife/DayInLifeCTA.jsx
import { dayInTheLifeData } from "../../data/careers.dayInTheLife";
import Icon from "../common/Icon";

export default function DayInLifeCTA() {
  const { cta } = dayInTheLifeData;

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-primary-navy via-primary-navy/95 to-secondary-coral/20 text-white relative overflow-hidden">
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
            <div className="inline-block bg-primary-gold/20 text-primary-gold px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
              <Icon name="briefcase" className="w-4 h-4 mr-2 inline" />
              Join Our Team
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {cta.title}
            </h2>

            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              {cta.description}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            {cta.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors duration-300"
              >
                <Icon
                  name="check-circle"
                  className="w-6 h-6 text-primary-gold mx-auto mb-2"
                />
                <p className="text-sm font-medium">{feature}</p>
              </div>
            ))}
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
              <Icon name="message-circle" className="w-5 h-5" />
              {cta.secondaryButton.text}
            </a>
          </div>

          {/* Video Testimonial Card */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-3xl mx-auto mb-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="text-left">
                <h3 className="text-xl font-bold text-primary-gold mb-3">
                  Start Your Journey Today
                </h3>
                <p className="text-white/90 mb-4 leading-relaxed">
                  Emma started with no experience in care. Three years later,
                  she's a Senior Support Worker helping train new starters. Your
                  journey could begin today.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-gold/20 rounded-full flex items-center justify-center">
                    <Icon
                      name="play"
                      className="w-6 h-6 text-primary-gold ml-1"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Watch Emma's Story</p>
                    <p className="text-white/70 text-sm">3 minute video</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-gold/20 to-secondary-coral/20 rounded-xl aspect-video flex items-center justify-center">
                <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300 group">
                  <Icon
                    name="play"
                    className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform duration-300"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-gold mb-1">
                24 hrs
              </div>
              <div className="text-white/80 text-sm">
                Application response time
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-primary-gold mb-1">
                2 weeks
              </div>
              <div className="text-white/80 text-sm">
                From application to start
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-primary-gold mb-1">
                100%
              </div>
              <div className="text-white/80 text-sm">
                Training & support provided
              </div>
            </div>
          </div>

          {/* Final Message */}
          <div className="max-w-lg mx-auto">
            <p className="text-white/70 text-sm leading-relaxed">
              Every support worker's journey is unique, but they all start with
              the same first step. Take yours today and discover how rewarding a
              career in care can be.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
