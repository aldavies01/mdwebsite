// src/pages/ServicesPage.jsx
import ServicesHero from "../components/services/ServicesHero";
import ServiceDetail from "../components/services/ServiceDetail";
import AdditionalServiceCard from "../components/services/AdditionalServiceCard";
import ServicesCTA from "../components/services/ServicesCTA";
import MediaCard from "../components/common/MediaCard";
import Icon from "../components/common/Icon";

import { services, additionalServices } from "../data/services.constants";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <ServicesHero />

      {/* FEATURED VIDEO */}
      <section className="relative -mt-10 pb-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-7">
              <MediaCard
                title="Our Approach to Care"
                description="See how our teams deliver person-centred support across residential, specialist, and supported living services."
                poster="/images/thumbnail/thumbnail-1.png"
                src="/videos/intro.mp4"
                provider="file"
                className="shadow-2xl"
              />
            </div>
            <div className="md:col-span-5">
              <div className="h-full rounded-3xl bg-white/70 backdrop-blur border border-white/30 p-8 shadow-xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary-gold/15 px-3 py-1 text-sm font-semibold text-primary-navy ring-1 ring-primary-gold/20">
                  <Icon name="play" className="h-4 w-4 text-primary-navy" />
                  Watch & Learn
                </div>
                <h2 className="mt-4 text-3xl font-extrabold text-primary-navy tracking-tight">
                  Care that feels like home - and delivers results
                </h2>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  From warm, homely environments to specialist therapeutic
                  settings, our services are designed to help people thrive.
                  Explore the different pathways below.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-secondary-coral" />
                    Residential Care with 24/7 professional support
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-secondary-purple" />
                    Specialist Care for complex needs & therapeutic
                    interventions
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-secondary-teal" />
                    Supported Living that builds independence and life skills
                  </li>
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="/contact"
                    className="inline-flex items-center rounded-xl bg-primary-gold px-5 py-3 font-semibold text-primary-navy shadow hover:scale-[1.02] transition"
                  >
                    Talk to our team
                    <Icon name="arrow-right" className="ml-2 h-4 w-4" />
                  </a>
                  <a
                    href="/referrals"
                    className="inline-flex items-center rounded-xl border-2 border-primary-navy/20 bg-white px-5 py-3 font-semibold text-primary-navy hover:bg-primary-navy hover:text-white transition"
                  >
                    Make a referral
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {services.map((service, index) => (
            <ServiceDetail key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* ADDITIONAL SERVICES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-gold/15 px-3 py-1 text-sm font-semibold text-primary-navy ring-1 ring-primary-gold/20">
                <Icon name="star" className="h-4 w-4" />
                More ways we can help
              </div>
              <h2 className="mt-3 text-3xl font-extrabold text-primary-navy tracking-tight">
                Additional Services & Support
              </h2>
            </div>
            <a
              href="/contact"
              className="hidden sm:inline-flex items-center rounded-xl border-2 border-primary-navy/20 bg-white px-5 py-3 font-semibold text-primary-navy hover:bg-primary-navy hover:text-white transition"
            >
              Ask about availability
              <Icon name="arrow-right" className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((s, i) => (
              <AdditionalServiceCard key={i} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ServicesCTA />
    </div>
  );
}
