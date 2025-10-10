// src/data/supported-living.details.js

export const supportedLivingDetails = {
  "crown-street": {
    name: "Crown Street",
    type: "Supported Living Service",
    address: "",
    phone: "",
    email: "",
    regulatorRatingLabel: "CIW",
    rating: "Awaiting Inspection",

    capacity: "",
    established: "",

    description:
      "Independence-focused supported living within the community, with flexible staff support as needed.",
    longDescription:
      "Crown Street provides person-centred supported living that balances autonomy with safety. Our team supports daily living skills, health appointments, and meaningful community activity while promoting confidence and independence.",

    specialties: ["Learning Disabilities", "Autism Support", "Mental Health"],
    features: [
      "24/7 on-call support",
      "Self-contained accommodation",
      "Community access & activities",
      "Health & appointments support",
      "Skills development & routines",
    ],

    images: ["/images/supported-living/crown-street.jpg"],

    staff: [
      // { name: "", role: "", qualifications: "", experience: "" },
    ],

    activities: [
      {
        name: "Community engagement",
        description:
          "Regular access to local amenities, shops, and social opportunities.",
      },
      {
        name: "Daily living skills",
        description:
          "Structured support for budgeting, cooking, cleaning, and travel training.",
      },
    ],

    testimonials: [
      // { text: "", author: "", relationship: "" },
    ],
  },

  "glannant-road": {
    name: "Glannant Road",
    type: "Supported Living Service",
    address: "",
    phone: "",
    email: "",
    regulatorRatingLabel: "CIW",
    rating: "Awaiting Inspection",

    capacity: "",
    established: "",

    description:
      "Self-contained living with nearby team support, tailored to personal goals and routines.",
    longDescription:
      "Glannant Road offers a step-down environment from residential care. Support plans focus on building confidence, maintaining wellbeing, and progressing toward greater independence at the person’s own pace.",

    specialties: ["Learning Disabilities", "Autism Support", "Mental Health"],
    features: [
      "Flexible peripatetic support",
      "Outcome-focused planning",
      "PBS-informed approaches",
      "Links with local services",
    ],

    images: ["/images/supported-living/glannant.jpg"],
    staff: [],
    activities: [
      {
        name: "Skills building",
        description: "Budgeting and meal preparation.",
      },
      {
        name: "Health support",
        description: "Medication and appointment support.",
      },
    ],
    testimonials: [],
  },

  "ebenezer-chapel": {
    name: "Ebenezer Chapel",
    type: "Supported Living Service",
    address: "",
    phone: "",
    email: "",
    regulatorRatingLabel: "CIW",
    rating: "Awaiting Inspection",

    capacity: "",
    established: "",

    description:
      "Community-based supported living with consistent staff on hand when needed.",
    longDescription:
      "At Ebenezer Chapel, individuals live in their own accommodation with support wrapped around their needs. Our approach emphasises community participation, personal choice, and safety.",

    specialties: ["Learning Disabilities", "Autism Support", "Mental Health"],
    features: [
      "Own tenancy feel",
      "On-call and scheduled support",
      "Structured routines & goals",
      "Transport and travel training",
    ],

    images: ["/images/supported-living/ebenezer.jpg"],
    staff: [],
    activities: [
      {
        name: "Community outings",
        description: "Social events and local activities.",
      },
      {
        name: "Healthy living",
        description: "Support with cooking and nutrition.",
      },
    ],
    testimonials: [],
  },

  "wern-road": {
    name: "Wern Road",
    type: "Supported Living Service",
    address: "",
    phone: "",
    email: "",
    regulatorRatingLabel: "CIW",
    rating: "Awaiting Inspection",

    capacity: "",
    established: "",

    description:
      "Safe, supportive accommodation designed to foster life skills and independence.",
    longDescription:
      "Wern Road focuses on practical skills, wellbeing, and access to the community. Staff provide the right level of support at the right time, encouraging self-reliance.",

    specialties: ["Learning Disabilities", "Autism Support", "Mental Health"],
    features: [
      "Personalised support plans",
      "Proactive health monitoring",
      "Meaningful daytime activity",
      "Family and professional liaison",
    ],

    images: ["/images/supported-living/wern.png"],
    staff: [],
    activities: [
      {
        name: "Routine building",
        description: "Daily structure and planning.",
      },
      {
        name: "Social connection",
        description: "Encouraging friendships and inclusion.",
      },
    ],
    testimonials: [],
  },

  "thomas-street": {
    name: "Thomas Street",
    type: "Supported Living Service",
    address: "",
    phone: "",
    email: "",
    regulatorRatingLabel: "CIW",
    rating: "Awaiting Inspection",

    capacity: "",
    established: "",

    description:
      "Supported living that blends privacy with responsive, peripatetic staff support.",
    longDescription:
      "At Thomas Street, people live in self-contained homes with flexible staff input. We promote choice, independence, and participation in local life.",

    specialties: ["Learning Disabilities", "Autism Support", "Mental Health"],
    features: [
      "24/7 on-call availability",
      "Goal-oriented outcomes",
      "Medication & appointments support",
      "Travel training and access",
    ],

    images: ["/images/supported-living/thomas-street.jpeg"],
    staff: [],
    activities: [
      {
        name: "Life admin support",
        description: "Budgeting and tenancy skills.",
      },
      {
        name: "Recreation",
        description: "Hobbies, sports, and group activities.",
      },
    ],
    testimonials: [],
  },

  "primrose-lane": {
    name: "Primrose Lane",
    type: "Supported Living Service",
    address: "",
    phone: "",
    email: "",
    regulatorRatingLabel: "CIW",
    rating: "Awaiting Inspection",

    capacity: "",
    established: "",

    description:
      "A calm, structured supported living environment with skilled staff available when needed.",
    longDescription:
      "Primrose Lane supports people to live well at home and in the community. We focus on building independence, maintaining wellbeing, and achieving personal goals.",

    specialties: ["Learning Disabilities", "Autism Support", "Mental Health"],
    features: [
      "Self-contained living",
      "Consistent core team support",
      "Community access & transport",
      "Skills and routines coaching",
    ],

    images: ["/images/supported-living/primrose.jpeg"],
    staff: [],
    activities: [
      { name: "Meal planning", description: "Healthy choices and food prep." },
      { name: "Out-and-about", description: "Shops, parks, and local groups." },
    ],
    testimonials: [],
  },
};

// Display order for listings/grids
export const supportedLivingOrder = [
  "crown-street",
  "glannant-road",
  "ebenezer-chapel",
  "wern-road",
  "thomas-street",
  "primrose-lane",
];
