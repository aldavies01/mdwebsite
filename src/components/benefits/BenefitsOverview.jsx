// src/components/benefits/BenefitsOverview.jsx
import Icon from "../common/Icon";

const OVERVIEW_HIGHLIGHTS = [
  {
    icon: "shield-check",
    title: "Comprehensive Coverage",
    description: "From healthcare to pension, we've got your future covered",
    color: "secondary-coral",
  },
  {
    icon: "trending-up",
    title: "Career Investment",
    description: "£500 annual training budget plus clear progression paths",
    color: "primary-gold",
  },
  {
    icon: "heart",
    title: "Work-Life Balance",
    description: "Flexible scheduling and genuine respect for your time",
    color: "secondary-teal",
  },
  {
    icon: "users",
    title: "Family Focused",
    description: "Benefits that extend to your loved ones, not just you",
    color: "secondary-purple",
  },
];

export default function BenefitsOverview() {
  // You can set this to an image path when you have one, or leave as null for placeholder
  const teamImage = "/images/stock/stock-6.jpg"; // Example: "/images/team-photo.jpg"

  return (
    <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary-gold rounded-full blur-sm" />
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-secondary-coral rounded-full blur-sm" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-secondary-coral/10 text-secondary-coral px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-6">
            Why M&D Care
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-navy mb-6 leading-tight">
            Benefits That Actually{" "}
            <span className="text-secondary-coral">Matter</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We don't just offer a job - we offer a career with benefits designed
            around real life. From day one, you'll have access to support that
            helps you thrive both at work and at home.
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {OVERVIEW_HIGHLIGHTS.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 group hover:-translate-y-1"
            >
              <div
                className={`w-12 h-12 sm:w-16 sm:h-16 bg-${item.color}/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-${item.color}/20 transition-colors duration-300`}
              >
                <Icon
                  name={item.icon}
                  className={`w-6 h-6 sm:w-8 sm:h-8 text-${item.color}`}
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-primary-navy mb-3 group-hover:text-secondary-coral transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Image Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-navy mb-6">
              More Than Just Benefits - It's About{" "}
              <span className="text-secondary-coral">Belonging</span>
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                At M&D Care, we understand that great care starts with great
                care for our team. That's why our benefits package goes beyond
                the basics to create a comprehensive support system for every
                aspect of your life.
              </p>
              <p>
                Whether you're starting your career in care or you're an
                experienced professional looking for your next challenge, our
                benefits are designed to grow with you and support your personal
                and professional journey.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <div className="bg-primary-gold/10 border border-primary-gold/20 rounded-lg p-4 flex-1">
                <div className="text-2xl font-bold text-primary-gold mb-1">
                  From Day One
                </div>
                <div className="text-sm text-gray-600">
                  Full benefits package starts immediately
                </div>
              </div>
              <div className="bg-secondary-teal/10 border border-secondary-teal/20 rounded-lg p-4 flex-1">
                <div className="text-2xl font-bold text-secondary-teal mb-1">
                  Always Growing
                </div>
                <div className="text-sm text-gray-600">
                  Benefits improve with length of service
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Team image with ternary operator for conditional display */}
            {teamImage ? (
              <div className="rounded-xl sm:rounded-2xl aspect-[4/3] relative overflow-hidden">
                <img
                  src={teamImage}
                  alt="Happy M&D Care team members"
                  className="w-full h-full object-cover"
                />
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-primary-gold/30 rounded-full" />
                <div className="absolute bottom-6 left-6 w-6 h-6 bg-secondary-teal/40 rounded-full" />
              </div>
            ) : (
              <div className="bg-gradient-to-br from-secondary-light-blue/20 to-secondary-coral/20 rounded-xl sm:rounded-2xl aspect-[4/3] flex items-center justify-center relative overflow-hidden">
                <div className="text-center p-8">
                  <Icon
                    name="users"
                    className="w-16 h-16 sm:w-24 sm:h-24 text-secondary-coral/60 mx-auto mb-4"
                  />
                  <p className="text-gray-500 font-medium">
                    [Team Photo: Happy M&D Care staff members in break room or
                    team meeting]
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-primary-gold/30 rounded-full" />
                <div className="absolute bottom-6 left-6 w-6 h-6 bg-secondary-teal/40 rounded-full" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
