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
      bgImage: "/images/hero/hiring.png",
    },
    {
      id: 2,
      title: "M&D Care in the community",
      description: "Making a difference in our local communities",
      buttonText: "Learn More",
      buttonLink: "/about/community",
      bgImage: "/images/hero/training.png",
    },
    {
      id: 3,
      title: "Our awards",
      description: "Recognized for excellence in care services",
      buttonText: "View Achievements",
      buttonLink: "/about/values",
      bgImage: "/images/company/excellence.png",
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
            className="w-full h-full flex-shrink-0 relative"
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-center z-10">
              <div className="text-center text-white px-8 max-w-4xl">
                <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-xl mb-8 drop-shadow-md">
                  {slide.description}
                </p>
                <a
                  href={slide.buttonLink}
                  className="bg-primary-gold hover:bg-primary-gold/90 text-primary-navy px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
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
