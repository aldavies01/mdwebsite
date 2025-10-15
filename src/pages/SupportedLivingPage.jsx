// src/pages/SupportedLivingPage.jsx
import ServiceOverview from "../components/common/ServiceOverview";
import HomesGrid from "../components/common/HomesGrid";
import Icon from "../components/common/Icon";
import { supportedLivingHomes } from "../data/supported-living.index";
import {
  serviceOverviewData as overviewDataRaw,
  homesGridData,
} from "../data/supported-living.meta";
import SEO from "../components/SEO";
import { hero, keyFeatures, cta } from "../data/supported-living.meta";

export default function SupportedLivingPage() {
  // Adapt your keyFeatures into the valuePropositions shape
  const valuePropositions = keyFeatures.map((f) => ({
    title: f.title,
    description: f.description,
    // We’ll inject the Icon element below like ResidentialPage does
    icon: f.icon,
    // Optional: carry through color if your ServiceOverview supports it
    color: f.color,
  }));

  const overview = {
    ...(overviewDataRaw || {}),
    // Prefer any existing valuePropositions from your meta file,
    // otherwise fall back to mapped keyFeatures:
    valuePropositions: (
      overviewDataRaw?.valuePropositions || valuePropositions
    ).map((v) => ({
      ...v,
      icon: <Icon name={v.icon} className="w-6 h-6 text-secondary-coral" />,
    })),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Supported Living Services"
        description="Discover M&D Care’s supported living services, empowering individuals to live independently with personalised support in safe and inclusive community settings across Wales."
        path="/services/supported-living"
        // image optional — add later if you design an OG banner
      />

      {/* Hero Section — aligned with Residential */}
      <section className="relative bg-primary-navy text-white py-20">
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            {hero?.badge || "Supported Living"}
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {hero?.titleMain || "Our Supported"} <br />
            <span className="text-primary-gold">
              {hero?.titleHighlight || "Living Services"}
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
            {hero?.blurb ||
              "Specialist support that balances independence with safety and structure, so people can thrive in their own homes within the community."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {(hero?.ctas?.length
              ? hero.ctas
              : [
                  {
                    label: "Discuss Your Needs",
                    href: "/contact",
                    primary: true,
                  },
                  {
                    label: "Make a Referral",
                    href: "/referrals",
                    primary: false,
                  },
                ]
            ).map((b, i) =>
              b.primary ? (
                <a
                  key={i}
                  href={b.href}
                  className="bg-primary-gold text-primary-navy px-8 py-4 rounded-xl font-semibold hover:bg-primary-gold/90 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  {b.label}
                </a>
              ) : (
                <a
                  key={i}
                  href={b.href}
                  className="bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-secondary-coral transition-all duration-300"
                >
                  {b.label}
                </a>
              )
            )}
          </div>
        </div>
      </section>

      {/* What Makes Our Supported Living Special — reuse ServiceOverview */}
      <ServiceOverview {...overview} />

      {/* Locations/Services Grid — mirrors Residential HomesGrid */}
      <HomesGrid
        {...homesGridData}
        homes={supportedLivingHomes}
        linkPrefix="/services/supported-living"
      />

      {/* CTA Section — matches Residential styling */}
      <section className="py-20 bg-primary-navy text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {cta?.title || "Find the Right Supported Living Option"}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            {cta?.text ||
              "We tailor support around the person, their goals, and their community. Talk to our team to find the best fit."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {(cta?.buttons?.length
              ? cta.buttons
              : [
                  {
                    label: "Talk to Our Team",
                    href: "/contact",
                    primary: true,
                  },
                  {
                    label: "Make a Referral",
                    href: "/referrals",
                    primary: false,
                  },
                ]
            ).map((b, i) =>
              b.primary ? (
                <a
                  key={i}
                  href={b.href}
                  className="bg-primary-gold text-primary-navy px-8 py-4 rounded-xl font-semibold hover:bg-primary-gold/90 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  {b.label}
                </a>
              ) : (
                <a
                  key={i}
                  href={b.href}
                  className="bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-navy transition-all duration-300"
                >
                  {b.label}
                </a>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
