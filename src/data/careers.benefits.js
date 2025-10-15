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
      { number: "Fully Funded", label: "QCF Qualifications" },
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
        {
          title: "Early Pay",
          description: "Access your earnings before payday when you need them.",
          icon: "shield",
        },
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
          title: "Wellbeing Activities",
          description:
            "Access to staff wellbeing events and initiatives throughout the year.",
          icon: "smile",
        },
      ],
    },
    {
      id: "time-off",
      name: "Work-Life Balance",
      description: "Flexibility that fits real life",
      icon: "clock",
      color: "secondary-teal",
      benefits: [
        {
          title: "Shift Preferences",
          description:
            "We aim to match your preferred shift pattern — days, nights, or a mix that suits you.",
          icon: "clock",
        },
        {
          title: "Fair Weekends",
          description:
            "We do our best to ensure weekends are shared fairly across the team.",
          icon: "calendar",
        },
        {
          title: "Family-Friendly Approach",
          description:
            "We understand childcare and personal commitments and try to plan rotas accordingly.",
          icon: "users",
        },
        {
          title: "Flexible Support",
          description:
            "We listen and adapt where we can to make work fit around your life.",
          icon: "heart",
        },
      ],
    },

    {
      id: "development",
      name: "Learning & Development",
      description: "Grow your skills with real support and opportunity",
      icon: "book",
      color: "secondary-purple",
      benefits: [
        {
          title: "Fully Funded QCF Qualifications",
          description:
            "Gain recognised care qualifications – fully funded by us.",
          icon: "graduation-cap",
        },
        {
          title: "Paid Learning Time",
          description:
            "Dedicated paid time to complete your online training modules.",
          icon: "clock",
        },
        {
          title: "Internal Progression",
          description:
            "We regularly promote from within and help you take the next step in your career.",
          icon: "arrow-up",
        },
        {
          title: "Interactive Training Sessions",
          description:
            "Led by expert trainers who make learning engaging – not just slides and PowerPoints.",
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
        "TThe care sector is and has always been a difficult one to staff especially domiciliary care, and In  my experience over the years I have always found that on my days off you are constantly asked to work extra to cover sickness, however under M&D this request has been almost non-existent, this I believe to be because M&D domiciliary care has the backing of their staff in the many supported living houses, but also due to relaxed nature of the working day there are far less people calling in sick and the staff are generally more willing to pick up extra shifts.",
      name: "Matthias Mitchell",
      role: "Senior Support Worker",
      tenure: "4 years at M&D Care",
      avatar: "/images/testimonials/sarah.jpg",
    },
    {
      quote:
        "Coming into M&D Care through the Kickstart scheme has given me a chance to experience the care sector – and I’m really enjoying it so far! The experience has enabled me to be part of a good team, and now I have the chance of a full time job with the hopes of becoming a Senior Support Worker",
      name: "Latoya Jones",
      role: "Support Worker",
      tenure: "5 years at M&D Care",
      avatar: "/images/testimonials/james.jpg",
    },
    {
      quote:
        "What has always stood out to me is that M&D Care, really do care. It is such a supportive environment to work in. The Directors care about their staff and they develop their strengths, I have been given many opportunities to evolve and develop a career in a new area. I have always felt fully supported in every role I have undertaken. There is a culture of openness and transparency where talents are recognised and developed. ",
      name: "Suzie Rogers",
      role: "Commercial Manager",
      tenure: "10 years at M&D Care",
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
      question: "How do I start QCF training?",
      answer:
        "We aim to get all of our Support Workers to a minimum of QCF level 2 as soon as possible. Once this is completed, you will have the opportunity to pursue the higher levels.",
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
