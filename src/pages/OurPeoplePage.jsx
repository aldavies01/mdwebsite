function OurPeoplePage() {
  // Senior Management Team data
  const managementTeam = [
    {
      id: 1,
      name: "John Smith",
      title: "Managing Director",

      bio: "John has over 15 years of experience in social care management and founded M&D Care with a vision to provide exceptional, person-centered support across Wales.",
      image: "/images/team/john-smith.jpg",
      email: "john.smith@mdcare.co.uk",
    },
    {
      id: 2,
      name: "Sarah Williams",
      title: "Director of Care",

      bio: "Sarah leads our clinical governance and ensures all our services maintain the highest standards of care quality and regulatory compliance.",
      image: "/images/team/sarah-williams.jpg",
      email: "sarah.williams@mdcare.co.uk",
    },
    {
      id: 3,
      name: "David Jones",
      title: "Operations Director",

      bio: "David oversees day-to-day operations across all our facilities, ensuring seamless service delivery and continuous improvement.",
      image: "/images/team/david-jones.jpg",
      email: "david.jones@mdcare.co.uk",
    },
    {
      id: 4,
      name: "Emma Davies",
      title: "HR Director",

      bio: "Emma is responsible for our people strategy, ensuring we recruit, develop and retain the best care professionals in Wales.",
      image: "/images/team/emma-davies.jpg",
      email: "emma.davies@mdcare.co.uk",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      quote:
        "Working at M&D Care has been incredibly rewarding. The support from management and the genuine care for both staff and residents makes this more than just a job.",
      name: "Rachel Thomas",
      role: "Senior Support Worker",
      service: "Croft House",
      yearsOfService: "3 years",
    },
    {
      id: 2,
      quote:
        "The training opportunities here are excellent. I've been able to develop my skills and progress my career while making a real difference to people's lives.",
      name: "Michael Evans",
      role: "Team Leader",
      service: "Specialist Services",
      yearsOfService: "5 years",
    },
    {
      id: 3,
      quote:
        "M&D Care truly lives by their values. The person-centered approach isn't just policy - it's how we work every day. I'm proud to be part of this team.",
      name: "Carys Morgan",
      role: "Deputy Manager",
      service: "Residential Care",
      yearsOfService: "7 years",
    },
    {
      id: 4,
      quote:
        "The family atmosphere here is genuine. Management genuinely cares about staff wellbeing, which helps us provide the best possible care.",
      name: "James Wilson",
      role: "Support Worker",
      service: "Supported Living",
      yearsOfService: "2 years",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-primary-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-block bg-primary-gold/20 text-primary-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Our People
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Meet the Team <br />
                <span className="text-primary-gold">M&D Care</span>
              </h1>
              <div className="space-y-6 text-lg text-white/90 leading-relaxed">
                <p>
                  Our colleagues are a diverse, inclusive and a talented team of
                  individuals, striving to make a difference through their
                  everyday work. Working for M&D Care means you’ll get the
                  opportunity to work with amazing people and help to enhance
                  and fulfil the lives of the people we support.
                </p>
                <p>
                  Get to know the people behind our services and hear from team
                  members about what makes working at M&D Care so rewarding.
                </p>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] bg-gray-200 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/20 to-secondary-coral/20 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <svg
                      className="w-20 h-20 mx-auto mb-4"
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
                    <p className="text-lg font-medium">Our Team Photo</p>
                  </div>
                </div>
              </div>
              {/* Floating stats */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary-navy">
                      650+
                    </div>
                    <div className="text-xs text-gray-500">Team Members</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-navy">
                      92%
                    </div>
                    <div className="text-xs text-gray-500">Staff Retention</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Senior Management Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary-navy/10 text-primary-navy px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Leadership Team
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-navy mb-6 leading-tight">
              Senior Management <br />
              <span className="text-secondary-coral">Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              ​Meet Our Executive Team, the passionate and dedicated leaders at
              the helm of our organisation. Our senior leadership team brings a
              wealth of experience and a deep commitment to providing
              exceptional care and support to those we support. 
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {managementTeam.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Photo */}
                <div className="relative h-64 bg-gray-200">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/20 to-secondary-teal/20 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <svg
                        className="w-16 h-16 mx-auto mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <p className="text-sm">{member.name}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-navy mb-1 group-hover:text-secondary-coral transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-secondary-coral font-semibold mb-2">
                    {member.title}
                  </p>
                  <p className="text-gray-500 text-sm mb-4">
                    {member.qualifications}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="flex items-center text-primary-navy text-sm">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="hover:text-secondary-coral transition-colors duration-200 cursor-pointer">
                      {member.email}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-secondary-coral/10 text-secondary-coral px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Staff Testimonials
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-navy mb-6 leading-tight">
              Hear From <br />
              <span className="text-secondary-coral">Our Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our team members share what makes working at M&D Care special and
              why they're passionate about the care we provide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                {/* Quote */}
                <div className="text-6xl text-secondary-coral/20 font-serif leading-none mb-4">
                  "
                </div>
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                  {testimonial.quote}
                </blockquote>

                {/* Attribution */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-secondary-coral/10 rounded-full flex items-center justify-center mr-4">
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-primary-navy">
                      {testimonial.name}
                    </div>
                    <div className="text-secondary-coral text-sm">
                      {testimonial.role}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {testimonial.service} • {testimonial.yearsOfService}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-primary-navy text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            We're always looking for passionate, caring individuals to join our
            growing team. Discover the opportunities available and become part
            of the M&D Care family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/careers/vacancies"
              className="bg-primary-gold text-primary-navy px-8 py-4 rounded-xl font-semibold hover:bg-primary-gold/90 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              View Vacancies
            </a>
            <a
              href="/careers"
              className="bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-navy transition-all duration-300"
            >
              Learn About Careers
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurPeoplePage;
