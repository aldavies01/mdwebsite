// src/data/benefits.js
export const benefitsData = {
  // Hero Section
  hero: {
    badge: "Employee Benefits",
    title: "More Than Just",
    titleHighlight: "A Paycheck",
    description:
      "We believe that great care starts with great care for our team members. Discover the comprehensive benefits package that makes M&D Care a place where you can truly thrive.",
    stats: [
      { number: "20+", label: "Days Holiday" },
      { number: "£500", label: "Refer a Friend" },
      { number: "24/7", label: "Support Line" },
      { number: "£1000+", label: "Simply Health Contribution" },
    ],
  },

  // Main Benefits Categories
  categories: [
    {
      id: "financial",
      name: "Financial Wellbeing",
      description:
        "Secure your future with our comprehensive financial benefits",
      icon: "money",
      color: "primary-gold",
      benefits: [
        {
          title: "Competitive Salary",
          description: "Above industry standard rates with regular reviews",
          icon: "trending-up",
        },
        // {
        //   title: "Pension Scheme",
        //   description: "We match up to 8% of your contributions",
        //   icon: "shield",
        // },
        {
          title: "Performance Bonuses",
          description:
            "Annual bonuses based on individual and team performance",
          icon: "star",
        },
        {
          title: "Travel Allowance",
          description: "45p per mile for work-related travel",
          icon: "car",
        },
      ],
    },
    {
      id: "health",
      name: "Health & Wellbeing",
      description: "Your physical and mental health is our priority",
      icon: "heart",
      color: "secondary-coral",
      benefits: [
        {
          title: "Healthcare Contributions",
          description:
            "After 6 months of service, you will be eligible for Simply Health Care",
          icon: "shield-check",
        },
        {
          title: "Mental Health Support",
          description: "Regular check ins with our wellbeing mentors",
          icon: "brain",
        },
        {
          title: "Blue Light Discounts",
          description:
            "Blue light discount gives you discounted rates to local health facilities",
          icon: "activity",
        },
        {
          title: "Need a 4th",
          description: "***** add benefit *****",
          icon: "check-circle",
        },
      ],
    },
    {
      id: "time-off",
      name: "Time Off & Flexibility",
      description: "Work-life balance that actually works",
      icon: "clock",
      color: "secondary-teal",
      benefits: [
        {
          title: "20+ Days Holiday",
          description: "Starting at 20 days, increasing with service",
          icon: "calendar",
        },
        {
          title: "Flexible Working",
          description: "Choose shifts that fit your lifestyle",
          icon: "refresh-cw",
        },
        {
          title: "Long Service Leave",
          description: "Additional days off for loyal team members",
          icon: "award",
        },
        {
          title: "Birthday Leave",
          description: "Take your birthday off - on us!",
          icon: "gift",
        },
      ],
    },
    {
      id: "development",
      name: "Learning & Development",
      description: "Invest in your future with continuous learning",
      icon: "book",
      color: "secondary-purple",
      benefits: [
        {
          title: "£500 Training Budget",
          description: "Annual budget for courses and qualifications",
          icon: "graduation-cap",
        },
        {
          title: "Career Progression",
          description: "Clear pathways and mentorship programs",
          icon: "arrow-up",
        },
        {
          title: "Conference Attendance",
          description: "Industry events and networking opportunities",
          icon: "users",
        },
        {
          title: "Skills Development",
          description: "Regular training sessions and workshops",
          icon: "lightbulb",
        },
      ],
    },
    {
      id: "lifestyle",
      name: "Lifestyle Benefits",
      description: "Little extras that make a big difference",
      icon: "smile",
      color: "secondary-light-blue",
      benefits: [
        {
          title: "Employee Discounts",
          description: "Savings at hundreds of retailers and services",
          icon: "percent",
        },
        {
          title: "Team Events",
          description: "Regular social events and team building activities",
          icon: "party-popper",
        },
        {
          title: "Recognition Programs",
          description: "Employee of the month and achievement awards",
          icon: "trophy",
        },
        {
          title: "Referral Bonuses",
          description: "Earn rewards for bringing great people to the team",
          icon: "users",
        },
      ],
    },
  ],

  // Testimonials
  testimonials: [
    {
      quote:
        "The benefits here are incredible. The private healthcare gave me peace of mind when my daughter needed surgery, and the flexible working means I can be there for school events.",
      name: "Sarah Mitchell",
      role: "Senior Care Assistant",
      tenure: "4 years at M&D Care",
      avatar: "/images/testimonials/sarah.jpg",
    },
    {
      quote:
        "I've used my £500 training budget to get my NVQ Level 3. The company really invests in your development - it's not just talk, they put their money where their mouth is.",
      name: "James Roberts",
      role: "Team Leader",
      tenure: "2 years at M&D Care",
      avatar: "/images/testimonials/james.jpg",
    },
    {
      quote:
        "The work-life balance here is amazing. I can choose shifts that work around my family life, and the 25 days holiday plus my birthday off means I never feel burnt out.",
      name: "Emma Thompson",
      role: "Support Worker",
      tenure: "3 years at M&D Care",
      avatar: "/images/testimonials/emma.jpg",
    },
  ],

  // Comparison with industry
  comparison: {
    title: "How We Compare",
    subtitle: "See how M&D Care benefits stack up against industry standards",
    items: [
      // {
      //   benefit: "Starting Holiday",
      //   industry: "20 days",
      //   mdcare: "25 days",
      //   advantage: "+5 days",
      // },
      // {
      //   benefit: "Pension Match",
      //   industry: "3%",
      //   mdcare: "8%",
      //   advantage: "+5%",
      // },
      {
        benefit: "Training Budget",
        industry: "£200",
        mdcare: "£500",
        advantage: "+£300",
      },
      {
        benefit: "Healthcare",
        industry: "Not provided",
        mdcare: "Access to over £1000 yearly cover",
        advantage: "£1000s saved",
      },
    ],
  },

  // FAQ Section
  faq: [
    {
      question: "When do benefits start?",
      answer:
        "Most benefits begin from your first day, including blue lught discount and holiday accrual. Simply health contributions will start after 6 months of employment.",
    },
    {
      question: "Can I use my training budget for any course?",
      answer:
        "Your £500 training budget can be used for any course that enhances your role or career development. We pre-approve most industry-relevant training and qualifications.",
    },
    {
      question: "Can I refer more than one friend?",
      answer: "Yes! You can refer as many friends as you'd like...",
    },
    {
      question: "How does flexible working actually work?",
      answer:
        "You can request shifts that fit your lifestyle. We have morning, afternoon, evening, and weekend slots available. We work with you to create a schedule that works for everyone.",
    },
  ],

  // CTA
  cta: {
    title: "Ready to Join Our Team?",
    description:
      "These benefits are just the beginning. Discover what it's really like to be part of the M&D Care family.",
    primaryButton: {
      text: "View Current Vacancies",
      link: "https://example.com/careers",
    },
    secondaryButton: {
      text: "Learn About Our Culture",
      link: "/culture",
    },
    contact: {
      email: "careers@mdcare.co.uk",
      phone: "01234 567890",
    },
  },
};
