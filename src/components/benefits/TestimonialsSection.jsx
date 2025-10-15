// src/components/benefits/TestimonialsSection.jsx
import { useState } from "react";
import { benefitsData } from "../../data/careers.benefits";
import Icon from "../common/Icon";

function TestimonialCard({ testimonial, isActive }) {
  return (
    <div
      className={`transition-all duration-500 ${
        isActive
          ? "opacity-100 scale-100 relative"
          : "opacity-0 scale-95 absolute inset-0 pointer-events-none"
      }`}
    >
      <div className="bg-white rounded-xl shadow-lg p-8 relative">
        {/* Quote icon */}
        <div className="text-6xl text-secondary-coral/20 font-serif leading-none mb-4">
          "
        </div>

        <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
          {testimonial.quote}
        </blockquote>

        <div className="flex items-center">
          <div className="w-16 h-16 bg-gradient-to-br from-secondary-coral/20 to-secondary-teal/20 rounded-full flex items-center justify-center mr-4">
            <Icon name="user" className="w-8 h-8 text-secondary-coral" />
          </div>
          <div>
            <div className="font-bold text-primary-navy text-lg">
              {testimonial.name}
            </div>
            <div className="text-secondary-coral font-medium">
              {testimonial.role}
            </div>
            <div className="text-gray-500 text-sm">{testimonial.tenure}</div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-primary-gold/20 rounded-full" />
        <div className="absolute bottom-4 left-4 w-6 h-6 bg-secondary-teal/30 rounded-full" />
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const { testimonials } = benefitsData;

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 sm:py-20 bg-primary-navy text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-24 h-24 bg-primary-gold rounded-full blur-sm animate-pulse" />
        <div className="absolute bottom-32 right-1/3 w-20 h-20 bg-secondary-coral rounded-full blur-sm animate-bounce" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-secondary-teal rounded-full blur-sm animate-ping" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary-gold/20 text-primary-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Icon name="heart" className="w-4 h-4 mr-2 inline" />
            What Our Team Says
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Real Stories from{" "}
            <span className="text-primary-gold">Real People</span>
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our team members say
            about working at M&D Care and the benefits that make a real
            difference.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[300px] mb-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                isActive={index === activeTestimonial}
              />
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <Icon name="chevron-left" className="w-6 h-6 text-white" />
            </button>

            {/* Dots indicator */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? "bg-primary-gold scale-125"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <Icon name="chevron-right" className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary-gold mb-2">
              98%
            </div>
            <div className="text-white/80">Training Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary-gold mb-2">
              5
            </div>
            <div className="text-white/80">QCF Qualifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary-gold mb-2">
              2x
            </div>
            <div className="text-white/80">Employer of the year</div>
          </div>
        </div>
      </div>
    </section>
  );
}
