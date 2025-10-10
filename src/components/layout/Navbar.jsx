import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../common/LanguageSwitcher";

function Navbar() {
  const { t } = useTranslation();

  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    };
    checkTouchDevice();
    window.addEventListener("resize", checkTouchDevice);
    return () => window.removeEventListener("resize", checkTouchDevice);
  }, []);

  // Add scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownClick = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleMobileDropdownClick = (name) => {
    setOpenMobileDropdown(openMobileDropdown === name ? null : name);
  };

  const handleMouseEnter = (name) => {
    if (!isTouchDevice) setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) setOpenDropdown(null);
  };

  // Modern styling classes
  const linkBase =
    "relative text-white/90 font-medium py-3 px-4 rounded-xl transition-all duration-300 ease-out " +
    "hover:text-white hover:bg-white/10 hover:shadow-lg hover:shadow-white/5 " +
    "hover:-translate-y-0.5 active:translate-y-0 active:scale-95 " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent " +
    "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-white/0 before:to-white/5 before:opacity-0 before:transition-opacity before:duration-300 " +
    "hover:before:opacity-100";

  const mobileLinkBase =
    "block py-3 px-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 " +
    "active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-lg";

  const dropdownPanel =
    "bg-white/95 backdrop-blur-xl shadow-2xl shadow-black/20 rounded-2xl py-2 w-64 border border-white/20 " +
    "transition-all duration-300 ease-out origin-top transform " +
    "motion-safe:data-[state=open]:opacity-100 motion-safe:data-[state=open]:translate-y-0 motion-safe:data-[state=open]:scale-100 " +
    "motion-safe:data-[state=closed]:opacity-0 motion-safe:data-[state=closed]:-translate-y-4 motion-safe:data-[state=closed]:scale-95";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-primary-navy/80 backdrop-blur-xl shadow-2xl shadow-black/10 border-b border-white/10"
          : "bg-primary-navy/95 backdrop-blur-sm shadow-lg border-b border-primary-navy/30"
      }`}
    >
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-navy/20 via-transparent to-primary-navy/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex justify-between items-center py-4">
          {/* Logo with enhanced styling */}
          <div className="flex items-center space-x-4 group">
            <div className="relative overflow-hidden rounded-2xl bg-white/10 p-2 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105">
              <img
                src="../../images/company/MD_Logo_Large.png"
                alt="M&D Care Logo"
                className="h-16 w-auto select-none transition-transform duration-300 group-hover:scale-110"
                draggable="false"
              />
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </div>
            <div className="text-2xl font-bold text-white tracking-tight select-none relative">
              M&D Care
              {/* Subtle glow effect */}
              <div className="absolute inset-0 text-2xl font-bold text-white/20 blur-sm -z-10">
                M&D Care
              </div>
            </div>
          </div>

          {/* Navigation Links + Language (desktop) */}
          <div className="hidden md:flex items-center space-x-2">
            <Link to="/" className={linkBase}>
              <span className="relative z-10">{t("nav.home")}</span>
              {/* Animated underline */}
              <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent scale-x-0 transition-transform duration-300 origin-center group-hover:scale-x-100" />
            </Link>

            {/* About Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => isTouchDevice && handleDropdownClick("about")}
                aria-expanded={openDropdown === "about"}
                className={`${linkBase} flex items-center gap-2 group`}
              >
                <span className="relative z-10">{t("nav.about")}</span>
                <ChevronDown
                  className={`h-4 w-4 transition-all duration-300 ${
                    openDropdown === "about"
                      ? "rotate-180 text-primary-gold"
                      : "group-hover:text-primary-gold"
                  }`}
                />
              </button>

              {/* Enhanced Panel with animation */}
              {openDropdown === "about" && (
                <div className="absolute top-full left-0 pt-4 z-50">
                  <div
                    className={dropdownPanel}
                    data-state={openDropdown === "about" ? "open" : "closed"}
                    onMouseEnter={() => handleMouseEnter("about")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <DropLink to="/about/" label={t("nav.about_us")} />
                    <DropLink to="/about/values" label={t("nav.values")} />
                    <DropLink to="/about/people" label={t("nav.people")} />
                    <DropLink to="/about/quality" label={t("nav.quality")} />
                    <DropLink
                      to="/about/learning-and-development"
                      label={t("nav.learning_dev")}
                    />
                    <DropLink
                      to="/about/commitments"
                      label={t("nav.commitments")}
                    />
                    <DropLink
                      to="/about/community"
                      label={t("nav.community")}
                    />
                    <DropLink to="/about/awards" label={t("nav.awards")} />
                    <DropLink to="/about/news" label={t("nav.news")} />
                  </div>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => isTouchDevice && handleDropdownClick("services")}
                aria-expanded={openDropdown === "services"}
                className={`${linkBase} flex items-center gap-2 group`}
              >
                <span className="relative z-10">{t("nav.services")}</span>
                <ChevronDown
                  className={`h-4 w-4 transition-all duration-300 ${
                    openDropdown === "services"
                      ? "rotate-180 text-primary-gold"
                      : "group-hover:text-primary-gold"
                  }`}
                />
              </button>

              {openDropdown === "services" && (
                <div className="absolute top-full left-0 pt-4 z-50">
                  <div
                    className={dropdownPanel}
                    data-state={openDropdown === "services" ? "open" : "closed"}
                  >
                    <DropLink to="/services/" label={t("nav.our_services")} />
                    <DropLink
                      to="/services/residential"
                      label={t("nav.residential")}
                    />
                    <DropLink
                      to="/services/specialist-care"
                      label={t("nav.specialist")}
                    />
                    <DropLink
                      to="/services/supported-living"
                      label={t("nav.supported_living")}
                    />
                    <DropLink to="/services/pbs" label={t("nav.pbs")} />
                    <DropLink
                      to="/services/new-developments"
                      label={t("nav.new_developments")}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Careers Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("careers")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => isTouchDevice && handleDropdownClick("careers")}
                aria-expanded={openDropdown === "careers"}
                className={`${linkBase} flex items-center gap-2 group`}
              >
                <span className="relative z-10">{t("nav.careers")}</span>
                <ChevronDown
                  className={`h-4 w-4 transition-all duration-300 ${
                    openDropdown === "careers"
                      ? "rotate-180 text-primary-gold"
                      : "group-hover:text-primary-gold"
                  }`}
                />
              </button>

              {openDropdown === "careers" && (
                <div className="absolute top-full left-0 pt-4 z-50">
                  <div
                    className={dropdownPanel}
                    data-state={openDropdown === "careers" ? "open" : "closed"}
                  >
                    <DropLink to="/careers/" label={t("nav.our_careers")} />
                    <DropLink
                      to="/careers/vacancies"
                      label={t("nav.vacancies")}
                    />
                    <DropLink
                      to="/careers/benefits"
                      label={t("nav.benefits")}
                    />
                  </div>
                </div>
              )}
            </div>

            <Link to="/referrals" className={linkBase}>
              <span className="relative z-10">{t("nav.referrals")}</span>
            </Link>
            <Link to="/contact" className={linkBase}>
              <span className="relative z-10">{t("nav.contact")}</span>
            </Link>

            {/* Enhanced Language toggle */}
            <div className="ml-4 relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 transition-all duration-300 hover:bg-white/20 hover:scale-105">
                <LanguageSwitcher />
              </div>
            </div>
          </div>

          {/* Mobile area: language + burger */}
          <div className="md:hidden flex items-center gap-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-1.5 transition-all duration-300 hover:bg-white/20 active:scale-95">
              <LanguageSwitcher compact className="scale-90" />
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
              className="relative h-10 w-10 inline-flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm text-white hover:text-primary-gold hover:bg-white/20 transition-all duration-300 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              {/* Enhanced Hamburger → X animation */}
              <span
                className={`absolute block h-0.5 w-5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-0"
                    : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute block h-0.5 w-5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "opacity-0 scale-0"
                    : "opacity-100 scale-100"
                }`}
              />
              <span
                className={`absolute block h-0.5 w-5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "-rotate-45 translate-y-0"
                    : "translate-y-1.5"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Enhanced Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-xl border-t border-white/20 z-50 rounded-b-2xl mb-2 motion-safe:animate-[slideDown_0.3s_ease-out]">
            <div className="px-4 py-4 space-y-2">
              <Link
                to="/"
                className={mobileLinkBase}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.home")}
              </Link>

              {/* Mobile dropdowns with enhanced styling */}
              <MobileDropdownSection
                title={t("nav.about")}
                isOpen={openMobileDropdown === "about"}
                onToggle={() => handleMobileDropdownClick("about")}
                links={[
                  { to: "/about/", label: t("nav.about_us") },
                  { to: "/about/values", label: t("nav.values") },
                  { to: "/about/people", label: t("nav.people") },
                  {
                    to: "/about/learning-and-development",
                    label: t("nav.learning_dev"),
                  },
                  { to: "/about/commitments", label: t("nav.commitments") },
                  { to: "/about/community", label: t("nav.community") },
                  { to: "/about/awards", label: t("nav.awards") },
                  { to: "/about/news", label: t("nav.news") },
                ]}
                onLinkClick={() => setIsMobileMenuOpen(false)}
                mobileLinkBase={mobileLinkBase}
              />

              <MobileDropdownSection
                title={t("nav.services")}
                isOpen={openMobileDropdown === "services"}
                onToggle={() => handleMobileDropdownClick("services")}
                links={[
                  { to: "/services/", label: t("nav.our_services") },
                  { to: "/services/residential", label: t("nav.residential") },
                  {
                    to: "/services/specialist-care",
                    label: t("nav.specialist"),
                  },
                  {
                    to: "/services/supported-living",
                    label: t("nav.supported_living"),
                  },
                  { to: "/services/pbs", label: t("nav.pbs") },
                  {
                    to: "/services/new-developments",
                    label: t("nav.new_developments"),
                  },
                ]}
                onLinkClick={() => setIsMobileMenuOpen(false)}
                mobileLinkBase={mobileLinkBase}
              />

              <MobileDropdownSection
                title={t("nav.careers")}
                isOpen={openMobileDropdown === "careers"}
                onToggle={() => handleMobileDropdownClick("careers")}
                links={[
                  { to: "/careers/", label: t("nav.our_careers") },
                  { to: "/careers/vacancies", label: t("nav.vacancies") },
                ]}
                onLinkClick={() => setIsMobileMenuOpen(false)}
                mobileLinkBase={mobileLinkBase}
              />

              <Link
                to="/referrals"
                className={mobileLinkBase}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.referrals")}
              </Link>
              <Link
                to="/contact"
                className={mobileLinkBase}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.contact")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

/* ---------- Enhanced Helper Components ---------- */

function DropLink({ to, label }) {
  return (
    <Link
      to={to}
      className="group flex items-center justify-between px-4 py-3 text-primary-navy rounded-xl mx-2 transition-all duration-300 hover:bg-gradient-to-r hover:from-secondary-light-blue/20 hover:to-primary-gold/10 hover:text-primary-gold hover:translate-x-2 hover:shadow-lg hover:shadow-primary-gold/10 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-navy/30"
    >
      <span className="font-medium">{label}</span>
      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-primary-gold transform translate-x-[-8px] group-hover:translate-x-0">
        →
      </span>
    </Link>
  );
}

function MobileDropdownSection({
  title,
  isOpen,
  onToggle,
  links,
  onLinkClick,
  mobileLinkBase,
}) {
  return (
    <div className="bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm">
      <button
        onClick={onToggle}
        className="w-full text-left py-3 px-4 text-white font-medium flex items-center justify-between hover:text-primary-gold hover:bg-white/10 transition-all duration-300 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <ChevronDown
          className={`h-5 w-5 transition-all duration-300 ${
            isOpen ? "rotate-180 text-primary-gold" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pl-4 pr-2 pb-2 space-y-1 bg-white/5">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`${mobileLinkBase} hover:bg-white/10 hover:translate-x-1`}
              onClick={onLinkClick}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function ChevronDown({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 10.17l3.71-2.94a.75.75 0 11.94 1.16l-4.24 3.36a.75.75 0 01-.94 0L5.21 8.39a.75.75 0 01.02-1.18z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default Navbar;
