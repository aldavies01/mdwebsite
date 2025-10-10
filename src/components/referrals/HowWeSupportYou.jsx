function HowWeSupportYou() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-secondary-light-blue/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-secondary-teal/10 text-secondary-teal px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Support Throughout Your Journey
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-navy mb-6 leading-tight">
            How We <span className="text-secondary-teal">Support You</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We know that finding a first placement—or moving to a new one—can be
            both exciting and daunting. That’s why Abbi and Max will be your
            dedicated points of contact throughout the entire assessment and
            pre-placement stage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Step 1 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-gold/20 flex items-center justify-center">
              <span className="text-primary-gold text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold text-primary-navy mb-4">
              Dedicated Contacts
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Abbi & Max guide you from the very first conversation, ensuring a
              smooth and personal process.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary-coral/20 flex items-center justify-center">
              <span className="text-secondary-coral text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold text-primary-navy mb-4">
              Collaborative Assessment
            </h3>
            <p className="text-gray-600 leading-relaxed">
              You’ll meet Area Managers, Service Managers, and PBS Practitioners
              where needed — all working together to assess needs fully.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary-purple/20 flex items-center justify-center">
              <span className="text-secondary-purple text-2xl font-bold">
                3
              </span>
            </div>
            <h3 className="text-xl font-bold text-primary-navy mb-4">
              Ongoing Support
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Even after placement, the BD Team stays involved for around a
              month, ensuring a supported and seamless transition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowWeSupportYou;
