// src/pages/LearningDevelopmentPage.jsx
import LearningHero from "../components/learning/LearningHero";
import LearningPhilosophy from "../components/learning/LearningPhilosophy";
import TrainingApproaches from "../components/learning/TrainingApproaches";
import CareerPathways from "../components/learning/CareerPathways";
import ClassroomTraining from "../components/learning/ClassroomTraining";
import QCFStandards from "../components/learning/QCFStandards";
import LearningCTA from "../components/learning/LearningCTA";
import SEO from "../components/SEO";

function LearningDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Learning & Development"
        description="Explore how M&D Care invests in continuous learning and professional growth. From funded QCF qualifications to leadership training, we’re committed to developing our people."
        path="/about/learning-and-development"
        // image optional — add later if you design an OG banner
      />
      <LearningHero />
      <LearningPhilosophy />
      <TrainingApproaches />
      <CareerPathways />
      <ClassroomTraining />
      <QCFStandards />
      <LearningCTA />
    </div>
  );
}

export default LearningDevelopmentPage;
