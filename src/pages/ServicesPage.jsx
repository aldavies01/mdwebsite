import ServicesHero from "../components/services/ServicesHero";
import ServiceDetail from "../components/services/ServiceDetail";
import AdditionalServiceCard from "../components/services/AdditionalServiceCard";
import ServicesCTA from "../components/services/ServicesCTA";

function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Residential Care",
      subtitle: "Comfortable homes with 24/7 professional support",
      description:
        "Our residential care services provide safe, comfortable, and homely environments where individuals can receive the support they need while maintaining their dignity and independence. Each of our residential homes is designed to feel like a true home, not an institution.",
      features: [
        "24/7 qualified nursing and care staff",
        "Comfortable, homely living environments",
        "Personalized care planning and support",
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
      icon: (
        <svg
          className="w-12 h-12 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Specialist Care",
      subtitle: "Expert support for complex health and behavioral needs",
      description:
        "Our specialist care services are designed for individuals with complex health conditions, learning disabilities, autism, or challenging behaviors. We provide highly trained staff, specialized environments, and evidence-based interventions to ensure the best possible outcomes.",
      features: [
        "Specialized staff with advanced training",
        "Positive behavior support strategies",
        "Medical oversight and health monitoring",
        "Therapeutic interventions and activities",
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
      link: "/services/specialist",
      icon: (
        <svg
          className="w-12 h-12 text-white"
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
        { number: "95%", label: "Independence Rate" },
        { number: "6", label: "Supported Living Services" },
        { number: "75+", label: "People Living Independently" },
      ],
      bgColor: "bg-secondary-teal",
      textColor: "text-secondary-teal",
      borderColor: "border-secondary-teal",
      link: "/services/supported-living",
      icon: (
        <svg
          className="w-12 h-12 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
          />
        </svg>
      ),
    },
  ];

  const additionalServices = [
    {
      title: "Positive Behaviour Support",
      description:
        "Evidence-based approaches to understanding and supporting individuals with challenging behaviors",
      icon: (
        <svg
          className="w-8 h-8 text-primary-navy"
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
      link: "/services/positive-behaviour-support",
    },
    {
      title: "Respite Care",
      description:
        "Short-term care services to provide families and carers with temporary relief and support",
      icon: (
        <svg
          className="w-8 h-8 text-primary-navy"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      link: "/services/respite-care",
    },
    {
      title: "Outreach Support",
      description:
        "Community-based support services to help individuals maintain independence in their own homes",
      icon: (
        <svg
          className="w-8 h-8 text-primary-navy"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      link: "/services/outreach-support",
    },
    {
      title: "Day Services",
      description:
        "Structured day programs providing meaningful activities, skills development, and social opportunities",
      icon: (
        <svg
          className="w-8 h-8 text-primary-navy"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      link: "/services/day-services",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <ServicesHero />

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, index) => (
              <ServiceDetail key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-navy mb-6">
              Additional <span className="text-secondary-coral">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beyond our core services, we offer specialized support programs
              designed to meet the diverse needs of individuals and families in
              our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <AdditionalServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      <ServicesCTA />
    </div>
  );
}

export default ServicesPage;
