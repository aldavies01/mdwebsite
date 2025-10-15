import AssessmentCarousel from "../components/referrals/AssessmentCarousel";
import ReferralsHero from "../components/referrals/ReferralsHero";
import MeetTheReferralTeam from "../components/referrals/MeetTheReferralTeam";
import HowWeSupportYou from "../components/referrals/HowWeSupportYou";
import NextStep from "../components/referrals/NextStep";
import SEO from "../components/SEO";

function ReferralsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Referrals"
        description="Learn how to make a referral to M&D Care. We provide clear guidance for professionals, families, and local authorities to ensure a smooth, person-centred referral process."
        path="/referrals"
        // image optional — add later if you design an OG banner
      />

      <ReferralsHero />
      <MeetTheReferralTeam />
      <HowWeSupportYou />
      <AssessmentCarousel />
      <NextStep />
    </div>
  );
}

export default ReferralsPage;
