import ServiceOverview from "../components/common/ServiceOverview";
import HomesGrid from "../components/common/HomesGrid";

function SpecialistPage() {
  // Specialist homes data - filtered from your ServiceMap data
  const specialistHomes = [
    {
      id: 1,
      name: "Ty Hiraeth",
      address: "Ty Hiraeth, Bryn Road, Penygroes, SA14 7PW",
      description:
        "Specialist residential care facility providing expert support for individuals with complex needs and challenging behaviors.",
      features: [
        "Specialist trained staff",
        "Behavioral support plans",
        "Therapeutic interventions",
        "Crisis management",
      ],
      capacity: "6 residents",
      established: "2016",
      image: "/images/specialist/ty-hiraeth.jpg", // Placeholder
      cqcRating: "Outstanding",
      specialties: [
        "Complex Needs",
        "Challenging Behavior",
        "Autism",
        "Mental Health",
      ],
    },
    {
      id: 2,
      name: "Ty Richards",
      address: "Ty Hiraeth, Bryn Road, Penygroes, SA14 7PW",
      description:
        "Purpose-built specialist facility offering intensive support for individuals requiring high levels of care and intervention.",
      features: [
        "1:1 support available",
        "Sensory rooms",
        "Therapeutic gardens",
        "Family liaison",
      ],
      capacity: "4 residents",
      established: "2018",
      image: "/images/specialist/ty-richards.jpg", // Placeholder
      cqcRating: "Good",
      specialties: [
        "Severe Learning Disabilities",
        "Autism",
        "Self-Injurious Behavior",
        "Complex Medical Needs",
      ],
    },
    {
      id: 3,
      name: "Tegfan",
      address: "Arthur Street, Ammanford, SA18 2DR",
      description:
        "Specialist care home in Ammanford providing structured support for individuals with autism and learning disabilities.",
      features: [
        "Autism-friendly environment",
        "Structured routines",
        "Communication support",
        "Transition planning",
      ],
      capacity: "8 residents",
      established: "2017",
      image: "/images/specialist/tegfan.jpg", // Placeholder
      cqcRating: "Good",
      specialties: [
        "Autism Spectrum Disorders",
        "Learning Disabilities",
        "Communication Disorders",
        "Behavioral Challenges",
      ],
    },
    {
      id: 4,
      name: "Ynystawe Lodge",
      address: "Pard Rd, Ynysforgan, Swansea, SA6 5AP",
      description:
        "Modern specialist facility providing comprehensive care for individuals with complex health and behavioral needs.",
      features: [
        "Medical support on-site",
        "Rehabilitation programs",
        "Multi-disciplinary team",
        "Respite care",
      ],
      capacity: "10 residents",
      established: "2019",
      image: "/images/specialist/ynystawe-lodge.jpg", // Placeholder
      cqcRating: "Outstanding",
      specialties: [
        "Complex Health Needs",
        "Neurological Conditions",
        "Psychiatric Support",
        "Rehabilitation",
      ],
    },
  ];

  // ServiceOverview data for specialist care
  const serviceOverviewData = {
    badge: "Why Choose Our Specialist Care",
    title: {
      main: "Expert Support for",
      highlight: "Complex Needs",
    },
    description:
      "Our specialist care services provide intensive, expert support for individuals with complex health, behavioral, and developmental needs in purpose-designed environments.",
    valuePropositions: [
      {
        icon: (
          <svg
            className="w-6 h-6 text-secondary-purple"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
        title: "Specialist Expertise",
        description:
          "Our teams have advanced training in complex care, behavioral support, and therapeutic interventions.",
      },
      {
        icon: (
          <svg
            className="w-6 h-6 text-secondary-purple"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        ),
        title: "Innovative Approaches",
        description:
          "We use cutting-edge therapeutic methods and assistive technologies to achieve the best outcomes.",
      },
      {
        icon: (
          <svg
            className="w-6 h-6 text-secondary-purple"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
          </svg>
        ),
        title: "Intensive Support",
        description:
          "Higher staff ratios and 24/7 specialist care ensure individuals receive the intensive support they need.",
      },
    ],
    stats: [
      {
        number: "4",
        label: "Specialist Facilities",
        subtitle: "Across Wales",
        colorClass: "secondary-purple",
      },
      {
        number: "28",
        label: "Specialist Beds",
        subtitle: "Total Capacity",
        colorClass: "secondary-coral",
      },
      {
        number: "2:1",
        label: "Staff Ratio",
        subtitle: "At Peak Times",
        colorClass: "secondary-teal",
      },
      {
        number: "98%",
        label: "Positive Outcomes",
        subtitle: "2024 Results",
        colorClass: "primary-navy",
      },
    ],
    features: {
      title: "Specialist Support Includes:",
      items: [
        "Positive Behavior Support (PBS) plans",
        "Therapeutic interventions and programs",
        "Medical oversight and health monitoring",
        "Crisis intervention and de-escalation",
        "Family training and support programs",
      ],
      dotColor: "secondary-purple",
    },
  };

  // HomesGrid data for specialist care
  const homesGridData = {
    badge: "Our Specialist Locations",
    title: {
      main: "Specialist Care",
      highlight: "Facilities",
    },
    description:
      "Our specialist care facilities are purpose-designed to provide safe, therapeutic environments with the highest levels of professional support and expertise.",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-primary-navy text-white py-20">
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Specialist Care
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Expert Support for <br />
            <span className="text-primary-gold">Complex Needs</span>
          </h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
            Our specialist care services provide intensive, professional support
            for individuals with complex health, behavioral, and developmental
            needs in purpose-designed therapeutic environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary-gold text-primary-navy px-8 py-4 rounded-xl font-semibold hover:bg-primary-gold/90 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Discuss Specialist Care
            </a>
            <a
              href="/referrals"
              className="bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-secondary-purple transition-all duration-300"
            >
              Make a Referral
            </a>
          </div>
        </div>
      </section>

      {/* What Makes Our Specialist Care Special */}
      <ServiceOverview {...serviceOverviewData} />

      {/* Specialist Homes Grid */}
      <HomesGrid {...homesGridData} homes={specialistHomes} />

      {/* Call to Action */}
      <section className="py-20 bg-primary-navy text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Find the Right Specialist Care
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Our specialist facilities are designed for individuals with complex
            needs requiring expert care and therapeutic intervention. Contact us
            to discuss the best placement options.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary-gold text-primary-navy px-8 py-4 rounded-xl font-semibold hover:bg-primary-gold/90 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Schedule Assessment
            </a>
            <a
              href="/referrals"
              className="bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-navy transition-all duration-300"
            >
              Professional Referral
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SpecialistPage;
