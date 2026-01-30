import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import ApplyModal from './ApplyModal';

const Products = forwardRef((props, ref) => {
  const [activeTab, setActiveTab] = useState('literacy');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  useImperativeHandle(ref, () => ({
    setActiveTab: (tab) => {
      setActiveTab(tab);
    }
  }));

  const handleApply = (productName) => {
    setSelectedProduct(productName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct('');
  };

  // Handle hash-based tab switching
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#products-literacy') {
        setActiveTab('literacy');
        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
      } else if (hash === '#products-custom') {
        setActiveTab('custom');
        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
      } else if (hash === '#products-agents') {
        setActiveTab('agents');
        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Check hash on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <section id="products" className="relative z-10 py-24 px-5 bg-[#0a0a0a] text-white">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      {/* Cyan Blobs at Top */}
      <div className="absolute top-0 left-0 right-0 h-72 bg-[radial-gradient(ellipse_60%_40%_at_30%_0%,rgba(173,251,246,0.12),transparent_60%),radial-gradient(ellipse_50%_35%_at_70%_0%,rgba(173,251,246,0.08),transparent_60%)] pointer-events-none"></div>

      <div className="relative max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white bg-[#ADFBF6]/10 rounded-md mb-4">
            Products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your AI Solution</h2>
          <p className="text-gray-400">Three product suites designed for different needs and maturity levels</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2 p-2 bg-white/5 border border-white/15 rounded-2xl">
            <button
              onClick={() => setActiveTab('literacy')}
              className={`flex items-center gap-2.5 px-5 py-3 text-sm font-medium rounded-xl transition-all ${
                activeTab === 'literacy'
                  ? 'bg-white/15 text-white border border-white/20 shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="w-7 h-7 flex items-center justify-center bg-[#ADFBF6]/15 text-[#ADFBF6] rounded-md">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
              </span>
              AI Literacy
            </button>
            <button
              onClick={() => setActiveTab('custom')}
              className={`flex items-center gap-2.5 px-5 py-3 text-sm font-medium rounded-xl transition-all ${
                activeTab === 'custom'
                  ? 'bg-white/15 text-white border border-white/20 shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="w-7 h-7 flex items-center justify-center bg-[#ADFBF6]/15 text-[#ADFBF6] rounded-md">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </span>
              Custom AI
            </button>
            <button
              onClick={() => setActiveTab('agents')}
              className={`flex items-center gap-2.5 px-5 py-3 text-sm font-medium rounded-xl transition-all ${
                activeTab === 'agents'
                  ? 'bg-white/15 text-white border border-white/20 shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="w-7 h-7 flex items-center justify-center bg-[#ADFBF6]/15 text-[#ADFBF6] rounded-md">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M9 12h6M12 9v6"/>
                </svg>
              </span>
              AI Agents
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'literacy' && <AILiteracyTab onApply={handleApply} />}
        {activeTab === 'custom' && <CustomAITab onApply={handleApply} />}
        {activeTab === 'agents' && <AIAgentsTab onApply={handleApply} />}
      </div>

      {/* Apply Modal */}
      <ApplyModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </section>
  );
});

Products.displayName = 'ProductsSection';

function AILiteracyTab({ onApply }) {
  return (
    <div className="animate-fadeIn">
      {/* Tab Header */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">AI Literacy & Assessment</h3>
        <p className="text-gray-400">Measure, understand, and develop AI capabilities across your organization.</p>
      </div>

      {/* Product Cards Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        <ProductCard
          badge="Assessment"
          title="SPARK Score™"
          description="Comprehensive AI literacy assessment with personalized score and detailed PDF report."
          features={['AI literacy assessment', 'Personalized score', 'Detailed PDF report']}
          buttonText="Take Assessment"
          buttonLink="https://b2cspark.greyai.ai"
          external={true}
        />
        <ProductCard
          badge="Learning"
          title="SPARK Path™"
          description="Personalized AI learning pathway based on your assessment results."
          features={['Personalized curriculum', 'Progress tracking', 'Practical exercises']}
          buttonText="Start Learning"
          buttonLink="https://yoursparkpath.com"
          external={true}
        />
        <ProductCard
          badge="Analytics"
          title="SPARK X™"
          description="Advanced analytics dashboard for tracking AI literacy across teams."
          features={['Team analytics', 'Progress dashboards', 'Custom reports']}
          buttonText="Request Demo"
          onApply={() => onApply('Spark X')}
        />
      </div>
    </div>
  );
}

function CustomAITab({ onApply }) {
  return (
    <div className="animate-fadeIn">
      {/* Tab Header */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">Bespoke AI Solutions</h3>
        <p className="text-gray-400">From luxury AI executives to custom assistants tailored to your needs.</p>
      </div>

      {/* Featured Card - Exhale */}
      <div className="relative grid md:grid-cols-2 gap-12 p-12 bg-gradient-to-br from-[#ADFBF6]/10 to-[#ADFBF6]/[0.02] border border-[#ADFBF6]/20 rounded-2xl mb-8 overflow-hidden">
        {/* Glow */}
        <div className="absolute -top-1/2 -right-1/5 w-96 h-96 bg-[radial-gradient(circle,rgba(173,251,246,0.3),transparent_60%)] blur-[60px] pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#ADFBF6] bg-[#ADFBF6]/15 rounded-lg mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Luxury Tier
          </span>

          <h3 className="text-4xl md:text-5xl font-light tracking-[0.35em] text-[#ADFBF6] mb-1" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            <span className="text-shadow-glow exhale-e relative">E</span>XHALE
          </h3>
          <p className="text-lg text-[#ADFBF6] mb-5">The AI Executive for Executive Parents</p>
          <p className="text-gray-400 leading-relaxed mb-6">
            Your AI-powered family assistant that manages school calendars, emails, schedules, and communications so you can focus on what matters most.
          </p>

          <ul className="space-y-2 mb-8">
            {['Smart email search & indexing', 'Daily briefings & calendar sync', 'Task & reminder management', 'After-school tracking'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300">
                <span className="w-2 h-2 bg-[#ADFBF6] rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>

          <a
            href="https://exhale.bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-sm font-medium bg-gradient-to-r from-[#ADFBF6] to-[#065A5C] text-gray-900 rounded-lg hover:shadow-lg hover:shadow-[#ADFBF6]/30 transition-all"
          >
            Apply Now
          </a>
        </div>

                {/* Media */}
        <div className="flex items-center justify-center">
          <div className="w-full aspect-video bg-black/30 border border-[#ADFBF6]/20 rounded-xl overflow-hidden hover:border-[#ADFBF6] transition-all">
            <video
              className="w-full h-full object-cover"
              controls
              playsInline
            >
              <source src="https://res.cloudinary.com/dnv13bm7j/video/upload/v1766531087/EXHALE_demo_jjzlfw.mov" type="video/quicktime" />
              <source src="https://res.cloudinary.com/dnv13bm7j/video/upload/v1766531087/EXHALE_demo_jjzlfw.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Other Custom Products */}
      <div className="grid md:grid-cols-2 gap-6">
        <ProductCard
          badge="Custom Build"
          title="AI Assistants"
          description="Custom-built AI with tailored instructions for your workflows."
          features={['Tailored instructions', 'Workflow integration', 'Ongoing support']}
          buttonText="Apply"
          inviteOnly={true}
          onApply={() => onApply('AI Assistants')}
        />
        <ProductCard
          badge="Premium"
          title="ECHO"
          description="Digital replicas of your expertise and communication style."
          features={['Voice & style matching', 'Knowledge integration', 'Multi-platform deploy']}
          buttonText="Apply"
          inviteOnly={true}
          onApply={() => onApply('ECHO')}
        />
      </div>
    </div>
  );
}

function AIAgentsTab({ onApply }) {
  return (
    <div className="animate-fadeIn">
      {/* Tab Header */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">Automations & Workflows</h3>
        <p className="text-gray-400">Measure, understand, and develop AI capabilities.</p>
      </div>

      {/* Tools Bar */}
      <div className="flex flex-wrap items-center justify-center gap-8 p-6 bg-white/[0.03] border border-white/10 rounded-xl mb-8">
        <span className="text-sm font-medium text-gray-500">WORKS WITH</span>
        <div className="flex gap-4">
          {[
            { name: 'Gmail', icon: 'M2 4h20v16H2V4zm20 2l-10 7L2 6' },
            { name: 'Calendar', icon: 'M3 4h18v18H3V4zm13-2v4M8 2v4M3 10h18' },
            { name: 'Slack', icon: 'M6 15a2 2 0 1 1 0-4h3v3a2 2 0 0 1-3 1zM11 6a2 2 0 1 1 4 0v3h-3a2 2 0 0 1-1-3zM18 9a2 2 0 1 1 0 4h-3v-3a2 2 0 0 1 3-1zM13 18a2 2 0 1 1-4 0v-3h3a2 2 0 0 1 1 3z' },
            { name: 'Notion', icon: 'M4 3h16v18H4V3zm5 5h6m-6 4h4m-4 4h6' },
            { name: 'Asana', icon: 'M12 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM6 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM18 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z' },
          ].map((tool) => (
            <div key={tool.name} className="w-11 h-11 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-[#ADFBF6] hover:border-[#ADFBF6] transition-all cursor-pointer" title={tool.name}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d={tool.icon} strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          ))}
        </div>
      </div>

      {/* Agent Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <AgentCard
          icon={
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 28 28">
              <rect x="3" y="4" width="22" height="20" rx="2"/>
              <path d="M3 10h22M8 16h12M8 20h8"/>
            </svg>
          }
          title="Notes to Tasks"
          description="Auto-create organized task lists from your meetings. Never miss an action item."
          capabilities={['Transcription', 'Action items', 'Task assignment', 'Calendar sync']}
          pricing="One-time + 30 day maintenance"
          onApply={() => onApply('Meeting Notes to Tasks Agent')}
        />
        <AgentCard
          icon={
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 28 28">
              <path d="M18 24v-2a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v2"/>
              <circle cx="10.5" cy="8" r="5"/>
              <path d="M25 24v-2a5 5 0 0 0-3.75-4.84M18 3.16a5 5 0 0 1 0 9.68"/>
            </svg>
          }
          title="Chief of Staff Agent"
          description="C-Suite focused automation suite for reports, meetings, and priority management."
          capabilities={['Report generation', 'Meeting prep', 'Data consolidation', 'Priorities']}
          pricing="One-time + 60 day maintenance"
          onApply={() => onApply('Chief of Staff Agent')}
        />
        <AgentCard
          icon={
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 28 28">
              <rect x="2" y="5" width="24" height="18" rx="2"/>
              <path d="M26 8L14 16 2 8"/>
            </svg>
          }
          title="Email Intelligence"
          description="Smart email triage with priority sorting, auto-categorization, and draft responses."
          capabilities={['Priority sort', 'Auto-categorize', 'Draft responses', 'Follow-ups']}
          pricing="One-time + 30 day maintenance"
          onApply={() => onApply('Email Intelligence Agent')}
        />
        <AgentCard
          icon={
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 28 28">
              <circle cx="14" cy="14" r="11"/>
              <path d="M14 7v7l5 5"/>
            </svg>
          }
          title="Workflow Automator"
          description="Custom automation workflows designed for your specific business processes."
          capabilities={['Process analysis', 'Custom triggers', 'Multi-step', 'Error handling']}
          pricing="One-time + 30 day maintenance"
          onApply={() => onApply('Workflow Automator Agent')}
        />
        <AgentCard
          icon={
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 28 28">
              <path d="M4 6h20M4 12h20M4 18h20"/>
              <path d="M8 6v12M14 6v12M20 6v12"/>
              <circle cx="8" cy="22" r="2"/>
              <circle cx="14" cy="22" r="2"/>
              <circle cx="20" cy="22" r="2"/>
            </svg>
          }
          title="Master Tasker"
          description="Distribute tasks seamlessly across all your platforms. One task created, synced everywhere."
          capabilities={['Multi-platform sync', 'Auto-distribution', 'Status tracking', 'Cross-app updates']}
          pricing="One-time + 30 day maintenance"
          onApply={() => onApply('Master Tasker Agent')}
        />
        <AgentCard
          icon={
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 28 28">
              <circle cx="14" cy="14" r="11"/>
              <path d="M14 8v4l3 2"/>
              <path d="M9 3l1 2M19 3l-1 2M5 8l2 1M23 8l-2 1"/>
            </svg>
          }
          title="Sunday Power Booster"
          description="Start your week ahead with curated news and insights tailored to your industry and priorities."
          capabilities={['News aggregation', 'Industry insights', 'Trend analysis', 'Weekly digest']}
          pricing="One-time + 30 day maintenance"
          onApply={() => onApply('Sunday Power Booster Agent')}
        />
      </div>
    </div>
  );
}

function ProductCard({ badge, title, description, features, price, buttonText, buttonLink, external = false, inviteOnly = false, onApply }) {
  const isExternalLink = external && buttonLink;

  return (
    <div className="flex flex-col p-7 bg-white/[0.03] border border-white/10 rounded-2xl hover:-translate-y-1 hover:border-[#ADFBF6]/30 hover:shadow-xl hover:shadow-black/50 transition-all">
      <span className="inline-block w-fit px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-[#ADFBF6] bg-[#ADFBF6]/10 rounded mb-4">
        {badge}
      </span>
      <h4 className="text-xl font-semibold text-white mb-3">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed mb-5">{description}</p>

      <ul className="flex-grow space-y-2 mb-6">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
            <svg className="w-4 h-4 text-[#ADFBF6] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {price && (
        <div className="mb-5">
          <span className="block text-lg font-bold text-white">{price}</span>
        </div>
      )}

      {isExternalLink ? (
        <a
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-white/10 border border-white/20 rounded-lg hover:bg-white/15 hover:border-[#ADFBF6] transition-all mt-auto"
        >
          {buttonText}
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 14 14">
            <path d="M4 10l6-6M10 10V4H4"/>
          </svg>
        </a>
      ) : (
        <button
          onClick={onApply}
          className="self-start inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-white/10 border border-white/20 rounded-lg hover:bg-white/15 hover:border-[#ADFBF6] transition-all mt-auto"
        >
          {buttonText}
          {inviteOnly && (
            <span className="ml-2 px-2 py-0.5 text-xs bg-white/10 rounded">Invite Only</span>
          )}
        </button>
      )}
    </div>
  );
}

function AgentCard({ icon, title, description, capabilities, pricing, onApply }) {
  return (
    <div className="p-7 bg-white/[0.03] border border-white/10 rounded-2xl hover:-translate-y-1 hover:border-[#ADFBF6]/30 hover:shadow-xl hover:shadow-black/40 transition-all">
      <div className="w-14 h-14 flex items-center justify-center bg-[#ADFBF6]/10 text-[#ADFBF6] rounded-xl mb-5">
        {icon}
      </div>
      <h4 className="text-lg font-semibold text-white mb-2.5">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {capabilities.map((cap, i) => (
          <span key={i} className="px-2.5 py-1 text-xs text-gray-400 bg-white/[0.08] rounded">
            {cap}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <div>
          <span className="text-sm font-medium text-white">{pricing}</span>
        </div>

        <button
          onClick={onApply}
          className="px-5 py-2.5 text-sm font-medium text-white bg-white/10 border border-white/20 rounded-lg hover:bg-white/15 hover:border-[#ADFBF6] transition-all"
        >
          Apply
        </button>
      </div>
    </div>
  );
}

export default Products;