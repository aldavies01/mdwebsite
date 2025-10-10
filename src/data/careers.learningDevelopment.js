// src/data/careers.learningDevelopment.js
export const learningDevelopmentData = {
  // Hero Section
  hero: {
    badge: "Learning & Development",
    title: "Your Career Journey",
    titleHighlight: "Starts Here",
    description:
      "At M&D Care, development never ends. We're committed to helping you grow, develop your skills, and advance your career through comprehensive learning opportunities and progressive talent management.",
    stats: [
      {
        number: "97%",
        label: "Training Feedback Satisfaction",
        subtitle: "Based on learner feedback surveys",
      },
      {
        number: "100%",
        label: "Staff Receive Induction",
        subtitle: "Face-to-face initial training",
      },
      {
        number: "100%",
        label: " Fully Funded QCF Qualifications",
        subtitle: "Industry recognised qualifications",
      },
      {
        number: "0",
        label: "No Experience Required",
        subtitle: "Full training provided",
      },
    ],
  },

  // Philosophy Section
  philosophy: {
    title: "Our Learning & Development Philosophy",
    subtitle:
      "L&D is integral to delivering safe, effective, intuitive, and progressive care. We believe learning is a lifelong journey that enhances both personal growth and care quality.",
    mainTitle: "Learning Never Ends",
    mainDescription:
      "The standards within Social Care Wales are the foundation of our ethos, embedded through initial induction, throughout the first year of employment, and beyond into career progression.",
    pillars: [
      {
        title: "Initial Induction",
        description:
          "Comprehensive face-to-face induction setting the foundation for excellence",
        icon: "users",
        color: "secondary-coral",
      },
      {
        title: "First Year Support",
        description:
          "Intensive support and development throughout your crucial first year",
        icon: "trending-up",
        color: "secondary-teal",
      },
      {
        title: "Career Progression",
        description:
          "Ongoing development opportunities throughout your entire career journey",
        icon: "arrow-up",
        color: "secondary-purple",
      },
      {
        title: "Interactive Training",
        description:
          "We believe that the learning process should be active and engaging",
        icon: "bar-chart",
        color: "secondary-warm-yellow",
      },
    ],
  },

  // Training Approaches
  trainingApproaches: [
    {
      title: "Understanding the Individual",
      description:
        "Personalized training that focuses on understanding the unique needs of each person we support",
      features: [
        "Individual-focused training delivery",
        "Person-centered care approaches",
        "Background knowledge of conditions",
        "Behavioral understanding and response",
      ],
      icon: "heart",
      color: "secondary-coral",
    },
    {
      title: "Classroom Training",
      description:
        "Engaging, interactive learning designed to build confidence and practical skills.",
      features: [
        "Role play scenarios",
        "Case study discussions",
        "Group activities & workshops",
        "Video-based learning",
      ],
      icon: "lightbulb",
      color: "secondary-teal",
    },
    {
      title: "Blended Learning Approach",
      description:
        "A flexible mix of digital and in-person training to support every learning style.",
      features: [
        "Personalised online modules",
        "Interactive virtual classrooms",
        "On-the-job mentoring",
        "Ongoing development pathways",
      ],
      icon: "book",
      color: "secondary-purple",
    },
    {
      title: "Talent Recognition",
      description:
        "Progressive talent management with tailored development programs for career advancement",
      features: [
        "Talent spotting and identification",
        "Customized training pathways",
        "Leadership development programs",
        "Mentorship and coaching support",
      ],
      icon: "star",
      color: "primary-gold",
    },
  ],

  // Career Pathways
  careerPathways: [
    {
      id: "support-worker",
      title: "Support Worker",
      level: "Level 1",
      description:
        "Your journey begins here with comprehensive induction and foundational training",
      requirements: [
        "QCF Level 2 (within 6 months following successful probation period)",
        "Initial face-to-face classroom induction",
        "Blended learning approach",
        "Social Care Wales registration",
        "Comprehensive shadowing period",
        "Senior Support Worker development pathway",
      ],
      nextSteps: ["Senior Support Worker", "Specialist roles"],
      icon: "user",
      color: "secondary-coral",
    },
    {
      id: "senior-support-worker",
      title: "Senior Support Worker",
      level: "Level 2",
      description:
        "Develop leadership skills and specialized knowledge in your area of expertise",
      requirements: [
        "QCF Level 3",
        "Mentoring and shadowing subject experts",
        "Specialist area training",
        "2 day classroom based leadership training",
      ],
      nextSteps: ["Trainee Manager", "PBS Practitioner"],
      icon: "trending-up",
      color: "secondary-teal",
    },
    {
      id: "trainee-manager",
      title: "Trainee Manager",
      level: "Level 3",
      description:
        "Tailored management training preparing you for service leadership responsibilities",
      requirements: [
        "Management training program",
        "QCF Level 4",
        "Leadership coaching",
        "4 day aspirational leadership classroom training, facilitated by subject experts",
        "Mentorship by subject experts",
      ],
      nextSteps: ["Service Manager"],
      icon: "award",
      color: "secondary-purple",
    },
    {
      id: "service-manager",
      title: "Service Manager",
      level: "Level 4",
      description:
        "Full service leadership with strategic oversight and business development responsibilities",
      requirements: [
        "Management qualification",
        "Strategic planning training",
        "Business development",
        "Additional blended leadership training",
        "QCF Level 5",
      ],
      nextSteps: ["Area Manager", "Training Roles"],
      icon: "star",
      color: "primary-gold",
    },
  ],

  // Classroom Training Section
  classroomTraining: {
    title: "Comprehensive Induction Training",
    subtitle:
      "We are proud of our comprehensive classroom-based induction program, delivered in person and facilitated by subject experts",
    highlights: [
      {
        title: "Recruit for Values",
        description:
          "We recruit for values first, then our training program provides all the skills needed for your role",
        icon: "heart",
      },
      {
        title: "Expert Facilitation",
        description:
          "All classroom training is delivered by experienced subject matter experts",
        icon: "graduation-cap",
      },
      {
        title: "In-Person Learning",
        description:
          "Face-to-face delivery ensures maximum engagement and understanding",
        icon: "users",
      },
    ],
  },

  // QCF Section
  qcf: {
    title: "QCF: Our Baseline Standard",
    description:
      "QCF (Qualifications and Credit Framework) is the recognized model within care for baseline education and is considered the minimum requirement within our company. All of our employees have the opportunity to pursue a QCF qualificaiton upon completion of their probation.",
    metrics: [
      { number: "100%", label: "Fully Funded" },
      { number: "Multiple", label: "Career Pathways" },
      { number: "100%", label: "Support Provided" },
    ],
  },

  // CTA Section
  cta: {
    title: "Ready to Start Your Journey With Us?",
    description:
      "Join a company that truly invests in your future. From comprehensive training to clear career progression pathways, we're committed to helping you reach your full potential.",
    primaryButton: {
      text: "View Career Opportunities",
      link: "/careers",
    },
    secondaryButton: {
      text: "Get in Touch",
      link: "/contact",
    },
  },
};
