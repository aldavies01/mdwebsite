// src/data/new-developments.content.js

export const hero = {
  badge: "Building the Future",
  titleMain: "New",
  titleHighlight: "Developments",
  blurb: [
    "We're continuously evolving and expanding our services to better serve our community. Discover our upcoming facilities, innovative technologies, and exciting new programs that will enhance the quality of care and support we provide.",
    "From state-of-the-art autism centers to cutting-edge digital inclusion hubs, we're investing in the future of care and support services across Wales.",
  ],
  stats: [
    { value: "4", label: "Major Projects" },
    { value: "50+", label: "New Capacity" },
    { value: "25-26", label: "Launch Year" },
  ],
  heroImage: "/images/developments/hero-placeholder.jpg",
};

export const upcomingDevelopments = [
  {
    id: 1,
    title: "Ty Ddraig",
    location: "Rhigos, Rhondda",
    status: "Building Phase",
    openingDate: "Q4 2025",
    description:
      "A purpose-built facility designed specifically for adults with autism and complex needs, featuring sensory rooms, therapeutic gardens, and innovative technology.",
    features: [
      "12-bed specialist residential facility",
      "Sensory integration therapy rooms",
      "Therapeutic gardens and outdoor spaces",
      "Advanced assistive technology",
      "24/7 specialist autism support",
      "PBS practitioner on-site",
    ],
    capacity: "8 residents",
    usp: "New jobs created",
    uspValue: "50",
    image: "/images/developments/llanelli-centre.jpg",
    category: "Specialist Care",
    priority: "High",
  },
  {
    id: 2,
    title: "Tonypandy",
    location: "Tonypandy",
    status: "Planning Phase",
    openingDate: "Q2 2025",
    description:
      "A purpose-built facility designed specifically for adults with autism and complex needs, featuring sensory rooms, therapeutic gardens, and innovative technology.",
    features: [
      "Digital skills workshops",
      "Assistive technology showcase",
      "Remote learning capabilities",
      "Social interaction spaces",
      "Tech support and training",
    ],
    capacity: "15 supported",
    usp: "New jobs created",
    uspValue: "50",
    image: "/images/developments/digital-hub.jpg",
    category: "Innovation",
    priority: "Medium",
  },
  {
    id: 3,
    title: "Head Office Renovation",
    location: "Carmarthen",
    status: "Completed",
    openingDate: "Q2 2025",
    description:
      "A state of the art facility, acting as our central hub. We run daily training courses for our highly qualified staff members",
    features: [
      "Multi-purpose activity halls",
      "Respite care facilities",
      "Family support rooms",
      "Café and social spaces",
      "Accessible fitness suite",
      "Arts and crafts studios",
    ],
    capacity: "75 daily attendees",
    usp: "New jobs created",
    uspValue: "50",
    image: "/images/developments/wellbeing-centre.jpg",
    category: "Community",
    priority: "High",
  },
  {
    id: 4,
    title: "Project 4",
    location: "Pembrokeshire",
    status: "Property Search",
    openingDate: "Q1 2026",
    description:
      "New residential living accommodations expanding our services into Pembrokeshire, providing modern, accessible homes with flexible support packages.",
    features: [
      "12 new supported living flats",
      "Flexible support packages",
      "Community integration focus",
      "Employment support hub",
      "Transport links optimization",
      "Local partnership development",
    ],
    capacity: "12 individuals",
    usp: "New jobs created",
    uspValue: "50",
    image: "/images/developments/pembrokeshire-homes.jpg",
    category: "Expansion",
    priority: "Medium",
  },
];

export const innovations = [
  {
    title: "Innovative Care Planning Technology",
    description:
      "Implementing artificial intelligence to enhance person-centered care planning and predict support needs.",
    status: "Pilot Phase",
    icon: "lightbulb",
  },
  {
    title: "Continuous investment in e-learning",
    description: "Ensuring our staff are highly trained and ready",
    status: "Implementation Phase",
    icon: "tablet",
  },
  {
    title: "Smart Home Technology",
    description:
      "Integrating IoT devices and smart systems to enhance independence and safety in supported living.",
    status: "Implementation",
    icon: "home",
  },
  {
    title: "Mobile Support App",
    description:
      "Developing a comprehensive mobile application for service users, families, and staff communication.",
    status: "Development",
    icon: "smartphone",
  },
];

export const timeline = [
  {
    devId: 3, // links to Head Office Renovation
    period: "Q2 2025",
    color: "secondary-purple",
  },
  {
    devId: 1, // links to Ty Ddraig
    period: "Q3 2025",
    color: "secondary-coral",
  },
  {
    devId: 2, // links to Tonypandy
    period: "Q4 2025",
    color: "secondary-teal",
  },
  {
    devId: 4, // links to Project 4
    period: "Q1 2026",
    color: "primary-gold",
  },
];
