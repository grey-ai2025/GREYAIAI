import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import LogosSection from './components/LogosSection';
import HowItWorksSection from './components/HowItWorksSection';
import ProductsSection from './components/ProductsSection';
import UseCasesSection from './components/UseCasesSection';
import FAQSection from './components/FAQSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import About from './components/About';
import Solutions from './components/Solutions';

function HomePage({ productsRef }) {
  return (
    <>
      <Hero />
      <LogosSection />
      <HowItWorksSection />
      <ProductsSection ref={productsRef} />
      <UseCasesSection />
      <FAQSection />
      <TestimonialsSection />
    </>
  );
}

function InnerApp() {
  const productsRef = useRef(null);

  const handleProductSelect = (tab) => {
    if (productsRef.current) {
      productsRef.current.setActiveTab(tab);
      const element = document.getElementById('products');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden">
        {/* Grid Background */}
        <div className="fixed inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none z-0"></div>

        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage productsRef={productsRef} />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
          </Routes>
        </main>
        <Footer onProductSelect={handleProductSelect} />
      </div>
    </Router>
  );
}

export default function App() {
  return <InnerApp />;
}