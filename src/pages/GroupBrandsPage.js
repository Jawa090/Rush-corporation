import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const brands = [
  { 
    key: 'rush', 
    name: 'Rush Corporation', 
    logo: '/R.png', 
    about: 'Rush is the global platform behind a family of brands delivering trusted software and technology experiences. We combine design, engineering, and data to build products that feel fast, simple, and joyful. Our mission is to empower businesses worldwide with innovative solutions that drive growth and transformation.',
    tagline: 'Global Technology Platform',
    bgColor: 'bg-gradient-to-br from-blue-600/20 to-purple-600/20'
  },
  { 
    key: 'fusioncortex', 
    name: 'Fusion Cortex', 
    logo: '/logo7.png', 
    about: 'Fusion Cortex delivers cutting-edge software services and solutions to businesses worldwide. Our team of experts specializes in creating custom software, AI integration, cloud solutions, and digital transformation services that help organizations stay ahead in the rapidly evolving technology landscape.',
    tagline: 'Software Service Excellence',
    bgColor: 'bg-gradient-to-br from-indigo-600/20 to-blue-500/20',
    url: 'https://fusioncortex.com/'
  },
  { 
    key: 'bitwords', 
    name: 'Bitwords', 
    logo: '/logo9.png', 
    about: 'Bitwords is a global platform connecting professionals from various countries for collaborative work opportunities. We specialize in digital content creation, growth marketing strategies, and amplifying brand stories across diverse markets and cultures. Our network spans across 50+ countries, enabling truly global collaboration.',
    tagline: 'Global Digital Collaboration',
    bgColor: 'bg-gradient-to-br from-teal-500/20 to-emerald-600/20',
    url: 'https://bitwords.com/'
  },
  { 
    key: 'remoteseat', 
    name: 'Remote Seat', 
    logo: '/logo5.png', 
    about: 'Remote Seat provides comprehensive B2B services enabling seamless remote collaboration that feels in-person. Our platform allows teams to co-create, review, and ship projects from anywhere in the world. With advanced virtual workspace technology, we\'re redefining how businesses operate in a distributed work environment.',
    tagline: 'Virtual Workspace Solutions',
    bgColor: 'bg-gradient-to-br from-violet-600/20 to-purple-500/20',
    url: 'http://www.remoteseat.com/'
  },
  { 
    key: 'paradise', 
    name: 'Paradise Estimating', 
    logo: '/logo2.png', 
    about: 'Paradise Estimating offers advanced estimating tools that help construction teams and builders plan projects with unparalleled accuracy and speed. Our software reduces estimation errors by 75% and cuts planning time in half, enabling construction professionals to bid confidently and win more projects.',
    tagline: 'Precision Estimating Tools',
    bgColor: 'bg-gradient-to-br from-amber-500/20 to-orange-500/20',
    url: 'https://paradiseestimating.com/'
  },
  { 
    key: 'decxperts', 
    name: 'Decxperts', 
    logo: '/logo4.png', 
    about: 'Decxperts is a premier contractor services platform providing expert-led delivery and integration services. We connect organizations with vetted professionals across various industries, ensuring projects are completed with confidence and excellence. Our rigorous screening process guarantees top-tier talent for every project.',
    tagline: 'Expert Contractor Services',
    bgColor: 'bg-gradient-to-br from-sky-500/20 to-blue-600/20',
    url: 'https://decexperts.com/'
  },
  { 
    key: 'estimatinghub', 
    name: 'EstimatingHub', 
    logo: '/logo3.png', 
    about: 'EstimatingHub is a collaborative platform that centralizes estimates, data, and approvals for teams of all sizes. Our intuitive dashboard provides real-time insights, version control, and seamless collaboration features that streamline the estimation process from concept to completion.',
    tagline: 'Centralized Estimation Platform',
    bgColor: 'bg-gradient-to-br from-cyan-500/20 to-teal-500/20',
    url: 'https://estimatinghub.com/'
  },
  { 
    key: 'contractorlist', 
    name: 'Contractor List', 
    logo: '/logo6.png', 
    about: 'Contractor List is a worldwide platform revolutionizing how businesses find and hire skilled contractors. With verified professionals across 100+ categories, we make it effortless to browse, connect with, and hire top talent. Our secure payment system and rating platform ensure quality results every time.',
    tagline: 'Global Contractor Network',
    bgColor: 'bg-gradient-to-br from-green-500/20 to-emerald-600/20'
  },
  { 
    key: 'reemotors', 
    name: '3RE Motors', 
    logo: '/logo8.png', 
    about: '3RE Motors is transforming the automotive industry with our innovative car purchasing and sales platform. We offer a seamless experience for buying and selling vehicles, with transparent pricing, virtual test drives, and doorstep delivery. Our AI-powered platform matches buyers with their perfect vehicle.',
    tagline: 'Next-Gen Automotive Solutions',
    bgColor: 'bg-gradient-to-br from-red-500/20 to-rose-600/20',
    url: 'https://3remotors.com/'
  },
];

const BrandCard = ({ brand, index }) => {
  const [expanded, setExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  const displayText = !expanded && brand.about && brand.about.length > 260
    ? brand.about.slice(0, 260) + '...'
    : brand.about;

  return (
    <div className={`flex flex-col md:flex-row items-center justify-between py-10 px-4 max-w-6xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      {/* Logo Section with beautiful background color */}
      <div className="w-full md:w-2/5 flex justify-center mb-6 md:mb-0 group relative">
        <div className="relative w-full flex flex-col items-center">
          {brand.key === 'rush' ? (
                <img
                  src={brand.logo}
                  alt={brand.name}
              className="block w-64 md:w-72 max-w-full object-contain"
            />
          ) : (
            <div className="relative w-full flex items-center justify-center">
              <div className={`relative z-10 rounded-xl ${brand.bgColor} p-3 md:p-4 border border-white/10 flex items-center justify-center w-64 md:w-72 h-32 md:h-40`}> 
                {brand.key === 'decxperts' ? (
                  <svg
                    viewBox="0 0 760 200"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="DECEXPERTS logo"
                    className="w-full h-auto max-h-full"
                  >
                    <title>DECEXPERTS logo</title>
                    <desc>Yellow triangle with DEC and outlined EXPERTS</desc>
                    <polygon points="120,20 280,20 200,160" fill="#F2C200" />
                    <text
                      x="196"
                      y="106"
                      fontFamily="Orbitron, system-ui, sans-serif"
                      fontWeight="700"
                      fontSize="52"
                      textAnchor="middle"
                      fill="#111"
                      style={{ letterSpacing: '4px' }}
                    >
                      DEC
                    </text>
                    <text
                      x="300"
                      y="118"
                      fontFamily="Orbitron, system-ui, sans-serif"
                      fontWeight="400"
                      fontSize="56"
                      textAnchor="start"
                      fill="#FFFFFF"
                      stroke="none"
                      style={{ letterSpacing: '9px' }}
                    >
                      EXPERTS
                    </text>
                  </svg>
                ) : brand.key === 'remoteseat' ? (
                  <div className="flex items-center justify-center select-none">
                    <span
                      className="font-black tracking-wide text-base md:text-lg lg:text-xl"
                      style={{ color: '#1E1E1E', WebkitTextStroke: '1px #000' }}
                    >
                      REMOTE
                    </span>
                    <span className="mx-1" />
                    <span
                      className="font-black tracking-wide text-base md:text-lg lg:text-xl"
                      style={{
                        background: 'linear-gradient(90deg, #1e90ff, #9b59b6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      SEAT
                    </span>
                  </div>
                ) : (
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                    className="block max-h-full max-w-full object-contain"
                />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Information Section */}
      {brand.key !== 'rush' && (
      <div className="w-full md:w-1/2 space-y-4 relative">
        
        <div className="space-y-5 relative z-10">
          <div>
            <span className="inline-block px-4 py-2 text-sm font-semibold text-white/80 bg-white/10 rounded-full mb-4">
              {brand.tagline}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {brand.name}
            </h2>
            <div className="h-1 w-20 bg-white/30 rounded-full mb-6"></div>
          </div>
          
          <p className="text-white/90 text-base md:text-lg leading-7 md:leading-8 max-w-3xl transition-all duration-300 font-light">
            {displayText}
          </p>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
            >
              <span className="relative z-10">
                {expanded ? 'Show Less' : 'Learn More'}
              </span>
              <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            
            {brand.url && (
              <a
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center px-6 py-3 bg-white/5 text-white/90 font-semibold rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
              <span>Visit Website</span>
              <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              </a>
            )}
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

const GroupBrandsPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const Footer = require('../components/Footer').default;

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#0a132e' }}>
      {/* Clean background with subtle elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 blur-3xl"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik02MCAwSDB2NjBNNjAgMEwwIDYwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3Zn+')] opacity-30" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-4 py-4 max-w-6xl mx-auto">
        <div className="flex items-center">
          <Link to="/" aria-label="Rush home">
            <img src="/logo1.png" alt="Rush" className="h-16 w-auto" />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-1" style={{fontFamily: 'Inter, Segoe UI, Roboto, system-ui, -apple-system'}}>
          <Link to="/" className="px-4 py-2.5 text-base font-medium text-white/90 hover:text-white rounded-lg transition-colors hover:bg-white/10">Home</Link>
          <span className="px-4 py-2.5 text-base font-medium text-white rounded-lg bg-white/10">Group brands</span>
          <Link to="/about" className="px-4 py-2.5 text-base font-medium text-white/90 hover:text-white rounded-lg transition-colors hover:bg-white/10">About us</Link>
          <Link to="/investors" className="px-4 py-2.5 text-base font-medium text-white/90 hover:text-white rounded-lg transition-colors hover:bg-white/10">Investor Center</Link>
          <Link to="/contact" className="ml-2 px-5 py-2.5 text-base font-medium text-white rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 transition-all duration-300">Contact us</Link>
        </nav>
      </header>
      
      {/* Hero Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 pt-8 pb-10">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-8">
            <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm text-white/80 mb-4 backdrop-blur-sm border border-white/20">
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mr-3 animate-pulse"></span>
              Our Brand Portfolio
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              <span className="block bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent leading-tight">
                Group Brands
              </span>
            </h1>
            <p className="text-white/90 leading-7 max-w-3xl mx-auto text-base md:text-lg font-light mb-6">
              Our innovative portfolio of complementary brands sits under Rush, the parent company. 
              Together we deliver end-to-end solutions—from planning and collaboration to delivery 
              and delightful end-user experiences.
            </p>
            
            {/* Centered Rush logo with beautiful background */}
            <div className="mt-6 flex flex-col items-center justify-center">
              <img src="/R.png" alt="Rush" className="block w-[180px] md:w-[220px] object-contain" />
              <h3 className="mt-4 text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                Rush Corporation
              </h3>
              <div className="mx-auto mt-3 h-1.5 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
              <p className="mt-4 text-white/80 text-base max-w-2xl mx-auto font-light">
                The global platform behind a family of brands delivering trusted software and technology experiences worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Listing (excluding Rush) */}
      <div className="relative z-10 py-6">
        {brands.filter((b) => b.key !== 'rush').map((brand, index) => (
          <div key={brand.key} className={`relative ${index % 2 === 0 ? 'bg-gradient-to-r from-white/5 to-transparent' : 'bg-gradient-to-l from-white/5 to-transparent'}`}>
            <BrandCard brand={brand} index={index} />
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <section className="relative py-16 mt-6 overflow-hidden bg-gradient-to-b from-[#0a132e] to-[#1a2b5f]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM2I0OWY2IiBzdHJva2Utd2lkdGg9IjAuNSI+PHBhdGggZD0iTTMwIDB2NjBNMCAzMGg2MCIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The global leader in 
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                software innovation
              </span>
            </h3>
            <p className="text-white/90 leading-7 text-base md:text-lg max-w-3xl mx-auto font-light">
              Rush brands provide an innovative ecosystem of complementary products and services—from planning and
              collaboration to delivery and delightful end-user experiences across multiple industries.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact" className="group relative inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-base hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
              <span>Get in touch</span>
              <svg className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link to="/about" className="group relative inline-flex items-center px-6 py-3 rounded-xl border border-white/20 text-white font-semibold text-base hover:bg-white/10 transition-all duration-300">
              <span>Learn more about us</span>
              <svg className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {React.createElement(Footer)}
    </div>
  );
};

export default GroupBrandsPage;