function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Residential Care",
      description:
        "Comfortable, homely environments with 24/7 professional care and support",
      features: ["24/7 Support", "Qualified Staff", "Homely Environment"],
      color: "bg-primary-navy",
      hoverColor: "hover:bg-primary-navy/90",
    },
    {
      id: 2,
      title: "Specialist Care",
      description:
        "Expert care for individuals with complex health and behavioral needs",
      features: ["Expert Staff", "Tailored Support", "Medical Oversight"],
      color: "bg-secondary-teal",
      hoverColor: "hover:bg-secondary-teal/90",
    },
    {
      id: 3,
      title: "Supported Living",
      description:
        "Promoting independence while providing the right level of support",
      features: ["Independent Living", "Flexible Support", "Community Access"],
      color: "bg-secondary-coral",
      hoverColor: "hover:bg-secondary-coral/90",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Header + Services Cards */}
          <div>
            {/* Section Header */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-primary-navy mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-600">
                Providing exceptional care and support across three specialized
                service areas
              </p>
            </div>

            {/* Services Cards */}
            <div className="space-y-6">
              {/* Service cards will go here */}
              <div className="text-gray-500">Service cards coming...</div>
            </div>
          </div>

          {/* Right: Google Map */}
          <div className="h-96 lg:h-[500px] bg-gray-200 rounded-xl flex items-center justify-center">
            <div className="text-gray-500">Google Map coming...</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
