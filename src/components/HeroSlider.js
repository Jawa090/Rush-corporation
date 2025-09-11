import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
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

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-500 blur-[120px] opacity-10 top-1/4 left-1/4" style={{mixBlendMode: 'screen'}} />
        <div className="absolute w-[350px] h-[350px] rounded-full bg-blue-600 blur-[140px] opacity-10 top-1/3 right-1/4" style={{mixBlendMode: 'screen'}} />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-blue-400 blur-[100px] opacity-8 bottom-1/4 left-1/3" style={{mixBlendMode: 'screen'}} />
      </div>

      {/* Slides Container */}
      <div className="relative h-screen flex items-center">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 translate-x-0' 
                : index < currentSlide 
                  ? 'opacity-0 -translate-x-full' 
                  : 'opacity-0 translate-x-full'
            }`}
          >
            <div className="h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center w-full">
                {/* Text Content */}
                <div className={`text-center md:text-left space-y-4 md:space-y-6 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="space-y-3 md:space-y-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-white leading-tight tracking-tight">
                      <span className="block bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                        {slide.title}
                      </span>
                    </h1>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-display text-white/90">
                      {slide.subtitle}
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto md:mx-0 font-body">
                      {slide.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4 justify-center md:justify-start">
                    <Link
                      to={slide.buttonLink}
                      className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-sm sm:text-base hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      {slide.buttonText}
                      <svg className="ml-2 w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    <Link
                      to="/brands"
                      className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg border-2 border-white/30 text-white font-semibold text-sm sm:text-base hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105"
                    >
                      Group Brands
                    </Link>
                  </div>
                </div>

                {/* Image Content */}
                <div className={`relative ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="relative">
                    {/* Image Container with Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} rounded-2xl md:rounded-3xl blur-xl md:blur-2xl scale-105 md:scale-110`}></div>
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 overflow-hidden">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-auto max-w-sm mx-auto md:max-w-none rounded-xl md:rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                        style={{ border: 'none', outline: 'none' }}
                      />
                      {/* Overlay Effects */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl md:rounded-2xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Feature badges (we are best at...) */}
      <div className="absolute bottom-4 left-0 w-full z-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md p-2 sm:p-3 md:p-4">
            <div className="flex items-center gap-2 text-white/90">
              <span className="inline-flex items-center justify-center w-5 h-5 md:w-6 md:h-6">
                <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
              </span>
              <div className="leading-tight">
                <div className="text-[11px] sm:text-xs font-semibold">Enterprise‑grade security</div>
                <div className="text-[10px] text-white/70 hidden sm:block">ISO & best practices</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <span className="inline-flex items-center justify-center w-5 h-5 md:w-6 md:h-6">
                <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </span>
              <div className="leading-tight">
                <div className="text-[11px] sm:text-xs font-semibold">On‑time delivery</div>
                <div className="text-[10px] text-white/70 hidden sm:block">Agile & transparent</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <span className="inline-flex items-center justify-center w-5 h-5 md:w-6 md:h-6">
                <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 010 20a15.3 15.3 0 010-20z"/></svg>
              </span>
              <div className="leading-tight">
                <div className="text-[11px] sm:text-xs font-semibold">Global coverage</div>
                <div className="text=[10px] text-white/70 hidden sm:block">24/7 support</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <span className="inline-flex items-center justify-center w-5 h-5 md:w-6 md:h-6">
                <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 18a3 3 0 006 0c0-1.657-1-3-3-5-2 2-3 3.343-3 5z"/><path d="M12 2v3"/><path d="M5 11l-2 1"/><path d="M19 11l2 1"/><path d="M7 4l-1.5-1.5"/><path d="M17 4l1.5-1.5"/></svg>
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
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-100 ease-linear"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </main>
  );
};

export default HeroSlider;
