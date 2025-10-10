// src/components/careers/CultureSection.jsx
import { tone } from "./colorClassnames";
import Icon from "../common/Icon";

const CULTURE = [
  {
    title: "Aspirational",
    subtitle: "Supporting dreams",
    color: "secondary-teal",
  },
  { title: "Kind", subtitle: "Genuine care", color: "secondary-coral" },
  {
    title: "Collaborative",
    subtitle: "Working together",
    color: "secondary-purple",
  },
  { title: "Passionate", subtitle: "Driven by purpose", color: "primary-gold" },
];

export default function CultureSection() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-block bg-secondary-coral/10 text-secondary-coral px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              Our Culture
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-navy mb-4 sm:mb-6 leading-tight">
              Where Values <br />
              <span className="text-secondary-coral">Come to Life</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
              At M&amp;D Care, our values aren&apos;t just words on a
              wall—they&apos;re lived every day by every team member. Join a
              workplace where you can truly be yourself while making a
              meaningful difference.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
              {CULTURE.map((c) => {
                const k = tone(c.color, "secondary-teal");
                return (
                  <div
                    key={c.title}
                    className={`${k.bgSoft} rounded-xl p-3 sm:p-4 text-center hover:opacity-90 transition-colors duration-300`}
                  >
                    <div className={`text-lg sm:text-2xl font-bold ${k.text}`}>
                      {c.title}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      {c.subtitle}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 sm:mt-6">
              <a
                href="/about/values"
                className="inline-flex items-center text-secondary-coral font-semibold hover:text-secondary-coral/80 transition-colors duration-200 text-sm sm:text-base"
              >
                Discover All Our Values
                <Icon name="arrow-right" className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          {/* Testimonial */}
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-gradient-to-br from-secondary-light-blue/20 to-secondary-coral/20 rounded-xl sm:rounded-2xl p-6 sm:p-8">
              <div className="text-4xl sm:text-6xl text-secondary-coral/30 font-serif leading-none mb-3 sm:mb-4">
                "
              </div>
              <blockquote className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6 font-medium">
                Working at M&amp;D Care has completely changed my perspective on
                what a job can be. It&apos;s not just work—it&apos;s a calling.
                Every day I come home knowing I&apos;ve made a real difference.
              </blockquote>

              <div className="flex items-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-secondary-coral/20 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <Icon
                    name="user"
                    className="w-6 h-6 sm:w-8 sm:h-8 text-secondary-coral"
                  />
                </div>
                <div>
                  <div className="font-bold text-primary-navy text-base sm:text-lg">
                    Rachel Thomas
                  </div>
                  <div className="text-secondary-coral text-sm sm:text-base">
                    Senior Support Worker
                  </div>
                  <div className="text-gray-500 text-xs sm:text-sm">
                    3 years at M&amp;D Care
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 bg-primary-gold w-6 h-6 sm:w-8 sm:h-8 rounded-full opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
}
