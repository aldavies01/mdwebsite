// src/components/benefits/ComparisonTable.jsx
import { benefitsData } from "../../data/careers.benefits";
import Icon from "../common/Icon";

function ComparisonRow({ item, index }) {
  return (
    <div className="grid grid-cols-4 gap-4 py-6 border-b border-gray-200 last:border-b-0 items-center">
      {/* Benefit name */}
      <div className="text-left">
        <div className="font-semibold text-primary-navy text-sm sm:text-base">
          {item.benefit}
        </div>
      </div>

      {/* Industry standard */}
      <div className="text-center">
        <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-600 font-medium">
          {item.industry}
        </div>
      </div>

      {/* M&D Care offering */}
      <div className="text-center">
        <div className="bg-primary-gold/10 border border-primary-gold/20 rounded-lg px-3 py-2 text-sm text-primary-gold font-bold">
          {item.mdcare}
        </div>
      </div>

      {/* Advantage */}
      <div className="text-center">
        <div className="bg-secondary-coral/10 border border-secondary-coral/20 rounded-lg px-3 py-2 text-sm text-secondary-coral font-bold flex items-center justify-center gap-2">
          <Icon name="trending-up" className="w-4 h-4" />
          {item.advantage}
        </div>
      </div>
    </div>
  );
}

export default function ComparisonTable() {
  const { comparison } = benefitsData;

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary-gold/10 text-primary-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Icon name="bar-chart" className="w-4 h-4 mr-2 inline" />
            Industry Comparison
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-navy mb-6 leading-tight">
            {comparison.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {comparison.subtitle}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
          {/* Table Header */}
          <div className="bg-gradient-to-r from-primary-navy to-primary-navy/90 text-white p-6">
            <div className="grid grid-cols-4 gap-4 items-center">
              <div className="text-left">
                <h3 className="font-bold text-sm sm:text-base">Benefit</h3>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-sm sm:text-base">
                  Industry Standard
                </h3>
                <p className="text-white/70 text-xs mt-1">Average offering</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-sm sm:text-base">M&D Care</h3>
                <p className="text-primary-gold text-xs mt-1">What we offer</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-sm sm:text-base">
                  Your Advantage
                </h3>
                <p className="text-white/70 text-xs mt-1">Extra value</p>
              </div>
            </div>
          </div>

          {/* Table Body */}
          <div className="p-6">
            {comparison.items.map((item, index) => (
              <ComparisonRow key={index} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <div className="bg-gradient-to-br from-primary-gold/10 to-primary-gold/5 border border-primary-gold/20 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-primary-gold/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="trending-up" className="w-6 h-6 text-primary-gold" />
            </div>
            <div className="text-2xl font-bold text-primary-gold mb-2">
              25% Better
            </div>
            <div className="text-gray-600 text-sm">
              Average benefit improvement over industry standard
            </div>
          </div>

          <div className="bg-gradient-to-br from-secondary-coral/10 to-secondary-coral/5 border border-secondary-coral/20 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-secondary-coral/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon
                name="shield-check"
                className="w-6 h-6 text-secondary-coral"
              />
            </div>
            <div className="text-2xl font-bold text-secondary-coral mb-2">
              100% Covered
            </div>
            <div className="text-gray-600 text-sm">
              All essential benefits included from day one**
            </div>
          </div>

          <div className="bg-gradient-to-br from-secondary-teal/10 to-secondary-teal/5 border border-secondary-teal/20 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-secondary-teal/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="heart" className="w-6 h-6 text-secondary-teal" />
            </div>
            <div className="text-2xl font-bold text-secondary-teal mb-2">
              Looking after you
            </div>
            <div className="text-gray-600 text-sm">
              Benefits designed around your needs
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary-navy to-primary-navy/95 rounded-xl text-white p-8 mt-12 text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">
            Ready to Experience the M&D Care Advantage?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            These numbers tell the story, but the real difference is in how
            these benefits support you and your family every single day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/careers"
              className="bg-primary-gold text-primary-navy px-8 py-3 rounded-lg font-bold hover:bg-primary-gold/90 transition-all duration-300 shadow-lg"
            >
              View Open Positions
            </a>
            <a
              href="mailto:careers@mdcare.co.uk"
              className="bg-white/10 text-white border border-white/30 px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-primary-navy transition-all duration-300"
            >
              Ask About Benefits
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
