// src/pages/ValuesPage.jsx
import ValuesHero from "../components/values/ValuesHero";
import ValuesGrid from "../components/values/ValuesGrid";
import ValuesDetail from "../components/values/ValuesDetail";
import ValuesQuote from "../components/values/ValuesQuote";
import ValuesCTA from "../components/values/ValuesCTA";
import ValuesSlideshow from "../components/values/ValuesSlideshow";

function ValuesPage() {
  // Keep your existing values data (icons can stay as inline SVGs for now)
  const values = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      title: "Aspirational",
      description:
        "We believe in the potential of everyone and support people in working towards their goals and aspirations in life",
      color: "secondary-teal",
      example:
        "Setting personal goals and celebrating achievements, no matter how small, to help individuals reach their full potential.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: "Kind",
      description:
        "Every interaction is guided by genuine kindness and understanding for the individuals we support",
      color: "secondary-coral",
      example:
        "Taking time to listen, showing empathy, and treating every person with dignity and respect in all our interactions.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Collaborative",
      description:
        "We work together with individuals, families, and communities to achieve the best possible outcomes",
      color: "secondary-purple",
      example:
        "Building strong partnerships with families, healthcare professionals, and local communities to create comprehensive support networks.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.25 5.25a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
          />
        </svg>
      ),
      title: "Courageous",
      description:
        "We have the courage to advocate for what's right and make difficult decisions in the best interests of those we support",
      color: "secondary-light-blue",
      example:
        "Speaking up when we see opportunities for improvement, taking on challenging cases, and always doing what's right even when it's difficult.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
          />
        </svg>
      ),
      title: "Passionate",
      description:
        "Our deep commitment to care excellence drives everything we do for the people we serve",
      color: "primary-gold",
      example:
        "Going above and beyond expectations, continuously improving our services, and advocating for the best interests of those we support.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "Innovative",
      description:
        "We continuously evolve our approaches to provide the most effective and person-centered support",
      color: "primary-navy",
      example:
        "Embracing new technologies, creative problem-solving, and evidence-based practices to enhance the quality of care we provide.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ValuesHero values={values} />
      {/* <ValuesGrid values={values} /> */}
      <ValuesDetail values={values} />
      <ValuesSlideshow />
      <ValuesQuote
        person={{ name: "Nia Murphy", role: "Director of HR", imageUrl: "" }}
      />
      <ValuesCTA />
    </div>
  );
}

export default ValuesPage;
