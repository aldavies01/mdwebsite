// Whitelist Tailwind classes by mapping semantic "tones" to fixed utilities.

export const toneToClasses = {
  "primary-navy": {
    bg: "bg-primary-navy",
    text: "text-primary-navy",
    bgSoft: "bg-primary-navy/10",
    border: "border-primary-navy",
  },
  "primary-gold": {
    bg: "bg-primary-gold",
    text: "text-primary-gold",
    bgSoft: "bg-primary-gold/20",
    border: "border-primary-gold",
  },
  "secondary-coral": {
    bg: "bg-secondary-coral",
    text: "text-secondary-coral",
    bgSoft: "bg-secondary-coral/20",
    border: "border-secondary-coral",
  },
  "secondary-warm-yellow": {
    bg: "bg-secondary-warm-yellow",
    text: "text-secondary-warm-yellow",
    bgSoft: "bg-secondary-warm-yellow/20",
    border: "border-secondary-warm-yellow",
  },
  "secondary-light-blue": {
    bg: "bg-secondary-light-blue",
    text: "text-secondary-light-blue",
    bgSoft: "bg-secondary-light-blue/20",
    border: "border-secondary-light-blue",
  },
  "secondary-teal": {
    bg: "bg-secondary-teal",
    text: "text-secondary-teal",
    bgSoft: "bg-secondary-teal/20",
    border: "border-secondary-teal",
  },
  "secondary-purple": {
    bg: "bg-secondary-purple",
    text: "text-secondary-purple",
    bgSoft: "bg-secondary-purple/20",
    border: "border-secondary-purple",
  },
};

// Tiny helper if you want a default safely.
export const tone = (key, fallback = "secondary-coral") =>
  toneToClasses[key] || toneToClasses[fallback];
