// src/data/supported-living.meta.js

// --- HERO (used directly by SupportedLivingPage) ---
export const hero = {
  badge: "Supported Living Services",
  titleMain: "Building Skills for",
  titleHighlight: "Independent Living",
  blurb:
    "Our supported living services provide the perfect balance of independence and support, helping individuals develop the skills they need to thrive in their own community-based accommodation.",
  ctas: [
    { href: "/contact", label: "Learn About Our Services", primary: true },
    { href: "/referrals", label: "Make a Referral", primary: false },
  ],
};

// --- KEY FEATURES (also used to feed ServiceOverview.valuePropositions) ---
export const keyFeatures = [
  {
    title: "Community-Based Independence",
    description:
      "Self-contained flats within supported complexes allow individuals to live independently while having 24/7 staff support nearby.",
    icon: "home",
    color: "bg-secondary-coral",
  },
  {
    title: "Step-Down Support Model",
    description:
      "A transitional approach from residential care, helping individuals progress towards greater independence at their own pace.",
    icon: "trending-up",
    color: "bg-secondary-teal",
  },
  {
    title: "Complex Behavior Management",
    description:
      "Experienced in supporting individuals transitioning from secure hospitals and managing complex behavioral needs.",
    icon: "shield-check",
    color: "bg-secondary-purple",
  },
  {
    title: "Peripatetic Care Model",
    description:
      "On-site offices with experienced core teams providing flexible, responsive support when needed.",
    icon: "users",
    color: "bg-primary-navy",
  },
];

// --- CTA (used directly by SupportedLivingPage) ---
export const cta = {
  title: "Ready to Take the Next Step Toward Independence?",
  text: "Our supported living services provide the perfect bridge between residential care and complete independence. Let us help you or your loved one build the skills for successful community living.",
  buttons: [
    { href: "/contact", label: "Contact Our Team", primary: true },
    { href: "/referrals", label: "Make a Referral", primary: false },
  ],
  banner: {
    title: "Fully Trained Staff Available 24/7",
    text: "Our experienced teams provide continuous support, ensuring residents feel secure while building the confidence and skills needed for independent living.",
  },
};

// --- ServiceOverview copy (mirrors residential.meta.js structure) ---
export const serviceOverviewData = {
  badge: "Why Choose Supported Living",
  title: { main: "Independence with", highlight: "The Right Support" },
  description:
    "Our supported living services balance autonomy with safety—practical, person-centred support that helps people thrive in their own homes and communities.",
  // Build value props from keyFeatures so there’s a single source of truth
  valuePropositions: keyFeatures.map((f) => ({
    icon: f.icon,
    title: f.title,
    description: f.description,
  })),
  stats: [
    {
      number: "7",
      label: "Services",
      subtitle: "Across 3 areas",
      colorClass: "secondary-coral",
    },
    {
      number: "24/7",
      label: "On-Call",
      subtitle: "Support when needed",
      colorClass: "secondary-teal",
    },
    {
      number: "100%",
      label: "Personalised Plans",
      subtitle: "Regularly reviewed",
      colorClass: "primary-navy",
    },
    {
      number: "95%",
      label: "Family Satisfaction",
      subtitle: "Latest survey",
      colorClass: "secondary-purple",
    },
  ],
  features: {
    title: "What We Support:",
    items: [
      "Daily living skills & routines",
      "Medication & health appointments",
      "Budgeting, shopping & meal prep",
      "Community access & activities",
      "Tenancy management & liaison",
    ],
    dotColor: "secondary-coral",
  },
};

// --- HomesGrid header copy (mirrors residential.meta.js) ---
export const homesGridData = {
  badge: "Our Locations",
  title: { main: "Supported Living", highlight: "Across Wales" },
  description:
    "Explore our supported living services. Each location blends independence with consistent, person-centred support.",
};
