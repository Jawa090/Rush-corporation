import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const slides = [
    {
      id: 1,
      title: "Innovation at Scale",
      subtitle: "Rush Corporation",
      description: "We're building the future of technology through innovative platforms that connect industries and power user experiences worldwide.",
      image: "/h1.jpg",
      buttonText: "Explore Our Brands",
      buttonLink: "/brands",
      gradient: "from-blue-500/20 to-purple-600/20"
    },
    {
      id: 2,
      title: "Global Technology Leader",
      subtitle: "Empowering Growth",
      description: "Our portfolio of companies spans software, media, and commerce, delivering solutions that feel fast, simple, and joyful.",
      image: "/h2.jpg",
      buttonText: "Meet Our Team",
      buttonLink: "/about",
      gradient: "from-purple-500/20 to-pink-600/20"
    },
    {
      id: 3,
      title: "Building Tomorrow",
      subtitle: "Technology Excellence",
      description: "From concept to launch, Rush powers the user journey with secure, performant, and human-centered technology solutions.",
      image: "/h3.jpg",
      buttonText: "View Portfolio",
      buttonLink: "/brands",
      gradient: "from-green-500/20 to-blue-600/20"
    },
    {
      id: 4,
      title: "Financial Excellence",
      subtitle: "$2.4B Annual Revenue",
      description: "With 28% year-over-year growth and $890M EBITDA, Rush Corporation delivers strong financial performance across our technology portfolio.",
      image: "/h4.jpg",
      buttonText: "Investor Center",
      buttonLink: "/investors",
      gradient: "from-emerald-500/20 to-teal-600/20"
    }
  ];

  // Auto-advance slides with transition handling
  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      
      // Reset transition state after animation completes
      setTimeout(() => setIsTransitioning(false), 1000);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    
    setIsTransitioning(true);
    setCurrentSlide(index);
    
    // Reset transition state after animation completes
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    
    // Reset transition state after animation completes
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    
    // Reset transition state after animation completes
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  return (
    <main className="relative min-h-[100svh] md:min-h-screen overflow-hidden bg-[#0a132e]">
      {/* Subtle animated background */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px] animate-pulse-slow top-1/4 left-1/4" />
        <div className="absolute w-[450px] h-[450px] rounded-full bg-purple-500/10 blur-[140px] animate-pulse-slow top-1/3 right-1/4 animation-delay-2000" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-400/8 blur-[100px] animate-pulse-slow bottom-1/4 left-1/3 animation-delay-4000" />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-3 sm:left-4 top-auto bottom-24 sm:top-1/2 sm:bottom-auto z-30 -translate-y-0 sm:-translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-white/80 hover:text-white hover:bg-black/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous slide"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-3 sm:right-4 top-auto bottom-24 sm:top-1/2 sm:bottom-auto z-30 -translate-y-0 sm:-translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-white/80 hover:text-white hover:bg-black/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next slide"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      

      {/* Slides Container */}
      <div className="relative h-[100svh] md:h-screen flex items-center justify-center pt-6 pb-28 sm:pb-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 z-10' 
                : 'opacity-0 z-0'
            }`}
          >
            <div className="h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
                {/* Text Content */}
                <div className={`text-center lg:text-left space-y-6 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-blue-400/90 uppercase tracking-wider mb-2">
                        {slide.subtitle}
                      </p>
                      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        {slide.title}
                      </h1>
                    </div>
                    
                    <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                      {slide.description}
                    </p>
                    
                    <ul className="hidden md:grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/80 text-sm max-w-2xl">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                        Fast, secure, and scalable
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                        Human‑centered design systems
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                        Global coverage and support
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                        Proven delivery at scale
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link
                      to={slide.buttonLink}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:shadow-lg"
                    >
                      {slide.buttonText}
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    <Link
                      to="/brands"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/20 text-white font-medium hover:bg-white/10 transition-all duration-300"
                    >
                      Group Brands
                    </Link>
                  </div>
                </div>

                {/* Image Content */}
                <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative flex items-center justify-center">
                    <div className="relative group rounded-2xl overflow-hidden w-full sm:max-w-2xl aspect-video border border-white/10 shadow-2xl">
                      <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} opacity-50 z-10`} />
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-20" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Feature badges */}
      <div className="absolute bottom-8 left-0 w-full z-20 hidden md:block">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md p-2 sm:p-3 md:p-4">
            <div className="flex items-center gap-3 text-white/90 group hover:bg-white/5 rounded-lg p-2 transition-all duration-300">
              <span className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors duration-300">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="M9 12l2 2 4-4"></path>
                </svg>
              </span>
              <div className="leading-tight">
                <div className="text-[11px] sm:text-xs font-semibold">Enterprise‑grade security</div>
                <div className="text-[10px] text-white/70 hidden sm:block">ISO & best practices</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-white/90 group hover:bg-white/5 rounded-lg p-2 transition-all duration-300">
              <span className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors duration-300">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                </svg>
              </span>
              <div className="leading-tight">
                <div className="text-[11px] sm:text-xs font-semibold">On‑time delivery</div>
                <div className="text-[10px] text-white/70 hidden sm:block">Agile & transparent</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-white/90 group hover:bg-white/5 rounded-lg p-2 transition-all duration-300">
              <span className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg bg-green-500/20 group-hover:bg-green-500/30 transition-colors duration-300">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M2 12h20"></path>
                  <path d="M12 2a15.3 15.3 0 010 20a15.3 15.3 0 010-20z"></path>
                </svg>
              </span>
              <div className="leading-tight">
                <div className="text-[11px] sm:text-xs font-semibold">Global coverage</div>
                <div className="text-[10px] text-white/70 hidden sm:block">24/7 support</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-white/90 group hover:bg-white/5 rounded-lg p-2 transition-all duration-300">
              <span className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg bg-orange-500/20 group-hover:bg-orange-500/30 transition-colors duration-300">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 18a3 3 0 006 0c0-1.657-1-3-3-5-2 2-3 3.343-3 5z"></path>
                  <path d="M12 2v3"></path>
                  <path d="M5 11l-2 1"></path>
                  <path d="M19 11l2 1"></path>
                  <path d="M7 4l-1.5-1.5"></path>
                  <path d="M17 4l1.5-1.5"></path>
                </svg>
              </span>
              <div className="leading-tight">
                <div className="text-[11px] sm:text-xs font-semibold">Innovation first</div>
                <div className="text-[10px] text-white/70 hidden sm:block">AI & cloud native</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-30">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 ease-out"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </main>
  );
};

export default HeroSlider;