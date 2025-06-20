/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
      },
    },
  },
  plugins: [],
};
