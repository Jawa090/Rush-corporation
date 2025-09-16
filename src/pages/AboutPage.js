import React from 'react';
import { Link } from 'react-router-dom';
import GlobalTeamScroller from '../components/GlobalTeamScroller';

const teammates = [
  { id: 1, name: 'Usman CHAUDHARY', role: 'CEO & Founder', initials: 'U', photo: '/usman.png', linkedin: '' },
  { id: 2, name: 'Hafiz Sakif', role: 'CEO & Founder', initials: 'H', photo: '/hafiz.png', linkedin: '' },
];

const AboutPage = () => {
  const Footer = require('../components/Footer').default;

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0a132e' }}>
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 max-w-6xl mx-auto">
        <div className="flex items-center">
          <Link to="/" aria-label="Rush home">
            <img src="/logo1.png" alt="Rush" className="h-16 w-auto" />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-2">
          <Link to="/" className="px-3 py-2 text-sm font-semibold tracking-wide text-white/90 hover:text-white rounded-md transition-colors hover:bg-white/10 hover:underline underline-offset-8 decoration-white/30">Home</Link>
          <Link to="/brands" className="px-3 py-2 text-sm font-semibold tracking-wide text-white/90 hover:text-white rounded-md transition-colors hover:bg-white/10 hover:underline underline-offset-8 decoration-white/30">Group brands</Link>
          <span className="px-3 py-2 text-sm font-semibold tracking-wide text-white rounded-md bg-white/10">About us</span>
          <Link to="/investors" className="px-3 py-2 text-sm font-semibold tracking-wide text-white/90 hover:text-white rounded-md transition-colors hover:bg-white/10 hover:underline underline-offset-8 decoration-white/30">Investor Center</Link>
          <Link to="/contact" className="ml-1 px-4 py-2 text-sm font-semibold tracking-wide text-white rounded-md bg-white/10 hover:bg-white/20 transition-colors">Contact us</Link>
        </nav>
        {/* Mobile menu button and sheet */}
        <MobileMenu />
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-6">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-3xl md:text-5xl font-display tracking-tight">
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">About Rush</span>
            </h1>
            <div className="mt-3 h-1.5 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
            <div className="mt-4 space-y-3 md:space-y-4 md:max-w-3xl">
              <p className="text-white/90 leading-relaxed text-lg font-body">
                Rush is a technology corporation focused on building platforms and products that
                bring people closer to the magic of innovation. We combine design, engineering,
                and data to craft reliable, joyful experiences at global scale.
              </p>
              <p className="text-white/80 leading-relaxed text-lg font-body">
                Our mission is simple: make powerful technology feel effortless. We support a
                growing family of brands with shared infrastructure, design systems, and culture—
                so teams can move faster and deliver consistent quality to millions of users.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 pointer-events-none select-none">
              <div className="absolute w-[360px] h-[360px] rounded-full bg-blue-500 blur-[110px] opacity-25 right-0 top-0" style={{mixBlendMode: 'screen'}} />
              <div className="absolute w-[260px] h-[260px] rounded-full bg-purple-600 blur-[130px] opacity-25 left-6 bottom-4" style={{mixBlendMode: 'screen'}} />
            </div>
            <img src="/R.png" alt="Rush" className="relative z-10 w-[220px] md:w-[280px] mx-auto drop-shadow-2xl" />
          </div>
        </div>
        {/* subtle divider */}
        <div className="mt-8 md:mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </section>

      {/* About - More Content */}
      <section className="max-w-7xl mx-auto px-6 mt-8">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-display text-white mb-3">What we do</h2>
            <div className="space-y-3 md:space-y-4 md:max-w-3xl">
              <p className="text-white/80 leading-relaxed">
                We partner with ambitious teams to design, build, and scale modern software products. From
                cloud-native backends and real‑time collaboration to beautiful, responsive interfaces—our work
                blends engineering precision with product craft.
              </p>
              <p className="text-white/80 leading-relaxed">
                Our platform approach lets brands share infrastructure, security, and design systems. That means
                faster delivery, consistent quality, and the freedom for each brand to focus on what makes it
                special.
              </p>
              <p className="text-white/80 leading-relaxed">
                Reliability, performance, and accessibility are non‑negotiable. We observe, measure, and iterate—
                shipping small, learning fast, and scaling what works to millions of users.
              </p>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-semibold text-lg mb-4">Our focus areas</h3>
            <ul className="space-y-2 text-white/80 leading-relaxed list-disc list-inside">
              <li>Product strategy, UX research, and interface design</li>
              <li>Cloud, DevOps, and secure, scalable architectures</li>
              <li>AI‑assisted workflows and data‑driven experiences</li>
              <li>Quality engineering, observability, and SRE practices</li>
              <li>Shared design systems and cross‑brand components</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-6 mt-8">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold text-xl font-sans">Craft and clarity</h3>
            <p className="text-white/70 mt-2 leading-relaxed font-sans">We sweat the details and reduce complexity so products feel natural and intuitive.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold text-xl font-sans">Speed with purpose</h3>
            <p className="text-white/70 mt-2 leading-relaxed font-sans">We move quickly and ship thoughtfully, guided by outcomes that matter to users.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold text-xl font-sans">Together, better</h3>
            <p className="text-white/70 mt-2 leading-relaxed font-sans">We collaborate across disciplines and brands, sharing systems and learnings.</p>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display text-white mb-4">
            <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              Leadership Vision
            </span>
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
            Hear from our visionary leaders about the future of technology and innovation at Rush Corporation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Usman CH Message */}
          <div className="group relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 via-white/5 to-white/[0.02] p-8 transition-all duration-500 hover:scale-[1.02] hover:border-white/25 hover:shadow-2xl hover:shadow-blue-500/10">
              {/* Animated background elements */}
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/15 to-cyan-600/15 blur-xl group-hover:from-blue-500/25 group-hover:to-cyan-600/25 transition-all duration-700"></div>
              <div className="absolute -left-6 -bottom-6 h-28 w-28 rounded-full bg-gradient-to-tr from-blue-500/15 to-indigo-600/15 blur-xl group-hover:from-blue-500/25 group-hover:to-indigo-600/25 transition-all duration-700"></div>
              
              <div className="relative z-10">
                {/* CEO Profile */}
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative h-20 w-20">
                    <div className="rounded-full bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 p-[3px] group-hover:from-blue-500 group-hover:via-cyan-600 group-hover:to-blue-700 transition-all duration-500 h-full w-full">
                      <div className="h-full w-full rounded-full overflow-hidden bg-[#0a132e] relative">
                        <img
                          src="/usman.png"
                          alt="Usman CH"
                          className="h-full w-full object-cover shadow-2xl group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fallback = e.currentTarget.parentElement && e.currentTarget.parentElement.querySelector('.fallback');
                            if (fallback) fallback.style.display = 'grid';
                          }}
                        />
                        <div className="absolute inset-0 hidden fallback place-items-center text-white font-bold text-2xl">U</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-2xl mb-1 group-hover:text-blue-300 transition-colors duration-300">Usman CH</h3>
                    <p className="text-blue-400 text-lg font-medium">CEO & Co-Founder</p>
                    <div className="flex gap-2 mt-2">
                      <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium border border-blue-500/30">
                        Visionary
                      </span>
                      <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-medium border border-cyan-500/30">
                        Innovation
                      </span>
                    </div>
                  </div>
                </div>

                {/* CEO Message */}
                <blockquote className="text-white/90 text-lg leading-relaxed mb-6 italic">
                  "At Rush, we believe technology should empower, not complicate. Our mission is to build platforms that feel magical yet effortless, connecting people and ideas across the globe. Every line of code we write, every design decision we make, is guided by one simple principle: make the complex beautifully simple."
                </blockquote>
                
                <div className="text-white/70 text-sm">
                  <p className="font-medium mb-2">Key Focus Areas:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Strategic vision and company direction</li>
                    <li>• Innovation and product development</li>
                    <li>• Global expansion and partnerships</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Hafiz Sakif Message */}
          <div className="group relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 via-white/5 to-white/[0.02] p-8 transition-all duration-500 hover:scale-[1.02] hover:border-white/25 hover:shadow-2xl hover:shadow-purple-500/10">
              {/* Animated background elements */}
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br from-purple-500/15 to-pink-600/15 blur-xl group-hover:from-purple-500/25 group-hover:to-pink-600/25 transition-all duration-700"></div>
              <div className="absolute -left-6 -bottom-6 h-28 w-28 rounded-full bg-gradient-to-tr from-purple-500/15 to-violet-600/15 blur-xl group-hover:from-purple-500/25 group-hover:to-violet-600/25 transition-all duration-700"></div>
              
              <div className="relative z-10">
                {/* CEO Profile */}
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative h-20 w-20">
                    <div className="rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 p-[3px] group-hover:from-purple-500 group-hover:via-pink-600 group-hover:to-purple-700 transition-all duration-500 h-full w-full">
                      <div className="h-full w-full rounded-full overflow-hidden bg-[#0a132e] relative">
                        <img
                          src="/hafiz.png"
                          alt="Hafiz Sakif"
                          className="h-full w-full object-cover shadow-2xl group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fallback = e.currentTarget.parentElement && e.currentTarget.parentElement.querySelector('.fallback');
                            if (fallback) fallback.style.display = 'grid';
                          }}
                        />
                        <div className="absolute inset-0 hidden fallback place-items-center text-white font-bold text-2xl">H</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-2xl mb-1 group-hover:text-purple-300 transition-colors duration-300">Hafiz Sakif</h3>
                    <p className="text-purple-400 text-lg font-medium">CEO & Co-Founder</p>
                    <div className="flex gap-2 mt-2">
                      <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-medium border border-purple-500/30">
                        Strategy
                      </span>
                      <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs font-medium border border-pink-500/30">
                        Growth
                      </span>
                    </div>
                  </div>
                </div>

                {/* CEO Message */}
                <blockquote className="text-white/90 text-lg leading-relaxed mb-6 italic">
                  "Our strength lies in our people and our commitment to excellence. We're not just building software; we're crafting experiences that transform how businesses operate and how people connect. The future belongs to those who can seamlessly blend innovation with reliability, and that's exactly what we're delivering at Rush."
                </blockquote>
                
                <div className="text-white/70 text-sm">
                  <p className="font-medium mb-2">Key Focus Areas:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Operational excellence and execution</li>
                    <li>• Team development and culture</li>
                    <li>• Market expansion and customer success</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shared Vision Statement */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto p-8 rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 via-white/8 to-white/5 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Our Shared Vision
              </span>
            </h3>
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              "Together, we envision a world where technology serves humanity with grace and purpose. 
              Rush Corporation stands at the intersection of innovation and impact, building the digital 
              infrastructure that will power the next generation of global businesses."
            </p>
            <div className="flex justify-center gap-8 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <span>Usman CH, CEO & Co-Founder</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                <span>Hafiz Sakif, CEO & Co-Founder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team - Beautiful Enhanced Section */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display text-white mb-4">Executive Leadership</h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
            Visionary leaders driving innovation and growth across our portfolio of technology companies.
          </p>
        </div>
        
        <div className="flex justify-center gap-8">
          {teammates.map((t, index) => (
            <div 
              key={t.id} 
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 via-white/5 to-white/[0.02] p-8 transition-all duration-500 hover:scale-[1.03] hover:border-white/25 hover:shadow-2xl hover:shadow-blue-500/10 w-80 md:w-96"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Animated background elements */}
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/15 to-purple-600/15 blur-xl group-hover:from-blue-500/25 group-hover:to-purple-600/25 transition-all duration-700"></div>
              <div className="absolute -left-6 -bottom-6 h-28 w-28 rounded-full bg-gradient-to-tr from-purple-500/15 to-pink-600/15 blur-xl group-hover:from-purple-500/25 group-hover:to-pink-600/25 transition-all duration-700"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Enhanced Profile Image */}
                <div className="relative h-32 w-32 mb-6">
                  <div className="rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-[3px] group-hover:from-blue-500 group-hover:via-purple-600 group-hover:to-pink-600 transition-all duration-500 animate-pulse h-full w-full">
                    <div className="h-full w-full rounded-full overflow-hidden bg-[#0a132e] relative">
                      <div className="absolute inset-0 hidden fallback place-items-center text-white font-bold text-3xl">{t.initials}</div>
                      <img
                        src={t.photo}
                        alt={t.name}
                        className="h-full w-full object-cover shadow-2xl group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.parentElement && e.currentTarget.parentElement.querySelector('.fallback');
                          if (fallback) fallback.style.display = 'grid';
                        }}
                      />
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-500/20 blur-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Text Content */}
                <h3 className="text-white font-bold text-xl mb-2 group-hover:text-blue-300 transition-colors duration-300">{t.name}</h3>
                <p className="text-white/80 text-base font-medium mb-4">{t.role}</p>
                
                {/* Expertise Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium border border-blue-500/30">
                    Leadership
                  </span>
                  <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-medium border border-purple-500/30">
                    Strategy
                  </span>
                </div>
                
                {/* Enhanced Social Links */}
                <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all duration-300 hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all duration-300 hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all duration-300 hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Team Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">15+</div>
            <div className="text-white/70 text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-white/70 text-sm">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">8</div>
            <div className="text-white/70 text-sm">Portfolio Companies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">2.1M+</div>
            <div className="text-white/70 text-sm">Users Served</div>
          </div>
        </div>
      </section>

      {/* Global Team Scroller */}
      <GlobalTeamScroller />

      {/* CTA */}
      <section className="relative py-12 mt-12" style={{ backgroundColor: '#e8f1ff' }}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-display text-[#0a132e]">Want to build with us?</h3>
          <p className="mt-4 text-[#0a132e]/80 leading-7">We're always looking for curious minds who love craft and impact.</p>
          <a href="#/contact" className="mt-6 inline-flex px-5 py-2.5 rounded-md bg-[#0a132e] text-white font-semibold hover:bg-[#0b1740]">Join Rush</a>
        </div>
      </section>

      {React.createElement(Footer)}
    </div>
  );
};

export default AboutPage;

function MobileMenu(){
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button
        aria-label="Open menu"
        className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
        onClick={() => setOpen(v=>!v)}
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-[#0a132e]/95 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <img src="/logo1.png" alt="Logo" className="h-10 w-auto" />
            <button
              aria-label="Close menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
              onClick={() => setOpen(false)}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
          <nav className="px-6 space-y-2">
            <Link onClick={() => setOpen(false)} to="/" className="block px-4 py-3 rounded-lg text-white/90 hover:text-white hover:bg-white/10">Home</Link>
            <Link onClick={() => setOpen(false)} to="/brands" className="block px-4 py-3 rounded-lg text-white/90 hover:text-white hover:bg-white/10">Group brands</Link>
            <Link onClick={() => setOpen(false)} to="/about" className="block px-4 py-3 rounded-lg text-white/90 hover:text-white hover:bg-white/10">About us</Link>
            <Link onClick={() => setOpen(false)} to="/investors" className="block px-4 py-3 rounded-lg text-white/90 hover:text-white hover:bg-white/10">Investor Center</Link>
            <Link onClick={() => setOpen(false)} to="/contact" className="block px-4 py-3 rounded-lg text-white bg-white/10 hover:bg:white/20">Contact us</Link>
          </nav>
        </div>
      )}
    </>
  );
}