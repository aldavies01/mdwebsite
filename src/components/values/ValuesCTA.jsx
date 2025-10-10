// src/components/values/ValuesCTA.jsx
export default function ValuesCTA({
  title = "Experience Our Values in Action",
  description = "See how our values translate into exceptional care across all our services. Discover the difference that value-driven care can make.",
  primary = { text: "Explore Our Services", href: "/services" },
  secondary = { text: "Get in Touch", href: "/contact" },
}) {
  return (
    <section className="py-24 bg-primary-navy text-white relative overflow-hidden">
      {/* soft animated background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary-gold rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-secondary-coral rounded-full animate-bounce" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">{title}</h2>
        <p className="text-lg lg:text-xl text-white/90 mb-10 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href={primary.href}
            className="bg-primary-gold text-primary-navy px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-bold text-base lg:text-lg hover:bg-primary-gold/90 hover:scale-[1.03] transition-transform duration-200 shadow-xl"
          >
            {primary.text}
          </a>
          <a
            href={secondary.href}
            className="bg-white/10 text-white border-2 border-white/30 px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-bold text-base lg:text-lg hover:bg-white hover:text-primary-navy transition-colors duration-200 backdrop-blur-sm"
          >
            {secondary.text}
          </a>
        </div>
      </div>
    </section>
  );
}
