// src/components/common/Icon.jsx
import PropTypes from "prop-types";

function Svg({
  className = "",
  viewBox = "0 0 24 24",
  stroke = true,
  children,
}) {
  const base = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox,
    className,
    "aria-hidden": true,
  };
  return stroke ? (
    <svg
      {...base}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  ) : (
    <svg {...base} fill="currentColor">
      {children}
    </svg>
  );
}

/** Individual icons (lightweight, dependency-free) */
const icons = {
  home: (className) => (
    <Svg className={className}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 10v10a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10" />
    </Svg>
  ),
  "trending-up": (className) => (
    <Svg className={className}>
      <path d="M3 17l6-6 4 4 7-7" />
      <path d="M14 8h6v6" />
    </Svg>
  ),
  car: (className) => (
    <Svg className={className}>
      <path d="M3 13l2-6a2 2 0 012-1h10a2 2 0 012 1l2 6" />
      <path d="M5 13h14" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </Svg>
  ),

  wifi: (className) => (
    <Svg className={className}>
      <path d="M5 12a11 11 0 0114 0" />
      <path d="M8.5 15.5a6 6 0 017 0" />
      <path d="M12 19h.01" />
    </Svg>
  ),

  tv: (className) => (
    <Svg className={className}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M8 5l4-3 4 3" />
    </Svg>
  ),

  leaf: (className) => (
    <Svg className={className}>
      <path d="M5 21c8 0 14-6 14-14V5h-2C9 5 3 11 3 19v2h2z" />
    </Svg>
  ),

  "shield-check": (className) => (
    <Svg className={className}>
      <path d="M12 2l7 3v6c0 5.25-3.75 9.75-7 11-3.25-1.25-7-5.75-7-11V5l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </Svg>
  ),
  "chevron-left": (className) => (
    <Svg className={className}>
      <path d="M15 19l-7-7 7-7" />
    </Svg>
  ),
  "chevron-right": (className) => (
    <Svg className={className}>
      <path d="M9 5l7 7-7 7" />
    </Svg>
  ),
  // users: (className) => (
  //   <Svg className={className}>
  //     <path d="M16 11a4 4 0 10-8 0" />
  //     <path d="M12 7a4 4 0 110 8" opacity="0" />
  //     <path d="M2 20a6 6 0 0112 0" />
  //     <path d="M17 21v-1a5 5 0 015-5" />
  //     <path d="M19 8a3 3 0 110 6" />
  //   </Svg>
  // ),
  building: (className) => (
    <Svg className={className}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
      <path d="M4 19h16" />
    </Svg>
  ),
  sliders: (className) => (
    <Svg className={className}>
      <path d="M4 21v-7" />
      <path d="M4 10V3" />
      <path d="M12 21v-9" />
      <path d="M12 8V3" />
      <path d="M20 21v-5" />
      <path d="M20 12V3" />
      <circle cx="4" cy="14" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="20" cy="16" r="2" />
    </Svg>
  ),
  arrows: (className) => (
    <Svg className={className}>
      <path d="M7 7h10l-3-3" />
      <path d="M17 17H7l3 3" />
    </Svg>
  ),
  "bar-chart": (className) => (
    <Svg className={className}>
      <path d="M3 22V4" />
      <rect x="7" y="10" width="3" height="8" rx="1" />
      <rect x="12" y="7" width="3" height="11" rx="1" />
      <rect x="17" y="4" width="3" height="14" rx="1" />
    </Svg>
  ),
  "user-check": (className) => (
    <Svg className={className}>
      <path d="M16 21v-1a4 4 0 00-4-4H6a4 4 0 00-4 4v1" />
      <circle cx="9" cy="7" r="4" />
      <path d="M16 11l2 2 4-4" />
    </Svg>
  ),
  heart: (className) => (
    <Svg className={className} stroke={false}>
      <path
        d="M13.91,6.75c-1.17,2.25-4.3,5.31-6.07,6.94c-0.1903,0.1718-0.4797,0.1718-0.67,0C5.39,12.06,2.26,9,1.09,6.75&#xA;&#x9;C-1.48,1.8,5-1.5,7.5,3.45C10-1.5,16.48,1.8,13.91,6.75z"
      />
    </Svg>
  ),

  "map-pin": (className) => (
    <Svg className={className}>
      <path d="M12 22s7-6.11 7-11a7 7 0 10-14 0c0 4.89 7 11 7 11z" />
      <circle cx="12" cy="11" r="3" />
    </Svg>
  ),
  // Useful fallbacks / misc
  check: (className) => (
    <Svg className={className}>
      <path d="M20 6L9 17l-5-5" />
    </Svg>
  ),
  play: (className) => (
    // Filled triangle works best inside a colored circular button
    <Svg className={className} stroke={false}>
      <path d="M8 5v14l11-7-11-7z" />
    </Svg>
  ),

  x: (className) => (
    <Svg className={className}>
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </Svg>
  ),
  mail: (className) => (
    <Svg className={className}>
      <path d="M4 4h16v16H4z" />
      <path d="M22 6l-10 7L2 6" />
    </Svg>
  ),
  phone: (className) => (
    <Svg className={className}>
      <path d="M22 16.92V19a3 3 0 01-3.3 3A19.86 19.86 0 013 5.3 3 3 0 016 2h2.09a2 2 0 011.91 1.37l1.1 3a2 2 0 01-.45 2.11l-1.2 1.2a16 16 0 006.36 6.36l1.2-1.2a2 2 0 012.11-.45l3 1.1A2 2 0 0122 16.92z" />
    </Svg>
  ),
  "check-circle": (className) => (
    <Svg className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M9 12l2 2 4-4" />
    </Svg>
  ),

  lightbulb: (className) => (
    <Svg className={className}>
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M8 14a6 6 0 118 0c-1.5 1.2-2 2.5-2 4H10c0-1.5-.5-2.8-2-4z" />
    </Svg>
  ),

  shield: (className) => (
    <Svg className={className}>
      <path d="M12 2l7 3v6c0 5.25-3.75 9.75-7 11-3.25-1.25-7-5.75-7-11V5l7-3z" />
    </Svg>
  ),

  "clipboard-check": (className) => (
    <Svg className={className}>
      <rect x="8" y="3" width="8" height="4" rx="1" />
      <rect x="5" y="7" width="14" height="14" rx="2" />
      <path d="M9 14l2 2 4-4" />
    </Svg>
  ),

  award: (className) => (
    <Svg className={className}>
      <circle cx="12" cy="8" r="4" />
      <path d="M8 13l-2 7 6-3 6 3-2-7" />
    </Svg>
  ),

  money: (className) => (
    <Svg className={className}>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="3" />
      <path d="M2 10h0" />
      <path d="M22 14h0" />
    </Svg>
  ),

  star: (className) => (
    <Svg className={className}>
      <path d="M12 2l2.9 6.4 7.1.6-5.3 4.6 1.7 6.8L12 16.9 5.6 20.4l1.7-6.8L2 9l7.1-.6L12 2z" />
    </Svg>
  ),

  brain: (className) => (
    <Svg className={className}>
      <path d="M8 6a3 3 0 00-3 3v2a3 3 0 003 3v3a2 2 0 104 0V7a3 3 0 00-4-1z" />
      <path d="M16 6a3 3 0 013 3v2a3 3 0 01-3 3v3a2 2 0 11-4 0V7a3 3 0 014-1z" />
    </Svg>
  ),
  "check-badge": (className) => (
    <Svg className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </Svg>
  ),
  users: (className) => (
    <Svg className={className}>
      {/* Left user */}
      <circle cx="7" cy="8" r="3" />
      <path d="M2 21v-2a5 5 0 015-5" />

      {/* Right user */}
      <circle cx="17" cy="8" r="3" />
      <path d="M22 21v-2a5 5 0 00-5-5" />

      {/* Center user */}
      <circle cx="12" cy="14" r="3" />
      <path d="M7 21v-2a5 5 0 015-5 5 5 0 015 5v2" />
    </Svg>
  ),
  house: (className) => (
    <Svg className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </Svg>
  ),

  stethoscope: (className) => (
    <Svg className={className}>
      <path d="M6 3v5a4 4 0 008 0V3" />
      <circle cx="18" cy="15" r="3" />
      <path d="M10 14v2a6 6 0 006 6h2" />
    </Svg>
  ),

  bed: (className) => (
    <Svg className={className}>
      <path d="M3 8h10a4 4 0 014 4v5H3V8z" />
      <path d="M3 13h18" />
      <path d="M3 21v-3M21 21v-3" />
    </Svg>
  ),

  map: (className) => (
    <Svg className={className}>
      <path d="M9 3l6 2 6-2v16l-6 2-6-2-6 2V5l6-2z" />
      <path d="M9 3v16" />
      <path d="M15 5v16" />
    </Svg>
  ),

  bolt: (className) => (
    <Svg className={className}>
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    </Svg>
  ),
  clock: (className) => (
    <Svg className={className}>
      <path d="M12 8v4l3 3" />
      <circle cx="12" cy="12" r="9" />
    </Svg>
  ),
  trend: (className) => (
    <Svg className={className}>
      <path d="M3 17l6-6 4 4 7-7" />
      <path d="M14 8h6v6" />
    </Svg>
  ),
  // Add these icons to your Icon.jsx file in the icons object:

  activity: (className) => (
    <Svg className={className}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </Svg>
  ),

  calendar: (className) => (
    <Svg className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </Svg>
  ),

  "refresh-cw": (className) => (
    <Svg className={className}>
      <path d="M3 12a9 9 0 019-9 9.75 9.75 0 016.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 01-9 9 9.75 9.75 0 01-6.74-2.74L3 16" />
      <path d="M3 21v-5h5" />
    </Svg>
  ),

  gift: (className) => (
    <Svg className={className}>
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <rect x="12" y="8" width="0" height="13" />
      <path d="M19 12v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 010-5A4.8 4.8 0 0112 6.5a4.8 4.8 0 014.5-3.5 2.5 2.5 0 010 5" />
    </Svg>
  ),

  "graduation-cap": (className) => (
    <Svg className={className}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </Svg>
  ),

  "arrow-up": (className) => (
    <Svg className={className}>
      <line x1="12" y1="19" x2="12" y2="5" />
      <path d="M5 12l7-7 7 7" />
    </Svg>
  ),

  percent: (className) => (
    <Svg className={className}>
      <line x1="19" y1="5" x2="5" y2="19" />
      <circle cx="6.5" cy="6.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </Svg>
  ),

  "party-popper": (className) => (
    <Svg className={className}>
      <path d="M5.8 11.3L2 22l10.7-3.8" />
      <path d="M4 3h.01" />
      <path d="M22 8h.01" />
      <path d="M15 2h.01" />
      <path d="M22 20h.01" />
      <path d="M22 2l-2.24.75a2.9 2.9 0 00-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" />
      <path d="M22 13h-4v3a2 2 0 01-2 2v0a2 2 0 01-2-2V9.83a2 2 0 00-.59-1.42L12 7" />
    </Svg>
  ),

  trophy: (className) => (
    <Svg className={className}>
      <path d="M6 9H4.5a2.5 2.5 0 010-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 000-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.34" />
      <path d="M18 2H6v7a6 6 0 0012 0V2z" />
    </Svg>
  ),

  book: (className) => (
    <Svg className={className}>
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </Svg>
  ),

  smile: (className) => (
    <Svg className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </Svg>
  ),

  briefcase: (className) => (
    <Svg className={className}>
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
    </Svg>
  ),

  "arrow-right": (className) => (
    <Svg className={className}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <path d="M12 5l7 7-7 7" />
    </Svg>
  ),

  "file-text": (className) => (
    <Svg className={className}>
      <path d="M14 3v4a1 1 0 001 1h4" />
      <path d="M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z" />
      <line x1="9" y1="9" x2="10" y2="9" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="15" y2="17" />
    </Svg>
  ),

  eye: (className) => (
    <Svg className={className}>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </Svg>
  ),

  user: (className) => (
    <Svg className={className}>
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </Svg>
  ),
};

export default function Icon({ name, className = "" }) {
  const renderer = icons[name];
  if (!renderer) {
    // Graceful fallback: simple check mark
    return icons.check(className);
  }
  return renderer(className);
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};
