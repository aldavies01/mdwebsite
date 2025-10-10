// components/PBS/PBSTeamStructureSection.jsx
import { teamStructure } from "../../data/pbs.details";

function PBSTeamStructureSection() {
  return (
    <section className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-navy mb-6">
            Our <span className="text-secondary-coral">PBS Team Structure</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            A dedicated, qualified team working together to provide exceptional
            PBS support at every level.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamStructure.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`h-4 ${member.color}`}></div>
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-bold text-primary-navy mb-3">
                  {member.role}
                </h3>
                {member.name && (
                  <p className="text-secondary-coral font-semibold mb-3">
                    {member.name}
                  </p>
                )}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>

                {member.role === "PBS Coordinators" && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-xs text-secondary-teal">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                      </svg>
                      <span>QCF Level 4 Qualified</span>
                    </div>
                  </div>
                )}

                {member.role === "Support Staff" && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-xs text-secondary-teal">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                      </svg>
                      <span>PBS Level 3 Training</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PBSTeamStructureSection;
