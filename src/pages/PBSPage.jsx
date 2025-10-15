// PBSPage.jsx
import PBSAdvantagesSection from "../components/pbs/PBSAdvantages";
import PBSHeroSection from "../components/pbs/PBSHero";
import PBSWhatIsSection from "../components/pbs/PBSWhatIsSection";
import PBSImplementationSection from "../components/pbs/PBSImplementationSection";
import PBSCallToActionSection from "../components/pbs/PBSCta";
import PBSTeamStructureSection from "../components/pbs/PBSTeamStructure";
import PBSEnvironmentSection from "../components/pbs/PBSEnvironmentSection";
import SEO from "../components/SEO";

function PositiveBehaviourSupportPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Positive Behaviour Support (PBS)"
        description="Learn how M&D Care applies Positive Behaviour Support to improve quality of life, promote independence, and create meaningful outcomes for the people we support."
        path="/services/pbs"
        // image optional — add later if you design an OG banner
      />

      <PBSHeroSection />
      <PBSWhatIsSection />
      <PBSImplementationSection />
      <PBSEnvironmentSection />
      <PBSTeamStructureSection />
      <PBSAdvantagesSection />
      <PBSCallToActionSection />
    </div>
  );
}

export default PositiveBehaviourSupportPage;
