// src/components/careers/JourneyTimeline.jsx
import Icon from "../common/Icon";
import { tone } from "./colorClassnames";

// Local steps (kept here so you don't need to edit data/roles.js)
const STEPS = [
  {
    title: "Application",
    text: "Submit your CV or complete our simple online application form. No complex requirements - just tell us about yourself!",
    color: "primary-gold",
    icon: "file-text",
  },
  {
    title: "CV Screening",
    text: "Our friendly HR team reviews your application. We look for passion and potential, not just experience!",
    color: "secondary-coral",
    icon: "check-circle",
  },
  {
    title: "Initial Call",
    text: "A relaxed phone chat to get to know each other better. Ask us anything - we're here to help!",
    color: "secondary-teal",
    icon: "phone",
  },
  {
    title: "Interview",
    text: "Meet the team in a comfortable, conversational interview. We want to see the real you!",
    color: "secondary-purple",
    icon: "users",
  },
  {
    title: "Onboarding",
    text: "Welcome to the family! We'll get you set up with everything you need to succeed.",
    color: "primary-gold",
    icon: "heart",
  },
  {
    title: "Documentation Call",
    text: "We'll guide you through all the paperwork and compliance requirements. No stress - we make it simple!",
    color: "secondary-light-blue",
    icon: "file-text",
  },
  {
    title: "Training & Induction",
    text: "Comprehensive training covering our values and practical skills. Learn at your own pace!",
    color: "secondary-coral",
    icon: "book",
  },
  {
    title: "Shadow Shift",
    text: "Work alongside experienced colleagues to see our values in action. No pressure - just learning!",
    color: "secondary-teal",
    icon: "eye",
  },
  {
    title: "Wellbeing Call",
    text: "We check in to see how you're settling in. Your wellbeing matters to us - always!",
    color: "secondary-purple",
    icon: "smile",
  },
  {
    title: "Continued Development",
    text: "Your journey doesn't end here! Ongoing training, progression, and continuous support as you grow with us.",
    color: "primary-gold",
    icon: "trending-up",
  },
];

export default function JourneyTimeline() {
  return (
    <section className="py-16 lg:py-16 bg-gradient-to-br from-primary-navy via-primary-navy/95 to-primary-navy/90 text-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-primary-gold rounded-full blur-sm" />
        <div className="absolute bottom-32 right-1/4 w-24 h-24 bg-secondary-coral rounded-full blur-sm" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header - more condensed */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-primary-gold/10 border border-primary-gold/30 text-primary-gold px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Icon name="map-pin" className="w-4 h-4 mr-2" />
            Your Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            From Application to Success
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            A streamlined process designed to support you at every step
          </p>
        </div>

        {/* Mobile vertical timeline - more compact */}
        <div className="relative lg:hidden">
          <div className="absolute left-6 top-0 w-0.5 h-full bg-gradient-to-b from-primary-gold via-secondary-coral to-secondary-teal opacity-60" />
          <div className="space-y-4">
            {STEPS.map((s, i) => {
              const c = tone(s.color, "primary-gold");
              return (
                <div key={i} className="relative flex items-start pl-16">
                  <div
                    className={`absolute left-4 w-4 h-4 ${c.bg} rounded-full border-2 border-white shadow-lg z-10`}
                  />
                  <div className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/12 transition-all duration-300 group flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name={s.icon} className={`w-4 h-4 ${c.text}`} />
                      <h3 className={`font-semibold ${c.text}`}>{s.title}</h3>
                      <span className="text-xs text-white/50 ml-auto">
                        {i + 1}
                      </span>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {s.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop layout - staggered timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Curved connecting line */}
            <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-gold via-secondary-coral to-secondary-teal opacity-40" />

            <div className="space-y-12">
              {STEPS.map((s, i) => {
                const left = i % 2 === 0;
                const c = tone(s.color, "primary-gold");
                // Stagger positioning - alternate sides but with offset
                const offsetClass = left
                  ? "ml-0 mr-auto pl-0 pr-12"
                  : "ml-auto mr-0 pl-12 pr-0";

                return (
                  <div key={i} className="relative flex items-center">
                    {/* Main content container - staggered */}
                    <div className={`w-5/12 ${offsetClass}`}>
                      <div className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-lg p-5 hover:bg-white/12 transition-all duration-300 group relative">
                        {/* Arrow pointing to timeline */}
                        <div
                          className={`absolute top-6 ${left ? "-right-3" : "-left-3"} w-0 h-0 border-t-[6px] border-b-[6px] border-t-transparent border-b-transparent ${left ? "border-l-[8px] border-l-white/10" : "border-r-[8px] border-r-white/10"}`}
                        />

                        <div
                          className={`flex items-center gap-3 mb-3 ${left ? "" : "flex-row-reverse text-right"}`}
                        >
                          <div
                            className={`w-10 h-10 ${c.bg}/20 rounded-lg flex items-center justify-center flex-shrink-0`}
                          >
                            <Icon
                              name={s.icon}
                              className={`w-5 h-5 ${c.text}`}
                            />
                          </div>
                          <div>
                            <h3 className={`font-semibold text-lg ${c.text}`}>
                              {s.title}
                            </h3>
                            <span className="text-xs text-white/50">
                              Step {i + 1} of {STEPS.length}
                            </span>
                          </div>
                        </div>
                        <p className="text-white/80 leading-relaxed">
                          {s.text}
                        </p>
                      </div>
                    </div>

                    {/* Central timeline dot - larger and more prominent */}
                    <div className="absolute left-1/2 -translate-x-1/2 z-20">
                      <div
                        className={`w-5 h-5 ${c.bg} rounded-full border-3 border-white shadow-lg relative`}
                      >
                        {/* Connecting lines to next step */}
                        {i < STEPS.length - 1 && (
                          <div
                            className={`absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-52 bg-gradient-to-b ${
                              i % 2 === 0
                                ? "from-current to-secondary-coral"
                                : "from-current to-secondary-teal"
                            } opacity-60`}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA - more professional */}
        <div className="text-center mt-16">
          <div className="bg-white/8 backdrop-blur-sm border border-white/20 rounded-xl p-6 inline-block max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-primary-gold mb-3">
              Ready to Begin?
            </h3>
            <p className="text-white/80 mb-4 text-sm">
              Start your application today and take the first step
            </p>
            <a
              href="#apply"
              className="bg-primary-gold text-primary-navy px-6 py-3 rounded-lg font-semibold hover:bg-primary-gold/90 transition-all duration-300 shadow-lg inline-flex items-center gap-2 text-sm"
            >
              <Icon name="arrow-right" className="w-4 h-4" />
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
