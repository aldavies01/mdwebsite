// src/components/dayinlife/SceneBackdrop.jsx
import React from "react";

/**
 * Reusable decorative background that responds to shift.
 * Usage:
 *   <SceneBackdrop shift={shift} />                 // orb visible (Timeline)
 *   <SceneBackdrop shift={shift} showOrb={false} /> // no orb (other sections)
 */
export default function SceneBackdrop({ shift, showOrb = true }) {
  const isNight = shift === "night";

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {/* Base sky */}
      <div
        className={`absolute inset-0 ${
          isNight
            ? "bg-gradient-to-b from-slate-900 via-slate-950 to-black"
            : "bg-gradient-to-b from-sky-100 via-sky-50 to-white"
        }`}
      />

      {isNight ? (
        <>
          {/* Night blobs + stars */}
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="absolute inset-0 stars animate-twinkle" />

          {/* Moon orb (optional) */}
          {showOrb && (
            <div className="absolute top-10 right-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-slate-200 to-slate-400 shadow-2xl ring-1 ring-white/20 animate-float" />
          )}
        </>
      ) : (
        <>
          {/* Day blobs */}
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary-gold/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-secondary-coral/25 blur-3xl" />

          {/* Sun orb (optional) */}
          {showOrb && (
            <>
              <div className="absolute top-10 right-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-yellow-300 to-orange-300 shadow-2xl ring-1 ring-white/60 animate-pulse-slow" />
              {/* Soft sun rays halo */}
              <div className="absolute top-6 right-6 w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-[radial-gradient(closest-side,rgba(253,224,71,0.28),transparent_70%)] blur-2xl" />
            </>
          )}

          {/* Multi-layer clouds (bigger + slower for depth) */}
          <div className="absolute left-6 top-16 cloud cloud-md animate-drift" />
          <div className="absolute left-1/3 top-24 cloud cloud-sm animate-drift-slow" />
          <div className="absolute right-10 top-40 cloud cloud-lg animate-drift-slower" />
          <div className="absolute right-1/4 top-10 cloud cloud-xs animate-drift" />
        </>
      )}

      {/* Local styles (kept scoped) */}
      <style jsx>{`
        /* Night stars */
        .stars {
          background-image:
            radial-gradient(
              2px 2px at 20% 30%,
              rgba(255, 255, 255, 1),
              rgba(255, 255, 255, 0)
            ),
            radial-gradient(
              2.5px 2.5px at 40% 80%,
              rgba(255, 255, 255, 0.95),
              rgba(255, 255, 255, 0)
            ),
            radial-gradient(
              3px 3px at 70% 20%,
              rgba(255, 255, 255, 0.9),
              rgba(255, 255, 255, 0)
            ),
            radial-gradient(
              2.2px 2.2px at 85% 60%,
              rgba(255, 255, 255, 1),
              rgba(255, 255, 255, 0)
            ),
            radial-gradient(
              5px 5px at 10% 70%,
              rgba(255, 255, 255, 0.9),
              rgba(255, 255, 255, 0)
            ),
            radial-gradient(
              2px 2px at 30% 10%,
              rgba(255, 255, 255, 0.8),
              rgba(255, 255, 255, 0)
            ),
            radial-gradient(
              1.8px 1.8px at 50% 50%,
              rgba(255, 255, 255, 1),
              rgba(255, 255, 255, 0)
            ),
            radial-gradient(
              2.5px 2px at 60% 75%,
              rgba(255, 255, 255, 0.9),
              rgba(255, 255, 255, 0)
            ),
            radial-gradient(
              1.5px 1.5px at 75% 40%,
              rgba(255, 255, 255, 1),
              rgba(255, 255, 255, 0)
            ),
            radial-gradient(
              2px 2px at 90% 15%,
              rgba(255, 255, 255, 0.85),
              rgba(255, 255, 255, 0)
            ),
            radial-gradient(
              1.8px 1.8px at 95% 80%,
              rgba(255, 255, 255, 1),
              rgba(255, 255, 255, 0)
            ),
            radial-gradient(
              2px 2px at 5% 90%,
              rgba(255, 255, 255, 0.95),
              rgba(255, 255, 255, 0)
            );
          background-repeat: no-repeat;
          background-size: 100% 100%;
          opacity: 0.9;
        }

        /* Motion */
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.9;
          }
          50% {
            opacity: 0.3;
          }
        }
        .animate-twinkle {
          animation: twinkle 4s ease-in-out infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.9;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }

        /* Clouds */
        .cloud {
          background: rgba(255, 255, 255, 0.7);
          filter: blur(10px);
          border-radius: 9999px;
        }
        .cloud-xs {
          width: 90px;
          height: 32px;
        }
        .cloud-sm {
          width: 120px;
          height: 44px;
        }
        .cloud-md {
          width: 180px;
          height: 60px;
        }
        .cloud-lg {
          width: 240px;
          height: 80px;
        }

        @keyframes drift {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(16px);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-drift {
          animation: drift 12s ease-in-out infinite;
        }
        .animate-drift-slow {
          animation: drift 18s ease-in-out infinite;
        }
        @keyframes drift-slower {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(8px);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-drift-slower {
          animation: drift-slower 28s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
