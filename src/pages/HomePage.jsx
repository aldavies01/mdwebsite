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

      <WhyMDCare
        // items={[
        //   {
        //     img: "/images/stock/stock-1.jpg",
        //     alt: "Croft House residential home",
        //     reason: "Specialist, person-centred care",
        //     text: "PBS-led support and outcomes that matter to the individual.",
        //     tags: ["PBS", "Co-production"],
        //   },
        //   {
        //     img: "/images/stock/stock-2.jpg",
        //     alt: "Supported Living lounge",
        //     reason: "Independence first",
        //     text: "Skill-building and community connection at the person’s pace.",
        //     tags: ["Skills", "Community"],
        //   },
        //   {
        //     img: "/images/stock/stock-3.jpg",
        //     alt: "Community Outreach",
        //     reason: "Joined-up working",
        //     text: "We partner with families, commissioners and clinicians.",
        //     tags: ["Partnership", "Continuity"],
        //   },
        //   {
        //     img: "/images/stock/stock-4.jpg",
        //     alt: "Our professional care team",
        //     reason: "Experienced teams",
        //     text: "Values-driven staff with continuous training and supervision.",
        //     tags: ["Training", "Safeguarding"],
        //   },
        // ]}
        ctaHref="/about"
        ctaText="See how we work"
      />
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
