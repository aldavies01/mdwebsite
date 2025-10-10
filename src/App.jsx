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
import NewDevelopmentsPage from "./pages/NewDevelopmentsPage";
import ScrollToTop from "./components/functions/ScrollToTop";
import AwardsPage from "./pages/AwardsPage";
import ResidentialServiceRoute from "./pages/ResidentialServiceRoute";
import PositiveBehaviourSupportPage from "./pages/PBSPage";
import SupportedLivingPage from "./pages/SupportedLivingPage";
import LearningDevelopmentPage from "./pages/LearningAndDevPage";
import InTheCommunityPage from "./pages/InTheCommunityPage";
import SpecialistServiceRoute from "./pages/SpecialistServiceRoute";
import SupportedLivingRoute from "./pages/SupportedLivingRoute";
import ContactPage from "./pages/ContactPage";
import NewsLandingPage from "./components/news/NewsLandingPage";
import { NewsArticlePage } from "./components/news/NewsArticlePage";
import BenefitsPage from "./pages/BenefitsPage";
import QualityPage from "./pages/QualityPage";
import DayInTheLifePage from "./pages/DayInTheLifePage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        <Navbar />

        {/* Main content wrapper with top padding to account for fixed navbar */}
        <main className="pt-20 md:pt-[112px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/residential" element={<ResidentialPage />} />
            <Route
              path="/services/specialist-care"
              element={<SpecialistPage />}
            />
            <Route
              path="/services/supported-living"
              element={<SupportedLivingPage />}
            />
            <Route
              path="/services/new-developments"
              element={<NewDevelopmentsPage />}
            />
            <Route path="/about/" element={<AboutPage />} />
            <Route path="/about/quality" element={<QualityPage />} />
            <Route path="/about/commitments/" element={<CommitmentsPage />} />
            <Route path="/about/people/" element={<OurPeoplePage />} />
            <Route path="/about/values/" element={<ValuesPage />} />
            <Route
              path="/about/learning-and-development"
              element={<LearningDevelopmentPage />}
            />
            <Route path="/about/quality" element={<QualityPage />} />
            <Route path="/about/news" element={<NewsLandingPage />} />
            <Route path="/about/news/:slug" element={<NewsArticlePage />} />
            <Route path="/about/community" element={<InTheCommunityPage />} />
            <Route path="/careers/" element={<CareersPage />} />
            <Route path="/careers/vacancies" element={<VacanciesPage />} />
            <Route path="/careers/benefits" element={<BenefitsPage />} />
            <Route
              path="/careers/day-in-the-life"
              element={<DayInTheLifePage />}
            />
            s
            <Route path="/referrals" element={<ReferralPage />} />
            <Route path="/referrals/form/" element={<ReferralFormPage />} />
            <Route path="/about/awards" element={<AwardsPage />} />
            <Route
              path="/services/residential/:slug"
              element={<ResidentialServiceRoute />}
            />
            <Route
              path="/services/specialist-care/:slug"
              element={<SpecialistServiceRoute />}
            />
            <Route
              path="/services/supported-living/:slug"
              element={<SupportedLivingRoute />}
            />
            <Route
              path="/services/pbs"
              element={<PositiveBehaviourSupportPage />}
            />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
