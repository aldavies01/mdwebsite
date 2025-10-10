// src/components/awards/AwardsTimeline.jsx
import AwardCard from "./AwardCard";

export default function AwardsTimeline({ awards }) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-secondary-light-blue/5 relative overflow-hidden">
      {/* background decoration */}
      {/* <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 right-4 sm:right-10 text-4xl sm:text-6xl lg:text-9xl font-bold text-primary-navy rotate-12">
          2024
        </div>
        <div className="absolute bottom-1/4 left-4 sm:left-10 text-3xl sm:text-4xl lg:text-6xl font-bold text-secondary-coral -rotate-12">
          WINNER
        </div>
      </div> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-navy mb-4 sm:mb-6 leading-tight px-4">
            2024: A Year of{" "}
            <span className="pl-2 sm:inline text-transparent bg-gradient-to-r from-secondary-coral to-secondary-teal bg-clip-text">
              Outstanding Recognition
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            This year has been exceptional for M&amp;D Care, with four major
            awards recognizing our innovation, excellence in care, and
            commitment to our team and the people we support.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {awards.map((award) => (
            <AwardCard key={award.id} award={award} />
          ))}
        </div>
      </div>
    </section>
  );
}
