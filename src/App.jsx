import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ResidentialPage from "./pages/ResidentialPage";
import SpecialistPage from "./pages/SpecialistPage";
import AboutPage from "./pages/AboutPage";
import CommitmentsPage from "./pages/CommitmentsPage";

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
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
