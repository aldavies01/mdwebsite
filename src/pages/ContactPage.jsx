// ContactPage.jsx - Main Contact Page Component
import { contactData } from "../data/contact.js";
import ContactHero from "../components/contact/ContactHero.jsx";
import OfficeInfo from "../components/contact/OfficeInfo.jsx";
import DepartmentContacts from "../components/contact/DepartmentContacts.jsx";
import ServiceLocations from "../components/contact/ServiceLocations.jsx";
import SEO from "../components/SEO";

function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Contact Us"
        description="Get in touch with M&D Care. Whether you’re enquiring about our services, careers, or partnership opportunities, our team is here to help."
        path="/contact"
        // image optional — add later if you design an OG banner
      />

      <ContactHero heroData={contactData.hero} />

      <OfficeInfo officeData={contactData.headOffice} />

      <DepartmentContacts
        departments={contactData.departments}
        emergencyData={contactData.emergency}
      />

      <ServiceLocations serviceData={contactData.services} />
    </div>
  );
}

export default ContactPage;
