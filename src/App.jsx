import Navbar from "./components/layout/Navbar";
import Header from "./components/layout/Header";
import HeroCarousel from "./components/layout/HeroCarousel";
import ServicesSection from "./components/common/ServicesSection";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroCarousel />
      <ServicesSection />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12"></main>
    </div>
  );
}

export default App;
