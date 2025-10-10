// src/components/learning/LearningPhilosophy.jsx
import { learningDevelopmentData } from "../../data/careers.learningDevelopment";
import { tone } from "../careers/colorClassnames";
import Icon from "../common/Icon";
import MediaCard from "../common/MediaCard";

export default function LearningPhilosophy() {
  const { philosophy } = learningDevelopmentData;

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-secondary-coral/10 text-secondary-coral px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Icon name="lightbulb" className="w-4 h-4 mr-2 inline" />
            Our Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-navy mb-6 leading-tight">
            {philosophy.title.split(" ").slice(0, 2).join(" ")}{" "}
            <span className="text-secondary-coral">
              {philosophy.title.split(" ").slice(2).join(" ")}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {philosophy.subtitle}
          </p>
        </div>

        {/* Main Philosophy Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 mb-16 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary-coral/10 to-secondary-purple/10 rounded-full transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary-teal/10 to-primary-gold/10 rounded-full transform -translate-x-12 translate-y-12"></div>

          <div className="relative text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-secondary-coral to-secondary-purple rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="book" className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-navy mb-4">
              {philosophy.mainTitle}
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto text-base sm:text-lg">
              {philosophy.mainDescription}
            </p>
          </div>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {philosophy.pillars.map((pillar, index) => {
              const c = tone(pillar.color, "secondary-coral");
              return (
                <div key={index} className="text-center group">
                  <div
                    className={`w-16 h-16 ${c.bgSoft} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:${c.bg} transition-all duration-300`}
                  >
                    <Icon
                      name={pillar.icon}
                      className={`w-8 h-8 ${c.text} group-hover:text-white transition-colors duration-300`}
                    />
                  </div>
                  <h4 className="text-lg font-bold text-primary-navy mb-2 group-hover:text-secondary-coral transition-colors duration-300">
                    {pillar.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-16">
          <MediaCard
            title="Inside Our Classroom Training"
            description="A quick look inside our interactive sessions built on Social Care Wales standards."
            poster="/images/hero/training.png"
            // Replace with your real embed or mp4
            src="https://www.youtube.com/embed/GLcB3PRP9VE"
            provider="youtube" // "youtube" | "vimeo" | "file"
            aspect="video" // reuse elsewhere with "square" for grids, etc.
          />
        </div>

        {/* Additional Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-secondary-coral/10 rounded-lg flex items-center justify-center mb-4">
              <Icon
                name="shield-check"
                className="w-6 h-6 text-secondary-coral"
              />
            </div>
            <h4 className="text-lg font-bold text-primary-navy mb-3">
              Social Care Wales Standards
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our training is built on the foundation of Social Care Wales
              standards, ensuring excellence in every aspect of care delivery.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-secondary-teal/10 rounded-lg flex items-center justify-center mb-4">
              <Icon
                name="trending-up"
                className="w-6 h-6 text-secondary-teal"
              />
            </div>
            <h4 className="text-lg font-bold text-primary-navy mb-3">
              Continuous Growth
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Learning doesn't stop after induction. We provide ongoing
              development opportunities throughout your entire career.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 bg-primary-gold/10 rounded-lg flex items-center justify-center mb-4">
              <Icon name="heart" className="w-6 h-6 text-primary-gold" />
            </div>
            <h4 className="text-lg font-bold text-primary-navy mb-3">
              Person-Centered Approach
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Every aspect of our training focuses on delivering compassionate,
              individualized care that puts people first.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
