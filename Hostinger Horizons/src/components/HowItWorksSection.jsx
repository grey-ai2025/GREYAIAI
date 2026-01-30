import React from 'react';

export default function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Assess',
      description: 'We evaluate your team\'s current AI literacy and identify skill gaps with our SPARK Score assessment.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: '02',
      title: 'Learn',
      description: 'Personalized learning paths through SPARK Path help your team build practical AI skills at their own pace.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: '03',
      title: 'Implement',
      description: 'Deploy custom AI assistants and automation agents tailored to your specific business workflows.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: '04',
      title: 'Scale',
      description: 'Monitor progress with analytics dashboards and continuously expand AI adoption across your organization.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="relative z-10 py-24">
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gray-900 bg-[#ADFBF6]/30 rounded-md mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Journey to AI Excellence
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A proven four-step process to transform your organization's AI capabilities.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-full h-[2px] bg-gradient-to-r from-[#ADFBF6] to-transparent"></div>
              )}

              <div className="relative bg-white border border-black/10 rounded-2xl p-6 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all">
                {/* Step Number */}
                <div className="absolute -top-4 left-6 px-3 py-1 bg-[#ADFBF6] text-gray-900 text-sm font-bold rounded-full">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center bg-[#ADFBF6]/10 text-[#065A5C] rounded-xl mb-4 mt-2">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
