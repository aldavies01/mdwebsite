import { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";

function HeroCarousel() {
  const { t, i18n } = useTranslation();

  const [currentSlide, setCurrentSlide] = useState(0);

  // Build slides from translations (recompute when language changes)
  const slides = useMemo(
    () => [
      {
        id: 1,
        title: t("home.hero_carousel.slide1.title"),
        description: t("home.hero_carousel.slide1.description"),
        buttonText: t("home.hero_carousel.slide1.button"),
        buttonLink:
          "https://jobs.dayforcehcm.com/en-GB/manddcare/CANDIDATEPORTAL?preview=scale-300%3A%23bcbec0%3Balert%3A%23ff5500%3Bscale%3A%23393839%3Bscale-600%3A%23ffffff%3Bscale-100%3A%234d4d4f%3Bsecondary%3A%230087fd%3Bscale-400%3A%23e2e3e4%3Bsuccess%3A%2300c63c%3Berror%3A%23eb0000%3Baccent%3A%233982e2%3Bscale-500%3A%23f1f1f2%3Blight%3A%23e9f3fc%3Bscale-200%3A%23747679%3Battention%3A%23ffd652%3Bprimary%3A%231e52bf",
        bgImage: "/images/hero/hiring.png",
        external: true,
      },
      {
        id: 2,
        title: t("home.hero_carousel.slide2.title"),
        description: t("home.hero_carousel.slide2.description"),
        buttonText: t("home.hero_carousel.slide2.button"),
        buttonLink: "/about/community",
        bgImage: "/images/hero/training.png",
      },
      {
        id: 3,
        title: t("home.hero_carousel.slide3.title"),
        description: t("home.hero_carousel.slide3.description"),
        buttonText: t("home.hero_carousel.slide3.button"),
        buttonLink: "/about/values",
        bgImage: "/images/company/excellence.png",
      },
    ],
    [t, i18n.language]
  );

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-[70vh] overflow-hidden">
      {/* Slides container - this moves left/right */}
      <div
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
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
            <div className="relative h-full flex items-center justify-center z-10 group">
              <div className="text-center text-white px-8 max-w-4xl">
                <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-xl mb-8 drop-shadow-md">
                  {slide.description}
                </p>
                {/* Use <a> for external, otherwise normal link is fine */}
                <a
                  href={slide.buttonLink}
                  {...(slide.external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                  className="bg-primary-gold hover:bg-primary-gold/90 text-primary-navy px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg inline-block"
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
