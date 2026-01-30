import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function TypeformModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      // Check if script exists, if not add it
      if (!document.getElementById('typeform-script')) {
        const script = document.createElement('script');
        script.id = 'typeform-script';
        script.src = "//embed.typeform.com/next/embed.js";
        script.async = true;
        document.body.appendChild(script);
      } else if (window.tf && typeof window.tf.load === 'function') {
        // If script exists, reload typeform to catch the new DOM element
        window.tf.load();
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl h-[80vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-black/5 rounded-full transition-colors group cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-gray-500 group-hover:text-gray-900" />
        </button>

        {/* Typeform Embed Container */}
        <div data-tf-live="01KFY296K1S1BZVY2HK33TCZJK" className="w-full h-full"></div>
      </div>
    </div>
  );
}