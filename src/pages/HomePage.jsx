import HeroCarousel from "../components/layout/HeroCarousel";
import CompanyOverview from "../components/common/CompanyOverview";
import ServicesSection from "../components/common/ServicesSection";
import StatsBanner from "../components/common/StatsBanner";
import JoinOurTeam from "../components/common/JoinOurTeam";
import CompanyNews from "../components/common/CompanyNews";

function HomePage() {
  return (
    <>
      <HeroCarousel />
      <CompanyOverview />
      <ServicesSection />
      <StatsBanner />
      <JoinOurTeam />
      <CompanyNews />
    </>
  );
}

export default HomePage;
