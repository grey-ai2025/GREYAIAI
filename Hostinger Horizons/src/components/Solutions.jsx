import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSearchParams } from 'react-router-dom';
import ApplyModal from './ApplyModal';

const solutions = [
  {
    id: 1,
    title: 'AI Literacy Assessment',
    product: 'Spark Score',
    description: 'Measure and benchmark AI readiness across your organization with comprehensive assessments.',
    roles: ['executives', 'hr', 'operations'],
    features: ['Team benchmarking', 'Skills gap analysis', 'Personalized reports'],
    link: 'https://b2cspark.greyai.ai',
    external: true,
  },
  {
    id: 2,
    title: 'Personalized AI Learning',
    product: 'Spark Path',
    description: 'Custom learning pathways that upskill your workforce based on their current AI literacy level.',
    roles: ['hr', 'operations'],
    features: ['Adaptive curriculum', 'Progress tracking', 'Certification'],
    link: 'https://yoursparkpath.com',
    external: true,
  },
  {
    id: 3,
    title: 'Team Analytics Dashboard',
    product: 'Spark X',
    description: 'Track AI adoption metrics and learning progress across departments with real-time analytics.',
    roles: ['executives', 'hr'],
    features: ['Department insights', 'ROI tracking', 'Custom reports'],
  },
  {
    id: 4,
    title: 'Executive AI Assistant',
    product: 'Exhale',
    description: 'Premium AI-powered assistant for busy executives managing family, calendar, and communications.',
    roles: ['executives'],
    features: ['Email management', 'Calendar sync', 'Daily briefings'],
    link: 'https://exhale.bot',
    external: true,
    featured: true,
  },
  {
    id: 5,
    title: 'Custom AI Assistants',
    product: 'AI Assistants',
    description: 'Tailored AI solutions built specifically for your workflows, processes, and business needs.',
    roles: ['executives', 'operations', 'finance'],
    features: ['Custom training', 'Workflow integration', 'Ongoing support'],
  },
  {
    id: 6,
    title: 'Digital Replicas',
    product: 'ECHO',
    description: 'Create digital replicas of your expertise and communication style for consistent messaging.',
    roles: ['executives', 'hr'],
    features: ['Voice matching', 'Knowledge integration', 'Multi-platform'],
  },
  {
    id: 7,
    title: 'Meeting Notes Automation',
    product: 'Meeting Notes to Tasks',
    description: 'Automatically convert meeting discussions into organized task lists with assignments.',
    roles: ['executives', 'operations', 'finance'],
    features: ['Transcription', 'Action items', 'Task assignment'],
  },
  {
    id: 8,
    title: 'CFO Automation Suite',
    product: 'Chief of Staff Agent',
    description: 'Comprehensive automation for financial leadership including reports, meetings, and priorities.',
    roles: ['executives', 'finance'],
    features: ['Report generation', 'Meeting prep', 'Data consolidation'],
  },
  {
    id: 9,
    title: 'Smart Email Triage',
    product: 'Email Intelligence',
    description: 'Intelligent email management with priority sorting, categorization, and draft responses.',
    roles: ['executives', 'operations'],
    features: ['Priority sorting', 'Auto-categorize', 'Draft responses'],
  },
  {
    id: 10,
    title: 'HR Onboarding Automation',
    product: 'Workflow Automator',
    description: 'Streamline employee onboarding with automated workflows, document collection, and training.',
    roles: ['hr'],
    features: ['Document workflows', 'Training automation', 'Compliance tracking'],
  },
  {
    id: 11,
    title: 'Financial Reporting Automation',
    product: 'Workflow Automator',
    description: 'Automate financial report generation, data consolidation, and distribution to stakeholders.',
    roles: ['finance'],
    features: ['Report generation', 'Data aggregation', 'Scheduled delivery'],
  },
  {
    id: 12,
    title: 'Operations Dashboard',
    product: 'Custom AI',
    description: 'Real-time operational insights with AI-powered anomaly detection and recommendations.',
    roles: ['operations'],
    features: ['Real-time monitoring', 'Anomaly alerts', 'Recommendations'],
  },
];

const roleFilters = [
  { id: 'all', label: 'All Solutions', icon: 'M4 6h16M4 12h16M4 18h16' },
  { id: 'executives', label: 'Executives', icon: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z' },
  { id: 'hr', label: 'HR Teams', icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' },
  { id: 'operations', label: 'Operations', icon: 'M12 6V4m0 2a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m-6 8a2 2 0 1 0 0-4m0 4a2 2 0 1 1 0-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 1 0 0-4m0 4a2 2 0 1 1 0-4m0 4v2m0-6V4' },
  { id: 'finance', label: 'Finance', icon: 'M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' },
];

export default function Solutions() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  useEffect(() => {
    const filter = searchParams.get('filter');
    if (filter && roleFilters.some(r => r.id === filter)) {
      setActiveFilter(filter);
    }
  }, [searchParams]);

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    if (filterId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ filter: filterId });
    }
  };

  const filteredSolutions = activeFilter === 'all'
    ? solutions
    : solutions.filter(s => s.roles.includes(activeFilter));

  const handleApply = (productName) => {
    setSelectedProduct(productName);
    setIsModalOpen(true);
  };

  const activeRole = roleFilters.find(r => r.id === activeFilter);

  return (
    <>
      <Helmet>
        <title>Solutions - Grey AI | AI Solutions for Every Role</title>
        <meta name="description" content="Discover how Grey AI's products apply to different roles in your organization. From executives to HR, operations to finance - find the right AI solution for your team." />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-96 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(173,251,246,0.15),transparent_70%)] pointer-events-none"></div>

          <div className="relative max-w-[1200px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gray-900 bg-[#ADFBF6]/20 rounded-md mb-6">
                Solutions
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Solutions for <span className="text-[#065A5C]">Every Role</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Discover how our AI products can transform the way you work, no matter your position in the organization.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="relative py-8 border-b border-black/10 bg-white/50 backdrop-blur-sm sticky top-[73px] z-40">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-3">
              {roleFilters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => handleFilterChange(filter.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg transition-all ${
                    activeFilter === filter.id
                      ? 'bg-[#ADFBF6] text-gray-900 shadow-md'
                      : 'bg-white text-gray-600 border border-black/10 hover:border-[#ADFBF6] hover:text-gray-900'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={filter.icon} />
                  </svg>
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="relative py-16">
          <div className="max-w-[1200px] mx-auto px-6">
            {/* Results Header */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                {activeFilter === 'all' ? 'All Solutions' : `Solutions for ${activeRole?.label}`}
              </h2>
              <p className="text-gray-500 mt-1">
                {filteredSolutions.length} solution{filteredSolutions.length !== 1 ? 's' : ''} available
              </p>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSolutions.map((solution) => (
                <div
                  key={solution.id}
                  className={`relative bg-white border rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                    solution.featured
                      ? 'border-[#ADFBF6] bg-gradient-to-br from-white to-[#ADFBF6]/5'
                      : 'border-black/10'
                  }`}
                >
                  {solution.featured && (
                    <span className="absolute -top-3 left-6 px-3 py-1 text-xs font-semibold uppercase bg-[#ADFBF6] text-gray-900 rounded-full">
                      Featured
                    </span>
                  )}

                  <div className="mb-4">
                    <span className="inline-block px-2.5 py-1 text-xs font-medium text-[#065A5C] bg-[#ADFBF6]/15 rounded-md">
                      {solution.product}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{solution.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                        <svg className="w-4 h-4 text-[#ADFBF6] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Applicable Roles */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {solution.roles.map((role) => {
                      const roleInfo = roleFilters.find(r => r.id === role);
                      return (
                        <span
                          key={role}
                          className="px-2 py-0.5 text-xs text-gray-500 bg-gray-100 rounded"
                        >
                          {roleInfo?.label}
                        </span>
                      );
                    })}
                  </div>

                  {/* CTA */}
                  {solution.external ? (
                    <a
                      href={solution.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-900 bg-[#ADFBF6] rounded-lg hover:shadow-md transition-all"
                    >
                      Learn More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <button
                      onClick={() => handleApply(solution.product)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-all"
                    >
                      Request Demo
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  )}
                </div>
              ))}
            </div>

            {filteredSolutions.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">No solutions found for this filter.</p>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Apply Modal */}
      <ApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
      />
    </>
  );
}
