import React from "react";
import { dayInTheLifeData } from "../../data/careers.dayInTheLife";
import Icon from "../common/Icon";
import { useShift } from "./ShiftContext";
import { pickByShift } from "./sectionUtils";
import SceneBackdrop from "./SceneBackdrop";

export default function AfternoonSupport() {
  const { shift, isNight } = useShift();
  const data = pickByShift(dayInTheLifeData.afternoonSupport, shift);

  return (
    <section
      className={`relative py-16 sm:py-20 ${isNight ? "text-white" : ""}`}
    >
      <SceneBackdrop shift={shift} showOrb={false} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span
            className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 border ${isNight ? "bg-white/10 text-white border-white/20" : "bg-primary-gold/10 text-primary-gold border-transparent"}`}
          >
            <Icon
              name={isNight ? "moon" : "heart"}
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

        {/* Focus areas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {data.focusAreas?.map((f, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 border ${isNight ? "bg-white/10 border-white/20" : "bg-white border-slate-200/70"}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center ${isNight ? "bg-white/10 border border-white/20" : "bg-white shadow-sm border border-slate-200"}`}
                >
                  <Icon name={f.icon} className="w-5 h-5 text-primary-navy" />
                </div>
                <h3
                  className={`font-bold text-lg ${isNight ? "text-white" : "text-primary-navy"}`}
                >
                  {f.title}
                </h3>
              </div>
              <p className={`${isNight ? "text-slate-200" : "text-gray-600"}`}>
                {f.description}
              </p>
            </div>
          ))}
        </div>

        {/* Key skills */}
        {data.keySkills && (
          <div
            className={`rounded-2xl p-6 border ${isNight ? "bg-white/10 border-white/20" : "bg-white border-slate-200/70"}`}
          >
            <h4
              className={`text-xl font-bold mb-4 ${isNight ? "text-white" : "text-primary-navy"}`}
            >
              Key Skills
            </h4>
            <div className="flex flex-wrap gap-3">
              {data.keySkills.map((k, i) => (
                <span
                  key={i}
                  className={`px-4 py-2 rounded-full text-sm border ${isNight ? "bg-white/10 text-white border-white/20" : "bg-primary-gold/10 text-primary-navy border-primary-gold/20"}`}
                >
                  {k}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
