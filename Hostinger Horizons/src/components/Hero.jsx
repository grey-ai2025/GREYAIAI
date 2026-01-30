import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let floatingShapes = [];
    let time = 0;
    let mouseX = 0;
    let mouseY = 0;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track mouse position
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    // Particle class with glow and trails
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.offsetWidth;
        this.y = Math.random() * canvas.offsetHeight;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.radius = Math.random() * 3 + 1;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseOffset = Math.random() * Math.PI * 2;
      }

      update() {
        // Mouse interaction - particles move away from cursor
        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          this.vx += dx * 0.001;
          this.vy += dy * 0.001;
        }

        this.x += this.vx;
        this.y += this.vy;

        // Friction
        this.vx *= 0.99;
        this.vy *= 0.99;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.offsetWidth) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.offsetHeight) this.vy *= -1;

        // Keep in bounds
        this.x = Math.max(0, Math.min(canvas.offsetWidth, this.x));
        this.y = Math.max(0, Math.min(canvas.offsetHeight, this.y));
      }

      draw() {
        const pulse = Math.sin(time * this.pulseSpeed + this.pulseOffset) * 0.3 + 0.7;
        const currentRadius = this.radius * pulse;

        // Glow effect
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, currentRadius * 4
        );
        gradient.addColorStop(0, `rgba(173, 251, 246, ${this.opacity * pulse})`);
        gradient.addColorStop(0.5, `rgba(173, 251, 246, ${this.opacity * 0.3 * pulse})`);
        gradient.addColorStop(1, 'rgba(173, 251, 246, 0)');

        ctx.beginPath();
        ctx.arc(this.x, this.y, currentRadius * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(173, 251, 246, ${this.opacity + 0.2})`;
        ctx.fill();
      }
    }

    // Floating geometric shapes
    class FloatingShape {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.offsetWidth;
        this.y = Math.random() * canvas.offsetHeight;
        this.size = Math.random() * 40 + 20;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.15 + 0.05;
        this.sides = Math.floor(Math.random() * 3) + 3; // 3-5 sides
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotationSpeed;

        if (this.x < -this.size) this.x = canvas.offsetWidth + this.size;
        if (this.x > canvas.offsetWidth + this.size) this.x = -this.size;
        if (this.y < -this.size) this.y = canvas.offsetHeight + this.size;
        if (this.y > canvas.offsetHeight + this.size) this.y = -this.size;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        ctx.beginPath();
        for (let i = 0; i < this.sides; i++) {
          const angle = (i / this.sides) * Math.PI * 2 - Math.PI / 2;
          const x = Math.cos(angle) * this.size;
          const y = Math.sin(angle) * this.size;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();

        ctx.strokeStyle = `rgba(173, 251, 246, ${this.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.restore();
      }
    }

    // Initialize particles
    const particleCount = Math.min(80, Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 12000));
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Initialize floating shapes
    for (let i = 0; i < 8; i++) {
      floatingShapes.push(new FloatingShape());
    }

    // Draw animated connections
    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.4;

            // Animated dashed line effect
            ctx.beginPath();
            ctx.setLineDash([5, 5]);
            ctx.lineDashOffset = -time * 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(173, 251, 246, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.setLineDash([]);
          }
        }
      }
    };

    // Draw circuit-like patterns
    const drawCircuitLines = () => {
      const gridSize = 80;
      const lineOpacity = 0.03 + Math.sin(time * 0.01) * 0.02;

      ctx.strokeStyle = `rgba(173, 251, 246, ${lineOpacity})`;
      ctx.lineWidth = 1;

      for (let x = 0; x < canvas.offsetWidth; x += gridSize) {
        for (let y = 0; y < canvas.offsetHeight; y += gridSize) {
          const offsetX = Math.sin(time * 0.02 + y * 0.01) * 10;
          const offsetY = Math.cos(time * 0.02 + x * 0.01) * 10;

          ctx.beginPath();
          ctx.moveTo(x + offsetX, y);
          ctx.lineTo(x + gridSize / 2 + offsetX, y);
          ctx.lineTo(x + gridSize / 2 + offsetX, y + gridSize / 2 + offsetY);
          ctx.stroke();
        }
      }
    };

    // Draw wave effect
    const drawWaves = () => {
      ctx.beginPath();
      ctx.moveTo(0, canvas.offsetHeight / 2);

      for (let x = 0; x < canvas.offsetWidth; x += 5) {
        const y = canvas.offsetHeight / 2 +
                  Math.sin(x * 0.01 + time * 0.03) * 30 +
                  Math.sin(x * 0.02 + time * 0.02) * 20;
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = 'rgba(173, 251, 246, 0.1)';
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    // Animation loop
    const animate = () => {
      time++;
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Draw background elements
      drawCircuitLines();
      drawWaves();

      // Update and draw floating shapes
      floatingShapes.forEach(shape => {
        shape.update();
        shape.draw();
      });

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      drawConnections();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative z-10 pt-40 pb-24 bg-gray-50 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      {/* Tech Animation Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto"
        style={{ opacity: 1 }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 via-transparent to-gray-50/50 pointer-events-none"></div>

      {/* Animated Cyan Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ADFBF6]/30 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#065A5C]/20 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ADFBF6]/10 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '0.5s' }}></div>

      <div className="relative max-w-[1400px] mx-auto px-6">
        {/* Glassmorphism Card */}
        <div className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-3xl p-12 shadow-lg relative overflow-hidden">
          {/* Inner glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#ADFBF6]/10 via-transparent to-[#065A5C]/10 pointer-events-none"></div>

          {/* Centered Content */}
          <div className="relative max-w-3xl mx-auto text-center">
            

            {/* Title */}
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-5 text-gray-900">
              Move Like {' '} <br/>
              <span className="bg-gradient-to-r from-[#ADFBF6] to-[#065A5C] bg-clip-text text-transparent">
                You Have a Team
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Elevated AI solutions that clarify, cater, and multiply your execution
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href="#products"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center px-7 py-3.5 text-sm font-medium bg-gradient-to-r from-[#ADFBF6] to-[#065A5C] text-white rounded-lg hover:shadow-lg hover:shadow-[#ADFBF6]/30 hover:-translate-y-0.5 transition-all"
              >
                Learn More
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}