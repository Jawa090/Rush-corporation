import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const brands = [
  { key: 'rush', name: 'Rush', logo: '/R.png', about: 'Rush is the global platform behind a family of brands delivering trusted software and technology experiences. We combine design, engineering, and data to build products that feel fast, simple, and joyful.' },
  { key: 'brand7', name: 'Fusion Cortex', logo: '/logo7.png', about: 'Storytelling and media that connect audiences everywhere.' },
  { key: 'brand9', name: 'Bitwords', logo: '/logo9.png', about: 'Digital content and growth marketing that amplify brand stories.' },
  { key: 'remoteseat', name: 'Remote Seat', logo: '/logo5.png', about: 'Remote collaboration that feels in‑person—co‑create, review and ship from anywhere.' },
  { key: 'paradise', name: 'Paradise Estimating', logo: '/logo2.png', about: 'Estimating tools that help builders and teams plan accurately with speed and clarity.' },
  { key: 'decxperts', name: 'Decxperts', logo: '/logo3.png', about: 'Expert‑led delivery and integration services so organisations can ship with confidence.' },
  { key: 'estimatinghub', name: 'EstimatingHub', logo: '/logo4.png', about: 'A collaborative hub that centralises estimates, data and approvals for teams.' },
  { key: 'brand6', name: 'Contractor List', logo: '/logo6.png', about: 'Commerce experiences that feel effortless from browse to buy.' },
  { key: 'brand8', name: '3RE Motors', logo: '/logo8.png', about: 'Next‑generation infrastructure for growth and scale.' },
];

const BrandCard = ({ brand, index }) => {
  const isEven = index % 2 === 0;
  const [expanded, setExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  const displayText = !expanded && brand.about && brand.about.length > 140
    ? brand.about.slice(0, 140) + '...'
    : brand.about;

  return (
    <div className={`flex flex-col md:flex-row ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between py-16 px-6 max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* Logo Section */}
      <div className="w-full md:w-2/5 flex justify-center mb-8 md:mb-0 group">
        <div className="relative">
          <div className={`w-72 h-72 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-white/10 flex items-center justify-center p-8 shadow-2xl group-hover:scale-105 transition-all duration-500 backdrop-blur-sm ${brand.key === 'remoteseat' ? 'w-64 h-64 p-6' : ''}`}>
            {brand.key === 'remoteseat' ? (
              <div className="h-full w-full grid place-items-center">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="block max-w-[85%] max-h-[85%] object-contain filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ) : (
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="max-w-full max-h-full object-contain filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
              />
            )}
          </div>
        </div>
      </div>
      
      {/* Information Section */}
      <div className="w-full md:w-1/2 space-y-6">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-blue-300 transition-all duration-300">
            {brand.name}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"></div>
        </div>
        
        <p className="text-white/80 leading-8 text-lg transition-all duration-300">
          {displayText}
        </p>
        
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="group relative inline-flex items-center px-8 py-3 bg-transparent border-2 border-blue-500 text-blue-300 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
        >
          <span className="relative z-10 font-semibold">
            {expanded ? 'Show Less' : 'Learn More'}
          </span>
          <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const GroupBrandsPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#0a132e' }}>
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-500 blur-[120px] opacity-5 top-1/4 left-1/4" style={{mixBlendMode: 'screen'}} />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-600 blur-[140px] opacity-5 top-1/3 right-1/4" style={{mixBlendMode: 'screen'}} />
      </div>

      <header className="relative z-10 flex items-center justify-between px-4 py-6 max-w-6xl mx-auto">
        <div className="flex items-center">
          <Link to="/" aria-label="Rush home" className="group">
            <img src="/logo1.png" alt="Rush" className="h-16 w-auto group-hover:scale-105 transition-transform duration-300" />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-2" style={{fontFamily: 'Inter, Segoe UI, Roboto, system-ui, -apple-system'}}>
          <Link to="/" className="px-3 py-2 text-sm font-semibold tracking-wide text-white/90 hover:text-white rounded-md transition-colors hover:bg-white/10 hover:underline underline-offset-8 decoration-white/30">Home</Link>
          <span className="px-3 py-2 text-sm font-semibold tracking-wide text-white rounded-md bg-white/10">Group brands</span>
          <Link to="/about" className="px-3 py-2 text-sm font-semibold tracking-wide text-white/90 hover:text-white rounded-md transition-colors hover:bg-white/10 hover:underline underline-offset-8 decoration-white/30">About us</Link>
          <Link to="/investors" className="px-3 py-2 text-sm font-semibold tracking-wide text-white/90 hover:text-white rounded-md transition-colors hover:bg-white/10 hover:underline underline-offset-8 decoration-white/30">Investor Center</Link>
          <Link to="/contact" className="ml-1 px-4 py-2 text-sm font-semibold tracking-wide text-white rounded-md bg-white/10 hover:bg-white/20 transition-colors">Contact us</Link>
        </nav>
      </header>
      
      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full bg-white/10 px-6 py-3 text-sm text-white/80 mb-6 backdrop-blur-sm border border-white/20">
              <span className="w-2 h-2 rounded-full bg-blue-400 mr-3 animate-pulse"></span>
              Our Brand Portfolio
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                Group Brands
              </span>
            </h1>
            <p className="text-white/80 leading-8 max-w-4xl mx-auto text-xl">
              Our brands sit under Rush, the parent company. Explore our innovative portfolio of 
              complementary products—from planning and collaboration to delivery and delightful 
              end‑user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Brands Listing */}
      <div className="relative z-10 py-8">
        {brands.map((brand, index) => (
          <div key={brand.key} className={`relative ${index % 2 === 0 ? 'bg-gradient-to-r from-blue-900/5 to-transparent' : 'bg-gradient-to-l from-blue-900/3 to-transparent'}`}>
            <BrandCard brand={brand} index={index} />
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <section className="relative py-20 mt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <h3 className="text-4xl md:text-5xl font-extrabold text-[#0a132e] mb-6">
              The global leader in delivering 
              <span className="block bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                software and tech solutions
              </span>
            </h3>
            <p className="text-[#0a132e]/80 leading-8 text-xl max-w-4xl mx-auto">
              Rush brands provide an innovative range of complementary products—from planning and
              collaboration to delivery and delightful end‑user experiences.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact" className="group inline-flex items-center px-8 py-4 rounded-full bg-[#0a132e] text-white font-semibold text-lg hover:bg-[#0b1740] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#0a132e]/25">
              Get in touch
              <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link to="/about" className="group inline-flex items-center px-8 py-4 rounded-full border-2 border-[#0a132e] text-[#0a132e] font-semibold text-lg hover:bg-[#0a132e] hover:text-white transition-all duration-300 hover:scale-105">
              Learn more about us
              <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 border-t border-white/10 bg-gradient-to-t from-black/20 to-transparent">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <img src="/logo1.png" alt="Rush" className="h-16 w-auto mx-auto mb-6 hover:scale-105 transition-transform duration-300" />
            <p className="text-white/80 text-lg mb-4">Building the future of technology through innovative platforms</p>
            <p className="text-white/60">© {new Date().getFullYear()} Rush Corporation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GroupBrandsPage;