import React from "react";
import { dayInTheLifeData } from "../../data/careers.dayInTheLife";
import Icon from "../common/Icon";
import { useShift } from "./ShiftContext";
import { pickByShift } from "./sectionUtils";
import SceneBackdrop from "./SceneBackdrop";

export default function EveningHandover() {
  const { shift, isNight } = useShift();
  const data = pickByShift(dayInTheLifeData.eveningHandover, shift);

  return (
    <section
      className={`relative py-16 sm:py-20 ${isNight ? "text-white" : ""}`}
    >
      <SceneBackdrop shift={shift} showOrb={false} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span
            className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 border ${isNight ? "bg-white/10 text-white border-white/20" : "bg-secondary-purple/10 text-secondary-purple border-transparent"}`}
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

        {/* Activities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {data.activities?.map((a, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 border ${isNight ? "bg-white/10 border-white/20" : "bg-white border-slate-200/70"}`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center ${isNight ? "bg-white/10 border border-white/20" : "bg-white shadow-sm border border-slate-200"}`}
                >
                  <Icon name={a.icon} className="w-5 h-5 text-primary-navy" />
                </div>
                <h3
                  className={`font-bold text-lg ${isNight ? "text-white" : "text-primary-navy"}`}
                >
                  {a.title}
                </h3>
              </div>
              {a.time && (
                <p
                  className={`text-sm ${isNight ? "text-indigo-200" : "text-secondary-purple"}`}
                >
                  {a.time}
                </p>
              )}
              <p className={`${isNight ? "text-slate-200" : "text-gray-600"}`}>
                {a.description}
              </p>
            </div>
          ))}
        </div>

        {/* Reflection */}
        {data.reflection && (
          <div
            className={`rounded-2xl p-6 border text-center ${isNight ? "bg-white/10 border-white/20" : "bg-secondary-purple/5 border-secondary-purple/20"}`}
          >
            <p
              className={`${isNight ? "text-white/90" : "text-gray-700"} italic max-w-3xl mx-auto`}
            >
              “{data.reflection.quote}”
            </p>
            <p
              className={`${isNight ? "text-indigo-200" : "text-secondary-purple"} font-semibold mt-2`}
            >
              — {data.reflection.author}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
