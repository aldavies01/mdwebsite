import SEO from "../components/SEO";
import HeroCarousel from "../components/layout/HeroCarousel";
import CompanyOverview from "../components/common/CompanyOverview";
import ServicesSection from "../components/common/ServicesSection";
import StatsBanner from "../components/common/StatsBanner";
import JoinOurTeam from "../components/common/JoinOurTeam";
import CompanyNews from "../components/common/CompanyNews";
import HeroSectionTest from "../components/test/HeroSectionTest";
import WhyMDCare from "../components/common/WhyMDCare";

function HomePage() {
  return (
    <>
      <SEO
        title="Home"
        description="Specialist adult social care across Wales."
        path="/"
        image="/images/company/MD_Logo_Large.png"
      />

      {/* <HeroCarousel /> */}
      <HeroSectionTest />
      {/* Cards first (no bottom padding) */}
      <ServicesSection
        showCards
        showMap={false}
        bottomPadding={false}
        // colorVariant="tint"
        newDevsImages={[
          "/images/residential/Ty Gwerthfawr.jpeg",
          "/images/residential/Ty Gwerthfawr.jpeg",
        ]}
      />

      <WhyMDCare ctaHref="/about" ctaText="See how we work" />
      {/* Map next (no top padding) */}
      <ServicesSection showCards={false} showMap={true} topPadding={true} />
      <CompanyOverview />
      <StatsBanner />
      <JoinOurTeam />
      <CompanyNews />
    </>
  );
}

export default HomePage;
