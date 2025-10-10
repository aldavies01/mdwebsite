// components/contact/DepartmentContacts.jsx
function DepartmentContacts({ departments, emergencyData }) {
  const renderIcon = (iconName, color) => {
    const iconClass = `w-6 h-6 text-${color}`;

    const icons = {
      phone: (
        <svg
          className={iconClass}
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
      ),
      users: (
        <svg
          className={iconClass}
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
      ),
      briefcase: (
        <svg
          className={iconClass}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
          />
        </svg>
      ),
      message: (
        <svg
          className={iconClass}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
    };

    return icons[iconName] || icons.phone;
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-primary-navy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block bg-primary-gold/10 text-primary-gold px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            Quick Contact
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-navy mb-4 sm:mb-6 leading-tight">
            Contact The Right <br />
            <span className="text-primary-gold">Department</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch with the specific department that can help you best.
            Our team is here to assist with all your needs.
          </p>
        </div>

        {/* Department Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {departments.map((department) => (
            <div
              key={department.id}
              className={`bg-white rounded-xl shadow-lg border-l-4 border-${department.color} p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 group`}
            >
              <div
                className={`w-12 h-12 bg-${department.color}/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-${department.color}/20 transition-colors duration-300`}
              >
                {renderIcon(department.icon, department.color)}
              </div>

              <h3 className="text-lg font-bold text-primary-navy mb-2">
                {department.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {department.description}
              </p>

              <div className="space-y-3">
                <a
                  href={`tel:${department.phone.replace(/\s/g, "")}`}
                  className={`flex items-center text-${department.color} hover:text-${department.color}/80 transition-colors duration-300 group/phone`}
                >
                  <svg
                    className="w-4 h-4 mr-2 group-hover/phone:scale-110 transition-transform duration-300"
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
                  <span className="text-sm font-medium">
                    {department.phone}
                  </span>
                </a>

                <a
                  href={`mailto:${department.email}`}
                  className={`flex items-start text-${department.color} hover:text-${department.color}/80 transition-colors duration-300 group/email`}
                >
                  <svg
                    className="w-4 h-4 mr-2 mt-0.5 group-hover/email:scale-110 transition-transform duration-300 flex-shrink-0"
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
                  <span className="text-sm font-medium break-all">
                    {department.email}
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Contact Section */}
        {/* <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-bold text-red-800 mb-2">
                {emergencyData.title}
              </h3>
              <p className="text-red-700 mb-4 leading-relaxed">
                {emergencyData.description}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <a
                  href={`tel:${emergencyData.phone.replace(/\s/g, "")}`}
                  className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 text-center inline-flex items-center justify-center"
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
                  Emergency: {emergencyData.phone}
                </a>
                <p className="text-xs text-red-600 italic">
                  {emergencyData.note}
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default DepartmentContacts;
