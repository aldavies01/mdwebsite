function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    services: [
      { name: "Residential Care", link: "/services/residential" },
      { name: "Specialist Care", link: "/services/specialist" },
      { name: "Supported Living", link: "/services/supported-living" },
      { name: "Positive Behaviour Support", link: "/services/pbs" },
    ],
    about: [
      { name: "Our Story", link: "/about" },
      { name: "Our Values", link: "/about/values" },
      { name: "Our People", link: "/about/people" },
      { name: "In the Community", link: "/about/community" },
      { name: "Awards & Recognition", link: "/about/awards" },
    ],
    support: [
      { name: "Make a Referral", link: "/referrals" },
      { name: "Contact Us", link: "/contact" },
      { name: "Find a Location", link: "/locations" },
      { name: "FAQs", link: "/support/faqs" },
      { name: "Complaints & Feedback", link: "/support/feedback" },
    ],
    careers: [
      { name: "Current Vacancies", link: "/careers/vacancies" },
      { name: "Why Work With Us", link: "/careers/benefits" },
      { name: "Training & Development", link: "/careers/training" },
      { name: "Submit Your CV", link: "/careers/apply" },
    ],
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
      link: "https://facebook.com/mdcare",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            clipRule="evenodd"
          />
        </svg>
      ),
      link: "https://linkedin.com/company/mdcare",
    },
    {
      name: "Twitter",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
      link: "https://twitter.com/mdcare",
    },
  ];

  const legalLinks = [
    { name: "Privacy Policy", link: "/legal/privacy" },
    { name: "Terms of Service", link: "/legal/terms" },
    { name: "Cookie Policy", link: "/legal/cookies" },
    { name: "Accessibility", link: "/legal/accessibility" },
  ];

  return (
    <footer className="bg-primary-navy text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">M&D Care</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Opening doors to positive futures through compassionate,
                person-centered care that promotes independence and community
                integration.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-primary-gold mr-3"
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
                <span className="text-white/80">01554 123 456</span>
              </div>

              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-primary-gold mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-white/80">info@mdcare.co.uk</span>
              </div>

              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-primary-gold mr-3 mt-1"
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-white/80">
                  Head Office
                  <br />
                  123 Care Street
                  <br />
                  Llanelli, SA15 1AB
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    className="bg-white/10 hover:bg-primary-gold hover:text-primary-navy p-2 rounded-lg transition-all duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {footerSections.services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="text-white/80 hover:text-primary-gold transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold text-lg mb-4">About M&D Care</h4>
            <ul className="space-y-2">
              {footerSections.about.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="text-white/80 hover:text-primary-gold transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              {footerSections.support.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="text-white/80 hover:text-primary-gold transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Careers */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Careers</h4>
            <ul className="space-y-2">
              {footerSections.careers.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="text-white/80 hover:text-primary-gold transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">Stay Updated</h4>
              <p className="text-white/80">
                Subscribe to our newsletter for the latest news and updates
              </p>
            </div>

            <div className="flex gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 lg:w-80 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-primary-gold focus:bg-white/20 transition-all duration-200"
              />
              <button className="bg-primary-gold text-primary-navy px-6 py-3 rounded-lg font-semibold hover:bg-primary-gold/90 hover:scale-105 transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © {currentYear} M&D Care. All rights reserved. | Registered in
              Wales: Company No. 12345678
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              {legalLinks.map((link, index) => (
                <span key={link.name} className="flex items-center">
                  <a
                    href={link.link}
                    className="text-white/60 hover:text-primary-gold transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                  {index < legalLinks.length - 1 && (
                    <span className="text-white/40 ml-4">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
