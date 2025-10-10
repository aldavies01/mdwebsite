// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    // --- Gradient stops used in QualityPage ---
    "from-primary-gold/15",
    "to-secondary-teal/15",
    "from-secondary-light-blue/20",
    "to-secondary-teal/20",
    "to-secondary-coral/15",
    "from-secondary-teal/15",
    "to-secondary-purple/15",
    "to-secondary-light-blue/15",
    "from-primary-navy",
    "via-primary-navy/95",
    "to-primary-navy/90",

    // --- Soft brand tints for badges/tiles ---
    "bg-secondary-coral/10",
    "bg-primary-gold/10",
    "bg-primary-navy/10",
    "bg-secondary-teal/10",
    "bg-secondary-purple/10",

    // --- Rings used for card/badge chrome ---
    "ring-primary-gold/30",
    "ring-white/20",
    "ring-gray-200",
    "ring-secondary-coral/30",
    "ring-primary-navy/20",
    "ring-primary-gold/20",
    "ring-white/10",
  ],
  theme: {
    extend: {
      colors: {
        "primary-navy": "#113758",
        "primary-gold": "#ecb110",
        "secondary-coral": "#EE826C",
        "secondary-warm-yellow": "#F8D26B",
        "secondary-light-blue": "#C9EBFC",
        "secondary-teal": "#46a3a5",
        "secondary-purple": "#9290d8",

        // --- New complementary colors ---
        "brand-sand": "#F5EFE6", // soft neutral background
        "brand-sky": "#A8D8E8", // lighter version of teal/light-blue
        "brand-slate": "#2B4A66", // deeper navy accent
      },
    },
  },
  plugins: [],
};
