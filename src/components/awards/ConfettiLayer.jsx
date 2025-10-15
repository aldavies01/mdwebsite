export default function ConfettiLayer() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute -top-6 left-1/4 w-2 h-2 bg-primary-gold/70 rounded-full animate-bounce" />
      <div className="absolute top-10 left-10 w-3 h-3 bg-secondary-coral/70 rounded-full animate-ping" />
      <div className="absolute bottom-8 right-16 w-2 h-2 bg-secondary-teal/70 rounded-full animate-bounce" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white/60 rounded-full animate-pulse" />
    </div>
  );
}
