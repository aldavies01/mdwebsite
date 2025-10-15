// src/pages/BenefitsPage.jsx
import BenefitsHero from "../components/benefits/BenefitsHero";
import BenefitsOverview from "../components/benefits/BenefitsOverview";
import BenefitsCategories from "../components/benefits/BenefitsCategories";
import TestimonialsSection from "../components/benefits/TestimonialsSection";
import ComparisonTable from "../components/benefits/ComparisonTable";
import FAQSection from "../components/benefits/FAQSection";
import BenefitsCTA from "../components/benefits/BenefitsCTA";

function BenefitsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
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
