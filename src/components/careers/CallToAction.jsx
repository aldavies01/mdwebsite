// components/careers/roles/CallToAction.jsx
function CallToAction({ ctaData }) {
  return (
    <section className="py-16 bg-primary-navy text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">{ctaData.title}</h2>
        <p className="text-xl text-white/90 mb-12 leading-relaxed">
          {ctaData.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <a
            href={ctaData.primaryButton.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-gold text-primary-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-gold/90 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            {ctaData.primaryButton.text}
          </a>
          <a
            href={ctaData.secondaryButton.link}
            className="bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary-navy transition-all duration-300"
          >
            {ctaData.secondaryButton.text}
          </a>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 inline-block max-w-md mx-auto">
          <p className="text-white/90 mb-2">
            Questions about any of these roles?
          </p>
          <p className="text-primary-gold font-semibold">
            📧 {ctaData.contact.email} | 📞 {ctaData.contact.phone}
          </p>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
