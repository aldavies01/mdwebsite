// src/pages/NewDevelopmentsPage.jsx
import { useState } from "react";
import Icon from "../components/common/Icon";
import {
  hero,
  upcomingDevelopments,
  innovations,
  timeline,
} from "../data/new-developments.content";

// 100% Tailwind-safe mappings (no runtime string concatenation)
const STATUS_BADGE = {
  "Planning Phase": "bg-blue-100 text-blue-800",
  "Development Phase": "bg-purple-100 text-purple-800",
  "Site Acquisition": "bg-yellow-100 text-yellow-800",
  "Property Search": "bg-orange-100 text-orange-800",
  "Pilot Phase": "bg-green-100 text-green-800",
  "Testing Phase": "bg-indigo-100 text-indigo-800",
  Implementation: "bg-emerald-100 text-emerald-800",
  "Implementation Phase": "bg-emerald-100 text-emerald-800",
  Development: "bg-cyan-100 text-cyan-800",
  Completed: "bg-green-100 text-green-800",
  "Building Phase": "bg-rose-100 text-rose-800",
};

const CATEGORY_TEXT = {
  Residential: "text-secondary-coral",
  "Specialist Care": "text-primary-navy",
  Innovation: "text-secondary-purple",
  Community: "text-secondary-teal",
  Expansion: "text-primary-gold",
};

const CATEGORY_BG_FADE = {
  Residential: "from-secondary-coral/20",
  "Specialist Care": "from-primary-navy/20",
  Innovation: "from-secondary-purple/20",
  Community: "from-secondary-teal/20",
  Expansion: "from-primary-gold/20",
};

export default function NewDevelopmentsPage() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative bg-primary-navy text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary-gold rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-secondary-coral rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary-teal rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-secondary-purple rounded-full animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="inline-block bg-primary-gold/20 text-primary-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
                {hero.badge}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {hero.titleMain} <br />
                <span className="text-primary-gold">{hero.titleHighlight}</span>
              </h1>
              <div className="space-y-6 text-lg text-white/90 leading-relaxed">
                {hero.blurb.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                {hero.stats.map((s, i) => (
                  <div
                    key={i}
                    className="text-center bg-white/10 rounded-xl p-4"
                  >
                    <div className="text-2xl font-bold text-primary-gold">
                      {s.value}
                    </div>
                    <div className="text-xs text-white/80">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="relative">
              <div className="relative h-80 lg:h-[500px] bg-gray-200 rounded-2xl overflow-hidden">
                {!imageError ? (
                  <img
                    src={hero.heroImage}
                    alt="New Developments"
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/20 to-secondary-coral/20 flex items-center justify-center">
                    <div className="text-center text-gray-100">
                      <Icon
                        name="building"
                        className="w-20 h-20 mx-auto mb-4"
                      />
                      <p className="text-lg font-medium">New Developments</p>
                      <p className="text-sm">Coming Soon</p>
                    </div>
                  </div>
                )}

                {!imageError && (
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="text-center text-white">
                      <p className="text-2xl font-bold mb-2">
                        New Developments
                      </p>
                      <p className="text-lg">Coming Soon</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Developments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-secondary-coral/10 text-secondary-coral px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Coming Soon
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-navy mb-6 leading-tight">
              Upcoming <br />
              <span className="text-secondary-coral">Developments</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our ambitious expansion plans include new facilities, innovative
              technologies, and enhanced services designed to meet the evolving
              needs of our community.
            </p>
          </div>

          <div className="space-y-8">
            {upcomingDevelopments.map((dev, index) => {
              const statusClass =
                STATUS_BADGE[dev.status] || "bg-gray-100 text-gray-800";
              const categoryText =
                CATEGORY_TEXT[dev.category] || "text-primary-navy";
              const bgFade =
                CATEGORY_BG_FADE[dev.category] || "from-primary-navy/20";

              return (
                <div
                  key={dev.id}
                  className={`relative ${index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"}`}
                >
                  <div
                    className={`grid lg:grid-cols-2 gap-12 items-center ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content */}
                    <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 p-8">
                        {/* Badges */}
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${statusClass}`}
                          >
                            {dev.status}
                          </span>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 ${categoryText} bg-opacity-0`}
                          >
                            {dev.category}
                          </span>
                          <span className="text-sm text-gray-500 font-medium">
                            Opening: {dev.openingDate}
                          </span>
                        </div>

                        {/* Title + Location */}
                        <h3 className="text-2xl font-bold text-primary-navy mb-2">
                          {dev.title}
                        </h3>
                        <div className="flex items-center text-gray-600 mb-4">
                          <Icon name="map-pin" className="w-4 h-4 mr-2" />
                          {dev.location}
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {dev.description}
                        </p>

                        {/* Features */}
                        {dev.features?.length > 0 && (
                          <div className="mb-6">
                            <h4 className="font-semibold text-primary-navy mb-3">
                              Key Features:
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-2">
                              {dev.features.map((f, i) => (
                                <div key={i} className="flex items-start">
                                  <div className="w-2 h-2 bg-secondary-coral rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  <span className="text-sm text-gray-600">
                                    {f}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                          <div>
                            <div className="text-lg font-bold text-primary-navy">
                              {dev.capacity}
                            </div>
                            <div className="text-xs text-gray-500">
                              Capacity
                            </div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-primary-navy">
                              {dev.uspValue}
                            </div>
                            <div className="text-xs text-gray-500">
                              {dev.usp}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Visual */}
                    <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                      <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg bg-gray-200">
                        {dev.image ? (
                          <img
                            src={dev.image}
                            alt={dev.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                        ) : null}

                        {/* Fallback / Overlay */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${bgFade} to-primary-navy/20 flex items-center justify-center`}
                        >
                          <div className="text-center text-white">
                            <Icon
                              name={dev.icon || "building"}
                              className="w-16 h-16 mx-auto mb-4 opacity-90"
                            />
                            <p className="text-sm font-medium">{dev.title}</p>
                            <p className="text-xs opacity-90">{dev.location}</p>
                          </div>
                        </div>

                        {/* Priority Flag */}
                        {dev.priority === "High" && (
                          <div className="absolute top-4 right-4">
                            <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                              High Priority
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Innovation & Technology */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-secondary-light-blue/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-secondary-purple/10 text-secondary-purple px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Innovation Hub
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-navy mb-6 leading-tight">
              Technology & <br />
              <span className="text-secondary-purple">Innovation</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're pioneering the use of cutting-edge technology to enhance
              care quality, improve outcomes, and create more inclusive,
              accessible support services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {innovations.map((it, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary-navy/10 rounded-2xl mb-6">
                  <Icon name={it.icon} className="w-8 h-8 text-primary-navy" />
                </div>
                <h3 className="text-xl font-bold text-primary-navy mb-3">
                  {it.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {it.description}
                </p>
                <div
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    STATUS_BADGE[it.status] || "bg-gray-100 text-gray-800"
                  }`}
                >
                  {it.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary-gold/10 text-primary-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Development Timeline
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-navy mb-6 leading-tight">
              Our Development <br />
              <span className="text-primary-gold">Roadmap</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Track our progress as we bring these exciting new developments to
              life over the coming months and years.
            </p>
          </div>

          <div className="relative">
            {/* Vertical line (desktop) */}
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-gold via-secondary-coral via-secondary-teal to-primary-navy rounded-full hidden lg:block"></div>

            <div className="space-y-12">
              {timeline.map((m, i) => {
                const dev = upcomingDevelopments.find((d) => d.id === m.devId);

                return (
                  <div
                    key={i}
                    className="relative flex flex-col lg:flex-row items-center"
                  >
                    {/* Timeline dot w/ icon */}
                    <div className="absolute left-1/2 -translate-x-1/2 z-20 hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-primary-navy shadow-lg">
                      <Icon
                        name={dev?.icon || "calendar"}
                        className={`w-6 h-6 text-${m.color}`}
                      />
                    </div>

                    {/* Card */}
                    <div
                      className={`w-full lg:w-1/2 ${
                        i % 2 === 0
                          ? "lg:pr-12 lg:text-right"
                          : "lg:pl-12 lg:ml-auto"
                      }`}
                    >
                      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        {/* Period badge */}
                        <div
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-${m.color}/10 text-${m.color}`}
                        >
                          {m.period}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-primary-navy mb-2">
                          {dev?.title}
                        </h3>

                        {/* Description */}
                        {dev?.description && (
                          <p className="text-gray-600 text-sm leading-relaxed mb-3">
                            {dev.description}
                          </p>
                        )}

                        {/* Status badge */}
                        {dev?.status && (
                          <span
                            className={`inline-block px-2 py-1 text-xs rounded-full font-semibold ${
                              STATUS_BADGE[dev.status] ||
                              "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {dev.status}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile timeline markers */}
          <div className="mt-12 space-y-6 lg:hidden">
            {timeline.map((m, i) => {
              const dev = upcomingDevelopments.find((d) => d.id === m.devId);

              return (
                <div
                  key={`mobile-${i}`}
                  className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg shadow-sm"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border-2 border-primary-navy flex items-center justify-center shadow-md">
                    <Icon
                      name={dev?.icon || "calendar"}
                      className={`w-5 h-5 text-${m.color}`}
                    />
                  </div>
                  <div>
                    <div
                      className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold mb-2 bg-${m.color}/10 text-${m.color}`}
                    >
                      {m.period}
                    </div>
                    <h4 className="font-semibold text-primary-navy">
                      {dev?.title}
                    </h4>
                    {dev?.description && (
                      <p className="text-sm text-gray-600 mt-1">
                        {dev.description}
                      </p>
                    )}
                    {dev?.status && (
                      <span
                        className={`mt-2 inline-block px-2 py-0.5 text-xs rounded-full font-semibold ${
                          STATUS_BADGE[dev.status] ||
                          "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {dev.status}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-navy text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Stay Updated on Our Progress
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Want to be the first to know about our new developments, upcoming
            facilities, and innovative programs? Join our community updates or
            get in touch to learn more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary-gold text-primary-navy px-8 py-4 rounded-xl font-semibold hover:bg-primary-gold/90 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get in Touch
            </a>
            <a
              href="/news"
              className="bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-navy transition-all duration-300"
            >
              Latest News
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
