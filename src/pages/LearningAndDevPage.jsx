// src/pages/LearningDevelopmentPage.jsx
import LearningHero from "../components/learning/LearningHero";
import LearningPhilosophy from "../components/learning/LearningPhilosophy";
import TrainingApproaches from "../components/learning/TrainingApproaches";
import CareerPathways from "../components/learning/CareerPathways";
import ClassroomTraining from "../components/learning/ClassroomTraining";
import QCFStandards from "../components/learning/QCFStandards";
import LearningCTA from "../components/learning/LearningCTA";

function LearningDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
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
