// src/data/services.constants.js

import Icon from "../components/common/Icon";

export const services = [
  {
    id: 1,
    title: "Residential Care",
    subtitle: "Comfortable homes with 24/7 professional support",
    description:
      "Our residential care services provide safe, comfortable, and homely environments where individuals can receive the support they need while maintaining their dignity and independence. Each of our residential homes is designed to feel like a true home, not an institution.",
    features: [
      "24/7 qualified care staff",
      "Comfortable, homely living environments",
      "Personalised care planning and support",
      "Social activities and community engagement",
      "Family involvement and regular updates",
      "Specialist dietary requirements catered for",
      "Access to healthcare professionals",
      "Person-centered approach to care",
    ],
    stats: [
      { number: "24/7", label: "Professional Support" },
      { number: "15+", label: "Years Experience" },
      { number: "8", label: "Residential Locations" },
    ],
    bgColor: "bg-secondary-coral",
    textColor: "text-secondary-coral",
    borderColor: "border-secondary-coral",
    link: "/services/residential",
    icon: "house",
    // 👇 NEW: photos
    gallery: [
      "/images/stock/stock-1.jpg",
      "/images/stock/stock-2.jpg",
      "/images/stock/stock-3.jpg",
    ],
  },
  {
    id: 2,
    title: "Specialist Care",
    subtitle: "Expert support for complex health and behavioral needs",
    description:
      "Our specialist care services are designed for individuals with complex health conditions, learning disabilities, autism, or challenging behaviors. We provide highly trained staff, specialized environments, and evidence-based interventions to ensure the best possible outcomes.",
    features: [
      "Specialised staff with advanced training",
      "Positive behavior support strategies",
      "Therapeutic interventions and activities",
      "Medical oversight and health monitoring",
      "Crisis intervention and support planning",
      "Autism-specific support approaches",
      "Sensory-friendly environments",
      "Multi-disciplinary team approach",
    ],
    stats: [
      { number: "100%", label: "Qualified Staff" },
      { number: "5", label: "Specialist Units" },
      { number: "50+", label: "Individuals Supported" },
    ],
    bgColor: "bg-secondary-purple",
    textColor: "text-secondary-purple",
    borderColor: "border-secondary-purple",
    link: "/services/specialist-care",
    icon: "check-badge",
    // 👇 NEW: use your MP4 here (will render via MediaCard inside ServiceDetail)
    media: {
      type: "video",
      provider: "file",
      src: "/videos/Tegfan.mp4", // ⬅️ your MP4 path
      poster: "/images/specialist/tegfan.png",
      title: "Inside our Specialist Care",
      description:
        "Therapeutic environments and multidisciplinary support for complex needs.",
    },
  },
  {
    id: 3,
    title: "Supported Living",
    subtitle: "Promoting independence with flexible, person-centered support",
    description:
      "Our supported living services help individuals live as independently as possible in their own homes or shared accommodation. We provide flexible support that adapts to each person's changing needs, promoting choice, control, and community integration.",
    features: [
      "Flexible support tailored to individual needs",
      "Promoting independence and life skills",
      "Community integration and social connections",
      "Employment and education support",
      "Regular reviews and goal setting",
      "Tenancy support and housing advice",
      "Travel training and mobility support",
      "Technology and digital inclusion",
    ],
    stats: [
      { number: "24/7", label: "Support Available" },
      { number: "6", label: "Supported Living Services" },
      { number: "40+", label: "People Living Independently" },
    ],
    bgColor: "bg-secondary-teal",
    textColor: "text-secondary-teal",
    borderColor: "border-secondary-teal",
    link: "/services/supported-living",
    icon: "users",
    image: "/images/thumbnail/thumbnail-2.png",
  },
];

export const additionalServices = [
  {
    title: "Positive Behaviour Support",
    description:
      "Evidence-based approaches to understanding and supporting individuals with challenging behaviors",
    icon: "heart",
    link: "/services/positive-behaviour-support",
  },
  {
    title: "Respite Care",
    description:
      "Short-term care services to provide families and carers with temporary relief and support",
    icon: "sun",
    link: "/services/respite-care",
  },
  {
    title: "Outreach Support",
    description:
      "Community-based support services to help individuals maintain independence in their own homes",
    icon: "location",
    link: "/services/outreach-support",
  },
  {
    title: "Daily Activities",
    description:
      "Structured day programs providing meaningful activities, skills development, and social opportunities",
    icon: "clock",
    link: "/services/day-services",
  },
];
