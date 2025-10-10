import React from "react";
import { dayInTheLifeData } from "../../data/careers.dayInTheLife";
import Icon from "../common/Icon";
import { useShift } from "./ShiftContext";
import { pickByShift } from "./sectionUtils";
import SceneBackdrop from "./SceneBackdrop";

export default function MiddayActivities() {
  const { shift, isNight } = useShift();
  const data = pickByShift(dayInTheLifeData.middayActivities, shift);

  return (
    <section
      className={`relative py-16 sm:py-20 ${isNight ? "text-white" : ""}`}
    >
      <SceneBackdrop shift={shift} showOrb={false} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span
            className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 border ${isNight ? "bg-white/10 text-white border-white/20" : "bg-secondary-coral/10 text-secondary-coral border-transparent"}`}
          >
            <Icon
              name={isNight ? "moon" : "clock"}
              className="w-4 h-4 mr-2 inline"
            />
            {data.time}
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${isNight ? "text-white" : "text-primary-navy"} mb-4`}
          >
            {data.title}
          </h2>
          <p
            className={`${isNight ? "text-slate-300" : "text-gray-600"} text-lg sm:text-xl max-w-3xl mx-auto`}
          >
            {data.description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {data.activities?.map((a, i) => (
            <div
              key={i}
              className={`rounded-2xl overflow-hidden border transition-shadow ${isNight ? "bg-white/10 border-white/20 hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)]" : "bg-white border-gray-100 hover:shadow-lg"}`}
            >
              {a.image && (
                <img
                  src={a.image}
                  alt={a.title}
                  className="w-full h-40 object-cover"
                />
              )}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center ${isNight ? "bg-white/10 border border-white/20" : "bg-secondary-coral/10"}`}
                  >
                    <Icon
                      name={a.icon}
                      className={`${isNight ? "text-white" : "text-secondary-coral"} w-5 h-5`}
                    />
                  </div>
                  <h3
                    className={`text-xl font-bold ${isNight ? "text-white" : "text-primary-navy"}`}
                  >
                    {a.title}
                  </h3>
                </div>
                <p
                  className={`${isNight ? "text-slate-200" : "text-gray-600"} leading-relaxed`}
                >
                  {a.description}
                </p>
                {a.impact && (
                  <p
                    className={`mt-3 text-sm ${isNight ? "text-indigo-200" : "text-secondary-coral"} font-semibold`}
                  >
                    {a.impact}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        {data.testimonial && (
          <div
            className={`rounded-2xl p-6 border text-center ${isNight ? "bg-white/10 border-white/20" : "bg-secondary-coral/5 border-secondary-coral/20"}`}
          >
            <p
              className={`${isNight ? "text-white/90" : "text-gray-700"} italic max-w-3xl mx-auto`}
            >
              “{data.testimonial.quote}”
            </p>
            <p
              className={`${isNight ? "text-indigo-200" : "text-secondary-coral"} font-semibold mt-2`}
            >
              — {data.testimonial.author}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
