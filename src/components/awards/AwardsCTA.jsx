// src/components/awards/AwardsCTA.jsx
export default function AwardsCTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary-navy to-secondary-purple text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-primary-gold rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-secondary-coral rounded-full blur-xl sm:blur-2xl animate-bounce"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight px-2">
          Experience Our
          <span className="block sm:inline text-transparent bg-gradient-to-r from-primary-gold to-secondary-coral bg-clip-text">
            {" "}
            Award-Winning Care
          </span>
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-12 leading-relaxed px-4">
          Our awards reflect our commitment to excellence, but the real measure
          of our success is the positive difference we make in people's lives
          every day. Discover how our recognized approach can benefit you.
        </p>

        <div className="flex flex-col gap-4 sm:gap-6 justify-center mb-8 sm:mb-12 px-4">
          <a
            href="/services"
            className="group bg-primary-gold text-primary-navy px-6 sm:px-8 lg:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-primary-gold/90 hover:scale-105 sm:hover:scale-110 transition-all duration-300 shadow-2xl flex items-center justify-center gap-2 sm:gap-3"
          >
            <span>Explore Our Services</span>
            <svg
              className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>

          <a
            href="/contact"
            className="group bg-white/10 text-white border-2 border-white/30 px-6 sm:px-8 lg:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-white hover:text-primary-navy backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3"
          >
            <span>Get in Touch</span>
            <svg
              className="w-4 sm:w-5 h-4 sm:h-5 group-hover:scale-110 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </a>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 inline-block border border-white/20 mx-4 sm:mx-0">
          <p className="text-white/90 mb-2 text-sm sm:text-base">
            Ready to learn more about our award-winning approach?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-primary-gold font-bold text-sm sm:text-base lg:text-lg">
            {/* Optional: change to mailto: and tel: for better UX */}
            <a
              href="mailto:info@mdcare.co.uk"
              className="flex items-center gap-2 underline decoration-transparent hover:decoration-inherit"
            >
              📧 info@mdcare.co.uk
            </a>
            <a
              href="tel:01554123456"
              className="flex items-center gap-2 underline decoration-transparent hover:decoration-inherit"
            >
              📞 01554 123 456
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
