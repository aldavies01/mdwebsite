import React from "react";
import { motion } from "framer-motion";
import { dayInTheLifeData } from "../../data/careers.dayInTheLife";
import Icon from "../common/Icon";
import { useShift } from "./ShiftContext";
import { pickByShift } from "./sectionUtils";
import SceneBackdrop from "./SceneBackdrop";

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function MorningRoutine() {
  const { shift, isNight } = useShift();
  const morningRoutine = pickByShift(dayInTheLifeData.morningRoutine, shift);

  return (
    <section
      className={`relative py-20 sm:py-24 overflow-hidden ${isNight ? "text-white" : ""}`}
    >
      <SceneBackdrop shift={shift} showOrb={false} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeIn}
          className="text-center mb-14"
        >
          <span
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border shadow-sm ${isNight ? "bg-white/10 text-white border-white/20" : "bg-white/70 text-primary-navy border-white/60 backdrop-blur"}`}
          >
            <Icon name={isNight ? "moon" : "sunrise"} className="w-4 h-4" />
            {morningRoutine.time}
          </span>
          <h2
            className={`mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight ${isNight ? "text-white" : "text-primary-navy"}`}
          >
            <span
              className={`bg-clip-text text-transparent ${isNight ? "bg-gradient-to-r from-white via-indigo-200 to-fuchsia-200" : "bg-gradient-to-r from-primary-navy via-secondary-purple to-secondary-coral"}`}
            >
              {morningRoutine.title}
            </span>
          </h2>
          <p
            className={`mt-4 text-lg sm:text-xl ${isNight ? "text-slate-300" : "text-slate-600"} max-w-3xl mx-auto leading-relaxed`}
          >
            {morningRoutine.description}
          </p>
        </motion.div>

        {/* Activities Timeline */}
        <div className="space-y-8 mb-12">
          {morningRoutine.activities?.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className={`rounded-2xl overflow-hidden transition-all duration-300 border ${
                isNight
                  ? "bg-white/10 border-white/20 shadow-[0_8px_30px_rgba(255,255,255,0.06)]"
                  : "bg-white border-slate-200/70 shadow-[0_8px_30px_rgba(2,6,23,0.06)]"
              }`}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Time Badge */}
                <div
                  className={`${isNight ? "bg-gradient-to-br from-indigo-500/30 to-purple-500/30" : "bg-gradient-to-br from-secondary-coral to-secondary-coral/90"} text-white p-6 lg:p-8 flex items-center justify-center lg:w-48`}
                >
                  <div className="text-center">
                    <Icon
                      name={activity.icon}
                      className="w-8 h-8 mx-auto mb-2"
                    />
                    <div className="text-2xl font-bold">{activity.time}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 lg:p-8">
                  <h3
                    className={`text-xl sm:text-2xl font-bold ${isNight ? "text-white" : "text-primary-navy"} mb-3`}
                  >
                    {activity.title}
                  </h3>
                  <p
                    className={`${isNight ? "text-slate-200" : "text-gray-600"} mb-4 leading-relaxed`}
                  >
                    {activity.description}
                  </p>

                  {/* Quote */}
                  {activity.quote && (
                    <div
                      className={`${isNight ? "bg-white/10 border-white/30" : "bg-secondary-coral/5 border-secondary-coral"} border-l-4 rounded-r-lg p-4`}
                    >
                      <div className="flex items-start gap-2">
                        <Icon
                          name="quote"
                          className={`w-5 h-5 ${isNight ? "text-indigo-200" : "text-secondary-coral"} flex-shrink-0 mt-1`}
                        />
                        <div>
                          <p
                            className={`${isNight ? "text-white/90" : "text-gray-700"} italic`}
                          >
                            {activity.quote}
                          </p>
                          {/* <p
                            className={`${isNight ? "text-indigo-200" : "text-secondary-coral"} font-semibold mt-2 text-sm`}
                          >
                            - Emma
                          </p> */}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Highlights */}
        <div
          className={`relative rounded-3xl p-8 sm:p-10 overflow-hidden ${isNight ? "text-white" : "text-white"}`}
        >
          <div
            aria-hidden
            className={`absolute inset-0 ${isNight ? "bg-gradient-to-br from-slate-800 via-slate-900 to-black" : "bg-gradient-to-br from-primary-navy via-primary-navy/95 to-primary-navy"}`}
          />
          <div className="relative">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">
              {isNight
                ? "Night Principles We Live By"
                : "Morning Principles We Live By"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {morningRoutine.highlights?.map((highlight, index) => (
                <div
                  key={index}
                  className="relative rounded-2xl bg-white/10 border border-white/15 backdrop-blur p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-primary-gold flex items-center justify-center flex-shrink-0 mt-1 shadow">
                      <Icon
                        name="check"
                        className="w-4 h-4 text-primary-navy"
                      />
                    </div>
                    <p className="text-white/90 leading-relaxed">{highlight}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
