import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

export default function Hero() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    // Dynamically import Vanta to avoid SSR issues
    const loadVanta = async () => {
      const VANTA = await import('vanta/dist/vanta.net.min');

      if (!vantaEffect && vantaRef.current) {
        const effect = VANTA.default({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          color: 0xADFBF6,
          backgroundColor: 0xfafafa,
          points: 8,
          maxDistance: 20,
          spacing: 20,
          showDots: true
        });
        setVantaEffect(effect);
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section className="relative z-10 h-svh flex items-center justify-center bg-gray-50 overflow-hidden">
      {/* Vanta.js Fog Background */}
      <div
        ref={vantaRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 w-full py-12 sm:py-16 md:py-20">
        {/* Glassmorphism Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl md:rounded-3xl p-10 sm:p-14 lg:p-20 shadow-lg relative overflow-hidden"
        >
          {/* Inner glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#ADFBF6]/10 via-transparent to-[#065A5C]/10 pointer-events-none"></div>

          {/* Centered Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative max-w-3xl mx-auto text-center"
          >
            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-5 md:mb-6 text-gray-900"
            >
              Move Like {' '} <br/>
              <motion.span
                className="bg-gradient-to-r from-[#ADFBF6] to-[#065A5C] bg-clip-text text-transparent inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                You Have a Team
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 md:mb-10 max-w-2xl mx-auto px-2"
            >
              Elevated AI solutions that clarify, cater to, and multiply your execution
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.a
                href="#products"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-8 md:px-10 py-4 md:py-4 text-base md:text-lg font-medium bg-gradient-to-r from-[#ADFBF6] to-[#065A5C] text-white rounded-xl hover:shadow-lg hover:shadow-[#ADFBF6]/30 transition-shadow"
              >
                Learn More
              </motion.a>
            </motion.div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}