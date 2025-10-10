// components/contact/ServiceLocations.jsx
import { residentialDetails } from "../../data/residential.details.js";
import { specialistDetails } from "../../data/specialist.details.js";

function ServiceLocations({ serviceData }) {
  // Convert your existing data to the format we need for contact display
  const getResidentialLocations = () => {
    return Object.values(residentialDetails).map((home) => ({
      name: home.name,
      address: home.address,
      phone: home.phone,
      email: home.email,
      manager:
        home.staff?.find((s) => s.role === "Registered Manager")?.name ||
        "Contact for details",
      capacity: home.capacity,
      specialties: home.specialties,
      rating: home.rating,
      type: home.type,
    }));
  };

  const getSpecialistLocations = () => {
    return Object.values(specialistDetails).map((facility) => ({
      name: facility.name,
      address: facility.address,
      phone: facility.phone || "01792 885126", // fallback to main number
      email: facility.email || "info@manddcare.co.uk", // fallback to main email
      manager: "Contact for details",
      capacity: facility.capacity,
      specialties: facility.specialties,
      rating: facility.rating,
      type: facility.type,
    }));
  };

  const renderLocationCard = (location, color) => (
    <div
      key={location.name}
      className={`bg-white rounded-xl shadow-lg border-l-4 border-${color} p-6 hover:shadow-xl transition-all duration-300`}
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
        <div>
          <h3 className="text-xl font-bold text-primary-navy mb-2">
            {location.name}
          </h3>
          <div className="flex items-center text-gray-600 mb-2">
            <svg
              className="w-4 h-4 mr-2 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
            </svg>
            <span className="text-sm">{location.address}</span>
          </div>
        </div>

        {location.rating && (
          <div
            className={`bg-${color}/10 text-${color} px-3 py-1 rounded-full text-sm font-semibold`}
          >
            CIW: {location.rating}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-1">Contact</h4>
          <div className="space-y-1">
            <a
              href={`tel:${location.phone.replace(/\s/g, "")}`}
              className={`text-${color} hover:underline text-sm flex items-center`}
            >
              <svg
                className="w-3 h-3 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {location.phone}
            </a>
            <a
              href={`mailto:${location.email}`}
              className={`text-${color} hover:underline text-sm flex items-center`}
            >
              <svg
                className="w-3 h-3 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {location.email}
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-1">Details</h4>
          <div className="text-sm text-gray-600 space-y-1">
            <div>Capacity: {location.capacity}</div>
            {location.manager && <div>Manager: {location.manager}</div>}
          </div>
        </div>
      </div>

      {location.specialties && location.specialties.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-2">
            Specialties
          </h4>
          <div className="flex flex-wrap gap-2">
            {location.specialties.map((specialty, index) => (
              <span
                key={index}
                className={`bg-${color}/10 text-${color} px-2 py-1 rounded text-xs`}
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block bg-secondary-teal/10 text-secondary-teal px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            Our Services
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-navy mb-4 sm:mb-6 leading-tight">
            Contact Our <br />
            <span className="text-secondary-teal">Care Services</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch with any of our care facilities directly, or contact
            our head office for general enquiries.
          </p>
        </div>

        {/* Residential Care Homes */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-primary-navy mb-6 flex items-center">
            <svg
              className="w-6 h-6 mr-3 text-secondary-coral"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Residential Care Homes
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {getResidentialLocations().map((location) =>
              renderLocationCard(location, "secondary-coral")
            )}
          </div>
        </div>

        {/* Specialist Services */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-primary-navy mb-6 flex items-center">
            <svg
              className="w-6 h-6 mr-3 text-secondary-purple"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            Specialist Services
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {getSpecialistLocations().map((location) =>
              renderLocationCard(location, "secondary-purple")
            )}
          </div>
        </div>

        {/* Community Services */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-primary-navy mb-6 flex items-center">
            <svg
              className="w-6 h-6 mr-3 text-secondary-teal"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Community Services
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {serviceData.community.locations.map((location) =>
              renderLocationCard(location, "secondary-teal")
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceLocations;
