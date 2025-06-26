import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Get the form data from the request
    const formData = req.body;

    // Basic validation
    if (
      !formData.referrer_name ||
      !formData.first_name ||
      !formData.last_name
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Save to database
    const { data, error } = await supabase.from("referrals").insert([formData]);

    if (error) {
      console.error("Database error:", error);
      return res.status(500).json({ error: "Database error" });
    }

    console.log("Referral saved successfully:", data);

    return res.status(200).json({
      success: true,
      message: "Referral submitted successfully",
    });
  } catch (error) {
    console.error("Error processing referral:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
