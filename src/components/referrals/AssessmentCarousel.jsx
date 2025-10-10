// src/components/referrals/AssessmentCarousel.jsx
import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const STEPS = [
  {
    n: 1,
    title: "Referral Received",
    color: "secondary-teal",
    summary:
      "Multiple referral pathways for maximum accessibility and convenience.",
    details:
      "Referrals can be made by Local Authorities, Health Boards, private professionals, family members, or through self-referral. These can be submitted via our website, email, phone, or brokerage systems. Whatever the route, our team will acknowledge and process the referral within 24 hours.",
    image: "/images/stock/stock-1.jpg",
  },
  {
    n: 2,
    title: "Initial Discussion",
    color: "secondary-coral",
    summary: "Professional consultation to understand support requirements.",
    details:
      "We will contact the referrer to gather initial information and answer any questions. At this stage, we will also request supporting documentation such as Care Plans, CTPs, PBS Plans, and Risk Management Plans, while sharing details of the services we can offer.",
    image: "/images/stock/stock-2.jpg",
  },
  {
    n: 3,
    title: "In-Person Assessment",
    color: "secondary-purple",
    summary: "Comprehensive assessment by service managers and specialists.",
    details:
      "We will meet the person and those involved in their care to build a complete picture of their needs. The focus is on spending time with the person, learning about their goals, preferences, and aspirations. Where appropriate, we also work closely with the person’s advocate.",
    image: "/images/stock/stock-3.jpg",
  },
  {
    n: 4,
    title: "Multi-Disciplinary Follow-Up",
    color: "primary-navy",
    summary:
      "Multi-disciplinary discussion to finalise assessment and transition.",
    details:
      "In partnership with health and social care professionals, we will finalise the assessment and ensure all perspectives are considered.",
    image: "/images/stock/stock-4.jpg",
  },
  {
    n: 5,
    title: "Internal Placement Panel",
    color: "secondary-teal",
    summary:
      "Internal review to ensure optimal compatibility and needs matching.",
    details:
      "Our internal team reviews all gathered information to confirm that the placement is safe, sustainable, and in the best interests of the person, with quality of life at the centre of decision-making.",
    image: "/images/stock/stock-5.jpg",
  },
  {
    n: 6,
    title: "Funding Submission",
    color: "secondary-coral",
    summary:
      "Financial arrangements and approvals to ensure sustainable provision.",
    details:
      "We prepare placement costings and support the funding process, whether through Local Authority, Health Board, or private funding arrangements.",
    image: "/images/stock/stock-6.jpg",
  },
  {
    n: 7,
    title: "Final Placement Planning",
    color: "secondary-purple",
    summary: "Final preparations and legal safeguards for a smooth transition.",
    details:
      "All practical details are agreed - from staffing arrangements to environmental considerations - to ensure the placement is tailored to the person’s needs.",
    image: "/images/stock/stock-1.jpg",
  },
  {
    n: 8,
    title: "Transition Planning",
    color: "primary-navy",
    summary: "Transitions are fully individualised.",
    details:
      "This may include staff training, shadow shifts, extended Section 17 leave, or home visits - all designed to provide a smooth and supportive move.",
    image: "/images/stock/stock-1.jpg",
  },
  {
    n: 9,
    title: "Moving In",
    color: "primary-gold",
    summary:
      "Personalised support begins with close monitoring in the new setting.",
    details:
      "Our team prepares the home environment and ensures a warm, positive welcome. The aim is to create a smooth transition into the new placement.",
    image: "/images/stock/stock-1.jpg",
  },
  {
    n: 10,
    title: "Placement Review",
    color: "secondary-coral",
    summary: "Early evaluation to ensure outcomes and continuous improvement.",
    details:
      "We check in regularly to ensure the placement is working well. Support is flexible and continuously adapted around the person’s needs and aspirations.",
    image: "/images/stock/stock-1.jpg",
  },
];

function badgeClasses(key) {
  const map = {
    "primary-navy": "bg-primary-navy text-white",
    "primary-gold": "bg-primary-gold text-primary-navy",
    "secondary-teal": "bg-secondary-teal text-white",
    "secondary-coral": "bg-secondary-coral text-white",
    "secondary-purple": "bg-secondary-purple text-white",
  };
  return map[key] || "bg-primary-navy text-white";
}

function StepCard({ step }) {
  return (
    <article
      role="listitem"
      className="
        w-[320px] sm:w-[380px] lg:w-[440px]
        flex-shrink-0
        scroll-snap-item
        bg-white border border-gray-100 rounded-2xl shadow-sm
        hover:shadow-lg transition-all duration-300
        overflow-hidden
        hover:-translate-y-1
        cursor-pointer
      "
    >
      {/* image */}
      <div className="relative h-48 sm:h-52 lg:h-56">
        <img
          src={step.image}
          alt={step.title}
          className="w-full h-full object-cover"
        />
        <span
          className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold ${badgeClasses(
            step.color
          )}`}
        >
          Step {step.n}
        </span>
      </div>

      {/* body */}
      <div className="p-4 sm:p-6 lg:p-8">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary-navy mb-3 sm:mb-4">
          {step.title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
          {step.summary}
        </p>
        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
          {step.details}
        </p>
      </div>
    </article>
  );
}

export default function AssessmentCarousel() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll position to update button states
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Optimized scroll handler - back to native smooth scrolling for better performance
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.querySelector("article")?.offsetWidth || 440;
      const gap = 24; // 6 * 4 (gap-6 in tailwind)
      const scrollAmount = cardWidth + gap;

      const targetScroll =
        direction === "left"
          ? Math.max(0, container.scrollLeft - scrollAmount)
          : Math.min(
              container.scrollWidth - container.clientWidth,
              container.scrollLeft + scrollAmount
            );

      container.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  // Update button states on scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
      checkScrollPosition(); // Initial check

      return () => container.removeEventListener("scroll", checkScrollPosition);
    }
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-secondary-light-blue/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-primary-navy/10 text-primary-navy px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Our Professional Process
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-navy leading-tight mb-3">
            Assessment <span className="text-secondary-coral">Process</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We know that moving into a new home or service can feel like a big
            step. To make the process as smooth and supportive as possible, we
            follow a clear journey together, the person at the centre every step
            of the way
          </p>
        </div>
      </div>

      {/* Full-width Carousel Container */}
      <div className="relative mx-2 sm:mx-4 lg:mx-8">
        {/* Navigation Buttons */}
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-label="Previous steps"
          className={`
            absolute left-1 top-1/2 -translate-y-1/2 z-20
            w-10 h-10 sm:w-12 sm:h-12 rounded-full
            bg-white/95
            shadow-lg border border-gray-200
            flex items-center justify-center
            transition-all duration-200
            ${
              canScrollLeft
                ? "hover:bg-white hover:shadow-xl hover:scale-110 cursor-pointer"
                : "opacity-50 cursor-not-allowed"
            }
          `}
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700" />
        </button>

        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Next steps"
          className={`
            absolute right-1 top-1/2 -translate-y-1/2 z-20
            w-10 h-10 sm:w-12 sm:h-12 rounded-full
            bg-white/95
            shadow-lg border border-gray-200
            flex items-center justify-center
            transition-all duration-200
            ${
              canScrollRight
                ? "hover:bg-white hover:shadow-xl hover:scale-110 cursor-pointer"
                : "opacity-50 cursor-not-allowed"
            }
          `}
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="
            flex gap-6
            overflow-x-auto
            smooth-scroll
            scrollbar-hide
            px-2 sm:px-4 lg:px-8
            pb-4
          "
          role="list"
          aria-label="Assessment process steps"
        >
          {STEPS.map((step) => (
            <StepCard key={step.n} step={step} />
          ))}
        </div>
      </div>

      {/* Enhanced CSS for smoother scrolling */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Optimized smooth scrolling for better performance */
        .smooth-scroll {
          scroll-behavior: smooth;
          scroll-snap-type: x proximity;
          -webkit-overflow-scrolling: touch; /* iOS momentum scrolling */
          transform: translateZ(0); /* Force hardware acceleration */
          will-change: scroll-position; /* Optimize for scrolling */
        }

        .scroll-snap-item {
          scroll-snap-align: start;
          transform: translateZ(0); /* Force hardware acceleration for cards */
        }

        /* Mobile-first optimizations */
        @media (max-width: 640px) {
          .smooth-scroll {
            scroll-snap-type: x mandatory;
            overscroll-behavior-x: contain;
            scroll-padding-left: 8px;
            scroll-padding-right: 8px;
          }

          .scroll-snap-item {
            scroll-snap-align: center;
          }
        }

        /* Add momentum and inertia for touch devices */
        @media (hover: none) and (pointer: coarse) {
          .smooth-scroll {
            scroll-snap-type: x mandatory;
            overscroll-behavior-x: contain;
          }
        }
      `}</style>
      {/* Callout under carousel */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-10">
        <div
          className="relative rounded-2xl shadow-lg p-5 sm:p-7 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 text-center sm:text-left
                        bg-gradient-to-r from-secondary-coral/10 via-primary-gold/10 to-secondary-purple/10"
        >
          {/* Animated sparkles icon */}
          <div className="flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 sm:w-9 sm:h-9 text-secondary-coral motion-safe:animate-pulse"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2.5l1.1 3.4a2 2 0 001.27 1.27l3.43 1.1-3.43 1.1a2 2 0 00-1.27 1.27L12 14.5l-1.1-3.39a2 2 0 00-1.27-1.27L6.2 8.27l3.43-1.1A2 2 0 0010.9 5.9L12 2.5zM18 15l.7 2.1c.13.38.43.68.81.81L21.6 18.6l-2.09.7a1.2 1.2 0 00-.81.81L18 22l-.7-2.09a1.2 1.2 0 00-.81-.81L14.4 18.6l2.09-.69c.38-.13.68-.43.81-.81L18 15z"
              />
            </svg>
          </div>

          <p className="text-primary-navy text-base sm:text-lg md:text-xl font-semibold leading-relaxed">
            Every person’s story is different, so while these are our typical
            steps, we can adapt and speed up the process when needed -
            <span className="text-secondary-coral">
              {" "}
              always keeping the focus on the person.
            </span>
          </p>

          {/* subtle corner glow, non-interactive */}
          <span className="pointer-events-none absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-white/20 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
