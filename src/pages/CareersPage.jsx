import CareersHero from "../components/careers/CareersHero";
import BenefitsGrid from "../components/careers/BenefitsGrid";
import FeaturedRoles from "../components/careers/FeaturedRoles";
import JourneyTimeline from "../components/careers/JourneyTimeline";
import CultureSection from "../components/careers/CultureSection";
import CareersCTA from "../components/careers/CareersCTA";
import SupportPathway from "../components/careers/SupportPathway";
import SEO from "../components/SEO";

function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Careers"
        description="Join M&D Care and build a rewarding career in social care. We offer professional development, supported learning, and a culture that values every team member."
        path="/careers"
        // image optional — add later if you design an OG banner
      />
      <CareersHero />
      <BenefitsGrid />
      <FeaturedRoles />
      <JourneyTimeline />
      <CultureSection />
      <SupportPathway />
      <CareersCTA />
    </div>
  );
}

export default CareersPage;
