// src/components/benefits/FAQSection.jsx
import { useState } from "react";
import { benefitsData } from "../../data/careers.benefits";
import Icon from "../common/Icon";

function FAQItem({ faq, index, isOpen, onToggle }) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full text-left p-6 hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
      >
        <h3 className="text-lg font-semibold text-primary-navy pr-4">
          {faq.question}
        </h3>
        <div
          className={`flex-shrink-0 w-6 h-6 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <Icon
            name="chevron-right"
            className={`w-6 h-6 transition-colors duration-200 ${
              isOpen ? "text-secondary-coral" : "text-gray-400"
            }`}
          />
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-0">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const { faq } = benefitsData;

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-secondary-teal/10 text-secondary-teal px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Icon name="lightbulb" className="w-4 h-4 mr-2 inline" />
            Questions & Answers
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-navy mb-6 leading-tight">
            Benefits <span className="text-secondary-coral">FAQ</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Got questions about our benefits package? Here are answers to the
            most common questions our team members ask.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-12">
          {faq.map((item, index) => (
            <FAQItem
              key={index}
              faq={item}
              index={index}
              isOpen={openFAQ === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>

        {/* Additional Help Section */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 text-center">
          <div className="w-16 h-16 bg-secondary-coral/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="users" className="w-8 h-8 text-secondary-coral" />
          </div>

          <h3 className="text-xl font-bold text-primary-navy mb-4">
            Still Have Questions?
          </h3>

          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Our HR team is always happy to discuss benefits in more detail. No
            question is too small!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:careers@mdcare.co.uk"
              className="inline-flex items-center gap-2 bg-secondary-coral hover:bg-secondary-coral/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <Icon name="mail" className="w-4 h-4" />
              Email Our HR Team
            </a>

            <a
              href="tel:01234567890"
              className="inline-flex items-center gap-2 bg-white border border-gray-300 hover:border-secondary-coral text-primary-navy hover:text-secondary-coral px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              <Icon name="phone" className="w-4 h-4" />
              Call Us Today
            </a>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              <strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
