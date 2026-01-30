import React from 'react';

export default function StatsSection() {
  const stats = [
    {
      value: '500+',
      label: 'Assessments Completed',
      description: 'AI literacy evaluations delivered'
    },
    {
      value: '85%',
      label: 'Productivity Increase',
      description: 'Average improvement reported'
    },
    {
      value: '50+',
      label: 'Enterprise Clients',
      description: 'Organizations transformed'
    },
    {
      value: '24/7',
      label: 'AI Support',
      description: 'Always-on automation'
    }
  ];

  return (
    <section className="relative z-10 py-20 bg-[#0a0a0f]">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(173,251,246,0.15),transparent_60%)] pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#ADFBF6] bg-[#ADFBF6]/10 rounded-md mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Driving Real Results
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Organizations trust Grey AI to transform their workforce and unlock the power of artificial intelligence.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative p-6 bg-white/[0.03] border border-white/10 rounded-2xl text-center hover:border-[#ADFBF6]/30 hover:-translate-y-1 transition-all group"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#ADFBF6] mb-2 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-white font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
