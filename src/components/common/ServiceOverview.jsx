import ValueProposition from "./ValueProposition";
import StatCard from "./StatCard";
import FeatureList from "./FeatureList";

function ServiceOverview({
  badge,
  title,
  description,
  valuePropositions,
  stats,
  features,
  statsTitle = "At a Glance",
}) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-block bg-secondary-coral/10 text-secondary-coral px-4 py-2 rounded-full text-sm font-semibold mb-6">
              {badge}
            </div>
            <h2 className="text-4xl font-bold text-primary-navy mb-6 leading-tight">
              {title.main} <br />
              <span className="text-secondary-coral">{title.highlight}</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {description}
            </p>

            <div className="space-y-6">
              {valuePropositions.map((prop, index) => (
                <ValueProposition
                  key={index}
                  icon={prop.icon}
                  title={prop.title}
                  description={prop.description}
                />
              ))}
            </div>
          </div>

          {/* Right: Stats & Features */}
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary-coral/10 to-secondary-teal/10 rounded-3xl transform rotate-3"></div>

            <div className="relative bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-primary-navy mb-6 text-center">
                {statsTitle}
              </h3>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <StatCard
                    key={index}
                    number={stat.number}
                    label={stat.label}
                    subtitle={stat.subtitle}
                    colorClass={stat.colorClass}
                  />
                ))}
              </div>

              {/* Features List */}
              <FeatureList
                title={features.title}
                features={features.items}
                dotColor={features.dotColor}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceOverview;
