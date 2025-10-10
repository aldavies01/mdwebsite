import { Link } from "react-router-dom";

function PBSHeroSection() {
  return (
    <section className="relative bg-primary-navy text-white py-12 sm:py-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
          Positive Behaviour Support
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Understanding Through
          <br />
          <span className="text-primary-gold">Compassionate Care</span>
        </h1>
        <p className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
          We believe in understanding the 'why' behind challenging behaviors,
          creating opportunities for positive change and meaningful lives
          through evidence-based Positive Behaviour Support.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/careers"
            className="bg-primary-gold text-primary-navy px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-primary-gold/90 hover:scale-105 transition-all duration-300 shadow-lg text-sm sm:text-base"
          >
            Join our PBS Team
          </Link>
          <a
            href="/services"
            className="bg-white/10 text-white border-2 border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-navy transition-all duration-300 text-sm sm:text-base"
          >
            All Our Services
          </a>
        </div>
      </div>
    </section>
  );
}

export default PBSHeroSection;
