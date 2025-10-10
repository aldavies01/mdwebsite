import CareersHero from "../components/careers/CareersHero";
import BenefitsGrid from "../components/careers/BenefitsGrid";
import FeaturedRoles from "../components/careers/FeaturedRoles";
import JourneyTimeline from "../components/careers/JourneyTimeline";
import CultureSection from "../components/careers/CultureSection";
import CareersCTA from "../components/careers/CareersCTA";
import SupportPathway from "../components/careers/SupportPathway";

function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
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
