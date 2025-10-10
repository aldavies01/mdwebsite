// components/PBS/PBSCallToActionSection.jsx

function PBSCallToActionSection() {
  return (
    <section className="py-12 sm:py-20 bg-primary-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Ready to Learn More About PBS?
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Our PBS approach is transforming lives through understanding,
          compassion, and evidence-based support. Discover how it can make a
          difference for you or your loved one.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
          <a
            href="/contact"
            className="bg-primary-gold text-primary-navy px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-primary-gold/90 hover:scale-105 transition-all duration-300 shadow-lg text-sm sm:text-base"
          >
            Contact Our PBS Team
          </a>
          <a
            href="/services/residential"
            className="bg-white/10 text-white border-2 border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-navy transition-all duration-300 text-sm sm:text-base"
          >
            View Our Services
          </a>
        </div>
      </div>
    </section>
  );
}

export default PBSCallToActionSection;
