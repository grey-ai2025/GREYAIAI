import React from 'react';
import { Helmet } from 'react-helmet';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us - Grey AI | Empowering Businesses with AI Solutions</title>
        <meta name="description" content="Learn about Grey AI's mission to democratize AI adoption for businesses. Discover our values, team, and commitment to making AI accessible and practical." />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Grid Background */}
          <div className="absolute inset-0 hidden bg-[size:60px_60px] pointer-events-none"></div>
          
          {/* Cyan Gradient Blobs */}
          <div className="absolute top-0 left-0 right-0 h-96 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(173,251,246,0.15),transparent_70%)] pointer-events-none"></div>

          <div className="relative max-w-[1200px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gray-900 bg-[#ADFBF6]/20 rounded-md mb-6">
                About Grey AI
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Empowering Businesses Through <span className="text-[#065A5C]">Intelligent AI</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                We're on a mission to make AI accessible, practical, and transformative for businesses of all sizes.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="relative py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="bg-white/80 backdrop-blur-sm border border-black/10 rounded-2xl p-8 md:p-12 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    At Grey AI, we believe that artificial intelligence should be a tool that empowers, not intimidates. Our mission is to bridge the gap between cutting-edge AI technology and practical business applications.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    We're committed to democratizing AI by providing education, custom solutions, and intelligent agents that help organizations unlock new possibilities and drive meaningful growth.
                  </p>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#ADFBF6]/20 to-[#065A5C]/10 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">🚀</div>
                      <p className="text-lg font-semibold text-gray-900">Innovation Through Intelligence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="relative py-20 bg-white/50">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gray-900 bg-[#ADFBF6]/20 rounded-md mb-4">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Drives Us</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Value 1 */}
              <div className="bg-white border border-black/10 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-[#ADFBF6]/20 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Accessibility First</h3>
                <p className="text-gray-600 leading-relaxed">
                  We believe AI should be accessible to everyone, not just tech giants. We simplify complexity and make advanced technology approachable.
                </p>
              </div>

              {/* Value 2 */}
              <div className="bg-white border border-black/10 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-[#ADFBF6]/20 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Practical Solutions</h3>
                <p className="text-gray-600 leading-relaxed">
                  We focus on real-world applications that deliver measurable results, not just theoretical possibilities or hype.
                </p>
              </div>

              {/* Value 3 */}
              <div className="bg-white border border-black/10 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-[#ADFBF6]/20 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Partnership Mindset</h3>
                <p className="text-gray-600 leading-relaxed">
                  We work alongside our clients as true partners, understanding their unique challenges and tailoring solutions to their needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Overview Section */}
        <section className="relative py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gray-900 bg-[#ADFBF6]/20 rounded-md mb-4">
                Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Experts in AI & Business</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our diverse team brings together deep expertise in artificial intelligence, business strategy, and industry-specific knowledge.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Team Highlight 1 */}
              <div className="bg-gradient-to-br from-white to-[#ADFBF6]/5 border border-black/10 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-[#ADFBF6]/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">👥</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Cross-Functional Expertise</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our team includes AI researchers, business consultants, software engineers, and industry veterans who understand both technology and business impact.
                    </p>
                  </div>
                </div>
              </div>

              {/* Team Highlight 2 */}
              <div className="bg-gradient-to-br from-white to-[#ADFBF6]/5 border border-black/10 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-[#ADFBF6]/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">🌍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Global Perspective</h3>
                    <p className="text-gray-600 leading-relaxed">
                      With experience across multiple industries and markets, we bring a global perspective to every project while understanding local nuances.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="relative py-20 bg-white/50">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gray-900 bg-[#ADFBF6]/20 rounded-md mb-4">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Built on Experience</h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                {/* Timeline Item 1 */}
                <div className="relative pl-8 border-l-2 border-[#ADFBF6]/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-[#ADFBF6] rounded-full"></div>
                  <div className="bg-white border border-black/10 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <span className="text-sm font-semibold text-[#065A5C] uppercase tracking-wide">Foundation</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">A Vision Takes Shape</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Grey AI was founded with a clear vision: to make AI accessible and practical for businesses that want to innovate but don't know where to start.
                    </p>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="relative pl-8 border-l-2 border-[#ADFBF6]/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-[#ADFBF6] rounded-full"></div>
                  <div className="bg-white border border-black/10 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <span className="text-sm font-semibold text-[#065A5C] uppercase tracking-wide">Growth</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">Expanding Our Reach</h3>
                    <p className="text-gray-600 leading-relaxed">
                      From AI literacy programs to custom solutions, we've helped organizations across industries embrace AI transformation with confidence.
                    </p>
                  </div>
                </div>

                {/* Timeline Item 3 */}
                <div className="relative pl-8 border-l-2 border-[#ADFBF6]/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-[#ADFBF6] rounded-full"></div>
                  <div className="bg-white border border-black/10 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <span className="text-sm font-semibold text-[#065A5C] uppercase tracking-wide">Today</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">Leading the Way Forward</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Today, we continue to innovate, building cutting-edge AI agents and solutions that help businesses stay ahead in an AI-driven world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="bg-gradient-to-br from-[#ADFBF6]/10 to-[#065A5C]/5 border border-black/10 rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how Grey AI can help you unlock the potential of artificial intelligence.
              </p>
              <a
                href="mailto:admin@greyaiadvisors.com"
                className="inline-flex items-center px-8 py-4 text-base font-semibold bg-[#ADFBF6] text-gray-900 rounded-lg hover:shadow-lg hover:shadow-[#ADFBF6]/30 hover:-translate-y-0.5 transition-all"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}