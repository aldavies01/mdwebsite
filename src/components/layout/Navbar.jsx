import { useState } from "react";

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  const handleDropdownClick = (dropdownName) => {
    if (openDropdown === dropdownName) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdownName);
    }
  };

  const handleMobileDropdownClick = (dropdownName) => {
    if (openMobileDropdown === dropdownName) {
      setOpenMobileDropdown(null);
    } else {
      setOpenMobileDropdown(dropdownName);
    }
  };

  return (
    <nav className="bg-white shadow-sm border-b border-secondary-light-blue/30 backdrop-blur-sm relative z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <div className="text-2xl font-bold text-primary-navy tracking-tight">
            M&D Care
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-10">
            <a
              href="/"
              className="text-primary-navy hover:text-primary-gold transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-secondary-light-blue/20 hover:scale-105"
            >
              Home
            </a>

            {/* About Us Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownClick("about")}
                className="text-primary-navy hover:text-primary-gold transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-secondary-light-blue/20 hover:scale-105"
              >
                About Us
              </button>

              {/* Dropdown Menu */}
              {openDropdown === "about" && (
                <div className="absolute top-full left-0 mt-3 bg-white/95 backdrop-blur-md shadow-2xl rounded-xl py-3 w-56 border border-secondary-light-blue/40 transform transition-all duration-200 ease-out z-50">
                  <a
                    href="/about/commitments"
                    className="block px-5 py-3 text-primary-navy hover:bg-secondary-light-blue/30 hover:text-primary-gold transition-all duration-200 rounded-lg mx-2 hover:translate-x-1"
                  >
                    Commitments
                  </a>
                  <a
                    href="/about/people"
                    className="block px-5 py-3 text-primary-navy hover:bg-secondary-light-blue/30 hover:text-primary-gold transition-all duration-200 rounded-lg mx-2 hover:translate-x-1"
                  >
                    Our People
                  </a>
                  <a
                    href="/about/community"
                    className="block px-5 py-3 text-primary-navy hover:bg-secondary-light-blue/30 hover:text-primary-gold transition-all duration-200 rounded-lg mx-2 hover:translate-x-1"
                  >
                    In the Community
                  </a>
                  <a
                    href="/about/values"
                    className="block px-5 py-3 text-primary-navy hover:bg-secondary-light-blue/30 hover:text-primary-gold transition-all duration-200 rounded-lg mx-2 hover:translate-x-1"
                  >
                    Our Values
                  </a>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownClick("services")}
                className="text-primary-navy hover:text-primary-gold transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-secondary-light-blue/20 hover:scale-105"
              >
                Services
              </button>
              {openDropdown === "services" && (
                <div className="absolute top-full left-0 mt-3 bg-white/95 backdrop-blur-md shadow-2xl rounded-xl py-3 w-56 border border-secondary-light-blue/40 transform transition-all duration-200 ease-out z-50">
                  <a
                    href="/services/residential"
                    className="block px-5 py-3 text-primary-navy hover:bg-secondary-light-blue/30 hover:text-primary-gold transition-all duration-200 rounded-lg mx-2 hover:translate-x-1"
                  >
                    Residential
                  </a>
                  <a
                    href="/services/specialist"
                    className="block px-5 py-3 text-primary-navy hover:bg-secondary-light-blue/30 hover:text-primary-gold transition-all duration-200 rounded-lg mx-2 hover:translate-x-1"
                  >
                    Specialist Care
                  </a>
                  <a
                    href="/services/pbs"
                    className="block px-5 py-3 text-primary-navy hover:bg-secondary-light-blue/30 hover:text-primary-gold transition-all duration-200 rounded-lg mx-2 hover:translate-x-1"
                  >
                    Positive Behaviour Support
                  </a>
                </div>
              )}
            </div>

            {/* Careers Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownClick("careers")}
                className="text-primary-navy hover:text-primary-gold transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-secondary-light-blue/20 hover:scale-105"
              >
                Careers
              </button>
              {openDropdown === "careers" && (
                <div className="absolute top-full left-0 mt-3 bg-white/95 backdrop-blur-md shadow-2xl rounded-xl py-3 w-56 border border-secondary-light-blue/40 transform transition-all duration-200 ease-out z-50">
                  <a
                    href="/careers/vacancies"
                    className="block px-5 py-3 text-primary-navy hover:bg-secondary-light-blue/30 hover:text-primary-gold transition-all duration-200 rounded-lg mx-2 hover:translate-x-1"
                  >
                    Vacancies
                  </a>
                </div>
              )}
            </div>

            <a
              href="/referrals"
              className="text-primary-navy hover:text-primary-gold transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-secondary-light-blue/20 hover:scale-105"
            >
              Referrals
            </a>
            <a
              href="/contact"
              className="text-primary-navy hover:text-primary-gold transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-secondary-light-blue/20 hover:scale-105"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary-navy hover:text-primary-gold focus:outline-none transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-secondary-light-blue z-50">
            <div className="px-4 py-2 space-y-1">
              <a
                href="/"
                className="block py-2 text-primary-navy hover:text-primary-gold transition-colors duration-200 font-medium"
              >
                Home
              </a>

              {/* About Us Mobile Dropdown */}
              <div>
                <button
                  onClick={() => handleMobileDropdownClick("about")}
                  className="block w-full text-left py-2 text-primary-navy hover:text-primary-gold transition-colors duration-200 font-medium"
                >
                  About Us
                </button>
                {openMobileDropdown === "about" && (
                  <div className="pl-4 space-y-1 bg-secondary-light-blue/20 rounded-md py-2">
                    <a
                      href="/about/commitments"
                      className="block py-2 text-primary-navy hover:text-primary-gold transition-colors duration-200"
                    >
                      Commitments
                    </a>
                    <a
                      href="/about/people"
                      className="block py-2 text-primary-navy hover:text-primary-gold transition-colors duration-200"
                    >
                      Our People
                    </a>
                    <a
                      href="/about/community"
                      className="block py-2 text-primary-navy hover:text-primary-gold transition-colors duration-200"
                    >
                      In the Community
                    </a>
                    <a
                      href="/about/values"
                      className="block py-2 text-primary-navy hover:text-primary-gold transition-colors duration-200"
                    >
                      Our Values
                    </a>
                  </div>
                )}
              </div>

              {/* Services Mobile Dropdown */}
              <div>
                <button
                  onClick={() => handleMobileDropdownClick("services")}
                  className="block w-full text-left py-2 text-primary-navy hover:text-primary-gold transition-colors duration-200 font-medium"
                >
                  Services
                </button>
                {openMobileDropdown === "services" && (
                  <div className="pl-4 space-y-1 bg-secondary-light-blue/20 rounded-md py-2">
                    <a
                      href="/services/residential"
                      className="block py-2 text-primary-navy hover:text-primary-gold transition-colors duration-200"
                    >
                      Residential
                    </a>
                    <a
                      href="/services/specialist"
                      className="block py-2 text-primary-navy hover:text-primary-gold transition-colors duration-200"
                    >
                      Specialist Care
                    </a>
                    <a
                      href="/services/pbs"
                      className="block py-2 text-primary-navy hover:text-primary-gold transition-colors duration-200"
                    >
                      Positive Behaviour Support
                    </a>
                  </div>
                )}
              </div>

              <a
                href="/careers"
                className="block py-2 text-primary-navy hover:text-primary-gold transition-colors duration-200 font-medium"
              >
                Careers
              </a>
              <a
                href="/referrals"
                className="block py-2 text-primary-navy hover:text-primary-gold transition-colors duration-200 font-medium"
              >
                Referrals
              </a>
              <a
                href="/contact"
                className="block py-2 text-primary-navy hover:text-primary-gold transition-colors duration-200 font-medium"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
