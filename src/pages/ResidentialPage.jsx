import ServiceOverview from "../components/common/ServiceOverview";
import HomesGrid from "../components/common/HomesGrid";

function ResidentialPage() {
  // Residential homes data - extracted from your ServiceMap data
  const residentialHomes = [
    {
      id: 1,
      name: "Croft House",
      address: "89, Queen Victoria Road, Llanelli, SA15 2TR",
      description:
        "A warm, welcoming residential home providing person-centered care in the heart of Llanelli.",
      features: [
        "24/7 qualified staff",
        "Comfortable private rooms",
        "Community activities",
        "Health monitoring",
      ],
      capacity: "12 residents",
      established: "2018",
      image: "/images/residential/croft-house.jpg", // Placeholder
      cqcRating: "Good",
      specialties: ["Learning Disabilities", "Autism Support", "Mental Health"],
    },
    {
      id: 2,
      name: "Rothersalde Bay",
      address: "25/27 Rotherslade Road, Langland, Swansea, SA3 4QW",
      description:
        "Beautiful seaside location offering residential care with stunning coastal views and tranquil environment.",
      features: [
        "Seaside location",
        "Garden access",
        "Activities program",
        "Family involvement",
      ],
      capacity: "8 residents",
      established: "2020",
      image: "/images/residential/rothersalde-bay.jpg", // Placeholder
      cqcRating: "Outstanding",
      specialties: ["Complex Needs", "Behavioral Support", "Autism"],
    },
    {
      id: 3,
      name: "The Elms",
      address: "The Elms, Heol Y Capel, Cross Hands, Llanelli, SA14 7EW",
      description:
        "A modern residential facility in Cross Hands, providing comprehensive care in a homely environment.",
      features: [
        "Modern facilities",
        "Therapeutic garden",
        "Skills development",
        "Community integration",
      ],
      capacity: "10 residents",
      established: "2019",
      image: "/images/residential/the-elms.jpg", // Placeholder
      cqcRating: "Good",
      specialties: [
        "Learning Disabilities",
        "Physical Disabilities",
        "Sensory Impairments",
      ],
    },
    {
      id: 4,
      name: "Granville Court",
      address: "44 Slate Street, Morriston, Swansea, SA6 8AY",
      description:
        "Located in Morriston, offering residential care with focus on independence and community participation.",
      features: [
        "Independence focus",
        "Local community links",
        "Skills training",
        "Person-centered care",
      ],
      capacity: "6 residents",
      established: "2017",
      image: "/images/residential/granville-court.jpg", // Placeholder
      cqcRating: "Good",
      specialties: ["Autism", "Learning Disabilities", "Mental Health"],
    },
    {
      id: 5,
      name: "Gelynnen",
      address: "8 Golwg yr Ogof, Pencader, SA39 9HS",
      description:
        "Rural residential home in Pencader, providing peaceful care in beautiful countryside surroundings.",
      features: [
        "Rural setting",
        "Outdoor activities",
        "Small homely environment",
        "Flexible support",
      ],
      capacity: "4 residents",
      established: "2021",
      image: "/images/residential/gelynnen.jpg", // Placeholder
      cqcRating: "Good",
      specialties: ["Complex Needs", "Autism", "Challenging Behavior"],
    },
    {
      id: 6,
      name: "Ty Pin Coed",
      address: "Ty Pin Coed, Kidwelly, SA17 4RA",
      description:
        "Residential care home in Kidwelly, offering specialized support in a calm, structured environment.",
      features: [
        "Structured environment",
        "Specialist staff",
        "Individual programs",
        "Family partnership",
      ],
      capacity: "8 residents",
      established: "2019",
      image: "/images/residential/ty-pin-coed.jpg", // Placeholder
      cqcRating: "Good",
      specialties: ["Autism", "Learning Disabilities", "Behavioral Support"],
    },
    {
      id: 7,
      name: "Ceiriosen Bren",
      address: "Efail Fach, Plwmp, Llandysul, SA44 6HS",
      description:
        "Nestled in the Welsh countryside, providing residential care with emphasis on rural therapeutic activities.",
      features: [
        "Countryside location",
        "Animal therapy",
        "Outdoor pursuits",
        "Cultural activities",
      ],
      capacity: "5 residents",
      established: "2020",
      image: "/images/residential/ceiriosen-bren.jpg", // Placeholder
      cqcRating: "Outstanding",
      specialties: ["Autism", "Complex Needs", "Therapeutic Support"],
    },
  ];

  // ServiceOverview data
  const serviceOverviewData = {
    badge: "Why Choose Our Residential Care",
    title: {
      main: "More Than Just",
      highlight: "A Place to Live",
    },
    description:
      "Our residential homes are designed to be true homes where individuals can flourish with the right balance of support, independence, and community.",
    valuePropositions: [
      {
        icon: (
          <svg
            className="w-6 h-6 text-secondary-coral"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        ),
        title: "Person-Centered Care",
        description:
          "Every care plan is tailored to individual needs, preferences, and aspirations.",
      },
      {
        icon: (
          <svg
            className="w-6 h-6 text-secondary-coral"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        ),
        title: "Qualified, Caring Staff",
        description:
          "Our team members are not just qualified professionals, but passionate advocates for those we support.",
      },
      {
        icon: (
          <svg
            className="w-6 h-6 text-secondary-coral"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        ),
        title: "Homely Environments",
        description:
          "Each home is designed to feel welcoming and comfortable, not institutional.",
      },
    ],
    stats: [
      {
        number: "7",
        label: "Residential Homes",
        subtitle: "Across Wales",
        colorClass: "secondary-coral",
      },
      {
        number: "53",
        label: "Bed Capacity",
        subtitle: "Total Spaces",
        colorClass: "secondary-teal",
      },
      {
        number: "24/7",
        label: "Support Available",
        subtitle: "Always Here",
        colorClass: "primary-navy",
      },
      {
        number: "95%",
        label: "Family Satisfaction",
        subtitle: "2024 Survey",
        colorClass: "secondary-purple",
      },
    ],
    features: {
      title: "What's Included:",
      items: [
        "Private or shared bedrooms",
        "All meals and nutrition support",
        "Daily activities and social programs",
        "Health monitoring and medication",
        "Family involvement and communication",
      ],
      dotColor: "secondary-coral",
    },
  };

  // HomesGrid data
  const homesGridData = {
    badge: "Our Locations",
    title: {
      main: "Residential Care",
      highlight: "Across Wales",
    },
    description:
      "Each of our residential homes offers unique features and specialized care, all united by our commitment to providing exceptional person-centered support.",
  };

  const getCQCBadgeColor = (rating) => {
    switch (rating) {
      case "Outstanding":
        return "bg-green-600 text-white";
      case "Good":
        return "bg-blue-600 text-white";
      case "Requires Improvement":
        return "bg-yellow-600 text-white";
      default:
        return "bg-gray-600 text-white";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-primary-navy text-white py-20">
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Residential Care
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Our Residential <br />
            <span className="text-primary-gold">Care Homes</span>
          </h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
            Discover our network of residential care homes across Wales, each
            providing safe, comfortable environments with 24/7 professional
            support tailored to individual needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary-gold text-primary-navy px-8 py-4 rounded-xl font-semibold hover:bg-primary-gold/90 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Find the Right Home
            </a>
            <a
              href="/referrals"
              className="bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-secondary-coral transition-all duration-300"
            >
              Make a Referral
            </a>
          </div>
        </div>
      </section>

      {/* What Makes Our Residential Care Special */}
      <ServiceOverview {...serviceOverviewData} />

      {/* Residential Homes Grid */}
      <HomesGrid {...homesGridData} homes={residentialHomes} />

      {/* Call to Action */}
      <section className="py-20 bg-primary-navy text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Find the Perfect Residential Home
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Each of our residential homes offers unique benefits and specialized
            care. Contact us to discuss which location would be the best fit for
            your needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary-gold text-primary-navy px-8 py-4 rounded-xl font-semibold hover:bg-primary-gold/90 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Schedule a Visit
            </a>
            <a
              href="/referrals"
              className="bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-navy transition-all duration-300"
            >
              Make a Referral
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResidentialPage;
