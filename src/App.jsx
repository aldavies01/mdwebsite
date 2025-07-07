import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ResidentialPage from "./pages/ResidentialPage";
import SpecialistPage from "./pages/SpecialistPage";
import AboutPage from "./pages/AboutPage";
import CommitmentsPage from "./pages/CommitmentsPage";
import OurPeoplePage from "./pages/OurPeoplePage";
import ValuesPage from "./pages/ValuesPage";
import CareersPage from "./pages/CareersPage";
import VacanciesPage from "./pages/VacanciesPage";
import ReferralFormPage from "./pages/ReferralFormPage";
import ReferralPage from "./pages/ReferralsPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/residential" element={<ResidentialPage />} />
          <Route
            path="/services/specialist-care"
            element={<SpecialistPage />}
          />
          <Route path="/about/" element={<AboutPage />} />
          <Route path="/about/commitments/" element={<CommitmentsPage />} />
          <Route path="/about/people/" element={<OurPeoplePage />} />
          <Route path="/about/values/" element={<ValuesPage />} />
          <Route path="/careers/" element={<CareersPage />} />
          <Route path="/careers/vacancies" element={<VacanciesPage />} />
          <Route path="/referrals" element={<ReferralPage />} />
          <Route path="/referrals/form/" element={<ReferralFormPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
