import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ApplyModal from './ApplyModal';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const scrollToTestimonials = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      window.location.href = '/#testimonials';
    } else {
      document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProductTab = (e, tab) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      window.location.href = `/#products-${tab}`;
    } else {
      window.location.hash = `products-${tab}`;
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetStarted = () => {
    setIsModalOpen(true);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-50/90 backdrop-blur-md border-b border-black/10">
        <nav className="max-w-[1200px] mx-auto px-6 py-3.5 flex items-center justify-between relative">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://res.cloudinary.com/dnv13bm7j/image/upload/v1761851714/GREY_LOGO_-_Imgur_r8sglc.png"
              alt="Grey AI"
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {/* Home */}
            <Link
              to="/"
              className="px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-black/5 rounded-lg transition-all"
            >
              Home
            </Link>

            {/* About 
            <Link
              to="/about"
              className="px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-black/5 rounded-lg transition-all"
            >
              About
            </Link>
            */}

            {/* Products Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-black/5 rounded-lg transition-all"
              >
                Products
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover:rotate-180">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>

              {/* Products Mega Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="w-[720px] grid grid-cols-3 gap-6 p-6 bg-white border border-black/10 rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)]">

                  {/* AI Literacy Column */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2.5 mb-1">
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-500/15 text-cyan-500">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                        </svg>
                      </span>
                      <span className="font-semibold text-sm text-gray-900">AI Literacy</span>
                    </div>
                    <p className="text-xs text-gray-400 mb-4">AI literacy and assessment tools</p>
                    <div className="flex flex-col gap-1">
                      <a href="#products-literacy" onClick={(e) => scrollToProductTab(e, 'literacy')} className="flex flex-col p-3 rounded-lg hover:bg-black/5 transition-all">
                        <span className="text-sm font-medium text-gray-900">Spark Score</span>
                        <span className="text-xs text-gray-400">AI literacy assessment</span>
                      </a>
                      <a href="#products-literacy" onClick={(e) => scrollToProductTab(e, 'literacy')} className="flex flex-col p-3 rounded-lg hover:bg-black/5 transition-all">
                        <span className="text-sm font-medium text-gray-900">Spark Path</span>
                        <span className="text-xs text-gray-400">Personalized learning</span>
                      </a>
                      <a href="#products-literacy" onClick={(e) => scrollToProductTab(e, 'literacy')} className="flex flex-col p-3 rounded-lg hover:bg-black/5 transition-all">
                        <span className="text-sm font-medium text-gray-900">Spark X</span>
                        <span className="text-xs text-gray-400">Analytics dashboard</span>
                      </a>
                    </div>
                  </div>

                  {/* Custom AI Column */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2.5 mb-1">
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#ADFBF6]/15 text-[#065A5C]">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </span>
                      <span className="font-semibold text-sm text-gray-900">Custom AI</span>
                    </div>
                    <p className="text-xs text-gray-400 mb-4">Bespoke AI solutions</p>
                    <div className="flex flex-col gap-1">
                      <a href="#products-custom" onClick={(e) => scrollToProductTab(e, 'custom')} className="flex flex-col p-3 rounded-lg bg-gradient-to-br from-[#ADFBF6]/10 to-[#ADFBF6]/5 border border-[#ADFBF6]/20 hover:border-[#ADFBF6]/40 transition-all">
                        <span className="inline-flex w-fit px-2 py-0.5 text-[10px] font-semibold uppercase bg-[#ADFBF6] text-gray-900 rounded mb-1">Luxury</span>
                        <span className="text-sm font-medium text-gray-900">Exhale</span>
                        <span className="text-xs text-gray-400">AI Executive</span>
                      </a>
                      <a href="#products-custom" onClick={(e) => scrollToProductTab(e, 'custom')} className="flex flex-col p-3 rounded-lg hover:bg-black/5 transition-all">
                        <span className="text-sm font-medium text-gray-900">AI Assistants</span>
                        <span className="text-xs text-gray-400">Custom-built AI</span>
                      </a>
                      <a href="#products-custom" onClick={(e) => scrollToProductTab(e, 'custom')} className="flex flex-col p-3 rounded-lg hover:bg-black/5 transition-all">
                        <span className="text-sm font-medium text-gray-900">ECHO</span>
                        <span className="text-xs text-gray-400">Digital replicas</span>
                      </a>
                    </div>
                  </div>

                  {/* AI Agents Column */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2.5 mb-1">
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#ADFBF6]/15 text-[#065A5C]">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="3" width="18" height="18" rx="2"/>
                          <path d="M9 12h6M12 9v6"/>
                        </svg>
                      </span>
                      <span className="font-semibold text-sm text-gray-900">AI Agents</span>
                    </div>
                    <p className="text-xs text-gray-400 mb-4">Automation workflows</p>
                    <div className="flex flex-col gap-1">
                      <a href="#products-agents" onClick={(e) => scrollToProductTab(e, 'agents')} className="flex flex-col p-3 rounded-lg hover:bg-black/5 transition-all">
                        <span className="text-sm font-medium text-gray-900">Notes to Tasks</span>
                        <span className="text-xs text-gray-400">Auto task creation</span>
                      </a>
                      <a href="#products-agents" onClick={(e) => scrollToProductTab(e, 'agents')} className="flex flex-col p-3 rounded-lg hover:bg-black/5 transition-all">
                        <span className="text-sm font-medium text-gray-900">Chief of Staff Agent</span>
                        <span className="text-xs text-gray-400">C-Suite automation</span>
                      </a>
                      <a href="#products-agents" onClick={(e) => scrollToProductTab(e, 'agents')} className="flex items-center gap-1.5 p-3 rounded-lg text-[#065A5C] text-sm font-medium hover:bg-black/5 transition-all">
                        View All Agents
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 10l4-4-4-4"/>
                        </svg>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Solutions 
            <Link
              to="/solutions"
              className="px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-black/5 rounded-lg transition-all"
            >
              Solutions
            </Link>
            */}

            {/* Resources Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-black/5 rounded-lg transition-all"
              >
                Resources
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover:rotate-180">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>

              {/* Resources Dropdown Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="w-[240px] p-4 bg-white border border-black/10 rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)]">
                  <div className="flex flex-col gap-1">
                    <a href="https://b2cspark.greyai.ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-black/5 transition-all">
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-500/15 text-cyan-500">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 11l3 3L22 4"/>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                        </svg>
                      </span>
                      <div>
                        <span className="text-sm font-medium text-gray-900 block">Spark Assessment</span>
                        <span className="text-xs text-gray-400">Test your AI literacy</span>
                      </div>
                    </a>
                    <a href="#testimonials" onClick={scrollToTestimonials} className="flex items-center gap-3 p-3 rounded-lg hover:bg-black/5 transition-all">
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#ADFBF6]/15 text-[#065A5C]">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                          <polyline points="22,6 12,13 2,6"/>
                        </svg>
                      </span>
                      <div>
                        <span className="text-sm font-medium text-gray-900 block">Subscribe</span>
                        <span className="text-xs text-gray-400">Get updates & news</span>
                      </div>
                    </a>
                    <a href="mailto:admin@greyaiadvisors.com" className="flex items-center gap-3 p-3 rounded-lg hover:bg-black/5 transition-all">
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#ADFBF6]/15 text-[#065A5C]">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                        </svg>
                      </span>
                      <div>
                        <span className="text-sm font-medium text-gray-900 block">Contact Us</span>
                        <span className="text-xs text-gray-400">Get in touch</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button - Get Started */}
          <div className="hidden md:block">
            <button
              onClick={handleGetStarted}
              className="px-5 py-2.5 text-sm font-medium text-gray-900 bg-[#ADFBF6] rounded-lg hover:shadow-lg hover:shadow-[#ADFBF6]/30 transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="w-6 h-0.5 bg-gray-900 rounded"></span>
            <span className="w-6 h-0.5 bg-gray-900 rounded"></span>
            <span className="w-6 h-0.5 bg-gray-900 rounded"></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-black/10 px-6 py-4 max-h-[90vh] overflow-y-auto">
            <div className="flex flex-col gap-2">
              {/* Home */}
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Home
              </Link>

              {/* About */}
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                About
              </Link>

              {/* Mobile Products Accordion */}
              <div>
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="w-full flex items-center justify-between px-4 py-2 text-gray-600 hover:text-gray-900"
                >
                  <span>Products</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className={`transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>

                {mobileProductsOpen && (
                  <div className="pl-4 mt-2 space-y-4">
                    <div>
                      <p className="px-4 py-1 text-xs font-semibold text-gray-400 uppercase">AI Literacy</p>
                      <a href="#products-literacy" onClick={(e) => { scrollToProductTab(e, 'literacy'); setMobileMenuOpen(false); }} className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900">Spark Score</a>
                      <a href="#products-literacy" onClick={(e) => { scrollToProductTab(e, 'literacy'); setMobileMenuOpen(false); }} className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900">Spark Path</a>
                      <a href="#products-literacy" onClick={(e) => { scrollToProductTab(e, 'literacy'); setMobileMenuOpen(false); }} className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900">Spark X</a>
                    </div>
                    <div>
                      <p className="px-4 py-1 text-xs font-semibold text-gray-400 uppercase">Custom AI</p>
                      <a href="#products-custom" onClick={(e) => { scrollToProductTab(e, 'custom'); setMobileMenuOpen(false); }} className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900">Exhale</a>
                      <a href="#products-custom" onClick={(e) => { scrollToProductTab(e, 'custom'); setMobileMenuOpen(false); }} className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900">AI Assistants</a>
                      <a href="#products-custom" onClick={(e) => { scrollToProductTab(e, 'custom'); setMobileMenuOpen(false); }} className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900">ECHO</a>
                    </div>
                    <div>
                      <p className="px-4 py-1 text-xs font-semibold text-gray-400 uppercase">AI Agents</p>
                      <a href="#products-agents" onClick={(e) => { scrollToProductTab(e, 'agents'); setMobileMenuOpen(false); }} className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900">Meeting Notes to Tasks</a>
                      <a href="#products-agents" onClick={(e) => { scrollToProductTab(e, 'agents'); setMobileMenuOpen(false); }} className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900">Chief of Staff</a>
                      <a href="#products-agents" onClick={(e) => { scrollToProductTab(e, 'agents'); setMobileMenuOpen(false); }} className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 font-medium text-[#065A5C]">View All Agents →</a>
                    </div>
                  </div>
                )}
              </div>

              {/* Solutions */}
              <Link
                to="/solutions"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Solutions
              </Link>

              {/* Mobile Resources Accordion */}
              <div>
                <button
                  onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                  className="w-full flex items-center justify-between px-4 py-2 text-gray-600 hover:text-gray-900"
                >
                  <span>Resources</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className={`transition-transform ${mobileResourcesOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>

                {mobileResourcesOpen && (
                  <div className="pl-4 mt-2">
                    <a href="https://b2cspark.greyai.ai" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900">Spark Assessment</a>
                    <a href="#testimonials" onClick={(e) => { scrollToTestimonials(e); setMobileMenuOpen(false); }} className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900">Subscribe</a>
                    <a href="mailto:admin@greyaiadvisors.com" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900">Contact Us</a>
                  </div>
                )}
              </div>

              {/* Mobile Get Started Button */}
              <button
                onClick={handleGetStarted}
                className="mt-2 px-4 py-2.5 text-sm font-medium text-gray-900 bg-[#ADFBF6] rounded-lg hover:shadow-lg hover:shadow-[#ADFBF6]/30 transition-all"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Apply Modal */}
      <ApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product="General Inquiry"
      />
    </>
  );
}