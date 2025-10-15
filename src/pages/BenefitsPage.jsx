// src/pages/BenefitsPage.jsx
import BenefitsHero from "../components/benefits/BenefitsHero";
import BenefitsOverview from "../components/benefits/BenefitsOverview";
import BenefitsCategories from "../components/benefits/BenefitsCategories";
import TestimonialsSection from "../components/benefits/TestimonialsSection";
import ComparisonTable from "../components/benefits/ComparisonTable";
import FAQSection from "../components/benefits/FAQSection";
import BenefitsCTA from "../components/benefits/BenefitsCTA";
import SEO from "../components/SEO"; // ✅ add this

function BenefitsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ✅ SEO tags */}
      <SEO
        title="Benefits"
        description="Explore M&D Care employee benefits: funded QCF qualifications, comprehensive induction and ongoing training, career progression, and wellbeing support."
        path="/careers/benefits"
        // image optional—add if/when you have a banner, e.g. image="/images/og-benefits.jpg"
      />

      <BenefitsHero />
      <BenefitsOverview />
      <BenefitsCategories />
      <TestimonialsSection />
      {/* <ComparisonTable /> */}
      <FAQSection />
      <BenefitsCTA />
    </div>
  );
}

export default BenefitsPage;
