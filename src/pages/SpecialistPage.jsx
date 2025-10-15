import ServiceOverview from "../components/common/ServiceOverview";
import HomesGrid from "../components/common/HomesGrid";
import Icon from "../components/common/Icon";
import SEO from "../components/SEO";

import { specialistHomes } from "../data/specialist.index";
import {
  serviceOverviewData as overviewData,
  homesGridData,
} from "../data/specialist.meta";

function SpecialistPage() {
  const overview = {
    ...overviewData,
    valuePropositions: overviewData.valuePropositions.map((v) => ({
      ...v,
      icon: <Icon name={v.icon} className="w-6 h-6 text-secondary-purple" />,
    })),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Specialist Care Services"
        description="Learn about M&D Care’s specialist care services, supporting individuals with complex mental health, learning disabilities, and autism through personalised, evidence-based approaches."
        path="/services/specialist-care"
        // image optional — add later if you design an OG banner
      />

      {/* Hero Section */}
      <section className="relative bg-primary-navy text-white py-20">
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Specialist Care
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Expert Support for <br />
            <span className="text-primary-gold">Complex Needs</span>
          </h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
            Our specialist care services provide intensive, professional support
            for individuals with complex health, behavioral, and developmental
            needs in purpose-designed therapeutic environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary-gold text-primary-navy px-8 py-4 rounded-xl font-semibold hover:bg-primary-gold/90 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Discuss Specialist Care
            </a>
            <a
              href="/referrals"
              className="bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-secondary-purple transition-all duration-300"
            >
              Make a Referral
            </a>
          </div>
        </div>
      </section>

      {/* What Makes Our Specialist Care Special */}
      <ServiceOverview {...overview} />

      {/* Specialist Homes Grid */}
      <HomesGrid
        {...homesGridData}
        homes={specialistHomes}
        linkPrefix="/services/specialist-care"
      />

      {/* Call to Action */}
      <section className="py-20 bg-primary-navy text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Find the Right Specialist Care
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Our specialist facilities are designed for individuals with complex
            needs requiring expert care and therapeutic intervention. Contact us
            to discuss the best placement options.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary-gold text-primary-navy px-8 py-4 rounded-xl font-semibold hover:bg-primary-gold/90 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Schedule Assessment
            </a>
            <a
              href="/referrals"
              className="bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-navy transition-all duration-300"
            >
              Professional Referral
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SpecialistPage;
