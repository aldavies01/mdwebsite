// Full per-facility data keyed by slug
export const specialistDetails = {
  "ty-hiraeth": {
    id: 1,
    slug: "ty-hiraeth",
    name: "Ty Hiraeth",
    address: "Ty Hiraeth, Bryn Road, Penygroes, SA14 7PW",
    description:
      "Specialist residential care facility providing expert support for individuals with complex needs and challenging behaviors.",
    capacity: "6 residents",
    established: "2016",
    images: ["/images/specialist/Ty Hiraeth.png"],
    regulatorRatingLabel: "CIW",
    rating: "Awaiting Inspection",
    specialties: [
      "Complex Needs",
      "Challenging Behavior",
      "Autism",
      "Mental Health",
    ],
    features: [
      "Specialist trained staff",
      "Behavioral support plans",
      "Therapeutic interventions",
      "Crisis management",
    ],
    phone: "",
    email: "",
    type: "Specialist Care",
  },

  "ty-richards": {
    id: 2,
    slug: "ty-richards",
    name: "Ty Richards",
    address: "Ty Richards, Bryn Road, Penygroes, SA14 7PW",
    description:
      "Purpose-built specialist facility offering intensive support for individuals requiring high levels of care and intervention.",
    capacity: "4 residents",
    established: "2018",
    images: ["/images/specialist/Ty Richards.jpg"],
    regulatorRatingLabel: "CIW",
    rating: "Awaiting Inspection",
    specialties: [
      "Severe Learning Disabilities",
      "Autism",
      "Self-Injurious Behavior",
      "Complex Medical Needs",
    ],
    features: [
      "1:1 support available",
      "Sensory rooms",
      "Therapeutic gardens",
      "Family liaison",
    ],
    phone: "",
    email: "",
    type: "Specialist Care",
  },

  tegfan: {
    id: 3,
    slug: "tegfan",
    name: "Tegfan",
    address: "Arthur Street, Ammanford, SA18 2DR",
    description:
      "Specialist care home in Ammanford providing structured support for individuals with autism and learning disabilities.",
    capacity: "8 residents",
    established: "2017",
    images: ["/images/specialist/tegfan.png"],
    regulatorRatingLabel: "CIW",
    rating: "Awaiting Inspection",
    specialties: [
      "Autism Spectrum Disorders",
      "Learning Disabilities",
      "Communication Disorders",
      "Behavioral Challenges",
    ],
    features: [
      "Autism-friendly environment",
      "Structured routines",
      "Communication support",
      "Transition planning",
    ],
    phone: "",
    email: "",
    type: "Specialist Care",
  },

  "ynystawe-lodge": {
    id: 4,
    slug: "ynystawe-lodge",
    name: "Ynystawe Lodge",
    address: "Pard Rd, Ynysforgan, Swansea, SA6 5AP",
    description:
      "Modern specialist facility providing comprehensive care for individuals with complex health and behavioral needs.",
    capacity: "10 residents",
    established: "2019",
    images: ["/images/specialist/ynystawe.png"],
    regulatorRatingLabel: "CIW",
    rating: "Good",
    specialties: [
      "Complex Health Needs",
      "Neurological Conditions",
      "Psychiatric Support",
      "Rehabilitation",
    ],
    features: [
      "Medical support on-site",
      "Rehabilitation programs",
      "Multi-disciplinary team",
      "Respite care",
    ],
    phone: "",
    email: "",
    type: "Specialist Care",
    ciwWidgetSrc:
      "https://digital.careinspectorate.wales/widget/SIN-00013708-MBHR",
  },
};

// Optional: control display order in the grid
export const specialistOrder = [
  "ty-hiraeth",
  "ty-richards",
  "ynystawe-lodge",
  "tegfan",
];
