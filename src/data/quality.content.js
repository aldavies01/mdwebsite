// src/data/quality.content.js

export const qualityHero = {
  badge: "Quality Assurance",
  title: "Excellence in Care,",
  titleHighlight: "Proven by Results",
  description:
    "At M&D Care, quality isn't just a goal-it's the foundation of everything we do. Our commitment to excellence is demonstrated through rigorous quality assurance processes, independent inspections, and most importantly, the voices of the people we support.",
  stats: [
    {
      number: "100%",
      label: "Good or Excellent",
      subtitle: "CIW Ratings",
      icon: "shield-check",
      color: "secondary-coral",
    },
    {
      number: "70%",
      label: "Excellent Ratings",
      subtitle: "Minimum 2 Areas",
      icon: "award",
      color: "primary-gold",
    },
    {
      number: "149",
      label: "Quality Audits",
      subtitle: "Completed 2024/25",
      icon: "clipboard-check",
      color: "secondary-teal",
    },
    {
      number: "94%",
      label: "Satisfaction Rate",
      subtitle: "People We Support",
      icon: "smile",
      color: "secondary-purple",
    },
  ],
  ctas: [
    {
      text: "Download Impact Report",
      href: "/documents/impact-report-2024-25.pdf",
      download: true,
      icon: "file-text",
      primary: true,
    },
    {
      text: "Get in Touch",
      href: "/contact",
      icon: "mail",
      primary: false,
    },
  ],
};

export const inspectionOutcomes = {
  badge: "Independent Validation",
  title: "Inspection Outcomes",
  titleHighlight: "& Ratings",
  subtitle:
    "Care Inspectorate Wales (CIW) independently assesses our services to ensure we meet the highest standards of care and support.",
  achievements: [
    {
      title: "Consecutive Excellence",
      description:
        "Eight consecutive 'Excellent' silent ratings achieved from June 2024, demonstrating sustained quality across our services.",
      icon: "trending-up",
      color: "primary-gold",
    },
    {
      title: "First Excellence Rating",
      description:
        "Gelynnen earned our first 'Excellent' rating in June 2024, setting the standard for excellence across the organization.",
      icon: "star",
      color: "secondary-coral",
    },
    {
      title: "Transition Ready",
      description:
        "Our audit tools have been adapted to align with formalized CIW ratings launched in April 2025, ensuring continued excellence.",
      icon: "refresh-cw",
      color: "secondary-teal",
    },
    {
      title: "Ty Gwerthfawr Opened",
      description:
        "12-bed accessible residential service launched in March 2025.",
      icon: "home",
      color: "secondary-teal",
    },
    {
      title: "Awards & Finalists",
      description:
        "10 finalists across four ceremonies, 3 winners, 3 highly commended.",
      icon: "trophy",
      color: "primary-gold",
    },
    {
      title: "Cyber Essentials Plus",
      description:
        "Enhanced security with phishing protection and encrypted devices.",
      icon: "shield",
      color: "primary-navy",
    },
  ],
  ratingBreakdown: {
    title: "Our Current Ratings",
    description:
      "70% of our sites have received a silent 'Excellent' rating with a minimum of two Lines of Enquiry marked as excellent.",
    metrics: [
      { label: "Excellent Ratings", value: "70%", color: "primary-gold" },
      { label: "Good Ratings", value: "30%", color: "secondary-teal" },
      { label: "Below Good", value: "0%", color: "gray-400" },
    ],
  },
};

export const qualityImprovement = {
  badge: "Continuous Improvement",
  title: "Quality Improvement",
  titleHighlight: "Process",
  subtitle:
    "We take a risk-based approach to auditing our settings, using weekly data to spot trends and maintain the highest standards of care.",
  process: {
    title: "Our Audit Approach",
    description:
      "Each Quality Officer supports a focused group of settings, building strong relationships with Managers and offering hands-on support when areas for improvement are identified.",
    stats: [
      {
        number: "149",
        label: "Total Audits",
        subtitle: "Baseline & Area-Specific",
        icon: "clipboard-check",
      },
      {
        number: "7.5",
        label: "Average Audits",
        subtitle: "Per Service Monthly",
        icon: "calendar",
      },
    ],
  },
  auditTypes: [
    {
      title: "Baseline Audits",
      description:
        "Comprehensive reviews ensuring services are safe, delivering high-quality person-centered care, and well-prepared for external inspections.",
      features: [
        "Statutory guidance compliance",
        "Contract monitoring themes",
        "Sector-wide best practices",
        "CIW preparation",
      ],
      icon: "shield-check",
      color: "primary-navy",
    },
    {
      title: "Focused Audits",
      description:
        "Targeted reviews of specific operational areas to ensure excellence in every aspect of service delivery.",
      features: [
        "Medication management",
        "Financial processes",
        "Health and safety",
        "Admissions procedures",
      ],
      icon: "activity",
      color: "secondary-coral",
    },
    {
      title: "New Service Support",
      description:
        "Wrap-around support for new services with early feedback to reduce risks and ensure success from day one.",
      features: [
        "Early intervention",
        "Risk reduction",
        "Best practice guidance",
        "Ongoing mentorship",
      ],
      icon: "trending-up",
      color: "secondary-teal",
    },
  ],
};

export const feedbackData = {
  badge: "Their Voice",
  title: "What People Say",
  titleHighlight: "About Our Care",
  subtitle:
    "The voices of the people we support are at the heart of everything we do. Their feedback drives our continuous improvement.",
  metrics: [
    {
      percentage: "94%",
      label: "Overall Satisfaction",
      description: "Satisfied with care and support received",
      icon: "smile",
      color: "primary-gold",
    },
    {
      percentage: "88%",
      label: "Treated with Respect",
      description: "Strongly agree or agree staff treat them with respect",
      icon: "heart",
      color: "secondary-coral",
    },
    {
      percentage: "86%",
      label: "Sufficient Time",
      description: "Staff have enough time to provide needed support",
      icon: "clock",
      color: "secondary-teal",
    },
    {
      percentage: "81%",
      label: "Would Recommend",
      description: "Would recommend M&D Care to family or friends",
      icon: "users",
      color: "secondary-purple",
    },
  ],
  testimonials: [
    {
      quote:
        "I've come a long way with the help of staff. I've been learning and learnt a lot along the way about what kind of person I am.",
      author: "Person We Support",
      service: "Residential Service",
    },
    {
      quote:
        "I appreciate the amount of freedom to achieve living skills I handle myself. This is important for when I leave to live independently in future.",
      author: "Person We Support",
      service: "Supported Living",
    },
    {
      quote:
        "We are very happy with all of the outcomes and immensely grateful for the work you are putting into [their] health and wellbeing.",
      author: "Family Member",
      service: "Specialist Support",
    },
  ],
};

export const qualityCommitment = {
  title: "Our Commitment to Quality",
  description:
    "Quality isn't a destination-it's a continuous journey. We're committed to maintaining and improving our standards through:",
  commitments: [
    {
      title: "Regular Monitoring",
      description:
        "Weekly data analysis and trend identification across all services",
      icon: "activity",
    },
    {
      title: "Staff Development",
      description:
        "Ongoing training and support for all team members to deliver excellence",
      icon: "graduation-cap",
    },
    {
      title: "Listening to Feedback",
      description:
        "Acting on feedback from people we support, families, and staff",
      icon: "users",
    },
    {
      title: "Best Practice",
      description:
        "Staying current with sector developments and implementing innovations",
      icon: "lightbulb",
    },
  ],
  cta: {
    title: "See Quality in Action",
    description:
      "Want to learn more about our quality approach? Get in touch or download our full impact report.",
    buttons: [
      {
        text: "Download Impact Report",
        href: "/documents/impact-report-2024-25.pdf",
        download: true,
        primary: true,
      },
      {
        text: "Contact Us",
        href: "/contact",
        primary: false,
      },
    ],
  },
};
