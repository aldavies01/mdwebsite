import { useState, useEffect } from "react";

function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slide data
  const slides = [
    {
      id: 1,
      title: "We're hiring",
      description: "Join our team of dedicated care professionals",
      buttonText: "View Vacancies",
      buttonLink: "/careers/vacancies",
      bgColor: "bg-primary-navy",
    },
    {
      id: 2,
      title: "M&D Care in the community",
      description: "Making a difference in our local communities",
      buttonText: "Learn More",
      buttonLink: "/about/community",
      bgColor: "bg-secondary-teal",
    },
    {
      id: 3,
      title: "Our awards",
      description: "Recognized for excellence in care services",
      buttonText: "View Achievements",
      buttonLink: "/about/values",
      bgColor: "bg-secondary-coral",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[70vh] overflow-hidden">
      {/* Slides container - this moves left/right */}
      <div
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {/* Render all slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`w-full h-full flex-shrink-0 ${slide.bgColor}`}
          >
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center text-white px-8 max-w-4xl">
                <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl mb-8">{slide.description}</p>
                <a
                  href={slide.buttonLink}
                  className="bg-primary-gold hover:bg-primary-gold/90 text-primary-navy px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroCarousel;
