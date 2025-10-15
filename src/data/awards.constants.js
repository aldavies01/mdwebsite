// src/data/awards.constants.js
// export const majorAwards = [
//   {
//     id: 1,
//     year: "2024",
//     title: "Outstanding Care Provider of the Year",
//     organization: "Wales Care Awards",
//     description:
//       "Recognized for exceptional person-centered care across all our residential and specialist services, demonstrating unwavering commitment to dignity, respect, and individual empowerment.",
//     achievement: "Winner",
//     color: "primary-gold",
//     impact:
//       "This recognition validates our approach to putting people first in everything we do.",
//     image: "/images/awards/awards-1.jpg",
//   },
//   {
//     id: 2,
//     year: "2024",
//     title: "Innovation in Autism Support",
//     organization: "National Autism Society",
//     description:
//       "Groundbreaking sensory-friendly environments and communication technologies that have revolutionized support for individuals with autism across our specialist facilities.",
//     achievement: "Winner",
//     color: "secondary-teal",
//     impact:
//       "89% improvement in communication outcomes for individuals we support with autism.",
//     image: "/images/awards/awards-2.jpeg",
//   },
//   {
//     id: 3,
//     year: "2024",
//     title: "Best Employer in Social Care",
//     organization: "Skills for Care",
//     description:
//       "Outstanding commitment to staff development, wellbeing, and creating a workplace culture where passionate care professionals can thrive and grow.",
//     achievement: "Winner",
//     color: "secondary-coral",
//     impact:
//       "98% staff retention rate - the highest in our sector across Wales.",
//     image: "/images/awards/awards-3.jpeg",
//   },
//   {
//     id: 4,
//     year: "2024",
//     title: "CIW Outstanding Ratings",
//     organization: "Care Inspector Wales",
//     description:
//       "Four of our services achieved the highest possible rating for being safe, effective, caring, responsive, and well-led - a testament to excellence in every aspect of care.",
//     achievement: "Outstanding",
//     color: "secondary-purple",
//     impact:
//       "Only 3% of adult social care services achieve Outstanding across all domains.",
//     image: "/images/awards/awards-4.png",
//   },
// ];

export const awardCategories = [
  {
    id: "national",
    title: "Great British Care Awards",
    description:
      "Celebrating our success at major UK care industry awards that highlight excellence in service delivery and leadership.",
    awards: [
      {
        title: "Ynystawe Lodge - Best Care Home Team",
        year: "2022",
        achievement: "Winner",
        description:
          "Recognised nationally for excellence in social care and leadership across multiple categories.",
        image: "/images/awards/bestcareteam.jpg",
        color: "primary-gold",
      },
      {
        title: "Care Employer of the Year",
        year: "2024",
        achievement: "Winner",
        description:
          "Awarded for our outstanding commitment to staff development, wellbeing, and workplace culture.",
        image: "/images/awards/awards-2.jpeg",
        color: "secondary-coral",
      },
    ],
  },
  {
    id: "regional",
    title: "Regional Excellence",
    description:
      "Honoured at regional and Welsh award ceremonies for innovation and outstanding care across our communities.",
    awards: [
      {
        title: "Welsh Veterans Awards",
        year: "2023",
        achievement: "Winner",
        description:
          "Acknowledging our support for veterans and commitment to inclusive employment opportunities.",
        image: "/images/awards/welsh-veterans.jpg",
        color: "secondary-teal",
      },
    ],
  },
  {
    id: "continuous",
    title: "Continuous Achievement",
    description:
      "Recognition across the years for innovation, leadership, and person-centred care.",
    awards: [
      {
        title: "Care Wales Innovation Awards",
        year: "Ongoing",
        achievement: "Finalist & Winner (Multiple Years)",
        description:
          "Honouring continuous improvement and creative approaches in autism and learning disability support.",
        image: "/images/awards/innovation.jpg",
        color: "secondary-purple",
      },
    ],
  },
];

export const achievements = [
  { number: "15+", label: "Awards Won", subtitle: "Since 2020" },
  { number: "4", label: "CIW Outstanding", subtitle: "Services Rated" },
  {
    number: "200+",
    label: "QCF Qualified Staff",
    subtitle: "Industry Leading",
  },
  {
    number: "100%",
    label: "SCW Registration",
    subtitle: "Ensuring Compliance",
  },
];

export const majorAwards = [
  // Keep or extend as you confirm specifics.
  // Example highlight entries (can be removed if not needed):
  {
    id: 1,
    year: "2024",
    title: "Care Employer of the Year",
    organization: "British Care Awards",
    description:
      "Outstanding commitment to staff development, wellbeing, and a culture where care professionals thrive.",
    achievement: "Winner",
    color: "secondary-coral",
    impact:
      "High staff satisfaction and retention, with strong career pathways.",
    image: "/images/awards/awards-2.jpeg",
  },
  {
    id: 2,
    year: "2022",
    title: "British Care Awards - Best Care Home Team",
    organization: "British Care Awards",
    description:
      "Recognised nationally for excellence in social care and leadership across multiple categories.",
    achievement: "Winner",
    color: "primary-gold",
    impact: "National acknowledgement of quality and impact across services.",
    image: "/images/awards/bestcareteam.jpg",
  },
];

export const awardGallery = [
  "/images/awards/awards-1.jpg",
  "/images/awards/awards-2.jpeg",
  "/images/awards/awards-3.jpeg",
  "/images/awards/awards-4.png",
  "/images/awards/awards-5.jpg",
  "/images/awards/awards-6.jpeg",
];

export const awardPartners = [
  {
    name: "British Care Awards",
    logo: "/images/awards/british-care.jpg",
  },
  {
    name: "West Wales Business Awards",
    logo: "/images/awards/WWBA.png",
  },
  {
    name: "Welsh Veterans Awards",
    logo: "/images/awards/Welsh-Veterans-Awards-Logo.png",
  },
  {
    name: "The Learning Disabilities & Autism Awards",
    logo: "/images/awards/AutismAwards.png",
  },
];
