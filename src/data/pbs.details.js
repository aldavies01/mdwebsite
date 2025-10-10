// data/pbsData.js

export const implementationSteps = [
  {
    id: 1,
    title: "Person-Centered Planning",
    description:
      "We develop a comprehensive person-centered plan of care for each individual we support, implemented through our Active Support model.",
    iconName: "user-check",
  },
  {
    id: 2,
    title: "Specialist Assessment",
    description:
      "When challenging behaviors occur, our PBS Practitioners conduct comprehensive assessments to understand the underlying factors.",
    iconName: "clipboard-check",
  },
  {
    id: 3,
    title: "Collaborative Support",
    description:
      "Our PBS team works closely with staff, families, and external professionals to maintain and develop effective support plans.",
    iconName: "users",
  },
];

export const advantages = [
  {
    title: "Understanding Behavior Function",
    description:
      "We identify the 'why' behind challenging behaviors, enabling more effective and compassionate support strategies.",
    iconName: "lightbulb",
    iconColor: "text-secondary-coral",
  },
  {
    title: "Reduced Staff Turnover",
    description:
      "Better understanding and management of challenging situations leads to improved staff wellbeing and retention.",
    iconName: "users",
    iconColor: "text-secondary-teal",
  },
  {
    title: "Meaningful Lives",
    description:
      "People we support experience greater fulfillment and purpose through person-centered, evidence-based approaches.",
    iconName: "heart",
    iconColor: "text-secondary-purple",
  },
  {
    title: "Greater Independence",
    description:
      "Effective behavior support creates opportunities for people to move to less restrictive, more independent settings.",
    iconName: "award",
    iconColor: "text-primary-gold",
  },
];

export const teamStructure = [
  {
    role: "Clinical Lead",
    name: "Michelle Martin",
    description:
      "Oversees PBS implementation and provides clinical guidance across all services.",
    color: "bg-secondary-coral",
  },
  {
    role: "PBS Practitioners",
    description:
      "Specialist team members who conduct assessments and develop PBS action plans.",
    color: "bg-secondary-purple",
  },
  {
    role: "PBS Coordinators",
    description:
      "Service-based coordinators with QCF Level 4 training who support daily implementation.",
    color: "bg-secondary-teal",
  },
  {
    role: "Support Staff",
    description:
      "Front-line staff trained to Level 3 PBS and Active Support principles.",
    color: "bg-primary-navy",
  },
];

// Evidence-based practice content - only what's mentioned in the document
export const evidenceBasedPractice = {
  description:
    "We at M&D Care believe the direction and future of social care is evidence-based practice. The model involves a combination of critical thinking and evaluation of best research evidence, clinical expertise and the client's values and preferences.",

  models: [
    "Active Support",
    "Positive Behaviour Support",
    "Research and Development",
    "Positive Behaviour Management",
  ],

  training: {
    description:
      "Education underpins all good practice and we have heavily invested within the company to develop a process of education – training – supervision – reflection and audit.",
    features: [
      "Accredited trainers who are experts in their field",
      "Expert class and online training that reflects best practice",
      "QCF qualified social care workers",
      "On the job supervision and reflection",
    ],
  },

  activeSupport: {
    description:
      "Active Support changes the staff support style from 'caring for' to 'working with'. It promotes independence and supports individuals to live an ordinary life that is valued by society.",
    benefits: [
      "Skill acquisition and development",
      "Increased engagement in constructive activity",
      "Access to new opportunities",
      "Building relationships and social networks",
    ],
  },

  pbsApproach: {
    description:
      "PBS is an ethical, evidence-based approach that is person-centred and proactive, focusing on improvements in quality of life and prevention of challenging behaviour.",
    principles: [
      "Promotes physical and emotional well-being",
      "Address physical and mental health issues",
      "Emphasises personal and skill development",
      "Supports and encourages family and personal relationships",
      "Provides opportunities for social well-being and inclusion",
      "Promotes human rights, dignity and respect",
      "Enhances living accommodation and the person-environment fit",
    ],
  },

  pbmABMU: {
    description:
      "PBM ABMU is accredited by BILD and integrates the models of active support and PBS. Every restrictive practice is documented and analysed by the PBS team.",
    monitoring: [
      "Consistent implementation of proactive and secondary strategies",
      "Reactive strategy utilised as a last resort",
      "Monitor if restrictive intervention is no longer necessary",
      "Monitor frequency of incidents to identify individuals who may need support strategies reviewed",
    ],
  },
};
