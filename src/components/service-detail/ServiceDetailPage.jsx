import { useMemo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import CIWWidget from "../CIW/CIWWidget";

function ratingBadgeClasses(rating) {
  switch (rating) {
    case "Outstanding":
      return "bg-green-600 text-white";
    case "Good":
      return "bg-blue-600 text-white";
    case "Requires Improvement":
      return "bg-yellow-600 text-white";
    default:
      return "bg-gray-600 text-white";
  }
}

export default function ServiceDetailPage({ slug, detailsMap }) {
  const [activeTab, setActiveTab] = useState("overview");

  const data = useMemo(() => detailsMap?.[slug], [slug, detailsMap]);

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50 grid place-items-center p-8">
        <div className="max-w-xl text-center bg-white border border-gray-200 rounded-2xl p-8">
          <h1 className="text-2xl font-bold text-primary-navy mb-2">
            Service not found
          </h1>
          <p className="text-gray-600">
            We couldn’t find details for “{slug}”. Please go back to{" "}
            <a
              href="/services"
              className="text-secondary-coral font-semibold underline"
            >
              Services
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  const {
    name = "Unnamed Service",
    type = "",
    address = "",
    phone = "",
    email = "",
    // use “CIW” as label by default but you can override in your data
    regulatorRatingLabel = "CIW",
    rating = "",
    capacity = "",
    established = "",
    description = "",
    longDescription = "",
    specialties = [],
    features = [],
    images = [],
    staff = [],
    activities = [],
    testimonials = [],
    /**
     * CIW widget config (per service):
     * - Provide either ciwWidgetId (e.g. "SIN-00013708-MBHR") or ciwWidgetSrc
     * - If both present, ciwWidgetSrc takes precedence
     */
    ciwWidgetId,
    ciwWidgetSrc,
  } = data;

  const resolvedWidgetSrc =
    ciwWidgetSrc ||
    (ciwWidgetId
      ? `https://digital.careinspectorate.wales/widget/${ciwWidgetId}`
      : null);
  const hasCIWWidget = Boolean(resolvedWidgetSrc);

  // Build tabs dynamically. If CIW widget exists, we replace Testimonials with Ratings.
  const TABS = useMemo(() => {
    const base = [
      { id: "overview", label: "Overview", icon: "🏠" },
      { id: "facilities", label: "Facilities", icon: "🏗️" },
      { id: "team", label: "Our Team", icon: "👥" },
      { id: "activities", label: "Activities", icon: "🎨" },
    ];

    if (hasCIWWidget) {
      base.push({
        id: "ratings",
        label: `${regulatorRatingLabel} Ratings`,
        icon: "✅",
      });
    } else {
      base.push({ id: "testimonials", label: "Testimonials", icon: "💬" });
    }

    return base;
  }, [hasCIWWidget, regulatorRatingLabel]);

  // If the current active tab becomes unavailable (e.g., switching service), snap back to first tab
  useEffect(() => {
    if (!TABS.find((t) => t.id === activeTab))
      setActiveTab(TABS[0]?.id || "overview");
  }, [TABS, activeTab]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative bg-primary-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                {type && (
                  <div className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {type}
                  </div>
                )}
                {rating && (
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${ratingBadgeClasses(rating)}`}
                  >
                    {regulatorRatingLabel}: {rating}
                  </div>
                )}
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                {name}
              </h1>

              {description && (
                <p className="text-xl text-white/90 mb-6 leading-relaxed">
                  {description}
                </p>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                {address && (
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-primary-gold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{address}</span>
                  </div>
                )}
                {capacity && (
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-primary-gold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                    <span>Capacity: {capacity}</span>
                  </div>
                )}
                {established && (
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-primary-gold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Est. {established}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4">
                Contact Information
              </h3>
              <div className="space-y-3">
                {phone && (
                  <a
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-3"
                  >
                    <svg
                      className="w-5 h-5 text-primary-gold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>{phone}</span>
                  </a>
                )}
                {email && (
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-3"
                  >
                    <svg
                      className="w-5 h-5 text-primary-gold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span>{email}</span>
                  </a>
                )}
              </div>
              <div className="mt-6 space-y-3">
                <a
                  href="/contact"
                  className="block w-full bg-primary-gold text-primary-navy text-center px-4 py-3 rounded-xl font-semibold hover:bg-primary-gold/90 transition-all duration-300"
                >
                  Contact
                </a>
                <a
                  href="/referrals"
                  className="block w-full bg-white/10 text-white border border-white/30 text-center px-4 py-3 rounded-xl font-semibold hover:bg-white hover:text-primary-navy transition-all duration-300"
                >
                  Make a Referral
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Tabs */}
      <section className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="flex overflow-x-auto"
            role="tablist"
            aria-label={`${name} sections`}
          >
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`flex items-center gap-2 px-6 py-4 font-semibold whitespace-nowrap border-b-2 transition-all duration-300 ${
                  activeTab === tab.id
                    ? "border-secondary-coral text-secondary-coral"
                    : "border-transparent text-gray-600 hover:text-secondary-coral"
                }`}
              >
                <span aria-hidden>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Panels */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          {activeTab === "overview" && (
            <OverviewPanel
              name={name}
              longDescription={longDescription}
              specialties={specialties}
              features={features}
              image={images?.[0]}
            />
          )}

          {activeTab === "facilities" && (
            <FacilitiesPanel features={features} />
          )}

          {activeTab === "team" && <TeamPanel staff={staff} />}

          {activeTab === "activities" && (
            <ActivitiesPanel activities={activities} />
          )}

          {activeTab === "testimonials" && (
            <TestimonialsPanel name={name} testimonials={testimonials} />
          )}

          {activeTab === "ratings" && hasCIWWidget && (
            <CIWWidget
              src={resolvedWidgetSrc}
              id={ciwWidgetId}
              title={`${regulatorRatingLabel} Ratings`}
            />
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-navy text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Learn More About {name}?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            We'd love to show you around and discuss how we can provide the
            perfect care environment for you or your loved one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary-gold text-primary-navy px-8 py-4 rounded-xl font-semibold hover:bg-primary-gold/90 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Schedule a Visit
            </a>
            {phone && (
              <a
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-navy transition-all duration-300"
              >
                Call {phone}
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

ServiceDetailPage.propTypes = {
  slug: PropTypes.string.isRequired,
  detailsMap: PropTypes.object.isRequired, // { [slug]: detailObject }
};

/* -------------------- Inline Panels -------------------- */

function OverviewPanel({
  name,
  longDescription,
  specialties = [],
  features = [],
  image,
}) {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-primary-navy mb-6">
            About {name}
          </h2>
          {longDescription && (
            <p className="text-gray-600 mb-6 leading-relaxed">
              {longDescription}
            </p>
          )}

          {specialties.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary-navy mb-4">
                Our Specialties
              </h3>
              <div className="flex flex-wrap gap-2">
                {specialties.map((specialty, i) => (
                  <span
                    key={`${specialty}-${i}`}
                    className="bg-secondary-coral/10 text-secondary-coral px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {image ? (
              <img
                src={image}
                alt={name}
                className="w-full h-64 object-cover"
              />
            ) : (
              <div className="w-full h-64 bg-gray-100 grid place-items-center">
                <span className="text-gray-400 text-4xl">🏠</span>
              </div>
            )}
            {features.length > 0 && (
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary-navy mb-4">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {features.slice(0, 4).map((feature, i) => (
                    <div
                      key={`${feature}-${i}`}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-secondary-coral rounded-full" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FacilitiesPanel({ features = [] }) {
  return (
    <div className="space-y-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary-navy mb-4">
          Our Facilities
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore our comfortable, well-equipped facilities designed to provide
          a homely environment for all residents.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(features.length
          ? features
          : ["24/7 support", "Homely rooms", "Community activities"]
        ).map((feature, i) => (
          <div
            key={`${feature}-${i}`}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-12 h-12 bg-secondary-coral/10 rounded-xl flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-secondary-coral"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-primary-navy mb-2">
              {feature}
            </h3>
            <p className="text-gray-600 text-sm">
              Professional support ensuring the highest quality of care and
              comfort.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeamPanel({ staff = [] }) {
  if (!staff.length) {
    return (
      <div className="text-center text-gray-600">
        Team information will be added soon.
      </div>
    );
  }
  return (
    <div className="space-y-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary-navy mb-4">
          Meet Our Team
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our dedicated team of qualified professionals is committed to
          providing exceptional care with compassion and expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {staff.map((member, i) => (
          <div
            key={`${member?.name ?? "member"}-${i}`}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-48 bg-gradient-to-br from-secondary-coral to-secondary-purple" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary-navy mb-2">
                {member?.name}
              </h3>
              {member?.role && (
                <p className="text-secondary-coral font-semibold mb-3">
                  {member.role}
                </p>
              )}
              <div className="space-y-2 text-sm text-gray-600">
                {member?.qualifications && (
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-secondary-teal"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden
                    >
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z" />
                    </svg>
                    <span>{member.qualifications}</span>
                  </div>
                )}
                {member?.experience && (
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-secondary-teal"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{member.experience} experience</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ActivitiesPanel({ activities = [] }) {
  if (!activities.length) {
    return (
      <div className="text-center text-gray-600">
        Activities will be added soon.
      </div>
    );
  }
  return (
    <div className="space-y-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary-navy mb-4">
          Daily Activities & Programs
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We offer a rich variety of activities designed to promote wellbeing,
          social connection, and personal fulfillment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity, i) => (
          <div
            key={`${activity?.name ?? "activity"}-${i}`}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-secondary-coral to-secondary-purple rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-primary-navy mb-3 text-center">
              {activity?.name}
            </h3>
            <p className="text-sm text-gray-600 text-center leading-relaxed">
              {activity?.description}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-secondary-coral/5 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-primary-navy mb-4">
          Personalised Activity Plans
        </h3>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Every resident has a personalised activity plan developed based on
          their interests, abilities, and preferences. Our activities
          coordinator works closely with residents and families to ensure
          meaningful engagement every day.
        </p>
      </div>
    </div>
  );
}

function TestimonialsPanel({ name, testimonials = [] }) {
  if (!testimonials.length) {
    return (
      <div className="text-center text-gray-600">
        Testimonials will be added soon.
      </div>
    );
  }
  return (
    <div className="space-y-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary-navy mb-4">
          What Families Say
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Don't just take our word for it — hear from the families and residents
          who call {name} home.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={`${t?.author ?? "t"}-${i}`}
            className="bg-white rounded-2xl shadow-lg p-8 relative"
          >
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-secondary-coral rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L4.414 10H17a1 1 0 100-2H4.414l1.879-1.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-gray-600 italic mb-6 text-lg leading-relaxed">
              "{t?.text}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary-coral to-secondary-purple rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {t?.author?.[0] ?? "?"}
                </span>
              </div>
              <div>
                <p className="font-semibold text-primary-navy">{t?.author}</p>
                <p className="text-sm text-gray-500">{t?.relationship}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-primary-navy text-white rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Share Your Experience</h3>
        <p className="text-white/90 mb-6">
          We'd love to hear about your experience with {name}. Your feedback
          helps us continue to improve our services.
        </p>
        <a
          href="/feedback"
          className="inline-block bg-primary-gold text-primary-navy px-6 py-3 rounded-xl font-semibold hover:bg-primary-gold/90 transition-all duration-300"
        >
          Leave a Review
        </a>
      </div>
    </div>
  );
}
