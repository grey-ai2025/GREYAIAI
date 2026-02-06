import { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export default function SparkScoreSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Detailed PDF Report',
      description: 'Personalized curriculum recommendations based on your results',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Identify Your Gaps',
      description: 'Discover strengths and priority development areas across 8 competencies',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Direct Path Mapping',
      description: 'Your score maps directly to SPARK Path trainings',
    },
  ];

  return (
    <section className="relative z-10 py-16 md:py-24 px-4 md:px-5 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(173,251,246,0.15),transparent_60%)] pointer-events-none"></div>

      <div className="relative max-w-[1100px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
        >
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#065A5C] bg-[#ADFBF6]/30 rounded-full mb-6"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Free Assessment
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight"
            >
              Discover Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#065A5C] to-[#0d8a8a]">
                AI Readiness
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              The SPARK Score is a rigorous diagnostic built on research from McKinsey, Harvard,
              and the NIST AI Risk Management Framework. In just 10 minutes, reveal where capability
              exists and where it's missing across eight competency areas.
            </motion.p>

            {/* Features */}
            <motion.div variants={fadeInUp} className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[#ADFBF6]/20 text-[#065A5C] rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={fadeInUp}>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#065A5C] to-[#0a7a7a] rounded-xl shadow-lg shadow-[#065A5C]/25 hover:shadow-xl hover:shadow-[#065A5C]/30 hover:scale-[1.02] transition-all"
              >
                Take the Free Assessment
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <p className="mt-3 text-sm text-gray-500">No credit card required. Takes ~10 minutes.</p>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            variants={fadeInUp}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#ADFBF6]/30 to-[#065A5C]/20 rounded-3xl blur-2xl"></div>

              {/* Card */}
              <div className="relative bg-white border border-gray-200 rounded-2xl shadow-2xl p-6 md:p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-100">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">SPARK Score</h3>
                    <p className="text-sm text-gray-500">AI Readiness Assessment</p>
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#ADFBF6] to-[#065A5C] rounded-xl">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>

                {/* Score Preview */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-[#ADFBF6]/20 to-[#065A5C]/10 border-4 border-[#065A5C]/20">
                    <div className="text-center">
                      <span className="block text-4xl font-bold text-[#065A5C]">?</span>
                      <span className="text-xs text-gray-500 uppercase tracking-wide">Your Score</span>
                    </div>
                  </div>
                </div>

                {/* Competency Preview */}
                <div className="space-y-3">
                  {['AI Foundations', 'Prompt Engineering', 'Workflow Integration', 'Data Literacy'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex-grow h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#ADFBF6] to-[#065A5C] rounded-full"
                          style={{ width: `${Math.random() * 40 + 30}%`, opacity: 0.5 }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-400 w-24 text-right">{item}</span>
                    </div>
                  ))}
                  <p className="text-center text-xs text-gray-400 mt-4">+ 4 more competencies</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Typeform Modal - Rendered via Portal to escape parent constraints */}
      {createPortal(
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-4xl h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Typeform Embed */}
                <iframe
                  src="https://greyai.typeform.com/to/EXnquQbh"
                  title="SPARK Score Assessment"
                  className="w-full h-full border-0"
                  allow="camera; microphone; autoplay; encrypted-media;"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
