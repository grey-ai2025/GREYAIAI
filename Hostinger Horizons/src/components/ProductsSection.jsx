import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ApplyModal from './ApplyModal';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const tabContentVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: { duration: 0.3 },
  },
};
const Products = forwardRef((props, ref) => {
  const [activeTab, setActiveTab] = useState('literacy');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  useImperativeHandle(ref, () => ({
    setActiveTab: tab => {
      setActiveTab(tab);
    }
  }));
  const handleApply = productName => {
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
        document.getElementById('products')?.scrollIntoView({
          behavior: 'smooth'
        });
      } else if (hash === '#products-custom') {
        setActiveTab('custom');
        document.getElementById('products')?.scrollIntoView({
          behavior: 'smooth'
        });
      } else if (hash === '#products-agents') {
        setActiveTab('agents');
        document.getElementById('products')?.scrollIntoView({
          behavior: 'smooth'
        });
      }
    };

    // Check hash on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  return <section id="products" className="relative z-10 py-12 md:py-24 px-4 md:px-5 bg-[#0a0a0a] text-white">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      {/* Cyan Blobs at Top */}
      <div className="absolute top-0 left-0 right-0 h-72 bg-[radial-gradient(ellipse_60%_40%_at_30%_0%,rgba(173,251,246,0.12),transparent_60%),radial-gradient(ellipse_50%_35%_at_70%_0%,rgba(173,251,246,0.08),transparent_60%)] pointer-events-none"></div>

      <div className="relative max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center max-w-xl mx-auto mb-8 md:mb-12 px-2"
        >
          <motion.span variants={fadeInUp} className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white bg-[#ADFBF6]/10 rounded-md mb-4">
            Products
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Explore our Products Suite</motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-400 text-sm md:text-base">Three product suites designed for different needs and maturity levels</motion.p>
        </motion.div>

        {/* Tabs - Responsive: Stack on mobile, inline on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-8 md:mb-12"
        >
          <div className="flex flex-col sm:flex-row gap-2 p-2 bg-white/5 border border-white/15 rounded-2xl w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab('literacy')}
              className={`flex items-center justify-center sm:justify-start gap-2.5 px-4 md:px-5 py-3 text-sm font-medium rounded-xl transition-all ${activeTab === 'literacy' ? 'bg-white/15 text-white border border-white/20 shadow-lg' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
            >
              <span className="w-7 h-7 flex items-center justify-center bg-[#ADFBF6]/15 text-[#ADFBF6] rounded-md">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </span>
              AI Literacy
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab('custom')}
              className={`flex items-center justify-center sm:justify-start gap-2.5 px-4 md:px-5 py-3 text-sm font-medium rounded-xl transition-all ${activeTab === 'custom' ? 'bg-white/15 text-white border border-white/20 shadow-lg' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
            >
              <span className="w-7 h-7 flex items-center justify-center bg-[#ADFBF6]/15 text-[#ADFBF6] rounded-md">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </span>
              Custom AI
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab('agents')}
              className={`flex items-center justify-center sm:justify-start gap-2.5 px-4 md:px-5 py-3 text-sm font-medium rounded-xl transition-all ${activeTab === 'agents' ? 'bg-white/15 text-white border border-white/20 shadow-lg' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
            >
              <span className="w-7 h-7 flex items-center justify-center bg-[#ADFBF6]/15 text-[#ADFBF6] rounded-md">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M9 12h6M12 9v6" />
                </svg>
              </span>
              AI Agents
            </motion.button>
          </div>
        </motion.div>

        {/* Tab Content with AnimatePresence */}
        <AnimatePresence mode="wait">
          {activeTab === 'literacy' && (
            <motion.div
              key="literacy"
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <AILiteracyTab onApply={handleApply} />
            </motion.div>
          )}
          {activeTab === 'custom' && (
            <motion.div
              key="custom"
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <CustomAITab onApply={handleApply} />
            </motion.div>
          )}
          {activeTab === 'agents' && (
            <motion.div
              key="agents"
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <AIAgentsTab onApply={handleApply} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Apply Modal */}
      <ApplyModal isOpen={isModalOpen} onClose={handleCloseModal} product={selectedProduct} />
    </section>;
});
Products.displayName = 'ProductsSection';
function AILiteracyTab({
  onApply
}) {
  return <div>
      {/* Tab Header */}
      <div className="mb-6 md:mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">The SPARK Suite™</h3>
        <p className="text-gray-400 text-sm md:text-base">Precision starts with clarity. The Spark Suite™ delivers a rigorous assessment, bespoke learning paths, and organizational analytics—building AI fluency that compounds with every investment.</p>
      </div>

      {/* Featured Cards - 2 Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* SPARK Path Featured Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col p-5 md:p-7 bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-[#ADFBF6]/30 transition-colors"
        >
          {/* Glow */}
          <div className="absolute -top-1/2 -right-1/4 w-60 h-60 bg-[radial-gradient(circle,rgba(173,251,246,0.15),transparent_60%)] blur-[60px] pointer-events-none"></div>

          {/* Visual at top */}
          <div className="flex items-center justify-center mb-6">
            <div className="relative w-full max-w-[180px] aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ADFBF6]/20 to-transparent rounded-full blur-2xl"></div>
              <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="100" r="70" stroke="rgba(173,251,246,0.1)" strokeWidth="16" />
                <circle cx="100" cy="100" r="70" stroke="url(#pathGradient)" strokeWidth="16" strokeDasharray="330 110" strokeLinecap="round" className="animate-[spin_20s_linear_infinite]" style={{ transformOrigin: 'center' }} />
                <circle cx="100" cy="100" r="30" fill="rgba(173,251,246,0.1)" />
                <path d="M88 100l8 8 16-16" stroke="#ADFBF6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const x = 100 + 70 * Math.cos(rad);
                  const y = 100 + 70 * Math.sin(rad);
                  return <circle key={i} cx={x} cy={y} r="6" fill={i < 3 ? "#ADFBF6" : "rgba(173,251,246,0.3)"} />;
                })}
                <defs>
                  <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ADFBF6" />
                    <stop offset="100%" stopColor="#065A5C" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[10px] text-[#ADFBF6]/60 font-medium">8 Competencies</div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[10px] text-[#ADFBF6]/60 font-medium">24 Modules</div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex-grow">
            <span className="inline-flex items-center gap-2 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-[#ADFBF6] bg-[#ADFBF6]/10 rounded-lg mb-3">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Learning
            </span>

            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">SPARK Path™</h3>
            <p className="text-[#ADFBF6] text-sm mb-3">Your personalized AI learning journey</p>
            <p className="text-gray-400 text-xs leading-relaxed mb-4">
              Twenty-four micro-trainings across eight competency areas. Your SPARK Score™ shapes the curriculum.
            </p>

            <ul className="space-y-1.5 mb-5">
              {['Decision frameworks & checklists', 'Self-directed learning paths', 'Real-world application'].map((item, i) => <li key={i} className="flex items-center gap-2 text-gray-300 text-xs">
                  <span className="w-1 h-1 bg-[#ADFBF6] rounded-full"></span>
                  {item}
                </li>)}
            </ul>
          </div>

          <a href="https://yoursparkpath.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-white/10 border border-white/20 rounded-lg hover:bg-white/15 hover:border-[#ADFBF6] transition-all self-start">
            Start Learning
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>

        {/* SPARK X Featured Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative flex flex-col p-5 md:p-7 bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-[#ADFBF6]/30 transition-colors"
        >
          {/* Glow */}
          <div className="absolute -bottom-1/2 -left-1/4 w-60 h-60 bg-[radial-gradient(circle,rgba(173,251,246,0.15),transparent_60%)] blur-[60px] pointer-events-none"></div>

          {/* Visual at top */}
          <div className="flex items-center justify-center mb-6">
            <div className="relative w-full max-w-[220px] aspect-[4/3] bg-white/[0.03] border border-white/10 rounded-lg p-3 overflow-hidden">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded bg-[#ADFBF6]/20 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-[#ADFBF6]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                      </svg>
                    </div>
                    <span className="text-[10px] text-white/60">Team Overview</span>
                  </div>
                  <div className="text-[10px] text-[#ADFBF6]">Live</div>
                </div>
                <div className="flex items-end gap-1.5 h-14">
                  {[65, 45, 80, 55, 70, 40, 85, 60].map((height, i) => (
                    <div key={i} className="flex-1">
                      <div
                        className="w-full rounded-t"
                        style={{
                          height: `${height}%`,
                          background: i === 6 ? 'linear-gradient(to top, #065A5C, #ADFBF6)' : 'rgba(173,251,246,0.2)'
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-1 pt-1.5 border-t border-white/5">
                  <div className="text-center">
                    <div className="text-sm font-bold text-[#ADFBF6]">847</div>
                    <div className="text-[8px] text-white/40">Assessed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-white">72%</div>
                    <div className="text-[8px] text-white/40">Avg Score</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-[#ADFBF6]">23</div>
                    <div className="text-[8px] text-white/40">Champions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex-grow">
            <span className="inline-flex items-center gap-2 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-[#ADFBF6] bg-[#ADFBF6]/10 rounded-lg mb-3">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Analytics
            </span>

            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">SPARK X™</h3>
            <p className="text-[#ADFBF6] text-sm mb-3">Organizational AI capability intelligence</p>
            <p className="text-gray-400 text-xs leading-relaxed mb-4">
              Strategic visibility into team AI capability. Design targeted fluency programs and integrate into talent reviews.
            </p>

            <ul className="space-y-1.5 mb-5">
              {['Team-wide capability mapping', 'Identify AI champions', 'Talent review integration'].map((item, i) => <li key={i} className="flex items-center gap-2 text-gray-300 text-xs">
                  <span className="w-1 h-1 bg-[#ADFBF6] rounded-full"></span>
                  {item}
                </li>)}
            </ul>
          </div>

          <button onClick={() => onApply('Spark X™')} className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-white/10 border border-white/20 rounded-lg hover:bg-white/15 hover:border-[#ADFBF6] transition-all self-start">
            Request Demo
          </button>
        </motion.div>
      </div>
    </div>;
}
function CustomAITab({
  onApply
}) {
  return <div>
      {/* Tab Header */}
      <div className="mb-6 md:mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Bespoke AI Solutions</h3>
        <p className="text-gray-400 text-sm md:text-base">From luxury AI executives to custom assistants tailored to your needs.</p>
      </div>

      {/* Featured Card - Exhale */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 p-6 md:p-12 bg-gradient-to-br from-[#ADFBF6]/10 to-[#ADFBF6]/[0.02] border border-[#ADFBF6]/20 rounded-2xl mb-6 md:mb-8 overflow-hidden"
      >
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

          <h3 className="text-4xl md:text-5xl font-light tracking-[0.35em] text-[#ADFBF6] mb-1" style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif"
        }}>
            <span className="text-shadow-glow exhale-e relative">E</span>XHALE
          </h3>
          <p className="text-lg text-[#ADFBF6] mb-5">The AI Executive for Executives</p>
          <p className="text-gray-400 leading-relaxed mb-6">
            You run the business. Who runs everything else? EXHALE manages family logistics, personal scheduling, household coordination, charity galas, and the hundred small things that pull your attention from work. Learn more at exhale.bot.
          </p>

          <ul className="space-y-2 mb-8">
            {['Daily briefings and proactive alerts so nothing slips', 'Tracks care responsibilities—children, aging parents, pets', 'Text it like you would text a friend. It handles the rest.'].map((item, i) => <li key={i} className="flex items-center gap-3 text-gray-300">
                <span className="w-2 h-2 bg-[#ADFBF6] rounded-full"></span>
                {item}
              </li>)}
          </ul>

          <a href="https://exhale.bot" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 text-sm font-medium bg-gradient-to-r from-[#ADFBF6] to-[#065A5C] text-gray-900 rounded-lg hover:shadow-lg hover:shadow-[#ADFBF6]/30 transition-all">
            Apply Now
          </a>
        </div>

                {/* Media */}
        <div className="flex items-center justify-center order-first md:order-last">
          <div className="w-full aspect-video bg-black/30 border border-[#ADFBF6]/20 rounded-xl overflow-hidden hover:border-[#ADFBF6] transition-all">
            <video className="w-full h-full object-cover" controls playsInline>
              <source src="https://res.cloudinary.com/dnv13bm7j/video/upload/v1766531087/EXHALE_demo_jjzlfw.mov" type="video/quicktime" />
              <source src="https://res.cloudinary.com/dnv13bm7j/video/upload/v1766531087/EXHALE_demo_jjzlfw.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </motion.div>

      {/* Other Custom Products */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
      >
        <ProductCard title="Essence" slogan="The voice multiplier for leaders." description="Your content calendar shouldn't depend on whether you had time to write this week. ESSENCE learns how you communicate and delivers near-finished drafts across every channel—ready for your review, not your rewrite." features={['Posts, newsletters, and threads that sound like you wrote them', 'Works across every platform and format you publish on', 'Your voice extracted from your own content—not a template']} buttonText="See If It's Right for You" inviteOnly={false} onApply={() => onApply('Essence')} />
        <ProductCard title="Echo" slogan="The thought partner for decision makers." description="You don't need another tool. You need someone who knows your business and can think through the hard calls with you. ECHO is trained on your actual business documents, goals, and decision-making style—like having a CMO, COO, or strategist on call." features={['Trained on your business plan, goals, brand, and past work', 'Thinks through strategy, planning, and trade-offs with you', 'Holds you accountable to the priorities you set']} buttonText="See If It's Right for You" inviteOnly={false} onApply={() => onApply('Echo')} />
      </motion.div>
    </div>;
}
function AIAgentsTab({
  onApply
}) {
  return <div>
      {/* Tab Header */}
      <div className="mb-6 md:mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Automations & Workflows</h3>
        <p className="text-gray-400 text-sm md:text-base">Measure, understand, and develop AI capabilities.</p>
      </div>

      {/* Tools Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 p-4 md:p-6 bg-white/[0.03] border border-white/10 rounded-xl mb-6 md:mb-8"
      >
        <span className="text-xs sm:text-sm font-medium text-gray-500">WORKS WITH</span>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {[
            { name: 'Gmail', icon: 'M2 4h20v16H2V4zm20 2l-10 7L2 6' },
            { name: 'Calendar', icon: 'M3 4h18v18H3V4zm13-2v4M8 2v4M3 10h18' },
            { name: 'Chat', icon: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z' },
            { name: 'Docs', icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM14 2v6h6M16 13H8M16 17H8M10 9H8' },
            { name: 'Tasks', icon: 'M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11' },
          ].map((tool) => (
            <motion.div
              key={tool.name}
              whileHover={{ scale: 1.1, borderColor: '#ADFBF6' }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-[#ADFBF6] transition-colors cursor-pointer"
              title={tool.name}
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d={tool.icon} strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Agent Cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
      >
        <AgentCard icon={<svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 28 28">
              <rect x="3" y="4" width="22" height="20" rx="2" />
              <path d="M3 10h22M8 16h12M8 20h8" />
            </svg>} title="Notes to Tasks" description="Auto-create organized task lists from your meetings. Never miss an action item." capabilities={['Transcription', 'Action items', 'Task assignment', 'Calendar sync']} pricing="One-time + 30 day maintenance" onApply={() => onApply('Meeting Notes to Tasks Agent')} />
        <AgentCard icon={<svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 28 28">
              <path d="M18 24v-2a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v2" />
              <circle cx="10.5" cy="8" r="5" />
              <path d="M25 24v-2a5 5 0 0 0-3.75-4.84M18 3.16a5 5 0 0 1 0 9.68" />
            </svg>} title="Chief of Staff Agent" description="C-Suite focused automation suite for reports, meetings, and priority management." capabilities={['Report generation', 'Meeting prep', 'Data consolidation', 'Priorities']} pricing="One-time + 60 day maintenance" onApply={() => onApply('Chief of Staff Agent')} />
        <AgentCard icon={<svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 28 28">
              <rect x="2" y="5" width="24" height="18" rx="2" />
              <path d="M26 8L14 16 2 8" />
            </svg>} title="Email Intelligence" description="Smart email triage with priority sorting, auto-categorization, and draft responses." capabilities={['Priority sort', 'Auto-categorize', 'Draft responses', 'Follow-ups']} pricing="One-time + 30 day maintenance" onApply={() => onApply('Email Intelligence Agent')} />
        <AgentCard icon={<svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 28 28">
              <circle cx="14" cy="14" r="11" />
              <path d="M14 7v7l3 2" />
              <path d="M9 3l1 2M19 3l-1 2M5 8l2 1M23 8l-2 1" />
            </svg>} title="Workflow Automator" description="Custom automation workflows designed for your specific business processes." capabilities={['Process analysis', 'Custom triggers', 'Multi-step', 'Error handling']} pricing="One-time + 30 day maintenance" onApply={() => onApply('Workflow Automator Agent')} />
        <AgentCard icon={<svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 28 28">
              <path d="M4 6h20M4 12h20M4 18h20" />
              <path d="M8 6v12M14 6v12M20 6v12" />
              <circle cx="8" cy="22" r="2" />
              <circle cx="14" cy="22" r="2" />
              <circle cx="20" cy="22" r="2" />
            </svg>} title="Master Tasker" description="Distribute tasks seamlessly across all your platforms. One task created, synced everywhere." capabilities={['Multi-platform sync', 'Auto-distribution', 'Status tracking', 'Cross-app updates']} pricing="One-time + 30 day maintenance" onApply={() => onApply('Master Tasker Agent')} />
        <AgentCard icon={<svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 28 28">
              <circle cx="14" cy="14" r="11" />
              <path d="M14 8v4l3 2" />
              <path d="M9 3l1 2M19 3l-1 2M5 8l2 1M23 8l-2 1" />
            </svg>} title="Sunday Power Booster" description="Start your week ahead with curated news and insights tailored to your industry and priorities." capabilities={['News aggregation', 'Industry insights', 'Trend analysis', 'Weekly digest']} pricing="One-time + 30 day maintenance" onApply={() => onApply('Sunday Power Booster Agent')} />
      </motion.div>
    </div>;
}
function ProductCard({
  badge,
  title,
  slogan,
  description,
  features,
  price,
  buttonText,
  buttonLink,
  external = false,
  inviteOnly = false,
  onApply
}) {
  const isExternalLink = external && buttonLink;
  return <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, borderColor: 'rgba(173, 251, 246, 0.3)' }}
      className="flex flex-col p-5 md:p-7 bg-white/[0.03] border border-white/10 rounded-2xl hover:shadow-xl hover:shadow-black/50 transition-shadow"
    >
      <span className="inline-block w-fit px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-[#ADFBF6] bg-[#ADFBF6]/10 rounded mb-3 md:mb-4">
        {badge}
      </span>
      <h4 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">{title}</h4>
      {slogan && <p className="text-white text-sm mb-2">{slogan}</p>}
      <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 md:mb-5">{description}</p>

      <ul className="flex-grow space-y-2 mb-4 md:mb-6">
        {features.map((feature, i) => <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-gray-400">
            <svg className="w-4 h-4 text-[#ADFBF6] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>)}
      </ul>

      {price && <div className="mb-4 md:mb-5">
          <span className="block text-base md:text-lg font-bold text-white">{price}</span>
        </div>}

      {isExternalLink ? <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 text-sm font-medium text-white bg-white/10 border border-white/20 rounded-lg hover:bg-white/15 hover:border-[#ADFBF6] transition-colors mt-auto"
        >
          {buttonText}
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 14 14">
            <path d="M4 10l6-6M10 10V4H4" />
          </svg>
        </motion.a> : <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onApply}
          className="self-start inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 text-sm font-medium text-white bg-white/10 border border-white/20 rounded-lg hover:bg-white/15 hover:border-[#ADFBF6] transition-colors mt-auto"
        >
          {buttonText}
          {inviteOnly && <span className="ml-2 px-2 py-0.5 text-xs bg-white/10 rounded">Invite Only</span>}
        </motion.button>}
    </motion.div>;
}
function AgentCard({
  icon,
  title,
  description,
  capabilities,
  pricing,
  onApply
}) {
  return <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, borderColor: 'rgba(173, 251, 246, 0.3)' }}
      className="p-5 md:p-7 bg-white/[0.03] border border-white/10 rounded-2xl hover:shadow-xl hover:shadow-black/40 transition-shadow"
    >
      <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-[#ADFBF6]/10 text-[#ADFBF6] rounded-xl mb-4 md:mb-5">
        {icon}
      </div>
      <h4 className="text-base md:text-lg font-semibold text-white mb-2">{title}</h4>
      <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">{description}</p>

      <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
        {capabilities.map((cap, i) => <span key={i} className="px-2 md:px-2.5 py-0.5 md:py-1 text-xs text-gray-400 bg-white/[0.08] rounded">
            {cap}
          </span>)}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-white/10">
        <div>
          <span className="text-xs md:text-sm font-medium text-white">{pricing}</span>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onApply}
          className="px-4 md:px-5 py-2 md:py-2.5 text-sm font-medium text-white bg-white/10 border border-white/20 rounded-lg hover:bg-white/15 hover:border-[#ADFBF6] transition-colors"
        >
          Apply
        </motion.button>
      </div>
    </motion.div>;
}
export default Products;