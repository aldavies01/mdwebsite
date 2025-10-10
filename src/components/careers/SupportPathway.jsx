// src/components/careers/SupportPathway.jsx
import Icon from "../common/Icon";
import { tone } from "./colorClassnames";

const PATH_COLOR = "primary-gold"; // consistent visual identity for the pathway
const c = tone(PATH_COLOR, "primary-gold");

// Keep icons to ones you already have in Icon.jsx
const STEPS = [
  { title: "Support Worker", note: "No experience needed", icon: "user" },
  { title: "Senior Support", note: "Mentor & lead shifts", icon: "users" },
  {
    title: "Deputy Manager",
    note: "Support service leadership",
    icon: "trending-up",
  },
  {
    title: "Registered Manager",
    note: "Lead a service (CIW)",
    icon: "check-circle",
  },
  {
    title: "Area Manager",
    note: "Oversee multiple services",
    icon: "trending-up",
  },
];

function Avatar({ imageUrl, iconName = "user" }) {
  return (
    <div
      className={`${c.bgSoft} rounded-2xl w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center overflow-hidden`}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt=""
          className="w-full h-full object-cover rounded-2xl"
        />
      ) : (
        <Icon name={iconName} className={`${c.text} w-8 h-8 sm:w-9 sm:h-9`} />
      )}
    </div>
  );
}

export default function SupportPathway() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div
            className={`${c.bgSoft} ${c.text} inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4`}
          >
            Grow with M&amp;D Care
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-navy">
            Support Role{" "}
            <span className="text-primary-gold">Career Pathway</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-3">
            Start as a Support Worker and progress through clearly defined
            steps. We’ll train you —
            <span className="font-semibold">
              {" "}
              you don’t need prior experience
            </span>
            .
          </p>
        </div>

        {/* Horizontal stepper with continuous line */}
        <div className="overflow-x-auto">
          <div className="min-w-[760px] lg:min-w-0 bg-gray-50 rounded-2xl p-8 border border-gray-100 relative">
            <ol className="relative grid grid-cols-5 gap-4 sm:gap-6 items-center z-10">
              {STEPS.map((s) => (
                <li
                  key={s.title}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Icon bubble overlaps the line */}
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 ${c.bg} rounded-full flex items-center justify-center border-4 border-white shadow-lg transition-transform duration-200 group-hover:scale-105`}
                    aria-hidden="true"
                  >
                    <Icon
                      name={s.icon}
                      className="w-7 h-7 sm:w-8 sm:h-8 text-primary-navy"
                    />
                  </div>

                  {/* Label + note */}
                  <div className="mt-3">
                    <div className="text-sm sm:text-base font-bold text-primary-navy leading-tight">
                      {s.title}
                    </div>
                    <div className={`text-xs sm:text-sm ${c.text} opacity-80`}>
                      {s.note}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Testimonial card */}
        <div className="mt-10 sm:mt-12">
          <div className="bg-gradient-to-br from-secondary-light-blue/20 to-secondary-coral/20 rounded-2xl p-5 sm:p-7 lg:p-8 border border-gray-100">
            <div className="grid md:grid-cols-[auto,1fr] gap-4 sm:gap-6 items-start">
              {/* Avatar placeholder */}
              <Avatar imageUrl="/images/team/Tiffany.png" iconName="user" />

              <div>
                <div className="text-3xl text-secondary-coral/30 font-serif leading-none mb-2">
                  “
                </div>
                <blockquote className="text-gray-800 sm:text-lg leading-relaxed">
                  I started as a Support Worker with no experience. With
                  training, great mentors, and clear progression, I became a
                  Registered Manager and stepped up to Area Manager. If you care
                  about people, this is a place to grow.
                </blockquote>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                  <span className="font-bold text-primary-navy">
                    Tiffany Spriggs
                  </span>
                  <span className="text-gray-500">Area Manager</span>
                  <span className="text-gray-400">•</span>
                  <span className={`${c.text}`}>10 years at M&amp;D Care</span>
                </div>
                <div className="mt-4">
                  <span
                    className={`inline-flex items-center ${c.bgSoft} ${c.text} px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold`}
                  >
                    No experience required - full training provided
                  </span>
                </div>
              </div>
            </div>

            {/* Subtle bottom CTA */}
            <div className="mt-6 sm:mt-8 text-center">
              <a
                href="#apply"
                className={`${c.bg} text-primary-navy inline-flex items-center px-5 sm:px-6 py-3 rounded-xl font-bold hover:bg-primary-gold/90 transition-colors shadow`}
              >
                Start your journey
                <Icon name="arrow-right" className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
