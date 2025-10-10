// PBSPage.jsx
import PBSAdvantagesSection from "../components/pbs/PBSAdvantages";
import PBSHeroSection from "../components/pbs/PBSHero";
import PBSWhatIsSection from "../components/pbs/PBSWhatIsSection";
import PBSImplementationSection from "../components/pbs/PBSImplementationSection";
import PBSCallToActionSection from "../components/pbs/PBSCta";
import PBSTeamStructureSection from "../components/pbs/PBSTeamStructure";
import PBSEnvironmentSection from "../components/pbs/PBSEnvironmentSection";

function PositiveBehaviourSupportPage() {
  return (
    <div className="min-h-screen bg-gray-50">
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
