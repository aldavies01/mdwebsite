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
    { value: "51+", label: "New Capacity" }, // 16 + 12 + 8 + 15
    { value: "25–26", label: "Launch Year" },
  ],
  heroImage: "/images/residential/Ty Gwerthfawr.jpeg",
};

export const upcomingDevelopments = [
  {
    id: 2,
    title: "Ty Gwerthfawr (Precious House)",
    location: "Pontardawe",
    status: "Final Preparation",
    openingDate: "Early 2025",
    description:
      "A 12-flat residential service with all ground-floor flats (10 wheelchair accessible). Flat-based model of care with a large communal space and large private garden. Supporting adults with mental health, learning disability and physical disability.",
    features: [
      "12 flat residential service",
      "All ground floor flats",
      "10 wheelchair accessible flats",
      "Flat-based model of care",
      "Large communal space",
      "Large private garden space",
      "Mental health, learning disability and physical disability",
    ],
    capacity: "12 residents",
    usp: "New jobs created",
    uspValue: "50",
    image: "/images/residential/Ty Gwerthfawr.jpeg",
    category: "Residential",
    priority: "High",
  },
  {
    id: 1,
    title: "Ty Ddraig",
    location: "Rhigos",
    status: "In Development",
    openingDate: "2026",
    description:
      "A specialist residential service set on a large area of land in Rhigos. Designed to house up to 16 people in bespoke individual accommodation, based on a tried and tested flat-led model of support. The service will support adults with complex learning disabilities, autism spectrum conditions and associated diagnoses, in homely accommodation that can be personalised and provides a robust and safe environment.",
    features: [
      "16 self contained flats across two floors",
      "PBS Practitioners based within the service",
      "Active support led",
      "Extensive garden space",
      "Autism and learning disability",
    ],
    capacity: "16 residents",
    usp: "New jobs created",
    uspValue: "100",
    image: "/images/developments/ty-ddraig.jpg",
    category: "Specialist Care",
    priority: "High",
  },
  {
    id: 3,
    title: "Tonypandy Apartments",
    location: "Tonypandy",
    status: "In Development",
    openingDate: "2025",
    description:
      "Vision is a residential service across three floors, delivered as a flat-based model of care. Will support individuals with learning disabilities, ASC and associated health conditions, with a focus on enabling independence through targeted, person-centred support.",
    features: [
      "8 flat residential service across 3 floors",
      "2 ground floor flats",
      "3 first floor flats",
      "3 top floor flats",
      "Flat-based model of care",
      "Mental health, learning disability and physical disability",
    ],
    capacity: "8 residents",
    usp: "New jobs created",
    uspValue: "40",
    image: "/images/residential/tonypandy.png",
    category: "Residential",
    priority: "High",
  },
  {
    id: 4,
    title: "Gowerton",
    location: "Gowerton",
    status: "In Development",
    openingDate: "2026",
    description:
      "A 15-flat residential service transforming a former primary school into a modern, flat-based residential service. Will support individuals with mental health, learning disability and physical health needs, with scope for future expansion and development.",
    features: [
      "15 flat residential service",
      "Downstairs accessible flats alongside first floor flats",
      "Flat-based model of care",
      "Mental health, learning disability and physical health",
    ],
    capacity: "15 residents",
    usp: "New jobs created",
    uspValue: "60",
    image: "/images/developments/gowerton.jpg",
    category: "Residential",
    priority: "High",
  },
];

export const innovations = [
  {
    title: "Innovative Care Planning Technology",
    description:
      "Implementing artificial intelligence to enhance person-centered care planning and predict support needs.",
    status: "Planning Phase",
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
  // {
  //   title: "Mobile Support App",
  //   description:
  //     "Developing a comprehensive mobile application for service users, families, and staff communication.",
  //   status: "Development",
  //   icon: "smartphone",
  // },
];

export const timeline = [
  {
    devId: 2, // Ty Gwerthfawr
    period: "Q2 2025",
    color: "secondary-purple",
  },
  {
    devId: 3, // Tonypandy Apartments
    period: "Q4 2025",
    color: "secondary-coral",
  },
  {
    devId: 4, // Gowerton
    period: "Q3 2026",
    color: "secondary-teal",
  },
  {
    devId: 1, // Ty Ddraig
    period: "Q4 2026",
    color: "primary-gold",
  },
];
