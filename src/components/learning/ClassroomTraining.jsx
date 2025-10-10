// src/components/learning/ClassroomTraining.jsx
import { learningDevelopmentData } from "../../data/careers.learningDevelopment";
import Icon from "../common/Icon";
import Carousel, { DefaultCard } from "../common/Carousel";

export default function ClassroomTraining() {
  const { classroomTraining } = learningDevelopmentData;
  const trainingImage = "/images/training/Medication.jpg";

  const GALLERY = [
    {
      image: "/images/training/pbm.jpg",
      alt: "Training room with projector and seating",
      overlay: {
        title: "PBM",
        subtitle: "Hands-on practice",
        align: "left",
        theme: "dark",
      },
      body: {
        title: "Positive Behaviour Management",
        summary: "De-escalation frameworks and scenario-based practice.",
        details:
          "We run small-group drills using real-world care scenarios, so staff build confidence safely.",
      },
    },
    {
      image: "/images/training/hoist.png",
      alt: "Manual handling equipment setup",
      overlay: {
        title: "Manual Handling",
        align: "left",
        theme: "dark",
        subtitle: "Specialist Equipment",
      },
      body: {
        title: "Safe People Handling",
        summary: "Hoists, slings, and transfer techniques.",
        details:
          "Taught by qualified trainers with up-to-date legislation and best-practice refreshers.",
      },
    },
    {
      image: "/images/training/firstaid.png",
      alt: "First-aid mannequins and equipment",
      overlay: {
        title: "First Aid Suite",
        align: "left",
        theme: "dark",
        subtitle: "Simulate Real Scenarios",
      },
      body: {
        title: "First Aid",
        summary: "CPR, AED, and incident response.",
        details:
          "Hands-on practice with manikins and live equipment to build real competence.",
      },
    },
    {
      image: "/images/training/elearning.png",
      alt: "IT workstations for e-learning",
      overlay: { title: "Digital Learning", align: "left", theme: "dark" },
      body: {
        title: "E-Learning Hub",
        summary: "Blended learning environment.",
        details:
          "Workstations for self-paced modules that complement our classroom sessions.",
      },
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary-gold rounded-full blur-sm" />
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-secondary-coral rounded-full blur-sm" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary-gold/10 text-primary-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Icon name="graduation-cap" className="w-4 h-4 mr-2 inline" />
            Expert-Led Training
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-navy mb-6 leading-tight">
            {classroomTraining.title.split(" ").slice(0, 2).join(" ")}{" "}
            <span className="text-secondary-coral">
              {classroomTraining.title.split(" ").slice(2).join(" ")}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {classroomTraining.subtitle}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left: Content */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-navy mb-6 leading-tight">
              We Recruit for{" "}
              <span className="text-secondary-coral">Values First</span>
            </h3>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                At M&D Care, we believe that the right attitude and values are
                more important than prior experience. We recruit for compassion,
                dedication, and a genuine desire to make a difference.
              </p>
              <p>
                Once you join our team, our comprehensive training program
                provides all the skills and knowledge you need to excel in your
                role. From day one, you'll receive expert guidance that
                transforms your natural caring instincts into professional
                expertise.
              </p>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-primary-gold/10 to-secondary-coral/10 rounded-xl border border-primary-gold/20">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="heart" className="w-6 h-6 text-secondary-coral" />
                <h4 className="text-lg font-bold text-primary-navy">
                  Our Promise to You
                </h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                No matter your background, we'll provide the comprehensive
                training and ongoing support you need to build a rewarding
                career in care. Your journey starts with your values.
              </p>
            </div>
          </div>

          {/* Right: Training Image */}
          <div className="relative">
            {/* Training image with ternary operator for conditional display */}
            {trainingImage ? (
              <div className="rounded-2xl aspect-[4/3] relative overflow-hidden">
                <img
                  src={trainingImage}
                  alt="Classroom training session with expert facilitator and engaged learners"
                  className="w-full h-full object-cover"
                />
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-primary-gold/30 rounded-full" />
                <div className="absolute bottom-6 left-6 w-6 h-6 bg-secondary-teal/40 rounded-full" />
              </div>
            ) : (
              <div className="bg-gradient-to-br from-secondary-light-blue/20 to-secondary-coral/20 rounded-2xl aspect-[4/3] flex items-center justify-center relative overflow-hidden">
                <div className="text-center p-8">
                  <Icon
                    name="users"
                    className="w-16 h-16 sm:w-24 sm:h-24 text-secondary-coral/60 mx-auto mb-4"
                  />
                  <p className="text-gray-500 font-medium">
                    [Training Photo: Classroom session with expert facilitator
                    and engaged learners]
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-primary-gold/30 rounded-full" />
                <div className="absolute bottom-6 left-6 w-6 h-6 bg-secondary-teal/40 rounded-full" />
              </div>
            )}
          </div>
        </div>

        {/* Training Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classroomTraining.highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 text-center group hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-secondary-coral/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary-coral/20 transition-colors duration-300">
                <Icon
                  name={highlight.icon}
                  className="w-8 h-8 text-secondary-coral"
                />
              </div>
              <h4 className="text-lg font-bold text-primary-navy mb-3 group-hover:text-secondary-coral transition-colors duration-300">
                {highlight.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Training Features Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-navy to-primary-navy/95 rounded-2xl p-8 sm:p-12">
          <div className="text-center text-white mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              What Makes Our Training Different
            </h3>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              Our classroom-based approach ensures maximum engagement, hands-on
              learning, and direct access to subject matter experts who bring
              real-world experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors duration-300">
              <Icon
                name="users"
                className="w-8 h-8 text-primary-gold mx-auto mb-3"
              />
              <div className="text-lg text-white font-bold mb-2">
                Face-to-Face
              </div>
              <div className="text-white/80 text-sm">
                Personal interaction with expert trainers
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors duration-300">
              <Icon
                name="graduation-cap"
                className="w-8 h-8 text-primary-gold mx-auto mb-3"
              />
              <div className="text-lg font-bold mb-2 text-white">
                Expert Led
              </div>
              <div className="text-white/80 text-sm">
                Subject matter experts facilitate all sessions
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors duration-300">
              <Icon
                name="lightbulb"
                className="w-8 h-8 text-primary-gold mx-auto mb-3"
              />
              <div className="text-lg font-bold mb-2 text-white">
                Practical Focus
              </div>
              <div className="text-white/80 text-sm">
                Real scenarios and hands-on learning
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors duration-300">
              <Icon
                name="heart"
                className="w-8 h-8 text-primary-gold mx-auto mb-3"
              />
              <div className="text-lg font-bold mb-2 text-white">
                Values Based
              </div>
              <div className="text-white/80 text-sm">
                Grounded in compassionate care principles
              </div>
            </div>
          </div>
        </div>
        {/* Classroom & Equipment Gallery */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <div className="inline-block bg-primary-gold/10 text-primary-gold px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Icon name="image" className="w-4 h-4 mr-2 inline" />
              Inside Our Training Spaces
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-navy">
              Classrooms &{" "}
              <span className="text-secondary-coral">Equipment</span>
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto mt-3">
              A peek at our skills lab, manual handling kit, first-aid setup,
              and digital learning area.
            </p>
          </div>

          <Carousel
            items={GALLERY}
            ariaLabel="Classroom and equipment gallery"
            showDots
            renderItem={(item, idx) => (
              <DefaultCard
                key={idx}
                item={{ image: item.image, alt: item.alt }}
                overlay={item.overlay}
                body={item.body} // <- this displays title/summary/details under the image
              />
            )}
          />
        </div>
      </div>
    </section>
  );
}
