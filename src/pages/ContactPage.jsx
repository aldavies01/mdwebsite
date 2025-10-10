// ContactPage.jsx - Main Contact Page Component
import { contactData } from "../data/contact.js";
import ContactHero from "../components/contact/ContactHero.jsx";
import OfficeInfo from "../components/contact/OfficeInfo.jsx";
import DepartmentContacts from "../components/contact/DepartmentContacts.jsx";
import ServiceLocations from "../components/contact/ServiceLocations.jsx";

function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
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
