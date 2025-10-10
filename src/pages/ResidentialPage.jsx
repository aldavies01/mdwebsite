import ServiceOverview from "../components/common/ServiceOverview";
import HomesGrid from "../components/common/HomesGrid";
import Icon from "../components/common/Icon";

// use the derived list (no duplication)
import { residentialHomes } from "../data/residential.index";

// page copy/meta lives here
import {
  serviceOverviewData as overviewData,
  homesGridData,
} from "../data/residential.meta";

function ResidentialPage() {
  const overview = {
    ...overviewData,
    valuePropositions: overviewData.valuePropositions.map((v) => ({
      ...v,
      icon: <Icon name={v.icon} className="w-6 h-6 text-secondary-coral" />,
    })),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-primary-navy text-white py-20">
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Residential Care
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Our Residential <br />
            <span className="text-primary-gold">Care Homes</span>
          </h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
            Discover our network of residential care homes across Wales, each
            providing safe, comfortable environments with 24/7 professional
            support tailored to individual needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary-gold text-primary-navy px-8 py-4 rounded-xl font-semibold hover:bg-primary-gold/90 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Find the Right Home
            </a>
            <a
              href="/referrals"
              className="bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-secondary-coral transition-all duration-300"
            >
              Make a Referral
            </a>
          </div>
        </div>
      </section>
      {/* What Makes Our Residential Care Special */}
      <ServiceOverview {...overview} />

      <HomesGrid
        {...homesGridData}
        homes={residentialHomes}
        linkPrefix="/services/residential"
      />
      {/* Call to Action */}
      <section className="py-20 bg-primary-navy text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Find the Perfect Residential Home
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Each of our residential homes offers unique benefits and specialized
            care. Contact us to discuss which location would be the best fit for
            your needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary-gold text-primary-navy px-8 py-4 rounded-xl font-semibold hover:bg-primary-gold/90 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Schedule a Visit
            </a>
            <a
              href="/referrals"
              className="bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-navy transition-all duration-300"
            >
              Make a Referral
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResidentialPage;
