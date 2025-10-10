// data/contact.js
export const contactData = {
  // Hero section
  hero: {
    badge: "Get In Touch",
    title: "Contact",
    titleHighlight: "M&D Care",
    description:
      "We're here to help. Whether you're looking for care services, career opportunities, or have questions about our approach, our friendly team is ready to assist you.",
  },

  // Head office information
  headOffice: {
    name: "M&D Care Head Office",
    address: {
      line1: "Inspiration Centre, Ty'r Onnen",
      line2: "Parc Pensarn",
      line3: "Carmarthen",
      postcode: "SA31 2NF",
      country: "Wales",
    },
    phone: "01792 885126",
    email: "info@mandddcare.co.uk",
    hours: {
      weekdays: "Monday - Friday: 8:00 AM - 4:00 PM",
      weekend: "Saturday - Sunday: Closed",
    },
    // Coordinates for the map
    coordinates: {
      lat: 51.84508089036618,
      lng: -4.303782484660482,
    },
  },

  // Different contact departments
  departments: [
    {
      id: "general",
      name: "General Enquiries",
      description: "For general questions about our services",
      phone: "01792 885126",
      email: "enquiries@mandddcare.co.uk",
      icon: "phone",
      color: "primary-navy",
    },
    {
      id: "admissions",
      name: "Admissions & Referrals",
      description: "For care placement enquiries and referrals",
      phone: "01792 885126",
      email: "referrals@mandddcare.co.uk",
      icon: "users",
      color: "secondary-coral",
    },
    {
      id: "careers",
      name: "Careers & Recruitment",
      description: "For job opportunities and career enquiries",
      phone: "01792 885126",
      email: "recruitment@mandddcare.co.uk",
      icon: "briefcase",
      color: "secondary-teal",
    },
    {
      id: "complaints",
      name: "Complaints & Feedback",
      description: "For concerns, complaints, or feedback",
      phone: "01792 885126",
      email: "complaints@mandddcare.co.uk",
      icon: "message",
      color: "secondary-purple",
    },
  ],

  // Service locations with contact details
  services: {
    residential: {
      title: "Residential Care Homes",
      description: "Our residential care homes across Wales",
      locations: [
        {
          name: "Croft House",
          address: "89, Queen Victoria Road, Llanelli, SA15 2TR",
          phone: "01792 885126",
          email: "crofthouse@manddcare.co.uk",
          manager: "Nikki Newson",
          capacity: "12 residents",
          specialties: [
            "Learning Disabilities",
            "Autism Support",
            "Mental Health",
          ],
        },
        {
          name: "Rotherslade House",
          address: "25/27 Rotherslade Road, Langland, Swansea, SA3 4QW",
          phone: "01792 885126",
          email: "rotherslade@manddcare.co.uk",
          manager: "Sarah Williams",
          capacity: "12 residents",
          specialties: [
            "Learning Disabilities",
            "Autism Support",
            "Mental Health",
          ],
        },
        {
          name: "The Elms",
          address: "Cross Hands, Carmarthenshire",
          phone: "01792 885126",
          email: "theelms@manddcare.co.uk",
          manager: "David Evans",
          capacity: "10 residents",
          specialties: ["Learning Disabilities", "Mental Health Support"],
        },
        {
          name: "Granville Court",
          address: "Swansea",
          phone: "01792 885126",
          email: "granville@manddcare.co.uk",
          manager: "Rachel Thomas",
          capacity: "8 residents",
          specialties: ["Learning Disabilities", "Autism Support"],
        },
      ],
    },
    specialist: {
      title: "Specialist Services",
      description: "Our specialist care facilities for complex needs",
      locations: [
        {
          name: "Ty Hiraeth",
          address: "Bryn Road, Penygroes, SA14 7PW",
          phone: "01792 885126",
          email: "tyhiraeth@manddcare.co.uk",
          manager: "Michael Roberts",
          capacity: "6 residents",
          specialties: [
            "Complex Needs",
            "Challenging Behavior",
            "Autism",
            "Mental Health",
          ],
        },
        {
          name: "Ty Richards",
          address: "Bryn Road, Penygroes, SA14 7PW",
          phone: "01792 885126",
          email: "tyrichards@manddcare.co.uk",
          manager: "Lisa Morgan",
          capacity: "4 residents",
          specialties: [
            "Severe Learning Disabilities",
            "Autism",
            "Complex Medical Needs",
          ],
        },
        {
          name: "Tegfan",
          address: "Arthur Street, Ammanford, SA18 2DR",
          phone: "01792 885126",
          email: "tegfan@manddcare.co.uk",
          manager: "Helen Davies",
          capacity: "8 residents",
          specialties: [
            "Autism Spectrum Disorders",
            "Learning Disabilities",
            "Communication Disorders",
          ],
        },
        {
          name: "Ynystawe Lodge",
          address: "Pard Rd, Ynysforgan, Swansea, SA6 5AP",
          phone: "01792 885126",
          email: "ynystawe@manddcare.co.uk",
          manager: "James Wilson",
          capacity: "10 residents",
          specialties: [
            "Complex Health Needs",
            "Neurological Conditions",
            "Rehabilitation",
          ],
        },
      ],
    },
    community: {
      title: "Community Services",
      description: "Community-based support services",
      locations: [
        {
          name: "Community Support West Wales",
          address: "Various locations across West Wales",
          phone: "01792 885126",
          email: "community@manddcare.co.uk",
          manager: "Sophie Evans",
          capacity: "50+ individuals",
          specialties: ["Supported Living", "Day Services", "Outreach Support"],
        },
      ],
    },
  },

  // Quick contact form (if you want to add one later)
  quickContact: {
    title: "Quick Enquiry",
    description: "Send us a message and we'll get back to you within 24 hours",
    fields: ["name", "email", "phone", "subject", "message"],
  },

  // Emergency contact info
  emergency: {
    title: "Emergency Contact",
    description: "For urgent matters outside office hours",
    note: "This number is for genuine emergencies only. For general enquiries, please call during office hours or send an email.",
    phone: "01792 885126",
  },
};
