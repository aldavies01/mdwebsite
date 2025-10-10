// src/data/careers.dayInTheLife.js
export const dayInTheLifeData = {
  // Hero Section
  hero: {
    badge: "A Day in the Life",
    title: "24 Hours as a",
    titleHighlight: "Support Worker",
    subtitle: "Join Emma for a typical day at Maple House Specialist Service",
    description:
      "Ever wondered what it's really like to be a support worker? Follow Emma through her rewarding day supporting adults with learning disabilities and autism, and discover why she says it's the best job she's ever had.",
    stats: [
      {
        icon: "users",
        label: "12 Residents",
        subtitle: "Personalised support",
      },
      { icon: "clock", label: "12 Hour Shift", subtitle: "Flexible patterns" },
      { icon: "heart", label: "100% Rewarding", subtitle: "Every single day" },
      {
        icon: "coffee",
        label: "It never gets boring",
        subtitle: "Every day is different",
      },
    ],
    profileImage: "/images/staff/emma-profile.jpg",
    profileName: "Emma Thompson",
    profileRole: "Senior Support Worker",
    profileTenure: "3 years at M&D Care",
  },

  // Timeline Overview
  timeline: {
    title: "Emma's Day at a Glance",
    subtitle:
      "Every day is different, but here's what a typical shift looks like",
    shifts: [
      { type: "Day Shift", hours: "8:00 AM - 8:00 PM", key: "day" },
      { type: "Night Shift", hours: "8:00 PM - 8:00 AM", key: "night" },
    ],
    timelines: {
      day: {
        events: [
          {
            time: "08:00",
            title: "Handover & Planning",
            icon: "clipboard",
            duration: "30 mins",
            image: "/images/stock/stock-1.jpg",
          },
          {
            time: "08:30",
            title: "Morning Routines",
            icon: "sunrise",
            duration: "90 mins",
            image: "/images/stock/stock-2.jpg",
          },
          {
            time: "10:00",
            title: "Activities & Outings",
            icon: "activity",
            duration: "120 mins",
            image: "/images/stock/stock-3.jpg",
          },
          {
            time: "11:00",
            title: "Tea Break",
            icon: "coffee",
            duration: "15 mins",
            image: "/images/stock/stock-4.jpg",
          },
          {
            time: "12:00",
            title: "Lunch Support",
            icon: "utensils",
            duration: "60 mins",
            image: "/images/stock/stock-5.jpg",
          },
          {
            time: "14:00",
            title: "Personal Care & 1-1 Time",
            icon: "heart",
            duration: "120 mins",
            image: "/images/stock/stock-6.jpg",
          },
          {
            time: "16:00",
            title: "Afternoon Activities",
            icon: "smile",
            duration: "90 mins",
            image: "/images/stock/stock-7.jpg",
          },
          {
            time: "17:30",
            title: "Evening Meal",
            icon: "dinner",
            duration: "60 mins",
            image: "/images/stock/stock-1.jpg",
          },
          {
            time: "18:30",
            title: "Handover to Night Staff",
            icon: "moon",
            duration: "30 mins",
            image: "/images/stock/stock-1.jpg",
          },
        ],
      },
      night: {
        events: [
          {
            time: "19:00",
            title: "Evening Handover",
            icon: "users",
            duration: "30 mins",
            image: "/images/stock/stock-1.jpg",
          },
          {
            time: "19:30",
            title: "Evening Routines",
            icon: "moon",
            duration: "90 mins",
            image: "/images/stock/stock-2.jpg",
          },
          {
            time: "21:00",
            title: "Quiet Activities",
            icon: "book",
            duration: "120 mins",
            image: "/images/stock/stock-3.jpg",
          },
          {
            time: "23:00",
            title: "Observation & Checks",
            icon: "shield",
            duration: "30 mins",
            image: "/images/stock/stock-4.jpg",
          },
          {
            time: "00:00",
            title: "Night Support",
            icon: "heart",
            duration: "120 mins",
            image: "/images/stock/stock-6.jpg",
          },
          {
            time: "02:00",
            title: "Documentation",
            icon: "edit",
            duration: "30 mins",
            image: "/images/stock/stock-5.jpg",
          },
          {
            time: "03:00",
            title: "Household Tasks",
            icon: "home",
            duration: "60 mins",
            image: "/images/stock/stock-7.jpg",
          },
          {
            time: "05:30",
            title: "Morning Prep",
            icon: "sunrise",
            duration: "60 mins",
            image: "/images/stock/stock-2.jpg",
          },
          {
            time: "06:30",
            title: "Handover to Day Staff",
            icon: "clipboard",
            duration: "30 mins",
            image: "/images/stock/stock-1.jpg",
          },
        ],
      },
    },
  },

  // Morning Routine Section (now with day/night timelines)
  morningRoutine: {
    timelines: {
      day: {
        time: "7:00 AM - 9:00 AM",
        title: "Starting the Day Right",
        description:
          "Every morning begins with a comprehensive handover from the night team. Emma learns about how each resident slept, any concerns, and plans for the day ahead.",
        activities: [
          {
            time: "7:00 AM",
            title: "Team Handover",
            description:
              "Receiving updates from night staff, reviewing care plans, and planning the day's activities with the team.",
            icon: "clipboard",
            quote:
              "The handover sets us up for success. We discuss each person's needs and preferences for the day.",
          },
          {
            time: "7:30 AM",
            title: "Personal Care Support",
            description:
              "Supporting residents with morning routines at their own pace - showering, dressing, and preparing for the day.",
            icon: "user",
            quote:
              "We encourage independence. Some residents just need prompting, others need full support - it's all person-centered.",
          },
          {
            time: "8:30 AM",
            title: "Breakfast Time",
            description:
              "Preparing breakfast together, supporting dietary needs, and enjoying a social start to the day.",
            icon: "coffee",
            quote:
              "James loves to help make toast for everyone. It's these small moments of independence that matter so much.",
          },
        ],
        highlights: [
          "Person-centered approach to every interaction",
          "Building independence through daily routines",
          "Creating a positive, energetic start to the day",
        ],
      },
      night: {
        time: "7:00 PM - 9:00 PM",
        title: "Setting Up a Calm Evening",
        description:
          "Night shift begins with a focused handover and settling routines that prioritise safety, comfort and low-stimulation activities.",
        activities: [
          {
            time: "7:00 PM",
            title: "Evening Handover",
            description:
              "Reviewing daytime updates, health notes and any late changes to plans. Agreeing the night observation schedule.",
            icon: "users",
            quote:
              "Consistency is everything at night - we plan checks and quiet times around each person’s preferences.",
          },
          {
            time: "7:30 PM",
            title: "Settling & Personal Routines",
            description:
              "Supporting winding-down routines - medication prompts, night-time hygiene and preparing comfortable sleep environments.",
            icon: "moon",
            quote:
              "Small tweaks like a favourite blanket or dimmer lighting can make a big difference.",
          },
          {
            time: "8:30 PM",
            title: "Light Supper & Drinks",
            description:
              "Offering snacks, hydration and quiet conversation to promote a relaxed mood before bed.",
            icon: "coffee",
            quote:
              "A warm drink and a chat often helps ease anxieties before sleep.",
          },
        ],
        highlights: [
          "Calm, predictable routines",
          "Safety monitoring without disruption",
          "Environment set for good sleep",
        ],
      },
    },
  },

  // Midday Activities Section (day/night)
  middayActivities: {
    timelines: {
      day: {
        time: "9:00 AM - 2:00 PM",
        title: "Engaging & Enriching",
        description:
          "The late morning and early afternoon are filled with meaningful activities, both in the house and out in the community.",
        activities: [
          {
            title: "Community Outing",
            description:
              "Trip to the local garden center with Michael, who loves plants and choosing flowers for the house garden.",
            icon: "map-pin",
            impact: "Builds confidence and social skills",
            image: "/images/activities/garden-center.jpg",
          },
          {
            title: "Life Skills Session",
            description:
              "Cooking lunch together with Sarah, focusing on her goal to prepare simple meals independently.",
            icon: "book",
            impact: "Develops practical independence",
            image: "/images/activities/cooking.jpg",
          },
          {
            title: "Creative Activities",
            description:
              "Art session with residents who choose to stay home, expressing themselves through painting and crafts.",
            icon: "palette",
            impact: "Encourages self-expression",
            image: "/images/activities/art.jpg",
          },
        ],
        testimonial: {
          quote:
            "No two days are the same. Today might be the garden center, tomorrow could be bowling or a picnic in the park. We follow the residents' interests and energy levels.",
          author: "Emma Thompson",
        },
      },
      night: {
        time: "9:00 PM - 2:00 AM",
        title: "Quiet Engagement & Night-Time Rhythm",
        description:
          "Night-time activities focus on low-stimulation engagement and comfort. We protect sleep while offering choice for anyone awake.",
        activities: [
          {
            title: "Wind-Down Choices",
            description:
              "Puzzles, colouring, audiobooks or calm TV with captions - chosen by residents who are still up.",
            icon: "book",
            impact: "Reduces anxiety and encourages relaxation",
            image: "/images/activities/quiet-reading.jpg",
          },
          {
            title: "Sensory Support",
            description:
              "Weighted blankets, soft lighting and music therapy for those who benefit from sensory regulation.",
            icon: "sparkles",
            impact: "Promotes comfort and better sleep onset",
            image: "/images/activities/sensory.jpg",
          },
          {
            title: "Late-Night Skills (Optional)",
            description:
              "Light domestic tasks with staff (tidy kitchen, lay breakfast items) for residents who like purposeful activity.",
            icon: "check-circle",
            impact: "Builds routine and independence",
            image: "/images/activities/night-tidy.jpg",
          },
        ],
        testimonial: {
          quote:
            "Nights are about reassurance. If someone wakes, we meet them where they are - calmly and without rushing.",
          author: "Emma Thompson",
        },
      },
    },
  },

  // Afternoon Support Section (day/night)
  afternoonSupport: {
    timelines: {
      day: {
        time: "2:00 PM - 5:30 PM",
        title: "Personal Time & Support",
        description:
          "Afternoons often involve more personal, one-on-one support and helping residents pursue their individual goals and interests.",
        focusAreas: [
          {
            title: "1-to-1 Support Sessions",
            description:
              "Dedicated time with each resident to work on personal goals, from communication skills to managing emotions.",
            icon: "user-check",
            color: "secondary-coral",
          },
          {
            title: "Health Appointments",
            description:
              "Accompanying residents to medical appointments, advocating for their needs, and ensuring they understand their care.",
            icon: "shield-check",
            color: "secondary-teal",
          },
          {
            title: "Family Contact",
            description:
              "Supporting video calls and visits with family members, maintaining those crucial connections.",
            icon: "heart",
            color: "secondary-purple",
          },
          {
            title: "Relaxation Time",
            description:
              "Some residents need quiet time to decompress. We respect that and provide gentle support when needed.",
            icon: "smile",
            color: "primary-gold",
          },
        ],
        keySkills: [
          "Active listening",
          "Patience and empathy",
          "Behavior support techniques",
          "Clear communication",
        ],
      },
      night: {
        time: "2:00 AM - 5:30 AM",
        title: "Night Support & Wellbeing",
        description:
          "Late-night hours prioritise reassurance, safety and preparation for a smooth morning.",
        focusAreas: [
          {
            title: "Observations & Reassurance",
            description:
              "Planned checks tailored to each resident, gentle prompts if someone wakes, and support back to sleep.",
            icon: "eye",
            color: "secondary-purple",
          },
          {
            title: "Environment Prep",
            description:
              "Laundry cycles, restocking personal items, setting up calm spaces and morning layouts without noise.",
            icon: "home",
            color: "primary-gold",
          },
          {
            title: "Health & Night Notes",
            description:
              "Recording observations, PRN usage if applicable, and communication notes for the day team.",
            icon: "file-text",
            color: "secondary-teal",
          },
          {
            title: "Early Morning Support",
            description:
              "For early risers: light breakfast prep, gentle conversation and choice-making for the day ahead.",
            icon: "sunrise",
            color: "secondary-coral",
          },
        ],
        keySkills: [
          "Calm communication",
          "Risk awareness",
          "Sleep hygiene principles",
          "Accurate documentation",
        ],
      },
    },
  },

  // Evening Handover Section (day/night)
  eveningHandover: {
    timelines: {
      day: {
        time: "5:30 PM - 7:00 PM",
        title: "Wrapping Up the Day",
        description:
          "The evening brings dinner preparation, settling routines, and a thorough handover to ensure continuity of care.",
        activities: [
          {
            time: "5:30 PM",
            title: "Evening Meal Preparation",
            description:
              "Residents help prepare dinner according to their abilities, creating a family atmosphere around mealtime.",
            icon: "utensils",
          },
          {
            time: "6:30 PM",
            title: "Documentation & Records",
            description:
              "Updating care notes, recording the day's activities, and noting any changes in support needs.",
            icon: "edit",
          },
          {
            time: "6:45 PM",
            title: "Team Handover",
            description:
              "Comprehensive handover to night staff, ensuring they know everything needed for a smooth evening.",
            icon: "users",
          },
        ],
        reflection: {
          quote:
            "As I hand over to the night team, I always feel proud of what we've achieved. Every small victory - a resident trying something new, overcoming anxiety, or simply having a good laugh - makes it all worthwhile.",
          author: "Emma Thompson",
        },
      },
      night: {
        time: "5:30 AM - 7:00 AM",
        title: "Preparing for the New Day",
        description:
          "As night quietens, we complete documentation, refresh the home and hand over to day staff for a positive start.",
        activities: [
          {
            time: "5:30 AM",
            title: "Morning Prep & Light Breakfast",
            description:
              "Setting out breakfast items, checking medication trolleys and preparing plans for early risers.",
            icon: "coffee",
          },
          {
            time: "6:00 AM",
            title: "Final Checks & Notes",
            description:
              "Completing observation logs, incident summaries if any, and highlighting actions for the day team.",
            icon: "file-text",
          },
          {
            time: "6:30 AM",
            title: "Team Handover to Day",
            description:
              "Clear, concise handover focusing on sleep quality, health updates and any environmental adjustments overnight.",
            icon: "clipboard",
          },
        ],
        reflection: {
          quote:
            "A good night sets up a great day. Handing over calmly with everything prepared is the best feeling.",
          author: "Emma Thompson",
        },
      },
    },
  },

  // Staff Testimonial Section (unchanged)
  staffTestimonial: {
    title: "In Emma's Own Words",
    mainQuote:
      "When people ask me about my job, I tell them it's not just about personal care or following routines. It's about being part of someone's journey, celebrating their achievements, and making a real difference every single day.",
    image: "/images/staff/emma-testimonial.jpg",
    highlights: [
      {
        icon: "heart",
        title: "Most Rewarding",
        quote:
          "Seeing Michael speak up in a shop for the first time - I nearly cried with pride.",
      },
      {
        icon: "laugh",
        title: "Funniest Moment",
        quote:
          "Our impromptu kitchen disco party when the radio played everyone's favorite song!",
      },
      {
        icon: "star",
        title: "Biggest Learning",
        quote:
          "Everyone communicates differently. Learning each person's unique way has made me better at everything I do.",
      },
    ],
    advice:
      "My advice to anyone considering this career? Come with an open heart and mind. The training gives you the skills, but the residents teach you what really matters - patience, joy in small moments, and the power of genuine connection.",
  },

  // Why You'll Love It Section (unchanged)
  whyYoullLoveIt: {
    title: "Why You'll Love Being a Support Worker",
    subtitle: "Here's what makes this role so special",
    reasons: [
      {
        title: "No Two Days Are The Same",
        description:
          "From community outings to creative activities, every day brings new experiences and challenges.",
        icon: "refresh-cw",
        color: "secondary-coral",
      },
      {
        title: "Make a Real Difference",
        description:
          "You're not just doing a job - you're transforming lives and helping people achieve their dreams.",
        icon: "heart",
        color: "secondary-teal",
      },
      {
        title: "Amazing Team Support",
        description:
          "Work with passionate colleagues who support each other through everything.",
        icon: "users",
        color: "secondary-purple",
      },
      {
        title: "Continuous Learning",
        description:
          "Every interaction teaches you something new about resilience, communication, and humanity.",
        icon: "graduation-cap",
        color: "primary-gold",
      },
      {
        title: "Work-Life Balance",
        description:
          "Flexible shift patterns mean you can maintain a healthy balance with your personal life.",
        icon: "clock",
        color: "secondary-light-blue",
      },
      {
        title: "Career Progression",
        description:
          "Clear pathways from Support Worker to Senior roles and beyond, with full training support.",
        icon: "trending-up",
        color: "secondary-coral",
      },
    ],
    stats: [
      { number: "94%", label: "Staff satisfaction rate" },
      { number: "3.5 years", label: "Average tenure" },
      { number: "85%", label: "Internal promotions" },
    ],
  },

  // CTA Section (unchanged)
  cta: {
    title: "Ready to Make Every Day Count?",
    description:
      "Join Emma and our incredible team of support workers. No experience needed - just bring your compassion and commitment to making a difference.",
    primaryButton: {
      text: "View Support Worker Roles",
      link: "/careers",
    },
    secondaryButton: {
      text: "Chat with Our Team",
      link: "/contact",
    },
    features: [
      "Full training provided",
      "No experience necessary",
      "Competitive salary & benefits",
      "Flexible shift patterns",
    ],
  },
};
