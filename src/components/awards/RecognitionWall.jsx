// src/components/awards/RecognitionWall.jsx
export default function RecognitionWall({ achievements }) {
  return (
    <section className="py-16 bg-gradient-to-br from-primary-navy via-secondary-purple to-primary-navy text-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            A Legacy of
            <span className="block sm:inline ml-2 sm:mt-0 text-transparent bg-gradient-to-r from-primary-gold to-secondary-coral bg-clip-text">
              Excellence
            </span>
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            From our first recognition in 2009 to becoming Wales’ most awarded
            care provider, our journey reflects an unwavering commitment to
            exceptional care.
          </p>
        </div>

        {/* Glassmorphic Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((stat, idx) => (
            <div
              key={idx}
              className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <div className="text-4xl font-bold text-primary-gold mb-2">
                {stat.number}
              </div>
              <div className="font-semibold mb-1">{stat.label}</div>
              <p className="text-sm text-white/80">{stat.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
