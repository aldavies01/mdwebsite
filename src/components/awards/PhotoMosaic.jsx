export function PhotoMosaic({ images = [] }) {
  return (
    <section className="py-16 bg-gradient-to-br from-secondary-light-blue/10 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h3 className="text-3xl sm:text-4xl font-bold text-primary-navy">
            Celebration Moments
          </h3>
          <p className="text-gray-600 mt-2">
            Highlights from ceremonies, team wins, and community recognition.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden border border-gray-100 shadow ${i % 5 === 0 ? "lg:col-span-2" : ""}`}
            >
              <img
                src={src}
                alt={`Celebration ${i + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
