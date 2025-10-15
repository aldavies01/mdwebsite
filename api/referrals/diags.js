import { createClient } from "@supabase/supabase-js";

function bool(v) {
  return !!(v && String(v).length);
}

export default async function handler(req, res) {
  try {
    const envReport = {
      SUPABASE_URL: bool(process.env.SUPABASE_URL),
      SUPABASE_SECRET_KEY: bool(process.env.SUPABASE_SECRET_KEY), // must be the Service Role key
      RESEND_API_KEY: bool(process.env.RESEND_API_KEY),
      EMAIL_FROM: bool(process.env.EMAIL_FROM),
      BDM_EMAIL_TO: bool(process.env.BDM_EMAIL_TO),
      NODE_ENV: process.env.NODE_ENV || null,
      VERCEL_REGION: process.env.VERCEL_REGION || null,
    };

    // If supabase env missing, return early
    if (!envReport.SUPABASE_URL || !envReport.SUPABASE_SECRET_KEY) {
      return res
        .status(500)
        .json({
          ok: false,
          where: "env",
          env: envReport,
          hint: "Set SUPABASE_URL and SUPABASE_SECRET_KEY in Vercel > Settings > Environment Variables, then redeploy.",
        });
    }

    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SECRET_KEY,
      { auth: { persistSession: false } }
    );

    // Fetch 1 row (non-destructive) just to test access
    const { data: sample, error: selectError } = await supabase
      .from("referrals")
      .select("id, created_at")
      .limit(1);

    if (selectError) {
      return res
        .status(500)
        .json({
          ok: false,
          where: "db_select",
          env: envReport,
          error: selectError,
        });
    }

    // Ask Postgres for the table columns so we can confirm names match the payload
    const { data: cols, error: colsErr } = await supabase.rpc(
      "http_get_referrals_columns"
    ); // we'll fall back if this fn doesn't exist
    if (colsErr) {
      // fallback: query via information_schema with a raw SQL (use PostgREST)
      const { data: meta, error: metaErr } = await supabase
        .from("information_schema.columns")
        .select("column_name")
        .eq("table_schema", "public")
        .eq("table_name", "referrals");

      // Not fatal if this fails, but helpful when it works
      return res.status(200).json({
        ok: true,
        env: envReport,
        sampleCount: sample?.length ?? 0,
        columns: meta?.map((r) => r.column_name) || null,
        columns_error: metaErr || null,
      });
    }

    return res
      .status(200)
      .json({
        ok: true,
        env: envReport,
        sampleCount: sample?.length ?? 0,
        columns: cols,
      });
  } catch (e) {
    return res.status(500).json({ ok: false, error: String(e?.message || e) });
  }
}
