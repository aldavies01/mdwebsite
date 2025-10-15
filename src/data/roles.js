// data/roles.js
export const rolesData = {
  // Hero section data
  hero: {
    badge: "Career Opportunities",
    title: "Discover Your Perfect",
    titleHighlight: "Care Role",
    description:
      "From your first day in care to senior leadership positions, we offer meaningful career paths that grow with your passion and ambition.",
    stats: [
      { number: "650+", label: "Team Members" },
      { number: "Multiple", label: "Career Pathways" },
      { number: "2x", label: "Employer of the year" },
      { number: "16+", label: "Years Growing" },
    ],
  },

  // Role categories
  categories: [
    {
      id: "support",
      name: "Support Workers",
      description: "The heart of our care services",
      color: "secondary-coral",
      icon: "heart",
    },
    {
      id: "senior",
      name: "Senior Roles",
      description: "Leadership and mentoring positions",
      color: "secondary-teal",
      icon: "users",
    },
    {
      id: "specialist",
      name: "Specialist Services",
      description: "Specialized care and clinical roles",
      color: "secondary-purple",
      icon: "star",
    },
    {
      id: "management",
      name: "Management",
      description: "Strategic leadership opportunities",
      color: "primary-gold",
      icon: "briefcase",
    },
  ],

  // Detailed roles
  roles: [
    {
      id: 1,
      title: "Support Worker",
      category: "support",
      level: "Entry Level",
      description:
        "Start your care career with us. Perfect for those new to care who want to make a real difference in people's lives.",
      fullDescription:
        "As a Support Worker, you'll be at the heart of our care services, providing person-centered support to individuals with learning disabilities, autism, and mental health needs. This role offers incredible variety - no two days are the same! You'll help people live their best lives, supporting them with daily activities, personal care, and achieving their goals.",
      workPatterns: ["Full-time", "Part-time", "Flexible hours"],
      keyResponsibilities: [
        "Provide personal care and daily living support",
        "Assist with medication administration",
        "Support community activities and social inclusion",
        "Maintain accurate care records",
        "Work collaboratively with families and professionals",
      ],
      idealFor: [
        "Those new to care looking for a rewarding career",
        "People with natural empathy and communication skills",
        "Anyone wanting flexible working arrangements",
        "Career changers seeking meaningful work",
      ],
      requirements: [
        "Genuine passion for supporting others",
        "Good communication skills",
        "Willingness to learn and develop",
        "Right to work in the UK",
        "DBS check (we can help arrange this)",
      ],
      benefits: [
        "Comprehensive induction and training",
        "Ongoing professional development",
        "Supportive team environment",
        "Flexible working options",
        "Career progression opportunities",
      ],
      careerProgression:
        "Senior Support Worker → Deputy Manager → Registered Manager",
      testimonial: {
        quote: "We need to obtain quotes from current staff",
        author: "Andy Davies",
        role: "Support Worker, 2 years",
      },
      color: "secondary-coral",
    },
    {
      id: 2,
      title: "Driver Support Worker",
      category: "support",
      level: "Entry Level",
      description:
        "Combine your love of driving with making a difference. Perfect for those who enjoy being out and about while supporting others.",
      fullDescription:
        "Driver Support Workers provide essential transport and support services, enabling our service users to access the community and live independent lives. You'll be responsible for safe transportation while providing person-centered care and support during community activities and appointments.",
      workPatterns: ["Full-time", "Part-time", "Flexible hours"],
      keyResponsibilities: [
        "Provide safe transportation for service users",
        "Support individuals during community outings and appointments",
        "Assist with personal care as needed",
        "Maintain vehicle safety and cleanliness",
        "Complete accurate journey and incident records",
      ],
      idealFor: [
        "Confident drivers with excellent safety record",
        "People who enjoy being out in the community",
        "Those wanting variety in their work environment",
        "Anyone passionate about promoting independence",
      ],
      requirements: [
        "Full UK driving license with minimal points",
        "Experience driving larger vehicles preferred",
        "Genuine care for others' wellbeing",
        "Good communication and interpersonal skills",
        "Willingness to complete additional driving training",
      ],
      benefits: [
        "Company vehicle provided",
        "Fuel and insurance covered",
        "Specialist driving training",
        "Varied work environments",
        "Essential worker status",
      ],
      careerProgression: "Senior Support Worker → Team Leader",
      testimonial: {
        quote: "We need to obtain quotes from current staff",
        author: "Andy Davies",
        role: "Driver Support Worker, 3 years",
      },
      color: "secondary-coral",
    },
    {
      id: 3,
      title: "Senior Support Worker",
      category: "senior",
      level: "Experienced",
      description:
        "Lead by example while providing hands-on care. Perfect for experienced care workers ready to take the next step.",
      fullDescription:
        "Senior Support Workers combine direct care delivery with leadership responsibilities. You'll mentor new team members while maintaining the highest standards of person-centered care. This role offers the perfect balance of hands-on support work and developing others.",
      workPatterns: ["Full-time", "Part-time"],
      keyResponsibilities: [
        "Lead shifts and supervise support teams",
        "Mentor and train new staff members",
        "Oversee complex care plans",
        "Liaise with families and external professionals",
        "Ensure regulatory compliance",
      ],
      idealFor: [
        "Experienced care workers seeking progression",
        "Natural leaders who enjoy mentoring others",
        "Those wanting increased responsibility",
        "People passionate about care quality",
      ],
      requirements: [
        "Minimum 2 years care experience",
        "NVQ Level 2 in Health & Social Care (or working towards)",
        "Leadership or supervisory experience preferred",
        "Strong communication and organizational skills",
        "Current DBS check",
      ],
      benefits: [
        "Leadership development programs",
        "Enhanced holiday entitlement",
        "Professional development budget",
        "Mentoring and coaching support",
        "Clear progression pathway",
      ],
      careerProgression:
        "Deputy Manager → Specialist Support Manager → Registered Manager",
      testimonial: {
        quote: "We need to obtain quotes from current staff",
        author: "Andy Davies",
        role: "Senior Support Worker, 3 years",
      },
      color: "secondary-teal",
    },
    {
      id: 4,
      title: "PBS Practitioner",
      category: "specialist",
      level: "Specialist",
      description:
        "Use evidence-based approaches to support individuals with complex behaviors. Make a real difference through positive behavior support.",
      fullDescription:
        "PBS (Positive Behavior Support) Practitioners work with individuals who display behaviors that challenge, using person-centered, evidence-based approaches. You'll develop behavior support plans, train teams, and work directly with service users to improve their quality of life through understanding and addressing the functions of behavior.",
      workPatterns: ["Full-time", "Part-time"],
      keyResponsibilities: [
        "Conduct functional behavior assessments",
        "Develop and implement positive behavior support plans",
        "Train and coach staff teams in PBS approaches",
        "Work directly with individuals with complex needs",
        "Monitor and evaluate intervention effectiveness",
      ],
      idealFor: [
        "Psychology graduates or those with behavior support experience",
        "People passionate about evidence-based practice",
        "Those who enjoy problem-solving and analysis",
        "Anyone wanting to specialize in complex needs",
      ],
      requirements: [
        "Degree in Psychology, Social Work, or related field",
        "Training in PBS or Applied Behavior Analysis",
        "Experience working with challenging behaviors",
        "Strong analytical and report-writing skills",
        "Commitment to person-centered approaches",
      ],
      benefits: [
        "Specialist training and development",
        "Professional supervision and support",
        "Conference and CPD opportunities",
        "Varied and intellectually stimulating work",
        "Direct impact on improving lives",
      ],
      careerProgression:
        "Senior PBS Practitioner → PBS Lead → Clinical Services Manager",
      testimonial: {
        quote: "We need to obtain quotes from current staff",
        author: "Andy Davies",
        role: "PBS Practitioner, 4 years",
      },
      color: "secondary-purple",
    },
    {
      id: 5,
      title: "Deputy Manager",
      category: "management",
      level: "Management",
      description:
        "Support service leadership while developing your management skills. The perfect stepping stone to becoming a Registered Manager.",
      fullDescription:
        "Deputy Managers work alongside Registered Managers to ensure high-quality service delivery. You'll gain hands-on management experience while maintaining close contact with service users and staff teams. This role provides excellent preparation for registered management responsibilities.",
      workPatterns: ["Full-time"],
      keyResponsibilities: [
        "Support day-to-day service management",
        "Deputize for the Registered Manager",
        "Lead staff supervision and development",
        "Ensure CIW compliance and quality standards",
        "Manage budgets and resources",
      ],
      idealFor: [
        "Senior care workers ready for management",
        "Those wanting management development",
        "People passionate about service quality",
        "Future Registered Managers",
      ],
      requirements: [
        "Minimum 3 years senior care experience",
        "NVQ Level 3 in Health & Social Care",
        "Management qualification (or working towards Level 5)",
        "Strong leadership and organizational skills",
        "Understanding of CIW regulations",
      ],
      benefits: [
        "Management development program",
        "Leadership training and mentoring",
        "Enhanced salary and benefits",
        "Clear pathway to registered management",
        "Professional qualification support",
      ],
      careerProgression: "Specialist Support Manager → Area Manager",
      testimonial: {
        quote: "We need to obtain quotes from current staff",
        author: "Andy Davies",
        role: "Deputy Manager, 2 years",
      },
      color: "primary-gold",
    },
    {
      id: 6,
      title: "Specialist Support Manager",
      category: "management",
      level: "Senior Management",
      description:
        "Lead specialist services for individuals with complex needs. Shape innovative approaches to high-quality care delivery.",
      fullDescription:
        "Specialist Support Managers oversee services for individuals with the most complex needs, including autism, learning disabilities, and mental health conditions. You'll lead multidisciplinary teams, develop innovative support approaches, and ensure the highest standards of specialized care.",
      workPatterns: ["Full-time"],
      keyResponsibilities: [
        "Manage specialist residential and community services",
        "Lead multidisciplinary teams including specialists",
        "Develop innovative support approaches",
        "Ensure CIW compliance for complex services",
        "Liaison with health professionals and commissioners",
      ],
      idealFor: [
        "Experienced managers with specialist knowledge",
        "Those passionate about complex needs",
        "Leaders who enjoy innovation and development",
        "People committed to evidence-based practice",
      ],
      requirements: [
        "Relevant management qualification (Level 5 minimum)",
        "Extensive experience in specialist care",
        "Understanding of autism, learning disabilities, or mental health",
        "CIW registration experience",
        "Strong clinical and management skills",
      ],
      benefits: [
        "Senior management package",
        "Professional development opportunities",
        "Autonomy to drive service innovation",
        "Company car and benefits",
        "Leadership development programs",
      ],
      careerProgression: "Registered Manager → Area Manager ",
      testimonial: {
        quote: "We need to obtain quotes from current staff",
        author: "Andy Davies",
        role: "Specialist Support Manager, 5 years",
      },
      color: "secondary-purple",
    },
    {
      id: 7,
      title: "Registered Manager",
      category: "management",
      level: "Senior Management",
      description:
        "Lead entire services with full autonomy. Take overall responsibility for delivering outstanding care while developing your team.",
      fullDescription:
        "Registered Managers have overall responsibility for the quality, safety, and compliance of our care services. You'll be registered with CIW and accountable for creating environments where both staff and service users can thrive. This role offers significant autonomy combined with comprehensive support.",
      workPatterns: ["Full-time"],
      keyResponsibilities: [
        "Overall service management and strategic leadership",
        "Ensure CIW compliance and outstanding quality ratings",
        "Lead and develop management teams",
        "Stakeholder relationship management",
        "Budget management and business development",
      ],
      idealFor: [
        "Experienced managers ready for full responsibility",
        "Strategic thinkers with strong leadership skills",
        "Those passionate about driving excellence",
        "People who thrive with autonomy and accountability",
      ],
      requirements: [
        "Relevant management qualification (Level 5 Diploma minimum)",
        "Extensive care sector management experience",
        "CIW registration eligible",
        "Strong financial and people management skills",
        "Commitment to continuous improvement",
      ],
      benefits: [
        "Senior management salary and benefits package",
        "Company car and comprehensive benefits",
        "Management autonomy with head office support",
        "Professional development and conference opportunities",
        "Performance-related bonuses and recognition",
      ],
      careerProgression: "Area Manager → Director → Executive Team",
      testimonial: {
        quote: "We need to obtain quotes from current staff",
        author: "Andy Davies",
        role: "Registered Manager, 6 years",
      },
      color: "primary-navy",
    },
  ],

  // Call to action data
  cta: {
    title: "Ready to Start Your Care Career?",
    description:
      "Whether you're new to care or an experienced professional, we have opportunities for you to grow and make a difference.",
    primaryButton: {
      text: "View Current Vacancies",
      link: "https://jobs.dayforcehcm.com/en-GB/manddcare/CANDIDATEPORTAL",
    },
    secondaryButton: {
      text: "Our Benefits",
      link: "/careers/benefits",
    },
    contact: {
      email: "recruitment@manddcare.co.uk",
      phone: "01792 885126",
    },
  },
};
