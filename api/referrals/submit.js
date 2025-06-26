export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Get the form data from the request
    const formData = req.body;

    // Basic validation
    if (!formData.referrerName || !formData.firstName || !formData.lastName) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // For now, just return success
    // (We'll add database and email functionality next)

    console.log(
      "Received referral:",
      formData.referrerName,
      "referring",
      formData.firstName
    );

    return res.status(200).json({
      success: true,
      message: "Referral received successfully",
    });
  } catch (error) {
    console.error("Error processing referral:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
