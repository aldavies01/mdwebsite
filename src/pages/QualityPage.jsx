import React from "react";
import SEO from "../components/SEO";
import Icon from "../components/common/Icon";
import {
  qualityHero,
  inspectionOutcomes,
  qualityImprovement,
  feedbackData,
  qualityCommitment,
} from "../data/quality.content";

/**
 * QualityPage.jsx — Quality Impact Report (/quality-impact-report)
 *
 * Syncs with your data objects exactly as defined in src/data/quality.content.js
 * and mirrors your Learning page visual system (navy hero, soft glass cards,
 * rounded-2xl, gradients, brand rings). Images default to /images/stock/stock-1.png
 * with a graceful gradient fallback.
 */

// -----------------------------
// Helpers
// -----------------------------
const cn = (...classes) => classes.filter(Boolean).join(" ");

const Badge = ({ children, tone = "gold" }) => (
  <span
    className={cn(
      "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ring-1",
      tone === "gold" &&
        "bg-primary-gold/10 text-primary-gold ring-primary-gold/25",
      tone === "navy" &&
        "bg-primary-navy/10 text-primary-navy ring-primary-navy/20",
      tone === "coral" &&
        "bg-secondary-coral/10 text-secondary-coral ring-secondary-coral/25",
      tone === "teal" &&
        "bg-secondary-teal/10 text-secondary-teal ring-secondary-teal/25"
    )}
  >
    {children}
  </span>
);

const Card = ({ as: Tag = "div", className = "", children }) => (
  <Tag
    className={cn(
      "rounded-2xl border border-white/10 bg-white/10 p-6 text-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur",
      "ring-1 ring-white/10",
      className
    )}
  >
    {children}
  </Tag>
);

const SoftCard = ({ className = "", children }) => (
  <div
    className={cn(
      "rounded-2xl border border-gray-100/50 bg-white p-6 shadow-sm",
      "ring-1 ring-gray-200",
      className
    )}
  >
    {children}
  </div>
);

const StatTile = ({
  icon,
  label,
  number,
  subtitle,
  color = "secondary-coral",
}) => {
  const toneMap = {
    "secondary-coral":
      "text-secondary-coral bg-secondary-coral/10 ring-secondary-coral/30",
    "secondary-teal":
      "text-secondary-teal bg-secondary-teal/10 ring-secondary-teal/30",
    "primary-gold": "text-primary-gold bg-primary-gold/10 ring-primary-gold/20",
    "primary-navy": "text-primary-navy bg-primary-navy/10 ring-primary-navy/20",
    "secondary-purple":
      "text-secondary-purple bg-secondary-purple/10 ring-secondary-purple/30",
  };
  const tone = toneMap[color] || toneMap["primary-gold"];
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-white ring-1 ring-white/10 transition hover:bg-white/10">
      <div className="flex items-center gap-4">
        <div
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-xl ring-1",
            tone
          )}
        >
          <Icon name={icon || "shield-check"} className="h-5 w-5" />
        </div>
        <div className="ml-auto text-right">
          <div className="text-2xl font-semibold tracking-tight">{number}</div>
          <div className="text-sm/5 text-white/80">{label}</div>
          {subtitle && (
            <div className="text-xs/5 text-white/60">{subtitle}</div>
          )}
        </div>
      </div>
    </div>
  );
};

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-primary-navy/5 px-3 py-1 text-xs font-medium text-primary-navy ring-1 ring-primary-navy/10">
    {children}
  </span>
);

const PlaceholderImage = ({
  src = "/images/stock/stock-1.jpg",
  alt = "",
  className = "",
}) => (
  <div className={cn("relative overflow-hidden rounded-2xl", className)}>
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-secondary-light-blue/20 to-secondary-teal/20" />
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover"
      onError={(e) => {
        e.currentTarget.style.display = "none"; // keep gradient fallback
      }}
    />
  </div>
);

// -----------------------------
// 1) Hero (uses qualityHero.ctas as an ARRAY in your data)
// -----------------------------
function QualityHero() {
  const h = qualityHero || {};
  // Support both array style (current) and {buttons: []} if you ever switch
  const buttons = Array.isArray(h.ctas) ? h.ctas : h.ctas?.buttons || [];
  return (
    <section className="relative isolate overflow-hidden bg-primary-navy text-white">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-primary-gold/15 to-secondary-teal/15 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            {h.badge && <Badge>{h.badge}</Badge>}
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              {h.title}{" "}
              <span className="text-primary-gold">{h.titleHighlight}</span>
            </h1>
            {h.description && (
              <p className="mt-4 max-w-xl text-white/85">{h.description}</p>
            )}

            {buttons.length > 0 && (
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {buttons.map((b, i) => (
                  <a
                    key={i}
                    href={b.href}
                    {...(b.download ? { download: true } : {})}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold ring-1 transition",
                      b.primary
                        ? "bg-primary-gold text-primary-navy ring-primary-gold/30 hover:bg-primary-gold/90"
                        : "bg-white/0 text-white ring-white/25 hover:bg-white/10"
                    )}
                  >
                    {b.text}
                    {b.download && <Icon name="download" className="h-4 w-4" />}
                  </a>
                ))}
              </div>
            )}

            {h.stats?.length > 0 && (
              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {h.stats.map((s, i) => (
                  <StatTile key={i} {...s} />
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <PlaceholderImage
              src="/images/stock/stock-1.jpg"
              alt="Quality hero"
              className="aspect-[4/3]"
            />
            <div className="absolute -left-4 -top-4 hidden md:block">
              <Card className="flex items-center gap-3 p-3">
                <Icon name="award" className="h-5 w-5 text-primary-gold" />
                <span className="text-sm">Independent Inspections</span>
              </Card>
            </div>
            <div className="absolute -bottom-4 -right-4 hidden md:block">
              <Card className="p-3">
                <div className="text-xs text-white/70">People we support</div>
                <div className="text-base font-semibold">Real Feedback</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// -----------------------------
// 2) Inspection Outcomes & Ratings
// -----------------------------
function Bar({ label, value = 0 }) {
  const num = typeof value === "string" ? parseFloat(value) : Number(value);
  const pct = Number.isFinite(num) ? Math.max(0, Math.min(100, num)) : 0;
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-sm text-primary-navy/80">
        <span>{label}</span>
        <span className="font-semibold">{pct}%</span>
      </div>
      <div className="h-3 w-full rounded-full bg-gray-100">
        <div
          className="h-3 rounded-full bg-gradient-to-r from-primary-gold to-secondary-coral"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function InspectionOutcomes() {
  const io = inspectionOutcomes || {};
  const rb = io.ratingBreakdown || {};
  const metrics = rb.metrics || [];

  return (
    <section className="relative bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge tone="navy">{io.badge || "Accreditation"}</Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary-navy sm:text-4xl">
            {io.title}{" "}
            <span className="text-primary-gold">{io.titleHighlight}</span>
          </h2>
          {io.subtitle && (
            <p className="mt-2 text-primary-navy/80">{io.subtitle}</p>
          )}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Achievements */}
          <SoftCard className="lg:col-span-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-primary-navy">
                Highlights
              </h3>
              {/* <Pill>
                <Icon name="shield-check" className="h-4 w-4" />
                CIW Outcomes
              </Pill> */}
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {io.achievements?.map((a, i) => (
                <div
                  key={i}
                  className="group rounded-xl border border-gray-100 bg-white p-4 ring-1 ring-gray-200 transition hover:shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-secondary-light-blue/40 p-2 ring-1 ring-secondary-light-blue/60">
                      <Icon
                        name={a.icon || "trending-up"}
                        className="h-5 w-5 text-primary-navy"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-primary-navy">
                        {a.title}
                      </div>
                      <p className="mt-1 text-sm text-primary-navy/75">
                        {a.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SoftCard>

          {/* Rating breakdown */}
          <SoftCard>
            <h3 className="text-lg font-semibold text-primary-navy">
              {rb.title || "Rating Breakdown"}
            </h3>
            {rb.description && (
              <p className="mt-1 text-sm text-primary-navy/70">
                {rb.description}
              </p>
            )}
            <div className="mt-5 space-y-4">
              {metrics.map((r, i) => (
                <Bar key={i} label={r.label} value={r.value} />
              ))}
            </div>
            <PlaceholderImage
              className="mt-6 aspect-[16/9]"
              src="/images/stock/stock-2.jpg"
            />
          </SoftCard>
        </div>
      </div>
    </section>
  );
}

// -----------------------------
// 3) Quality Improvement (uses process + auditTypes)
// -----------------------------
function QualityImprovement() {
  const qi = qualityImprovement || {};
  const proc = qi.process || {};

  return (
    <section className="relative bg-gradient-to-b from-white to-secondary-light-blue/15 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge tone="teal">{qi.badge || "Continuous Improvement"}</Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary-navy sm:text-4xl">
            {qi.title}{" "}
            <span className="text-primary-gold">{qi.titleHighlight}</span>
          </h2>
          {qi.subtitle && (
            <p className="mt-2 text-primary-navy/80">{qi.subtitle}</p>
          )}
        </div>

        {/* Process card */}
        <SoftCard className="mt-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold text-primary-navy">
                {proc.title || "Our Audit Approach"}
              </h3>
              {proc.description && (
                <p className="mt-2 text-primary-navy/80">{proc.description}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {proc.stats?.map((s, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-100 bg-white p-4 text-primary-navy ring-1 ring-gray-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary-gold/10 p-2 ring-1 ring-primary-gold/30">
                      <Icon
                        name={s.icon || "clipboard-check"}
                        className="h-5 w-5 text-primary-gold"
                      />
                    </div>
                    <div className="ml-auto text-right">
                      <div className="text-2xl font-bold">{s.number}</div>
                      <div className="text-xs text-primary-navy/70">
                        {s.subtitle}
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 text-sm font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </SoftCard>

        {/* Audit types */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {qi.auditTypes?.map((it, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-gray-100/60 bg-white p-6 ring-1 ring-gray-200 transition hover:shadow-md"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-primary-gold/10 p-2 ring-1 ring-primary-gold/30">
                  <Icon
                    name={it.icon || "sliders"}
                    className="h-5 w-5 text-primary-gold"
                  />
                </div>
                <div>
                  <div className="font-semibold text-primary-navy">
                    {it.title}
                  </div>
                  <p className="mt-1 text-sm text-primary-navy/75">
                    {it.description}
                  </p>
                </div>
              </div>
              {it.features?.length > 0 && (
                <ul className="mt-4 space-y-2 text-sm text-primary-navy/80">
                  {it.features.map((p, idx) => (
                    <li key={idx} className="flex gap-2">
                      <Icon
                        name="check"
                        className="mt-0.5 h-4 w-4 text-secondary-teal"
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------
// 4) Feedback (uses metrics + testimonials)
// -----------------------------
function MetricCard({ m }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
      <div className="text-3xl font-bold text-primary-gold">{m.percentage}</div>
      <div className="mt-1 font-semibold text-primary-navy">{m.label}</div>
      <div className="text-sm text-primary-navy/70">{m.description}</div>
    </div>
  );
}

function TestimonialCard({ t }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 ring-1 ring-gray-200">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-secondary-coral/10 p-2 ring-1 ring-secondary-coral/25">
          <Icon name="smile" className="h-5 w-5 text-secondary-coral" />
        </div>
        <div className="text-sm font-semibold text-primary-navy">
          {t.author || t.source || "Feedback"}
        </div>
        <div className="ml-auto text-xs text-primary-navy/60">{t.service}</div>
      </div>
      <p className="text-primary-navy/80">{t.quote}</p>
      {/* <PlaceholderImage className="aspect-[16/9]" /> */}
    </div>
  );
}

function QualityFeedback() {
  const fd = feedbackData || {};
  return (
    <section className="relative bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge tone="coral">{fd.badge || "Feedback"}</Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary-navy sm:text-4xl">
            {fd.title}{" "}
            <span className="text-primary-gold">{fd.titleHighlight}</span>
          </h2>
          {fd.subtitle && (
            <p className="mt-2 text-primary-navy/80">{fd.subtitle}</p>
          )}
        </div>

        {fd.metrics?.length > 0 && (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {fd.metrics.map((m, i) => (
              <MetricCard key={i} m={m} />
            ))}
          </div>
        )}

        {fd.testimonials?.length > 0 && (
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {fd.testimonials.map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// -----------------------------
// 5) Commitment / CTA (uses commitments + cta)
// -----------------------------
function QualityCommitment() {
  const qc = qualityCommitment || {};
  const buttons = qc.cta?.buttons || [];

  return (
    <section className="relative isolate overflow-hidden bg-primary-navy py-16 text-white">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-72 bg-gradient-to-b from-secondary-teal/20 to-transparent blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Card className="p-8">
            <div className="flex items-center gap-3 text-primary-gold">
              <Icon name="clipboard-check" className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">
                Our Commitment
              </span>
            </div>
            <h3 className="mt-3 text-2xl font-bold">
              {qc.title} {/* no titleHighlight in data; keep simple */}
            </h3>
            {qc.description && (
              <p className="mt-2 text-white/85">{qc.description}</p>
            )}

            {qc.commitments?.length > 0 && (
              <ul className="mt-4 space-y-3">
                {qc.commitments.map((c, i) => (
                  <li key={i} className="flex gap-3">
                    <Icon
                      name={c.icon || "check"}
                      className="mt-0.5 h-4 w-4 text-primary-gold"
                    />
                    <div>
                      <div className="font-semibold">{c.title}</div>
                      <div className="text-sm text-white/80">
                        {c.description}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {buttons.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {buttons.map((b, i) => (
                  <a
                    key={i}
                    href={b.href}
                    {...(b.download ? { download: true } : {})}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold ring-1 transition",
                      b.primary
                        ? "bg-primary-gold text-primary-navy ring-primary-gold/30 hover:bg-primary-gold/90"
                        : "bg-white/0 text-white ring-white/25 hover:bg-white/10"
                    )}
                  >
                    {b.text}
                    {b.download && <Icon name="download" className="h-4 w-4" />}
                  </a>
                ))}
              </div>
            )}
          </Card>

          <PlaceholderImage
            className="aspect-[4/3]"
            src="/images/stock/stock-4.jpg"
          />
        </div>
      </div>
    </section>
  );
}

// -----------------------------
// Page
// -----------------------------
export default function QualityPage() {
  return (
    <main className="isolate">
      <SEO
        title="Quality & Assurance"
        description="Discover how M&D Care maintains the highest standards through regular audits, impact reports, and continuous improvement initiatives — ensuring exceptional care across all our services."
        path="/about/quality"
        // image optional — add later if you design an OG banner
      />
      <QualityHero />
      <InspectionOutcomes />
      <QualityImprovement />
      <QualityFeedback />
      <QualityCommitment />
    </main>
  );
}
