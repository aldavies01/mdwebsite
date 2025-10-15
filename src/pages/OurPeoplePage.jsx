import SEO from "../components/SEO";

function OurPeoplePage() {
  // Senior Management Team data
  const managementTeam = [
    {
      id: 1,
      name: "Steffan Bowen",
      title: "Managing Director",
      bio: "Steffan provides strategic guidance and direction to the board of directors to ensure M&D achieves its mission and objectives.",
      image: "/images/team/steffan-bowen.jpg",
      email: "steffan.bowen@manddcare.co.uk",
    },
    {
      id: 2,
      name: "Michelle Martin",
      title: "Company Developments Director",
      bio: "Michelle is the founding member of M&D Care Ltd and has worked within the care sector for over 40 years.",
      image: "/images/team/Michelle.png",
      email: "michelle.martin@manddcare.co.uk",
    },
    {
      id: 3,
      name: "Helen Rees-Byrne",
      title: "Director of Finance",
      bio: "Helen leads our financial strategy and operations, ensuring robust budgeting, compliance, and resource management across all services.",
      image: "/images/team/Helen.jpg",
      email: "helen.rees-byrne@manddcare.co.uk",
    },
    {
      id: 4,
      name: "Abbi Lee Bevan",
      title: "Business Development Director",
      bio: "Abbi drives our growth strategy, building partnerships and identifying new opportunities to expand and enhance our care services.",
      image: "/images/team/abbi.jpg",
      email: "abbi-lee.bevan@manddcare.co.uk",
    },
    {
      id: 5,
      name: "Anthony Craggs",
      title: "Director of Quality",
      bio: "Anthony leads our commitment to excellence, overseeing quality assurance and ensuring the highest standards of care across all services.",
      image: "/images/team/Tony.jpg",
      email: "anthony.craggs@manddcare.co.uk",
    },
    {
      id: 6,
      name: "Nia Murpy",
      title: "Director of HR",
      bio: "Nia oversees our people strategy, focusing on recruitment, development, and staff wellbeing to support a thriving and compassionate workforce.",
      image: "/images/team/nia.jpg",
      email: "nia.murphy@manddcare.co.uk",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      quote:
        "Working at M&D Care has been incredibly rewarding. The support from management and the genuine care for both staff and residents makes this more than just a job.",
      // name: "Tiffany Spriggs",
      role: "Area Operations Manager",
      // service: "Head Office",
      // yearsOfService: "12 years",
    },
    {
      id: 2,
      quote:
        "The training opportunities here are excellent. I've been able to develop my skills and progress my career while making a real difference to people's lives.",
      // name: "Rosalind Williams",
      role: "Support Worker",
      // service: "Llys Penpant",
      // yearsOfService: "11 years",
    },
    {
      id: 3,
      quote:
        "M&D Care truly lives by their values. The person-centered approach isn't just policy - it's how we work every day. I'm proud to be part of this team.",
      // name: "Latoya Jones",
      role: "Senior Support Worker",
      // service: "Ynystawe Lodge",
      // yearsOfService: "2 years",
    },
    {
      id: 4,
      quote:
        "The family atmosphere here is genuine. Management genuinely cares about staff wellbeing, which helps us provide the best possible care.",
      // name: "James Wilson",
      role: "Support Worker",
      // service: "Glannant Road",
      // yearsOfService: "2 years",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Our People"
        description="Meet the dedicated team behind M&D Care. Our people are passionate professionals committed to delivering person-centred support and exceptional care across Wales."
        path="/about/people"
        // image optional — add later if you design an OG banner
      />
      {/* Hero Section */}
      {/* Hero Section — styled like QualityHero */}
      <section className="relative bg-primary-navy text-white py-16 lg:py-20 overflow-hidden">
        {/* Animated brand bubbles */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-10 left-10 w-16 h-16 sm:w-24 sm:h-24 bg-primary-gold rounded-full animate-pulse" />
          <div className="absolute bottom-10 right-10 w-12 h-12 sm:w-20 sm:h-20 bg-secondary-coral rounded-full animate-bounce" />
          <div className="absolute top-1/3 left-1/4 w-8 h-8 sm:w-12 sm:h-12 bg-secondary-teal rounded-full animate-ping" />
          <div className="absolute top-24 right-1/3 w-6 h-6 sm:w-10 sm:h-10 bg-secondary-purple rounded-full animate-pulse" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-gold/20 text-primary-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Our People
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Meet the Team <br />
                <span className="text-primary-gold">M&amp;D Care</span>
              </h1>

              <div className="space-y-5 text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
                <p>
                  Our colleagues are a diverse, inclusive and talented team,
                  striving to make a difference through their everyday work.
                  Working for M&amp;D Care means you’ll get the opportunity to
                  work with amazing people and help to enhance and fulfil the
                  lives of the people we support.
                </p>
                <p>
                  Get to know the people behind our services and hear from team
                  members about what makes working at M&amp;D Care so rewarding.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="/careers/vacancies"
                  className="bg-primary-gold text-primary-navy px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-primary-gold/90 hover:scale-105 transition-all duration-300 shadow-lg text-center"
                >
                  View Vacancies
                </a>
                <a
                  href="/careers"
                  className="bg-white/10 text-white border-2 border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-white hover:text-primary-navy transition-all duration-300 text-center"
                >
                  Learn About Careers
                </a>
              </div>
            </div>

            {/* Right: Image + glass stats */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden ring-1 ring-white/15 shadow-2xl">
                {/* Use encodeURI to safely handle spaces in filename */}
                <img
                  src={encodeURI("/images/team/Head Office Team.jpg")}
                  alt="M&D Care Head Office Team"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.objectFit = "contain";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-navy/20 to-transparent pointer-events-none" />
              </div>

              {/* Decorative corner bubbles */}
              <div className="absolute -top-3 -right-3 bg-primary-gold w-8 h-8 rounded-full opacity-80 animate-bounce" />
              <div className="absolute -bottom-3 -left-3 bg-secondary-coral w-6 h-6 rounded-full opacity-60 animate-pulse" />
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
                {/* Photo - Updated to display real images */}
                <div className="relative h-64 bg-gray-200 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.target.style.display = "none";
                      e.target.nextElementSibling.style.display = "flex";
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-primary-navy/20 to-secondary-teal/20 flex items-center justify-center"
                    style={{ display: "none" }}
                  >
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

                  {/* Overlay gradient for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-navy mb-1 group-hover:text-secondary-coral transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-secondary-coral font-semibold mb-2">
                    {member.title}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
                    {member.bio}
                  </p>
                  <div className="flex items-center text-primary-navy text-sm">
                    <svg
                      className="w-4 h-4 mr-2 flex-shrink-0"
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
                    <span className="hover:text-secondary-coral transition-colors duration-200 cursor-pointer truncate">
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
                      {testimonial.service} {testimonial.yearsOfService}
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
