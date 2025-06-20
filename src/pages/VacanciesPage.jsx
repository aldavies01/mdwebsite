import { useState } from "react";

function VacanciesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  const jobCategories = [
    "All",
    "Support Workers",
    "Senior Support Workers",
    "Team Leaders",
    "Management",
    "Nursing",
    "Administrative",
  ];

  const locations = [
    "All",
    "Llanelli",
    "Swansea",
    "Ammanford",
    "Kidwelly",
    "Newport",
    "Pencader",
    "Head Office",
  ];

  const vacancies = [
    {
      id: 1,
      title: "Support Worker",
      department: "Support Workers",
      location: "Croft House, Llanelli",
      type: "Full-time",
      salary: "£22,000 - £24,000",
      posted: "2 days ago",
      description:
        "Join our caring team at Croft House, providing person-centered support to individuals with learning disabilities and autism.",
      requirements: [
        "Genuine passion for supporting others",
        "Excellent communication skills",
        "Willingness to learn and develop",
        "Valid DBS check (or willing to obtain)",
        "Right to work in the UK",
      ],
      responsibilities: [
        "Provide personal care and support",
        "Assist with daily living activities",
        "Support community integration",
        "Maintain accurate records",
        "Work collaboratively with the team",
      ],
      benefits: [
        "Competitive salary",
        "Comprehensive training",
        "Career development opportunities",
        "Supportive team environment",
        "Making a real difference",
      ],
      color: "secondary-coral",
    },
    {
      id: 2,
      title: "Support Worker",
      department: "Support Workers",
      location: "Rothersalde Bay, Swansea",
      type: "Part-time",
      salary: "£22,000 - £24,000 (pro rata)",
      posted: "1 week ago",
      description:
        "Beautiful seaside location providing residential care with stunning coastal views. Perfect for someone wanting work-life balance.",
      requirements: [
        "Caring and compassionate nature",
        "Reliable and trustworthy",
        "Good communication skills",
        "Flexibility with working patterns",
        "Valid DBS check (or willing to obtain)",
      ],
      responsibilities: [
        "Provide personal care and support",
        "Plan and facilitate activities",
        "Support medication administration",
        "Maintain health and safety standards",
        "Build positive relationships",
      ],
      benefits: [
        "Flexible working hours",
        "Stunning coastal location",
        "Ongoing training and support",
        "Team events and recognition",
        "Career progression opportunities",
      ],
      color: "secondary-coral",
    },
    {
      id: 3,
      title: "Senior Support Worker",
      department: "Senior Support Workers",
      location: "The Elms, Cross Hands",
      type: "Full-time",
      salary: "£25,000 - £27,000",
      posted: "3 days ago",
      description:
        "Lead our dedicated team while providing direct support. Perfect opportunity for an experienced care professional to step up.",
      requirements: [
        "Minimum 2 years care experience",
        "Leadership or supervisory experience preferred",
        "NVQ Level 2 in Health & Social Care (or equivalent)",
        "Strong communication and organizational skills",
        "Valid DBS check",
      ],
      responsibilities: [
        "Lead and support a team of care workers",
        "Mentor new staff members",
        "Oversee person-centered care plans",
        "Liaise with families and professionals",
        "Ensure compliance with regulations",
      ],
      benefits: [
        "Leadership development opportunities",
        "Enhanced holiday entitlement",
        "Professional development budget",
        "Flexible working arrangements",
        "Recognition and rewards program",
      ],
      color: "secondary-teal",
    },
    {
      id: 4,
      title: "Team Leader",
      department: "Team Leaders",
      location: "Specialist Services, Ammanford",
      type: "Full-time",
      salary: "£28,000 - £32,000",
      posted: "5 days ago",
      description:
        "Managing a specialist team supporting individuals with complex needs. Excellent opportunity for career progression.",
      requirements: [
        "Minimum 3 years management experience in care",
        "NVQ Level 3 in Health & Social Care",
        "Experience with complex needs",
        "Strong leadership and organizational skills",
        "Knowledge of CQC standards",
      ],
      responsibilities: [
        "Manage day-to-day operations",
        "Lead and develop the team",
        "Ensure quality standards",
        "Budget management",
        "Stakeholder liaison",
      ],
      benefits: [
        "Management training program",
        "Company car allowance",
        "Enhanced pension scheme",
        "Professional development opportunities",
        "Bonus scheme",
      ],
      color: "secondary-purple",
    },
    {
      id: 5,
      title: "Registered Nurse",
      department: "Nursing",
      location: "Multiple Locations",
      type: "Full-time",
      salary: "£35,000 - £40,000",
      posted: "1 week ago",
      description:
        "Provide clinical oversight and specialized nursing care across our residential and specialist services.",
      requirements: [
        "Registered Nurse (RGN) qualification",
        "Current NMC registration",
        "Experience in learning disabilities or mental health",
        "Excellent clinical skills",
        "Strong communication abilities",
      ],
      responsibilities: [
        "Provide clinical assessments",
        "Develop care plans",
        "Medication management",
        "Staff training and supervision",
        "Liaison with healthcare professionals",
      ],
      benefits: [
        "Excellent salary package",
        "Clinical supervision and support",
        "Continuing professional development",
        "Flexible working options",
        "NMC registration fees paid",
      ],
      color: "primary-gold",
    },
    {
      id: 6,
      title: "Human Resources Coordinator",
      department: "Administrative",
      location: "Head Office, Llanelli",
      type: "Full-time",
      salary: "£24,000 - £28,000",
      posted: "4 days ago",
      description:
        "Support our growing team by managing recruitment, training coordination, and employee relations.",
      requirements: [
        "CIPD qualification or working towards",
        "Previous HR experience",
        "Strong organizational skills",
        "Excellent communication abilities",
        "Knowledge of employment law",
      ],
      responsibilities: [
        "Coordinate recruitment processes",
        "Organize training and development",
        "Maintain employee records",
        "Support performance management",
        "Handle employee queries",
      ],
      benefits: [
        "Professional development support",
        "Study leave for qualifications",
        "Modern office environment",
        "Flexible working arrangements",
        "Career progression opportunities",
      ],
      color: "primary-navy",
    },
    {
      id: 7,
      title: "Support Worker (Weekend)",
      department: "Support Workers",
      location: "Granville Court, Swansea",
      type: "Part-time",
      salary: "£22,000 - £24,000 (pro rata)",
      posted: "6 days ago",
      description:
        "Weekend positions available for those seeking work-life balance. Perfect for students or those with weekday commitments.",
      requirements: [
        "Available for weekend shifts",
        "Caring and reliable nature",
        "Good communication skills",
        "Willingness to learn",
        "Valid DBS check (or willing to obtain)",
      ],
      responsibilities: [
        "Weekend residential support",
        "Activity planning and facilitation",
        "Personal care assistance",
        "Medication support",
        "Emergency response",
      ],
      benefits: [
        "Weekend premium rates",
        "Work-life balance",
        "Comprehensive training",
        "Supportive team",
        "Career development",
      ],
      color: "secondary-coral",
    },
    {
      id: 8,
      title: "Deputy Manager",
      department: "Management",
      location: "Ty Pin Coed, Kidwelly",
      type: "Full-time",
      salary: "£30,000 - £35,000",
      posted: "1 day ago",
      description:
        "Support the Registered Manager in overseeing all aspects of our residential care service. Great stepping stone to management.",
      requirements: [
        "Minimum 3 years senior care experience",
        "NVQ Level 4 in Health & Social Care",
        "Leadership and management skills",
        "Knowledge of CQC regulations",
        "Excellent communication skills",
      ],
      responsibilities: [
        "Support service management",
        "Staff supervision and development",
        "Quality assurance",
        "Budget monitoring",
        "Regulatory compliance",
      ],
      benefits: [
        "Management development program",
        "Enhanced holiday entitlement",
        "Professional development budget",
        "Bonus scheme",
        "Career progression pathway",
      ],
      color: "secondary-purple",
    },
  ];

  const filteredVacancies = vacancies.filter((job) => {
    const categoryMatch =
      selectedCategory === "All" || job.department === selectedCategory;
    const locationMatch =
      selectedLocation === "All" || job.location.includes(selectedLocation);
    return categoryMatch && locationMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-primary-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-block bg-primary-gold/20 text-primary-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Current Opportunities
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Find Your Perfect <br />
              <span className="text-primary-gold">Care Career</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Explore all our current vacancies across Wales. From entry-level
              positions to management roles, find the opportunity that's right
              for you.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="font-semibold text-primary-navy">
                Filter by:
              </span>

              {/* Category Filter */}
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Role Type
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-navy focus:border-transparent"
                >
                  {jobCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Location Filter */}
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Location
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-navy focus:border-transparent"
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="text-primary-navy font-semibold">
              {filteredVacancies.length}{" "}
              {filteredVacancies.length === 1 ? "position" : "positions"}{" "}
              available
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {filteredVacancies.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <svg
                  className="w-16 h-16 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No positions found
              </h3>
              <p className="text-gray-500">
                Try adjusting your filters or check back soon for new
                opportunities.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredVacancies.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className={`h-1 bg-${job.color}`}></div>

                  <div className="p-8">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h2 className="text-2xl font-bold text-primary-navy group-hover:text-secondary-coral transition-colors duration-300">
                            {job.title}
                          </h2>
                          <div
                            className={`bg-${job.color}/20 text-${job.color} px-3 py-1 rounded-full text-sm font-semibold`}
                          >
                            {job.type}
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                          <div className="flex items-center">
                            <svg
                              className="w-4 h-4 mr-2"
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
                            </svg>
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <svg
                              className="w-4 h-4 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                              />
                            </svg>
                            {job.salary}
                          </div>
                          <div className="flex items-center">
                            <svg
                              className="w-4 h-4 mr-2"
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
                            Posted {job.posted}
                          </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6">
                          {job.description}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:w-48">
                        <button
                          className={`bg-${job.color} text-white py-3 px-6 rounded-xl font-semibold hover:opacity-90 transition-opacity duration-300 flex-1`}
                        >
                          Apply Now
                        </button>
                        <button className="bg-gray-100 text-primary-navy py-3 px-6 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-300 flex-1">
                          Save Job
                        </button>
                      </div>
                    </div>

                    {/* Expandable Details */}
                    <div className="mt-8 border-t border-gray-200 pt-8">
                      <div className="grid md:grid-cols-3 gap-8">
                        {/* Requirements */}
                        <div>
                          <h3 className="font-bold text-primary-navy mb-4 flex items-center">
                            <svg
                              className="w-5 h-5 mr-2"
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
                            Requirements
                          </h3>
                          <ul className="space-y-2">
                            {job.requirements.map((req, index) => (
                              <li
                                key={index}
                                className="flex items-start text-sm text-gray-600"
                              >
                                <div
                                  className={`w-1.5 h-1.5 bg-${job.color} rounded-full mt-2 mr-3 flex-shrink-0`}
                                ></div>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Responsibilities */}
                        <div>
                          <h3 className="font-bold text-primary-navy mb-4 flex items-center">
                            <svg
                              className="w-5 h-5 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                              />
                            </svg>
                            Key Responsibilities
                          </h3>
                          <ul className="space-y-2">
                            {job.responsibilities.map((resp, index) => (
                              <li
                                key={index}
                                className="flex items-start text-sm text-gray-600"
                              >
                                <div
                                  className={`w-1.5 h-1.5 bg-${job.color} rounded-full mt-2 mr-3 flex-shrink-0`}
                                ></div>
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Benefits */}
                        <div>
                          <h3 className="font-bold text-primary-navy mb-4 flex items-center">
                            <svg
                              className="w-5 h-5 mr-2"
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
                            What We Offer
                          </h3>
                          <ul className="space-y-2">
                            {job.benefits.map((benefit, index) => (
                              <li
                                key={index}
                                className="flex items-start text-sm text-gray-600"
                              >
                                <div
                                  className={`w-1.5 h-1.5 bg-${job.color} rounded-full mt-2 mr-3 flex-shrink-0`}
                                ></div>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-navy text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Don't see the perfect role? We're always looking for passionate
            people. Send us your CV and we'll be in touch about future
            opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="/careers/apply"
              className="bg-primary-gold text-primary-navy px-8 py-4 rounded-xl font-bold hover:bg-primary-gold/90 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Submit Your CV
            </a>
            <a
              href="/careers"
              className="bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-primary-navy transition-all duration-300"
            >
              Back to Careers
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 inline-block">
            <p className="text-white/90">Questions about any of these roles?</p>
            <p className="text-primary-gold font-semibold">
              📧 careers@mdcare.co.uk | 📞 01554 123 456
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VacanciesPage;
