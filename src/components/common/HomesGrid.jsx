import HomeCard from "./HomeCard";

function HomesGrid({
  badge,
  title,
  description,
  homes,
  serviceType = "Residential Care",
}) {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-secondary-coral/10 text-secondary-coral px-4 py-2 rounded-full text-sm font-semibold mb-6">
            {badge}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-navy mb-6 leading-tight">
            {title.main} <br />
            <span className="text-secondary-coral">{title.highlight}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {homes.map((home) => (
            <HomeCard key={home.id} home={home} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomesGrid;
