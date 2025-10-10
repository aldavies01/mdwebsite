// src/components/about/AboutStandards.jsx
import Icon from "../common/Icon";

const BULLETS = [
  { label: "Regulatory Compliance" },
  { label: "Continuous Improvement" },
  { label: "Transparency" },
  { label: "Accountability" },
];

const FEATURES = [
  {
    icon: "check-circle",
    iconBg: "bg-secondary-teal/20",
    iconColor: "text-secondary-teal",
    title: "CIW Ratings",
    text: "Outstanding & Good ratings across all services",
  },
  {
    icon: "lightbulb",
    iconBg: "bg-primary-gold/20",
    iconColor: "text-primary-navy",
    title: "Innovation",
    text: "Cutting-edge approaches to care delivery",
  },
  {
    icon: "book",
    iconBg: "bg-secondary-coral/20",
    iconColor: "text-secondary-coral",
    title: "Training",
    text: "Continuous professional development",
  },
  {
    icon: "trending-up",
    iconBg: "bg-secondary-purple/20",
    iconColor: "text-secondary-purple",
    title: "Outcomes",
    text: "Measurable positive results",
  },
];

export default function AboutStandards() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="order-2 lg:order-1">
            <div className="inline-block bg-secondary-teal/10 text-secondary-teal px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              Our Standards
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-primary-navy mb-4 sm:mb-6 leading-tight">
              Committed to <br />
              <span className="text-secondary-teal">Excellence</span>
            </h2>

            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed">
              <p>
                We are dedicated to maintaining the highest standards across all
                aspects of our services, ensuring that every individual receives
                the best possible care and support.
              </p>
              <p>
                Our robust governance framework ensures accountability,
                transparency, and continuous improvement in our practices. By
                adhering to strict regulatory standards and regularly evaluating
                our performance, we strive to exceed expectations and deliver
                exceptional care that truly makes a difference in the lives of
                those we support.
              </p>
            </div>

            {/* Key principles */}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {BULLETS.map((b) => (
                <div key={b.label} className="flex items-center">
                  <div className="w-3 h-3 bg-secondary-teal rounded-full mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm sm:text-base">
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Feature tiles */}
          <div className="relative order-1 lg:order-2">
            <div className="bg-gradient-to-br from-secondary-teal/10 to-secondary-coral/10 rounded-2xl p-4 sm:p-6 lg:p-8">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {FEATURES.map((f) => (
                  <div
                    key={f.title}
                    className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-lg"
                  >
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 ${f.iconBg} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4`}
                    >
                      <Icon
                        name={f.icon}
                        className={`w-5 h-5 sm:w-6 sm:h-6 ${f.iconColor}`}
                      />
                    </div>
                    <h3 className="font-bold text-primary-navy mb-2 text-sm sm:text-base">
                      {f.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-tight">
                      {f.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
