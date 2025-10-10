// src/components/dayinlife/WhyYoullLoveIt.jsx
import { dayInTheLifeData } from "../../data/careers.dayInTheLife";
import { tone } from "../careers/colorClassnames";
import Icon from "../common/Icon";

export default function WhyYoullLoveIt() {
  const { whyYoullLoveIt } = dayInTheLifeData;

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-primary-gold/10 text-primary-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Icon name="heart" className="w-4 h-4 mr-2 inline" />
            The Best Part
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-navy mb-6 leading-tight">
            {whyYoullLoveIt.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {whyYoullLoveIt.subtitle}
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {whyYoullLoveIt.reasons.map((reason, index) => {
            const c = tone(reason.color, "secondary-coral");
            return (
              <div
                key={index}
                className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-secondary-coral hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 ${c.bgSoft} rounded-xl flex items-center justify-center mb-4 group-hover:${c.bg} transition-all duration-300`}
                >
                  <Icon
                    name={reason.icon}
                    className={`w-7 h-7 ${c.text} group-hover:text-white transition-colors duration-300`}
                  />
                </div>

                <h3 className="text-lg font-bold text-primary-navy mb-3 group-hover:text-secondary-coral transition-colors duration-300">
                  {reason.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-br from-primary-navy via-primary-navy/95 to-secondary-coral/20 rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full transform -translate-x-12 translate-y-12"></div>

          <div className="relative">
            <h3 className="text-2xl font-bold text-center mb-8">
              The Numbers Speak for Themselves
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {whyYoullLoveIt.stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-primary-gold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/90 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Visual Benefits Display */}
        <div className="mt-12 bg-gradient-to-r from-secondary-coral/5 to-secondary-teal/5 rounded-2xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4">
                Every Day is Different, Every Day Matters
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                As a support worker, you're not just doing a job - you're making
                a genuine difference in people's lives. From celebrating small
                victories to overcoming challenges together, every day brings
                new rewards and learning opportunities.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon
                    name="check-circle"
                    className="w-5 h-5 text-secondary-coral flex-shrink-0"
                  />
                  <span className="text-gray-700">
                    Build meaningful relationships that last
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon
                    name="check-circle"
                    className="w-5 h-5 text-secondary-coral flex-shrink-0"
                  />
                  <span className="text-gray-700">
                    Learn new skills every single day
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon
                    name="check-circle"
                    className="w-5 h-5 text-secondary-coral flex-shrink-0"
                  />
                  <span className="text-gray-700">
                    Be part of an amazing supportive team
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary-coral to-secondary-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="star" className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-primary-navy mb-3">
                Join Us Today
              </h4>
              <p className="text-gray-600 mb-4">
                No experience needed - just bring your compassion and commitment
              </p>
              <a
                href="/careers"
                className="inline-flex items-center gap-2 bg-secondary-coral hover:bg-secondary-coral/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Icon name="arrow-right" className="w-4 h-4" />
                View Opportunities
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
