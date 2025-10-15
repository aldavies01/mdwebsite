import { useMemo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import CIWWidget from "../CIW/CIWWidget";
import Icon from "../common/Icon";

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
function getFeatureIcon(featureLabel = "") {
  const f = featureLabel.toLowerCase();

  // Transport & Access
  if (f.includes("public transport") || f.includes("transport link"))
    return "map-pin";
  if (
    f.includes("shared car") ||
    f.includes("vehicle") ||
    f.includes("access to shared")
  )
    return "car";

  // Building Layout
  if (
    f.includes("ground floor") ||
    f.includes("upper level") ||
    f.includes("upper-level") ||
    f.includes("accommodation")
  )
    return "building";

  // Communal Spaces
  if (f.includes("communal")) return "users";
  if (f.includes("sensory")) return "smile";

  // Room Amenities
  if (
    f.includes("bathroom") ||
    f.includes("wetroom") ||
    f.includes("en-suite") ||
    f.includes("ensuite")
  )
    return "check-circle";
  if (f.includes("phone")) return "phone";
  if (f.includes("television") || f.includes("tv")) return "tv";
  if (f.includes("internet") || f.includes("wifi")) return "wifi";

  // Outdoor & Garden
  if (
    f.includes("garden") ||
    f.includes("outdoor") ||
    f.includes("sports facilities") ||
    f.includes("enclosed")
  )
    return "leaf";

  // Kitchen & Meals
  if (f.includes("kitchen") || f.includes("adl") || f.includes("meal"))
    return "house";

  // Health & Medical
  if (f.includes("gp") || f.includes("surgery") || f.includes("health"))
    return "stethoscope";

  // Special Policies
  if (f.includes("smoking")) return "bolt";
  if (f.includes("adaptable") || f.includes("specific needs")) return "sliders";

  // Location Features
  if (f.includes("coastal") || f.includes("sea view") || f.includes("seaside"))
    return "map";
  if (f.includes("country") || f.includes("peaceful") || f.includes("calming"))
    return "leaf";

  // Default - still check-circle but fewer will hit this now
  return "check-circle";
}

// Name-based icon inference with optional per-activity override
function getActivityIcon(activity) {
  // If activity provides an explicit icon key, use it
  if (activity?.icon) return activity.icon;

  const name = (activity?.name || "").toLowerCase();

  // Heuristics — tweak as you like
  if (
    name.includes("community") ||
    name.includes("outings") ||
    name.includes("access")
  )
    return "map-pin";
  if (
    name.includes("independent") ||
    name.includes("daily living") ||
    name.includes("life")
  )
    return "house";
  if (
    name.includes("creative") ||
    name.includes("art") ||
    name.includes("craft")
  )
    return "gift";
  if (
    name.includes("meal") ||
    name.includes("cooking") ||
    name.includes("kitchen")
  )
    return "users";
  if (
    name.includes("health") ||
    name.includes("wellbeing") ||
    name.includes("mindfulness")
  )
    return "smile";
  if (
    name.includes("social") ||
    name.includes("celebration") ||
    name.includes("event")
  )
    return "party-popper";
  if (
    name.includes("skills") ||
    name.includes("learning") ||
    name.includes("training")
  )
    return "graduation-cap";
  if (
    name.includes("garden") ||
    name.includes("outdoor") ||
    name.includes("nature")
  )
    return "leaf"; // not in Icon.jsx yet

  // Generic default (present in Icon.jsx)
  return "activity";
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
      { id: "overview", label: "Overview", icon: "home" },
      { id: "facilities", label: "Facilities", icon: "building" },
      // { id: "team", label: "Our Team", icon: "users" },
      { id: "activities", label: "Activities", icon: "calendar" },
    ];

    if (hasCIWWidget) {
      base.push({
        id: "ratings",
        label: `${regulatorRatingLabel} Ratings`,
        icon: "star",
      });
    } else {
      base.push({ id: "testimonials", label: "Testimonials", icon: "heart" });
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
      <section className="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-200/60">
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
                className={`flex items-center gap-2.5 px-6 py-4 font-medium whitespace-nowrap border-b-2 transition-all duration-300 ${
                  activeTab === tab.id
                    ? "border-secondary-coral text-secondary-coral"
                    : "border-transparent text-gray-600 hover:text-secondary-coral hover:border-gray-200"
                }`}
              >
                <Icon name={tab.icon} className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Panels */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50/30">
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

          {/* {activeTab === "team" && <TeamPanel staff={staff} />} */}

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
    <div className="space-y-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary-navy tracking-tight">
          Our Facilities
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-3">
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
            className="group relative bg-white rounded-3xl p-7 border border-gray-200/60 hover:border-gray-300 transition-all duration-500 hover:-translate-y-1"
          >
            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-secondary-coral/0 via-secondary-teal/0 to-secondary-purple/0 group-hover:from-secondary-coral/5 group-hover:via-secondary-teal/5 group-hover:to-secondary-purple/5 transition-all duration-500" />

            <div className="relative">
              {/* Icon container */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary-coral/10 to-secondary-teal/10 mb-5 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <Icon
                  name={getFeatureIcon(feature)}
                  className="w-6 h-6 text-secondary-coral"
                />
              </div>

              <h3 className="text-lg font-semibold text-primary-navy mb-3 leading-snug">
                {feature}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Professional support ensuring the highest quality of care and
                comfort.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
// function TeamPanel({ staff = [] }) {
//   if (!staff.length) {
//     return (
//       <div className="text-center text-gray-600">
//         Team information will be added soon.
//       </div>
//     );
//   }
//   return (
//     <div className="space-y-12">
//       <div className="text-center mb-12">
//         <h2 className="text-3xl font-bold text-primary-navy mb-4">
//           Meet Our Team
//         </h2>
//         <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//           Our dedicated team of qualified professionals is committed to
//           providing exceptional care with compassion and expertise.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//         {staff.map((member, i) => (
//           <div
//             key={`${member?.name ?? "member"}-${i}`}
//             className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//           >
//             <div className="h-48 bg-gradient-to-br from-secondary-coral to-secondary-purple" />
//             <div className="p-6">
//               <h3 className="text-xl font-bold text-primary-navy mb-2">
//                 {member?.name}
//               </h3>
//               {member?.role && (
//                 <p className="text-secondary-coral font-semibold mb-3">
//                   {member.role}
//                 </p>
//               )}
//               <div className="space-y-2 text-sm text-gray-600">
//                 {member?.qualifications && (
//                   <div className="flex items-center gap-2">
//                     <svg
//                       className="w-4 h-4 text-secondary-teal"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       aria-hidden
//                     >
//                       <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z" />
//                     </svg>
//                     <span>{member.qualifications}</span>
//                   </div>
//                 )}
//                 {member?.experience && (
//                   <div className="flex items-center gap-2">
//                     <svg
//                       className="w-4 h-4 text-secondary-teal"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       aria-hidden
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     <span>{member.experience} experience</span>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

function ActivitiesPanel({ activities = [] }) {
  if (!activities.length) {
    return (
      <div className="text-center text-gray-600">
        Activities will be added soon.
      </div>
    );
  }

  return (
    <div className="space-y-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary-navy tracking-tight">
          Daily Activities & Programs
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-3">
          Practical, social, and creative options that support independence and
          wellbeing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activities.map((activity, i) => (
          <div
            key={`${activity?.name ?? "activity"}-${i}`}
            className="group relative bg-white rounded-3xl p-7 border border-gray-200/60 hover:border-gray-300 transition-all duration-500 hover:-translate-y-1"
          >
            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-secondary-coral/0 via-secondary-teal/0 to-secondary-purple/0 group-hover:from-secondary-coral/5 group-hover:via-secondary-teal/5 group-hover:to-secondary-purple/5 transition-all duration-500" />

            <div className="relative">
              {/* Icon container with softer styling */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary-coral/10 to-secondary-teal/10 mb-5 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <Icon
                  name={getActivityIcon(activity)}
                  className="w-6 h-6 text-secondary-coral"
                />
              </div>

              <h3 className="font-semibold text-primary-navy text-lg mb-3 leading-snug">
                {activity?.name}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {activity?.description}
              </p>

              {/* Minimal badge instead of bottom accent */}
              <div className="mt-6 pt-5 border-t border-gray-100">
                <div className="inline-flex items-center gap-2 text-xs text-gray-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary-coral/60" />
                  <span>Inclusive & person-centred</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="relative rounded-3xl p-10 text-center border border-gray-200/60 bg-gradient-to-br from-gray-50/50 to-white overflow-hidden">
          {/* Subtle background pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary-coral/10 to-secondary-teal/10 mx-auto mb-5 flex items-center justify-center">
              <Icon name="lightbulb" className="w-6 h-6 text-secondary-coral" />
            </div>
            <h3 className="text-2xl font-bold text-primary-navy mb-3">
              Personalised Activity Plans
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We shape activities around interests and goals, adapting support
              so everyone can take part confidently.
            </p>
          </div>
        </div>
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
    <div className="space-y-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary-navy tracking-tight">
          What People Say
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-3">
          Honest feedback from residents, families, staff, and professionals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => {
          const initial = t?.author?.[0] ?? t?.relationship?.[0] ?? "★";
          return (
            <div
              key={`${t?.text?.slice(0, 24) ?? "t"}-${i}`}
              className="group relative bg-white rounded-3xl p-8 border border-gray-200/60 hover:border-gray-300 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-secondary-coral/0 via-secondary-teal/0 to-secondary-purple/0 group-hover:from-secondary-coral/5 group-hover:via-secondary-teal/5 group-hover:to-secondary-purple/5 transition-all duration-500" />

              <div className="relative">
                {/* Minimalist quote mark */}
                <div className="mb-6">
                  <svg
                    className="w-8 h-8 text-secondary-coral/20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <p className="text-gray-700 text-base leading-relaxed mb-8">
                  {t?.text}
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-secondary-coral/10 to-secondary-teal/10 text-secondary-coral flex items-center justify-center font-semibold text-sm">
                    {initial}
                  </div>
                  <div>
                    {t?.author && (
                      <p className="text-sm font-semibold text-primary-navy">
                        {t.author}
                      </p>
                    )}
                    <p className="text-xs text-gray-500 mt-0.5">
                      {t?.relationship}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="relative rounded-3xl p-10 text-center border border-gray-200/60 bg-gradient-to-br from-gray-50/50 to-white overflow-hidden">
          {/* Subtle background pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative">
            <h3 className="text-2xl font-bold text-primary-navy mb-3">
              Share Your Experience
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Your feedback helps us keep improving {name}.
            </p>
            <a
              href="/feedback"
              className="inline-flex items-center gap-2 bg-primary-navy text-white px-7 py-3.5 rounded-full font-medium hover:bg-primary-navy/90 transition-all duration-300 hover:gap-3 shadow-sm hover:shadow-md"
            >
              <span>Leave a Review</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
