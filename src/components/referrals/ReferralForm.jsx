import { useState } from "react";

function ReferralForm() {
  const [formData, setFormData] = useState({
    // Referrer Information
    referrer_name: "",
    referrer_role: "",
    referrer_org: "",
    referrer_email: "",
    referrer_phone: "",

    // Individual Being Referred
    first_name: "",
    last_name: "",
    date_of_birth: "",
    gender: "",

    // Support Needs
    primary_needs: "",
    support_type: "",
    urgency: "routine",
    current_location: "",

    // Consent
    consent_given: false,
    data_consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  // Basic validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.referrer_name.trim()) newErrors.referrer_name = "Required";
    if (!formData.referrer_email.trim()) newErrors.referrer_email = "Required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("submitted");

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/referrals/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        // Clear form
        setFormData({
          referrer_name: "",
          referrer_role: "",
          referrer_org: "",
          referrer_email: "",
          referrer_phone: "",
          first_name: "",
          last_name: "",
          date_of_birth: "",
          gender: "",
          primary_needs: "",
          support_type: "",
          urgency: "routine",
          current_location: "",
          consent_given: false,
          data_consent: false,
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary-navy mb-4">
          Professional Referral Form
        </h1>
        <p className="text-gray-600">
          All information is securely encrypted and transmitted to our Business
          Development team
        </p>
      </div>

      {submitStatus === "success" ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
          <div className="text-green-600 mb-4">
            <svg
              className="w-16 h-16 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-green-800 mb-2">
            Referral Submitted Successfully
          </h2>
          <p className="text-green-700 mb-6">
            Thank you for your referral. Our Business Development team will
            review it and contact you within 24 hours.
          </p>
          <button
            onClick={() => setSubmitStatus(null)}
            className="bg-primary-navy text-white px-6 py-3 rounded-lg hover:bg-primary-navy/90 transition-colors"
          >
            Submit Another Referral
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div onSubmit={handleSubmit}>
            {/* Referrer Information Section */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-primary-navy mb-4 border-b border-gray-200 pb-2">
                Your Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="referrer_name"
                    value={formData.referrer_name}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-navy ${
                      errors.referrer_name
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    required
                  />
                  {errors.referrer_name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.referrer_name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Role/Position
                  </label>
                  <input
                    type="text"
                    name="referrer_role"
                    value={formData.referrer_role}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-navy"
                    placeholder="e.g., Social Worker, Care Coordinator"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Organization
                  </label>
                  <input
                    type="text"
                    name="referrer_org"
                    value={formData.referrer_org}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-navy"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="referrer_email"
                    value={formData.referrer_email}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-navy ${
                      errors.referrer_email
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    required
                  />
                  {errors.referrer_email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.referrer_email}
                    </p>
                  )}
                </div>
              </div>
            </div>
            {/* Individual Being Referred Section */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-primary-navy mb-4 border-b border-gray-200 pb-2">
                Individual Being Referred
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-navy ${
                      errors.first_name ? "border-red-500" : "border-gray-300"
                    }`}
                    required
                  />
                  {errors.first_name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.first_name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-navy ${
                      errors.last_name ? "border-red-500" : "border-gray-300"
                    }`}
                    required
                  />
                  {errors.last_name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.last_name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="date_of_birth"
                    value={formData.date_of_birth}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-navy"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-navy"
                  >
                    <option value="">Select...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="non-binary">Non-binary</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">* Required fields</p>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="bg-primary-navy text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-navy/90 focus:outline-none focus:ring-2 focus:ring-primary-navy focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? "Submitting..." : "Submit Referral"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReferralForm;
