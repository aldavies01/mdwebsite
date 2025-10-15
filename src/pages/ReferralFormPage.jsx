import ReferralForm from "../components/referrals/ReferralForm";
import SEO from "../components/SEO";

function ReferralFormPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <SEO
        title="Referral Form"
        description="Submit a referral to M&D Care. Our secure online form makes it easy for professionals, families, and commissioners to refer individuals for specialist support across Wales."
        path="/referrals/form"
        // image optional — add later if you design an OG banner
      />

      <ReferralForm />
    </div>
  );
}

export default ReferralFormPage;
