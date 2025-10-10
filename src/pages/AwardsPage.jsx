import { achievements, awardCategories } from "../data/awards.constants";
import AwardsHero from "../components/awards/AwardsHero";
import AwardCategoryGrid from "../components/awards/AwardsCategoryGrid";
import AwardsTimeline from "../components/awards/AwardsTimeLine"; // optional highlights
import ImpactQuote from "../components/awards/ImpactQuote";
import RecognitionWall from "../components/awards/RecognitionWall";
import AwardsCTA from "../components/awards/AwardsCTA";

export default function AwardsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <AwardsHero achievements={achievements} />

      {/* Broad, flexible categories you can easily update */}
      <AwardCategoryGrid categories={awardCategories} />

      {/* Stats wall */}
      <RecognitionWall achievements={achievements} />

      {/* Quote + CTA */}
      <ImpactQuote />
      <AwardsCTA />
    </div>
  );
}
