import React from 'react';

export default function Logos() {
  const logos = [
    'https://res.cloudinary.com/dnv13bm7j/image/upload/v1769463952/JPmorganchase_nsptmh.png',
    'https://res.cloudinary.com/dnv13bm7j/image/upload/v1769464014/mckesson_p8zne3.png',
    'https://res.cloudinary.com/dnv13bm7j/image/upload/v1769463941/microsoft_ys3zog.png',
    'https://res.cloudinary.com/dnv13bm7j/image/upload/v1769463994/davis_gilbert_el5v20.png',
    'https://res.cloudinary.com/dnv13bm7j/image/upload/v1769463974/edwardjones_ouznli.png',
    'https://res.cloudinary.com/dnv13bm7j/image/upload/v1769463952/JPmorganchase_nsptmh.png',
    'https://res.cloudinary.com/dnv13bm7j/image/upload/v1769464022/kirkland_ellis_lr3dwr.png',
    'https://res.cloudinary.com/dnv13bm7j/image/upload/v1769463963/vanguard_kssmtl.png',
    'https://res.cloudinary.com/dnv13bm7j/image/upload/v1769464006/perkins_coie_uarlf3.png',
    
  ];

  return (
    <section className="relative z-10 py-16 border-t border-b border-black/10">

      <style>{`
        .logo-carousel-container {
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
        .logo-carousel-track {
          display: flex;
          gap: 3rem;
          width: fit-content;
          animation: scroll 30s linear infinite;
        }
        .logo-item {
          flex-shrink: 0;
          padding: 0.75rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 1.5rem));
          }
        }
      `}</style>
      <div className="max-w-[80%] mx-auto">
        {/* Label */}
        <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-widest mb-6">
          Trusted by industry leaders from:
        </p>

        {/* Logo Carousel */}
        <div className="logo-carousel-container">
          <div className="logo-carousel-track">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="logo-item"
              >
                <img
                  src={logo}
                  alt="Partner logo"
                  className="max-h-16 max-w-[180px] w-auto h-auto object-contain"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}