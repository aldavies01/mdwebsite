function ServicesCTA() {
  return (
    <section className="py-20 bg-primary-navy text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Learn More About Our Services?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Contact our team to discuss how M&D Care can support you or your loved
          one. We're here to help you understand your options and find the right
          care solution.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-primary-gold text-primary-navy px-8 py-4 rounded-xl font-semibold hover:bg-primary-gold/90 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Contact Us Today
          </a>
          <a
            href="/referrals"
            className="bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-navy transition-all duration-300"
          >
            Make a Referral
          </a>
        </div>
      </div>
    </section>
  );
}

export default ServicesCTA;
