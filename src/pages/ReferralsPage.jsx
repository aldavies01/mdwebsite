import AssessmentCarousel from "../components/referrals/AssessmentCarousel";
import ReferralsHero from "../components/referrals/ReferralsHero";
import MeetTheReferralTeam from "../components/referrals/MeetTheReferralTeam";
import HowWeSupportYou from "../components/referrals/HowWeSupportYou";
import NextStep from "../components/referrals/NextStep";

function ReferralsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ReferralsHero />
      <MeetTheReferralTeam />
      <HowWeSupportYou />
      <AssessmentCarousel />
      <NextStep />
    </div>
  );
}

export default ReferralsPage;
