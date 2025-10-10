// src/components/services/ServiceCard.jsx
import { Link } from "react-router-dom";
import Icon from "../common/Icon";

const SEGMENTS = {
  "Residential Care": "residential",
  "Specialist Care": "specialist-care",
  "Supported Living": "supported-living",
};

const slugifyFallback = (title = "") =>
  encodeURIComponent(
    title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/gi, "")
      .replace(/\s+/g, "-")
  );

const toSegment = (title) => SEGMENTS[title] ?? slugifyFallback(title);

function ServiceCard({ service }) {
  const segment = toSegment(service?.title);

  return (
    <div
      className={[
        "relative bg-white border border-gray-200 rounded-2xl overflow-hidden",
        "flex flex-col h-full shadow-sm hover:shadow-xl transition-all duration-300",
      ].join(" ")}
    >
      {/* Accent bar (uses service.bgColor if provided) */}
      <div
        className={`${service?.bgColor ?? "bg-secondary-teal"} h-1.5 w-full`}
      />

      {/* Subtle accent glow */}
      <div
        className={[
          "pointer-events-none absolute -bottom-16 -right-16 w-44 h-44 rounded-full blur-2xl opacity-10",
          service?.bgColor ?? "bg-secondary-teal",
        ].join(" ")}
      />

      {/* Card content */}
      <div className="p-6 md:p-8 flex flex-col h-full relative z-10">
        {/* Header */}
        <div className="mb-5">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gray-50 ring-1 ring-gray-200 flex items-center justify-center shrink-0">
              {service?.icon ? (
                <Icon
                  name={service.icon}
                  className="w-6 h-6 text-primary-navy"
                />
              ) : (
                <svg
                  className="w-6 h-6 text-primary-navy"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7l9-4 9 4-9 4-9-4zm0 6l9 4 9-4"
                  />
                </svg>
              )}
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy">
                {service?.title}
              </h3>
              {service?.subtitle && (
                <p className="mt-1 text-gray-600">{service.subtitle}</p>
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100 mb-5" />

        {/* Features */}
        {Array.isArray(service?.features) && service.features.length > 0 && (
          <ul className="space-y-3">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary-teal shrink-0" />
                <span className="text-sm text-gray-800 leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* Stats */}
        {Array.isArray(service?.stats) && service.stats.length > 0 && (
          <div className="mt-6 pt-5 border-t border-gray-100">
            <div className="grid grid-cols-3 gap-6">
              {service.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-xl font-bold text-primary-navy">
                    {stat.number}
                  </div>
                  <div className="text-[11px] text-gray-500 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-auto pt-5">
          <Link
            to={service?.href ?? `/services/${segment}`}
            aria-label={`Learn more about ${service?.title}`}
            className={[
              "inline-flex items-center justify-center rounded-xl px-5 py-3",
              "bg-primary-navy text-white font-semibold",
              "hover:bg-primary-navy/90 focus:outline-none",
              "focus-visible:ring-2 focus-visible:ring-primary-navy/30",
              "transition-colors",
            ].join(" ")}
          >
            Learn more
            <svg
              className="w-4 h-4 ml-2"
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
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
