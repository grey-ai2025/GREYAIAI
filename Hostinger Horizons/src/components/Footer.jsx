import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer({ onProductSelect }) {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const location = useLocation();

  const handleProductClick = (e, tab) => {
    // If we are on home page, use the direct callback for smooth interaction
    if (location.pathname === '/') {
      e.preventDefault();
      if (onProductSelect) {
        onProductSelect(tab);
      }
    }
    // If not on home page, let the anchor tag do its job (navigate to /#products-tab)
    // The ProductsSection hash listener will handle the tab switch on mount.
  };

  const scrollToTestimonials = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      window.location.href = '/#Newsletter';
    } else {
      document.getElementById('Newsletter')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative z-10 pt-16 pb-8 bg-white border-t border-black/10">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-3">
              <img
                src="https://res.cloudinary.com/dnv13bm7j/image/upload/v1761851714/GREY_LOGO_-_Imgur_r8sglc.png"
                alt="Grey AI"
                className="h-20 w-auto"
              />
            </Link>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-3 gap-8">
            {/* Products */}
            <div>
              <h5 className="font-semibold text-sm uppercase tracking-wide text-gray-900 mb-4">
                Products
              </h5>
              <nav className="flex flex-col gap-2">
                <a 
                  href="/#products-literacy" 
                  onClick={(e) => handleProductClick(e, 'literacy')} 
                  className="text-gray-600 hover:text-[#065A5C] transition-colors cursor-pointer"
                >
                  AI Literacy
                </a>
                <a 
                  href="/#products-custom" 
                  onClick={(e) => handleProductClick(e, 'custom')} 
                  className="text-gray-600 hover:text-[#065A5C] transition-colors cursor-pointer"
                >
                  Custom AI
                </a>
                <a 
                  href="/#products-agents" 
                  onClick={(e) => handleProductClick(e, 'agents')} 
                  className="text-gray-600 hover:text-[#065A5C] transition-colors cursor-pointer"
                >
                  AI Agents
                </a>
              </nav>
            </div>

            {/* Company */}
            <div>
              <h5 className="font-semibold text-sm uppercase tracking-wide text-gray-900 mb-4">
                Company
              </h5>
              <nav className="flex flex-col gap-2">
                <a href="https://www.linkedin.com/company/greyai" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#065A5C] transition-colors">LinkedIn</a>
              </nav>
            </div>

            {/* Resources */}
            <div>
              <h5 className="font-semibold text-sm uppercase tracking-wide text-gray-900 mb-4">
                Resources
              </h5>
              <nav className="flex flex-col gap-2">
                <a href="https://b2cspark.greyai.ai" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#065A5C] transition-colors">Spark Assessment</a>
                <a
                  href="#Newsletter"
                  onClick={scrollToTestimonials}
                  className="text-gray-600 hover:text-[#065A5C] transition-colors"
                >
                  Subscribe
                </a>
                <a href="mailto:admin@greyaiadvisors.com" className="text-gray-600 hover:text-[#065A5C] transition-colors">Contact Us</a>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/10 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            © 2026 Grey AI LLC. All rights reserved.
          </p>
          <a
            href="https://www.linkedin.com/company/greyai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#065A5C] transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}