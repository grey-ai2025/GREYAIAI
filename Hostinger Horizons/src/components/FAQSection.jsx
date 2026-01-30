import React, { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What is SPARK Score and how does it work?',
      answer: 'SPARK Score is our comprehensive AI literacy assessment that evaluates your team\'s understanding and readiness for AI adoption. It provides a personalized score with a detailed PDF report highlighting strengths, areas for improvement, and recommended learning paths.'
    },
    {
      question: 'How long does the assessment take?',
      answer: 'The SPARK Score assessment typically takes 15-20 minutes to complete. Results are generated instantly, and you\'ll receive your detailed PDF report within minutes of completion.'
    },
    {
      question: 'Can Grey AI integrate with our existing tools?',
      answer: 'Yes, our AI agents are designed to integrate seamlessly with popular platforms including Gmail, Slack, Notion, Asana, and many more. We also offer custom integrations for enterprise clients with specific requirements.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'All our products include dedicated support. AI agents come with maintenance periods (30-60 days depending on the agent), and enterprise clients receive priority support with dedicated account managers.'
    },
    {
      question: 'Is my data secure with Grey AI?',
      answer: 'Absolutely. We follow enterprise-grade security practices including data encryption, SOC 2 compliance, and strict access controls. Your data is never used to train external models and remains completely confidential.'
    },
    {
      question: 'How do I get started?',
      answer: 'Getting started is easy. You can take the free SPARK Score assessment to understand your current AI literacy level, or contact our team for a personalized consultation about custom AI solutions for your organization.'
    }
  ];

  return (
    <section className="relative z-10 py-24 bg-[#0a0a0f]">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(173,251,246,0.1),transparent_60%)] pointer-events-none"></div>

      <div className="relative max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#ADFBF6] bg-[#ADFBF6]/10 rounded-md mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400">
            Everything you need to know about Grey AI and our products.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-xl overflow-hidden transition-all ${
                openIndex === index
                  ? 'border-[#ADFBF6]/30 bg-white/[0.03]'
                  : 'border-white/10 bg-transparent hover:border-white/20'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className={`font-medium pr-4 ${openIndex === index ? 'text-white' : 'text-gray-300'}`}>
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all ${
                  openIndex === index
                    ? 'bg-[#ADFBF6] text-gray-900 rotate-180'
                    : 'bg-white/10 text-gray-400'
                }`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-5 pb-5 text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#ADFBF6] text-gray-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-[#ADFBF6]/30 hover:-translate-y-0.5 transition-all"
          >
            Contact Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
