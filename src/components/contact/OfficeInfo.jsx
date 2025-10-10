// components/contact/OfficeInfo.jsx
function OfficeInfo({ officeData }) {
  // Google Maps embed URL - you'll need to replace this with your actual Google Maps embed code
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2441.123!2d${officeData.coordinates.lng}!3d${officeData.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDQxJzA2LjQiTiA0wrAwMTAxLjkiVw!5e0!3m2!1sen!2suk!4v1234567890123`;

  return (
    <section id="contact-info" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block bg-secondary-coral/10 text-secondary-coral px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            Visit Our Office
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-navy mb-4 sm:mb-6 leading-tight">
            Head Office <br />
            <span className="text-secondary-coral">Location</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our head office is located in Llanelli, Carmarthenshire. We're here
            to help with all your enquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Office Details */}
          <div className="bg-gradient-to-br from-gray-50 to-secondary-coral/5 rounded-xl sm:rounded-2xl p-6 sm:p-8">
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
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              {officeData.name}
            </h3>

            {/* Address */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-secondary-coral"
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
                Address
              </h4>
              <div className="text-gray-600 leading-relaxed">
                <div>{officeData.address.line1}</div>
                <div>{officeData.address.line2}</div>
                <div>{officeData.address.line3}</div>
                <div className="font-semibold">
                  {officeData.address.postcode}
                </div>
                <div>{officeData.address.country}</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-secondary-coral"
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
                  Phone
                </h4>
                <a
                  href={`tel:${officeData.phone.replace(/\s/g, "")}`}
                  className="text-secondary-coral hover:underline font-semibold"
                >
                  {officeData.phone}
                </a>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-secondary-coral"
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
                  Email
                </h4>
                <a
                  href={`mailto:${officeData.email}`}
                  className="text-secondary-coral hover:underline break-all"
                >
                  {officeData.email}
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-secondary-coral"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Opening Hours
              </h4>
              <div className="text-gray-600 space-y-1">
                <div>{officeData.hours.weekdays}</div>
                <div>{officeData.hours.weekend}</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <a
                href={`tel:${officeData.phone.replace(/\s/g, "")}`}
                className="bg-secondary-coral text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary-coral/90 hover:scale-105 transition-all duration-300 text-center inline-flex items-center justify-center"
              >
                <svg
                  className="w-4 h-4 mr-2"
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
                Call Office
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${officeData.coordinates.lat},${officeData.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-secondary-coral text-secondary-coral px-6 py-3 rounded-lg font-semibold hover:bg-secondary-coral hover:text-white transition-all duration-300 text-center inline-flex items-center justify-center"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 9m0 8V9m0 0V7"
                  />
                </svg>
                Get Directions
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="bg-gray-100 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg h-full">
            <div className="h-full min-h-[400px] lg:min-h-[500px]">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="M&D Care Head Office Location"
              ></iframe>
            </div>

            {/* Map fallback/placeholder */}
            <div className="hidden">
              <div className="flex items-center justify-center h-96 bg-gray-200">
                <div className="text-center text-gray-500">
                  <svg
                    className="w-12 h-12 mx-auto mb-4"
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
                  <p>Map will load here</p>
                  <p className="text-sm">
                    Enable JavaScript to view the interactive map
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OfficeInfo;
