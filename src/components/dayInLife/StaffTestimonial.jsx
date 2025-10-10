// src/components/dayinlife/StaffTestimonial.jsx
import { dayInTheLifeData } from "../../data/careers.dayInTheLife";
import Icon from "../common/Icon";

export default function StaffTestimonial() {
  const { staffTestimonial } = dayInTheLifeData;

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-secondary-coral/10 text-secondary-coral px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Icon name="user" className="w-4 h-4 mr-2 inline" />
            Personal Perspective
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-navy mb-6 leading-tight">
            {staffTestimonial.title}
          </h2>
        </div>

        {/* Main Testimonial Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="grid lg:grid-cols-3">
            {/* Left: Profile */}
            <div className="bg-gradient-to-br from-secondary-coral to-secondary-coral/80 p-8 flex items-center justify-center text-white">
              <div className="text-center">
                {staffTestimonial.image ? (
                  <img
                    src={staffTestimonial.image}
                    alt="Emma Thompson"
                    className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white/30"
                  />
                ) : (
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white/30">
                    <Icon name="user" className="w-16 h-16 text-white" />
                  </div>
                )}
                <h3 className="text-xl font-bold mb-1">Emma Thompson</h3>
                <p className="text-white/90">Senior Support Worker</p>
                <p className="text-white/80 text-sm mt-2">
                  3 Years at M&D Care
                </p>
              </div>
            </div>

            {/* Right: Main Quote */}
            <div className="lg:col-span-2 p-8 sm:p-12 flex items-center">
              <div>
                <Icon
                  name="quote"
                  className="w-10 h-10 text-secondary-coral/30 mb-4"
                />
                <blockquote className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                  {staffTestimonial.mainQuote}
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {staffTestimonial.highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-secondary-coral/10 to-secondary-teal/10 rounded-lg flex items-center justify-center mb-4">
                <Icon
                  name={highlight.icon}
                  className="w-6 h-6 text-secondary-coral"
                />
              </div>

              <h3 className="text-lg font-bold text-primary-navy mb-3">
                {highlight.title}
              </h3>

              <p className="text-gray-600 italic leading-relaxed">
                "{highlight.quote}"
              </p>
            </div>
          ))}
        </div>

        {/* Advice Section */}
        <div className="bg-gradient-to-r from-primary-navy to-primary-navy/95 rounded-2xl p-8 sm:p-12 text-white text-center relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-primary-gold/10 rounded-full transform -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-secondary-coral/10 rounded-full transform translate-x-12 translate-y-12"></div>

          <div className="relative max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-primary-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="lightbulb" className="w-8 h-8 text-primary-gold" />
            </div>

            <h3 className="text-2xl font-bold mb-4 text-primary-gold">
              Emma's Advice to New Starters
            </h3>

            <p className="text-lg leading-relaxed text-white/90">
              {staffTestimonial.advice}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
