// src/pages/AboutPage.jsx
import AboutHero from "../components/about/AboutHero";
import AboutCardsGrid from "../components/about/AboutCardsGrid";
import AboutStandards from "../components/about/AboutStandards";
import DirectorQuote from "../components/common/DirectorQuote";
import ServiceTimeline from "../components/common/ServiceTimeline";
import SEO from "../components/SEO";

function AboutPage() {
  const directorQuoteData = {
    quote:
      "At M&D Care, we started with a focus on mental health and forensic care, gaining deep insights into diverse perspectives and communication. As we expanded to include Asperger's and Autism support, we emphasised creating personalised care plans tailored to each individual, rather than focusing solely on diagnoses. Our uniquely motivated staff are dedicated to providing customised care, embodying our belief that 'Diagnosis is not a barrier.'",
    name: "Michelle Martin",
    title: "Company Developments Director",
    image: "/images/company/michelle.png",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ✅ SEO tags */}
      <SEO
        title="About Us"
        description="Learn about M&D Care’s story, values, and our commitment to providing high-quality, person-centred care across Wales."
        path="/about"
        image="/images/company/MD_Logo_Large.png"
      />

      {/* Page content */}
      <AboutHero />
      <AboutCardsGrid />
      <DirectorQuote {...directorQuoteData} />
      <AboutStandards />
      <ServiceTimeline />
    </div>
  );
}

export default AboutPage;
