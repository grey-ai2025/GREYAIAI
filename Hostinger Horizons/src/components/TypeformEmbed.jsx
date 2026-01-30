import React, { useEffect, useRef } from 'react';

const TYPEFORM_ID = "01KFY296K1S1BZVY2HK33TCZJK";

export default function TypeformEmbed({ className, style, height = "500px" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Function to load the embed
    const loadEmbed = () => {
      if (window.tf && window.tf.load) {
        window.tf.load();
      }
    };

    // Check if script is already present
    if (!document.getElementById('typeform-embed-script')) {
      const script = document.createElement('script');
      script.id = 'typeform-embed-script';
      script.src = "//embed.typeform.com/next/embed.js";
      script.async = true;
      script.onload = loadEmbed;
      document.body.appendChild(script);
    } else {
      // If script exists, just reload to catch this new instance
      // We use a small timeout to ensure the DOM is ready if it was just mounted
      setTimeout(loadEmbed, 100);
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      data-tf-live={TYPEFORM_ID}
      className={`w-full ${className || ''}`}
      style={{ height, ...style }}
    ></div>
  );
}