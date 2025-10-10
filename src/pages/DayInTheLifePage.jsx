// src/pages/DayInTheLifePage.jsx
import DayInLifeHero from "../components/dayInLife/DayInLifeHero";
import TimelineOverview from "../components/dayInLife/TimelineOverview";
import MorningRoutine from "../components/dayInLife/MorningRoutine";
import MiddayActivities from "../components/dayInLife/MiddayActivities";
import AfternoonSupport from "../components/dayInLife/AfternoonSupport";
import EveningHandover from "../components/dayInLife/EveningHandover";
import StaffTestimonial from "../components/dayInLife/StaffTestimonial";
import WhyYoullLoveIt from "../components/dayInLife/WhyYoullLoveIt";
import DayInLifeCTA from "../components/dayInLife/DayInLifeCTA";
import { ShiftProvider } from "../components/dayInLife/ShiftContext";

function DayInTheLifePage() {
  return (
    <ShiftProvider initial="day">
      <DayInLifeHero />
      <TimelineOverview />
      <MorningRoutine />
      <MiddayActivities />
      <AfternoonSupport />
      <EveningHandover />
      <StaffTestimonial />
      <WhyYoullLoveIt />
      <DayInLifeCTA />
    </ShiftProvider>
  );
}

export default DayInTheLifePage;
