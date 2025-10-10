// src/components/careers/CareersCTA.jsx
import { rolesData } from "../../data/roles";

export default function CareersCTA() {
  const { cta } = rolesData;

  return (
    <section id="apply" className="py-12 sm:py-16 bg-primary-navy text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
          {cta.title || "Ready to Make a Difference?"}
        </h2>

        <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-12 leading-relaxed">
          {cta.description ||
            "Join our team and start a career where every day brings the opportunity to positively impact someone's life."}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-12">
          <a
            href={cta.primaryButton.link}
            target="_blank"
            rel="noreferrer"
            className="bg-primary-gold text-primary-navy px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-primary-gold/90 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            {cta.primaryButton.text}
          </a>

          {cta.secondaryButton?.link && (
            <a
              href={cta.secondaryButton.link}
              className="bg-white/10 text-white border-2 border-white/30 px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-white hover:text-primary-navy transition-all duration-300"
            >
              {cta.secondaryButton.text}
            </a>
          )}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 inline-block max-w-md mx-auto">
          <p className="text-white/90 mb-2 text-sm sm:text-base">
            Questions about careers at M&amp;D Care?
          </p>
          <p className="text-primary-gold font-semibold text-sm sm:text-base">
            📧 {cta.contact.email} &nbsp;|&nbsp; 📞 {cta.contact.phone}
          </p>
        </div>
      </div>
    </section>
  );
}
