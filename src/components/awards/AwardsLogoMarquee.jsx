export function AwardsLogoMarquee({ items = [] }) {
  return (
    <section className="py-10 bg-gradient-to-r from-white via-secondary-light-blue/10 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="overflow-hidden relative">
          <div className="flex gap-12 animate-[marquee_25s_linear_infinite] will-change-transform">
            {items.concat(items).map((it, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-16 min-w-[160px] opacity-80"
              >
                {it.logo ? (
                  <img
                    src={it.logo}
                    alt={it.name}
                    className="h-full object-contain"
                  />
                ) : (
                  <span className="text-primary-navy font-semibold">
                    {it.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Use a regular style tag so it works in CRA/Vite */}
      <style>{`
@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
`}</style>
    </section>
  );
}
