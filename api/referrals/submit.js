import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s || ""));

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  // Must-have envs for DB; email is optional (won't block insert)
  const missing = ["SUPABASE_URL", "SUPABASE_SECRET_KEY"].filter(
    (k) => !process.env[k]
  );
  if (missing.length) {
    return res
      .status(500)
      .json({ error: "Missing environment variables", missing });
  }

  // Parse & validate
  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ error: "Invalid JSON payload" });
    }
  }
  body = body || {};

  if (!body.referrer_name?.trim() || !isEmail(body.referrer_email)) {
    return res
      .status(400)
      .json({ error: "Missing/invalid referrer name or email" });
  }
  if (!body.first_name?.trim() || !body.last_name?.trim()) {
    return res.status(400).json({ error: "First and last name are required" });
  }

  const dob = body.date_of_birth
    ? String(body.date_of_birth).slice(0, 10)
    : null;

  const row = {
    referrer_name: body.referrer_name,
    referrer_email: body.referrer_email,
    referrer_phone: body.referrer_phone || null,
    referrer_role: body.referrer_role || null,
    referrer_org: body.referrer_org || null,
    first_name: body.first_name,
    last_name: body.last_name,
    date_of_birth: dob,
    gender: body.gender || null,
    primary_needs: body.primary_needs || null,
    support_type: body.support_type || null,
    urgency: body.urgency || "routine",
    current_location: body.current_location || null,
    consent_given: !!body.consent_given,
    data_consent: !!body.data_consent,
    source_page: body.source_page || null,
    ip_address:
      req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
      req.socket?.remoteAddress ||
      null,
    user_agent: req.headers["user-agent"] || null,
  };

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SECRET_KEY,
    {
      auth: { persistSession: false },
    }
  );

  // Try insert and always return the supabase error details if it fails
  const { data, error } = await supabase
    .from("referrals")
    .insert([row])
    .select("id, created_at")
    .single();

  if (error) {
    return res.status(500).json({
      error: "Database insert failed",
      code: error.code,
      message: error.message,
      details: error.details,
      hint: error.hint,
      // keep the row keys to spot a bad column name quickly
      inserted_keys: Object.keys(row),
    });
  }

  // Email is best-effort (skip if not fully configured)
  try {
    if (
      process.env.RESEND_API_KEY &&
      process.env.EMAIL_FROM &&
      process.env.BDM_EMAIL_TO
    ) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: process.env.EMAIL_FROM, // verified sender in Resend
        to: [process.env.BDM_EMAIL_TO],
        subject: `New referral: ${row.first_name} ${row.last_name} (${row.urgency})`,
        html: `
          <h2>New Referral</h2>
          <p><strong>Submitted:</strong> ${new Date().toISOString()}</p>
          <h3>Referrer</h3>
          <ul>
            <li>${row.referrer_name} &lt;${row.referrer_email}&gt;</li>
            ${row.referrer_phone ? `<li>Phone: ${row.referrer_phone}</li>` : ""}
            ${row.referrer_role ? `<li>Role: ${row.referrer_role}</li>` : ""}
            ${row.referrer_org ? `<li>Organisation: ${row.referrer_org}</li>` : ""}
          </ul>
          <h3>Person Referred</h3>
          <ul>
            <li>${row.first_name} ${row.last_name}</li>
            <li>DOB: ${row.date_of_birth ?? "-"}</li>
            <li>Gender: ${row.gender ?? "-"}</li>
            <li>Urgency: ${row.urgency}</li>
            <li>Current location: ${row.current_location ?? "-"}</li>
            <li>Support type: ${row.support_type ?? "-"}</li>
            <li>Primary needs: ${row.primary_needs ?? "-"}</li>
          </ul>
          <h3>Consent</h3>
          <ul>
            <li>Consent given: ${row.consent_given ? "Yes" : "No"}</li>
            <li>Data consent: ${row.data_consent ? "Yes" : "No"}</li>
          </ul>
          <p><small>ID: ${data.id} • ${data.created_at}</small></p>
        `.trim(),
        reply_to: row.referrer_email || undefined,
      });
    }
  } catch {
    /* ignore email errors */
  }

  return res.status(201).json({ id: data.id, created_at: data.created_at });
}
