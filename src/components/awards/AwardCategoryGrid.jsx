import AwardPill from "./AwardPill";

export default function AwardCategoryGrid({ categories = [] }) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-secondary-light-blue/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-navy">
            Awards & Recognition
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            A flexible, living overview of the awards we’re proud of — grouped
            by theme so it’s easy to keep up to date as new wins are confirmed.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {categories.map((cat) => (
            <div key={cat.id}>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-primary-navy">
                    {cat.title}
                  </h3>
                  <p className="text-gray-600 mt-2 max-w-3xl">
                    {cat.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.awards.map((a, i) => (
                  <AwardPill key={`${cat.id}-${i}`} item={a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
