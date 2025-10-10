// RolesPage.jsx - Clean main component
import { useState } from "react";
import { rolesData } from "../data/roles.js";
import RolesHero from "../components/careers/RolesHero.jsx";
import CategoryFilter from "../components/careers/CategoryFilter.jsx";
import RoleDisplay from "../components/careers/RoleDisplay.jsx";
import CallToAction from "../components/careers/CallToAction.jsx";

function RolesPage() {
  // State for filtering roles
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Handler for category changes
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <RolesHero heroData={rolesData.hero} ctaData={rolesData.cta} />

      <CategoryFilter
        categories={rolesData.categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      <RoleDisplay
        roles={rolesData.roles}
        categories={rolesData.categories}
        selectedCategory={selectedCategory}
        ctaData={rolesData.cta}
      />

      <CallToAction ctaData={rolesData.cta} />
    </div>
  );
}

export default RolesPage;
