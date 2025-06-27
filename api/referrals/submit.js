import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Get the form data from the request
    const formData = req.body;

    // Basic validation
    if (!formData.referrer_name || !formData.referrer_email) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Save to database
    const { data, error } = await supabase.from("referrals").insert([formData]);

    if (error) {
      console.error("Database error:", error);
      return res.status(500).json({ error: "Database error" });
    }

    console.log("Referral saved successfully:", data);

    // Send email notification
    try {
      await resend.emails.send({
        from: "referrals@resend.dev", // Using Resend's test domain for now
        to: "a.ldavies@hotmail.co.uk",
        subject: "New Referral Received",
        text: `New referral from ${formData.referrer_name} for ${formData.first_name} ${formData.last_name}`,
      });
      console.log("Email sent successfully");
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      // Don't fail the whole request if email fails
    }

    return res.status(200).json({
      success: true,
      message: "Referral submitted successfully",
    });
  } catch (error) {
    console.error("Error processing referral:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
