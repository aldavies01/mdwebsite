import {
  achievements,
  awardCategories,
  majorAwards,
  awardGallery,
  awardPartners,
} from "../data/awards.constants";
import AwardsHero from "../components/awards/AwardsHero";
import AwardCategoryGrid from "../components/awards/AwardCategoryGrid";
import { AwardCard } from "../components/awards/AwardCard";
import ImpactQuote from "../components/awards/ImpactQuote";
import RecognitionWall from "../components/awards/RecognitionWall";
import { AwardsLogoMarquee } from "../components/awards/AwardsLogoMarquee";
import { AwardsGalleryStrip } from "../components/awards/AwardsGalleryStrip";
import { PhotoMosaic } from "../components/awards/PhotoMosaic";
import AwardsCTA from "../components/awards/AwardsCTA";

export default function AwardsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero (you can optionally add <ConfettiLayer /> inside the hero) */}
      <AwardsHero achievements={achievements} />

      {/* Partner / Award logos marquee */}
      <AwardsLogoMarquee items={awardPartners} />

      {/* Photo gallery strip for instant energy */}
      <AwardsGalleryStrip images={awardGallery} />

      {/* Broad, flexible categories */}
      <AwardCategoryGrid categories={awardCategories} />

      {/* Optional: Big highlight cards */}
      {Array.isArray(majorAwards) && majorAwards.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-white to-secondary-light-blue/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
            {majorAwards.map((a) => (
              <AwardCard key={a.id} award={a} />
            ))}
          </div>
        </section>
      )}

      {/* Celebration mosaic */}
      <PhotoMosaic images={awardGallery} />

      {/* Stats wall */}
      <RecognitionWall achievements={achievements} />

      {/* Quote + CTA */}
      <ImpactQuote />
      <AwardsCTA />
    </div>
  );
}
