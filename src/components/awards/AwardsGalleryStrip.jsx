export function AwardsGalleryStrip({ images = [] }) {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-primary-navy mb-6">
          In Pictures
        </h3>
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="snap-start shrink-0 w-64 sm:w-80 h-40 sm:h-52 rounded-2xl overflow-hidden border border-gray-100 shadow"
            >
              <img
                src={src}
                alt={`Awards gallery ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
