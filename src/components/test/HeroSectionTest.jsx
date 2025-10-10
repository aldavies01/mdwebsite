import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="relative min-h-[100vh] sm:min-h-[85vh] w-full flex items-center justify-center overflow-hidden py-8 sm:py-0">
      {/* Background image / video */}
      <div className="absolute inset-0">
        <img
          src="/images/stock/stock-1.jpg"
          alt="Care at M&D"
          className="w-full h-full object-cover"
        />
        {/* Darker overlay for better readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6 drop-shadow-lg">
          Breaking the Mould:{" "}
          <span className="text-primary-gold block sm:inline">
            Care Designed Around You
          </span>
        </h1>

        {/* Subheadline - condensed for mobile */}
        <div className="mb-6 sm:mb-8 lg:mb-10">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-3 sm:mb-4 lg:mb-6 leading-relaxed drop-shadow-md">
            At the heart of our services is a simple promise: to create homes
            where people feel valued, supported and empowered.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed drop-shadow-md">
            We provide specialist care across mental health, learning
            disabilities, physical health and a wide range of complex needs -
            always person-centred, always a home first.
          </p>
        </div>

        {/* CTAs - stacked on mobile, side by side on larger screens */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            to="/services"
            className="bg-primary-gold text-primary-navy px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-primary-gold/90 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Explore Our Services
          </Link>
          <Link
            to="/about"
            className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-white hover:text-primary-navy hover:scale-105 transition-all duration-300"
          >
            Discover Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
