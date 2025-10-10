// src/components/referrals/MeetTheReferralTeam.jsx
function MeetTheReferralTeam() {
  return (
    <section className="py-14 sm:py-18 lg:py-24 bg-gradient-to-br from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block bg-primary-gold/10 text-primary-gold px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold mb-5 sm:mb-8 shadow-sm">
            Meet the Team
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-navy mb-3 sm:mb-6 leading-tight">
            Business Development <br className="hidden sm:block" />
            <span className="text-secondary-coral">Team</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
            Our dedicated specialists guide you through every step of the
            placement process with expertise and care.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Abbi */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-500 p-6 sm:p-8 lg:p-10 flex flex-col text-center group hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-100/50">
            <div className="relative mb-10 sm:mb-12">
              <img
                src="/images/team/abbi.jpg"
                alt="Portrait of Abbi Bevan"
                className="w-28 h-28 sm:w-36 sm:h-36 lg:w-48 lg:h-48 object-cover rounded-full mx-auto shadow-lg ring-2 sm:ring-4 ring-primary-gold/20 group-hover:ring-primary-gold/40 transition-all duration-300"
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary-gold text-primary-navy px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold shadow-md sm:shadow-lg">
                Director
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-primary-navy mb-2 sm:mb-3 group-hover:text-secondary-coral transition-colors duration-300">
              Abbi Bevan
            </h3>
            <p className="text-primary-gold font-semibold text-base sm:text-lg mb-5 sm:mb-6 tracking-wide">
              Director of Business Development
            </p>

            <div className="bg-gradient-to-br from-gray-50 to-primary-gold/5 rounded-xl sm:rounded-2xl p-5 sm:p-6 text-left">
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                Abbi has worked in Social Care for over 10 years, starting her
                journey as a Support Worker before progressing to Director.
              </p>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                Abbi has continued to build her professional knowledge,
                achieving her QCF Level 5, completing the ILM programme in
                Leadership in Management and most recently, a Postgraduate
                Diploma in Business Development.
              </p>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed italic border-l-4 border-primary-gold pl-3 sm:pl-4">
                "I'm passionate about ensuring every placement is the right fit
                for the person. My commitment is to create environments that not
                only meet people's needs but are also true homes where people
                feel valued, supported and secure."
              </p>
            </div>
          </div>

          {/* Max */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-500 p-6 sm:p-8 lg:p-10 flex flex-col text-center group hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-100/50">
            <div className="relative mb-10 sm:mb-12">
              <img
                src="/images/team/max.jpg"
                alt="Portrait of Max Cusack"
                className="w-28 h-28 sm:w-36 sm:h-36 lg:w-48 lg:h-48 object-cover rounded-full mx-auto shadow-lg ring-2 sm:ring-4 ring-secondary-coral/20 group-hover:ring-secondary-coral/40 transition-all duration-300"
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-secondary-coral text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold shadow-md sm:shadow-lg">
                Head
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-primary-navy mb-2 sm:mb-3 group-hover:text-secondary-coral transition-colors duration-300">
              Max Cusack
            </h3>
            <p className="text-secondary-coral font-semibold text-base sm:text-lg mb-5 sm:mb-6 tracking-wide">
              Head of Business Development
            </p>

            <div className="bg-gradient-to-br from-gray-50 to-secondary-coral/5 rounded-xl sm:rounded-2xl p-5 sm:p-6 text-left">
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                Max began his career in the PBS Department before moving into
                Business Development, after completing BA &amp; MSc studies.
              </p>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                Max has worked in Social Care since leaving university, where he
                completed a BA in Business Management, an MSc in Psychology and
                an MSc in Applied Behaviour Analysis.
              </p>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed italic border-l-4 border-secondary-coral pl-3 sm:pl-4">
                "I'm especially passionate about supporting people to move away
                from more restrictive hospital settings, enabling them to return
                to the community in placements that enhance quality of life and
                open up opportunities for further progression."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MeetTheReferralTeam;
