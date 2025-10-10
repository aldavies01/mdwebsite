// src/components/quality/QualityMeasures.jsx
import { qualityData } from "../../data/quality.details";
import Icon from "../common/Icon";

export default function QualityMeasures() {
  const { measures } = qualityData;

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Quality Performance Dashboard
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Annual performance overview across all service areas
          </p>
        </div>

        {/* Dashboard Container */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Dashboard Header */}
          <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700">
                  Quality Overview
                </span>
                <span className="text-xs text-gray-500">
                  Annual Performance Summary
                </span>
              </div>
              <div className="text-xs text-gray-500">
                Period: 2024 Annual Report
              </div>
            </div>
          </div>

          {/* Key Metrics Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-gray-200">
            <div className="p-6 border-r border-gray-200">
              <div className="text-2xl font-bold text-gray-900 mb-1">95.8%</div>
              <div className="text-sm text-gray-600 mb-2">
                Service User Satisfaction
              </div>
              <div className="flex items-center gap-1">
                <Icon name="trending-up" className="w-3 h-3 text-green-500" />
                <span className="text-xs text-green-600">Above target</span>
              </div>
            </div>

            <div className="p-6 border-r border-gray-200">
              <div className="text-2xl font-bold text-gray-900 mb-1">100%</div>
              <div className="text-sm text-gray-600 mb-2">
                SCW Registrations
              </div>
              <div className="flex items-center gap-1">
                <Icon name="check-circle" className="w-3 h-3 text-green-500" />
                <span className="text-xs text-green-600">Target achieved</span>
              </div>
            </div>

            <div className="p-6 border-r border-gray-200 lg:border-r-0">
              <div className="text-2xl font-bold text-gray-900 mb-1">98.2%</div>
              <div className="text-sm text-gray-600 mb-2">
                Training Completion
              </div>
              <div className="flex items-center gap-1">
                <Icon name="trending-up" className="w-3 h-3 text-green-500" />
                <span className="text-xs text-green-600">Above target</span>
              </div>
            </div>

            <div className="p-6 col-span-2 lg:col-span-1 border-r border-gray-200 lg:border-r-0">
              <div className="text-2xl font-bold text-gray-900 mb-1">100%</div>
              <div className="text-sm text-gray-600 mb-2">
                Regulatory Compliance
              </div>
              <div className="flex items-center gap-1">
                <Icon name="shield-check" className="w-3 h-3 text-green-500" />
                <span className="text-xs text-green-600">
                  All standards met
                </span>
              </div>
            </div>
          </div>

          {/* Detailed Metrics */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {measures.categories.map((category, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Icon
                        name={category.icon}
                        className="w-4 h-4 text-blue-600"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-2">
                    {category.metrics.map((metric, metricIndex) => (
                      <div
                        key={metricIndex}
                        className="flex items-center justify-between py-1"
                      >
                        <span className="text-sm text-gray-600">{metric}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-xs text-gray-500">
                            Achieved
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Status Bar */}
          <div className="bg-gray-50 border-t border-gray-200 px-6 py-3">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center gap-4">
                <span>Source: Annual Quality Report 2024</span>
                <span>•</span>
                <span>Verified by independent audit</span>
              </div>
              <div className="flex items-center gap-2">
                <span>CIW Outstanding Rating Achieved</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            This overview presents our verified annual quality performance
            across all service areas. All data is independently audited and
            forms part of our regulatory reporting.
          </p>
        </div>
      </div>
    </section>
  );
}
