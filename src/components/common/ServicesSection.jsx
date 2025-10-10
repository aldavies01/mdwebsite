// src/components/services/ServicesSection.jsx
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import ServiceMap from "./ServiceMap";
import NewDevelopmentsCarousel from "./NewDevelopmentsCarousel";
import { services as SERVICE_CONSTANTS } from "../../data/services.constants";

// Shape/transform here if ServiceCard needs it.
const DERIVED_SERVICES = SERVICE_CONSTANTS.map((svc) => ({
  ...svc,
  features: Array.isArray(svc.features) ? svc.features.slice(0, 3) : [],
}));

function ServicesSection({
  showCards = true,
  showMap = true,
  topPadding = true,
  bottomPadding = true,
  colorVariant = "white", // keep white by default so it blends with the homepage
  newDevsHref = "/services/new-developments",
  newDevsImages = [], // e.g. ["/images/residential/croft-house-1.png", ...]
  newDevsAlt = "New development photo",
}) {
  // Section spacing — generous by default. When stacking two sections and removing
  // bottom/top padding, we still use pb-px to avoid a visible seam.
  const sectionPadding = [
    topPadding ? "pt-20" : "pt-0",
    bottomPadding ? "pb-20" : "pb-px",
  ].join(" ");

  // Section background — keep white by default; tint optional if you ever want it again
  const sectionBg =
    colorVariant === "tint"
      ? "bg-gradient-to-b from-secondary-teal/5 via-white to-secondary-coral/5"
      : "bg-white";

  return (
    <section className={`${sectionBg} ${sectionPadding}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* ---------- SERVICES (cards) ---------- */}
        {showCards && (
          <div className={bottomPadding ? "mb-16" : "mb-8"}>
            {/* Header  */}
            <div className="mb-14">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
                {/* Left: message */}
                <div className="lg:max-w-3xl">
                  <div className="inline-block bg-primary-gold/10 text-primary-navy px-4 py-2 rounded-full text-sm font-semibold mb-5">
                    What we do
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold text-primary-navy leading-tight">
                    Specialist adult social care across Wales
                  </h2>
                  <p className="mt-3 text-lg text-gray-700 leading-relaxed">
                    We support adults with learning disabilities, mental health
                    needs and complex needs - through Residential Care,
                    Supported Living and Community Outreach.
                  </p>

                  {/* Audience / needs chips */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 rounded-full text-sm bg-secondary-teal/10 text-secondary-teal font-semibold">
                      Learning disabilities
                    </span>
                    <span className="px-3 py-1.5 rounded-full text-sm bg-secondary-coral/10 text-secondary-coral font-semibold">
                      Mental health
                    </span>
                    <span className="px-3 py-1.5 rounded-full text-sm bg-primary-gold/10 text-primary-navy font-semibold">
                      Complex needs
                    </span>
                  </div>

                  {/* Quick value bullets */}
                  <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-4 h-4 mt-0.5 text-secondary-teal"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      24/7 specialist support
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-4 h-4 mt-0.5 text-secondary-teal"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Positive Behaviour Support
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-4 h-4 mt-0.5 text-secondary-teal"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Community integration & step-down pathways
                    </li>
                  </ul>
                </div>

                {/* Right: actions — bold inline CTAs (no grouping) */}
                <div className="flex flex-wrap items-center justify-start lg:justify-end gap-4 lg:mt-4">
                  {/* Primary: Make a referral */}
                  <Link to="/referrals">
                    <button
                      className="group inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-base font-semibold
                 text-white bg-primary-navy hover:bg-primary-navy/90
                 shadow-[0_10px_25px_rgba(2,6,23,0.18)] hover:shadow-[0_14px_32px_rgba(2,6,23,0.25)]
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-navy/40
                 transition-all"
                      aria-label="Make a referral"
                    >
                      Make a referral
                      <svg
                        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                  </Link>

                  {/* Secondary: View services (high-contrast outline that inverts on hover) */}
                  <Link to="/services">
                    <button
                      className="group inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-base font-semibold
                 border-2 border-primary-navy text-primary-navy
                 hover:text-white hover:bg-primary-navy
                 shadow-[0_6px_16px_rgba(2,6,23,0.08)] hover:shadow-[0_10px_22px_rgba(2,6,23,0.18)]
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-navy/20
                 transition-all"
                      aria-label="View services"
                    >
                      <svg
                        className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h6v6H4zM14 6h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"
                        />
                      </svg>
                      View services
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Cards grid — wider gaps, more vertical rhythm */}
            <div className="space-y-10">
              {/* Mobile */}
              <div className="lg:hidden space-y-8">
                {DERIVED_SERVICES.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}

                {/* New Developments — spacious promo with compact carousel height */}
                <Link to={newDevsHref} className="block group">
                  <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-xl hover:border-primary-navy/20 transition-all">
                    <div className="space-y-6">
                      {newDevsImages.length > 0 && (
                        <NewDevelopmentsCarousel
                          images={newDevsImages}
                          altBase={newDevsAlt}
                          heightClass="h-44 md:h-52" // modest height, keeps copy close but not cramped
                          interval={5000}
                        />
                      )}

                      <div className="pt-2">
                        <div className="inline-flex items-center gap-2 text-xs font-semibold text-gray-600 mb-2">
                          <span className="w-2 h-2 rounded-full bg-secondary-teal" />
                          Coming soon
                        </div>
                        <h3 className="text-2xl font-bold text-primary-navy">
                          New Developments
                        </h3>
                        <p className="mt-2 text-gray-700">
                          Exciting new services coming soon.
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Desktop */}
              <div className="hidden lg:block">
                <div className="grid grid-cols-3 gap-10 mb-12 items-stretch">
                  {DERIVED_SERVICES.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                </div>

                <Link to={newDevsHref} className="block group">
                  <div className="bg-white rounded-2xl border border-gray-200 p-10 shadow-sm hover:shadow-xl hover:border-primary-navy/20 transition-all">
                    <div className="grid grid-cols-12 gap-10 items-center">
                      {/* Text */}
                      <div
                        className={
                          newDevsImages.length ? "col-span-5" : "col-span-12"
                        }
                      >
                        <div className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 mb-3">
                          <span className="w-2 h-2 rounded-full bg-secondary-teal" />
                          Coming soon
                        </div>
                        <h3 className="text-4xl font-bold text-primary-navy mb-3 leading-tight">
                          New Developments
                        </h3>
                        <p className="text-lg text-gray-700">
                          Expanding our reach to serve more communities across
                          Wales.
                        </p>
                      </div>

                      {/* Carousel */}
                      {newDevsImages.length > 0 && (
                        <div className="col-span-7">
                          <NewDevelopmentsCarousel
                            images={newDevsImages}
                            altBase={newDevsAlt}
                            heightClass="h-56 lg:h-64" // a bit taller on desktop for visual balance
                            interval={5000}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ---------- MAP / LOCATIONS ---------- */}
        {showMap && (
          <div>
            {/* Header — extra margin so map doesn’t feel glued to the content above */}
            <div className="mb-12">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                <div className="lg:max-w-2xl">
                  <div className="inline-block bg-secondary-teal/10 text-secondary-teal px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    Find us
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-primary-navy mb-4 leading-tight">
                    Service <br />
                    <span className="text-secondary-coral">Locations</span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Discover our care facilities across Wales and find the
                    support available in your local area.
                  </p>
                </div>

                <div className="flex gap-3 lg:mt-4">
                  <Link to="/referrals">
                    <button className="bg-primary-navy text-white px-5 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                      Make a referral
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Map — slightly more height so it breathes */}
            <div className="h-[480px] lg:h-[640px] rounded-2xl overflow-hidden shadow-2xl">
              <ServiceMap />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ServicesSection;
