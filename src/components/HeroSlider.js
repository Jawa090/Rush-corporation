import React, { useEffect, useState } from 'react';

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      image: '/h4.png',
      title: 'SEEMLESS INTEGRATES\n& ENGAGE WITH AI',
      subtitle: '',
      description:
        'Rush helps you seamlessly integrate and engage with AI. Our next‑generation platforms deliver governed insights and AI readiness on any cloud, at unparalleled scale',
    },
    {
      id: 2,
      image: '/h5.jpg',
      title: 'RUSH IS A FAMILY OF\nTRUSTED BRANDS',
      subtitle: 'Built for next generation of AI',
      description:
        "Our customers' needs are at the forefront of Gen's mission. As a global leader in Cybersecurity, we focus our passion, research, and innovation on the critical problems facing society today and tomorrow.",
    },
    {
      id: 3,
      image: '/h3.jpg',
      title: 'POWERING DIGITAL\nTRANSFORMATION\nFOR FREEDOM',
      subtitle: '',
      description:
        'The journey toward digital transformation entails harnessing its benefits — such as productivity improvement, cost reduction, and innovation — while navigating through the complexity and ambiguity brought about by the changes in the digital economy.',
    },
  ];

  const [current, setCurrent] = useState(0);
  const goTo = (index) => setCurrent((index + slides.length) % slides.length);
  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [slides.length]);

  const slide = slides[current];

  return (
    <main className="relative min-h-[680px] md:min-h-screen overflow-hidden bg-white">
      {/* Decorative blue dots - keep only the right vertical column */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-10 top-1/4 space-y-8 hidden md:block">
          <div className="w-2 h-2 bg-[#4285F4] rounded-sm"></div>
          <div className="w-2 h-2 bg-[#4285F4] rounded-sm"></div>
          <div className="w-2 h-2 bg-[#4285F4] rounded-sm"></div>
          <div className="w-2 h-2 bg-[#4285F4] rounded-sm"></div>
          <div className="w-2 h-2 bg-[#4285F4] rounded-sm"></div>
        </div>
        <div className="absolute left-10 top-1/4 space-y-8 hidden md:block">
          <div className="w-2 h-2 bg-[#4285F4] rounded-sm"></div>
          <div className="w-2 h-2 bg-[#4285F4] rounded-sm"></div>
          <div className="w-2 h-2 bg-[#4285F4] rounded-sm"></div>
          <div className="w-2 h-2 bg-[#4285F4] rounded-sm"></div>
          <div className="w-2 h-2 bg-[#4285F4] rounded-sm"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center py-10 md:py-16">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
            {/* Left: image carousel */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden w-full sm:max-w-2xl aspect-video border border-slate-300 shadow-xl mx-auto lg:mx-0">
                {slides.map((s, idx) => (
                  <img
                    key={s.id}
                    src={s.image}
                    alt="Slide visual"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${idx === current ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}

                {/* Arrows */}
                <button
                  aria-label="Previous"
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/90 text-slate-700 hover:bg-white shadow border border-slate-200"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
                <button
                  aria-label="Next"
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/90 text-slate-700 hover:bg-white shadow border border-slate-200"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>
                </button>

                {/* Dots */}
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className={`w-2.5 h-2.5 rounded-full border border-slate-300 ${i === current ? 'bg-slate-800 border-slate-800' : 'bg-white/70'}`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Social icons row */}
              <div className="mt-6 flex items-center justify-start flex-nowrap gap-4 sm:gap-5">
                {/* Scroll button */}
                <button className="w-12 h-12 rounded-full border-2 border-gray-400 text-gray-600 flex items-center justify-center bg-white hover:border-gray-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4]" aria-label="Scroll down">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
                {/* Platforms */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <a href="#" target="_blank" rel="noopener" title="Facebook" aria-label="Facebook" className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#477CFF] text-white shadow-sm hover:shadow-md hover:bg-[#386ff0] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#477CFF]">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34V22c4.78-.75 8.44-4.92 8.44-9.94z"/></svg>
                  </a>
                  <a href="#" target="_blank" rel="noopener" title="Twitter" aria-label="Twitter" className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#477CFF] text-white shadow-sm hover:shadow-md hover:bg-[#386ff0] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#477CFF]">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.42 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
                  </a>
                  <a href="#" target="_blank" rel="noopener" title="Instagram" aria-label="Instagram" className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#477CFF] text-white shadow-sm hover:shadow-md hover:bg-[#386ff0] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#477CFF]">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                      <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="2" />
                      <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" />
                    </svg>
                  </a>
                  <a href="#" target ="_blank" rel="noopener" title="YouTube" aria-label="YouTube" className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#477CFF] text-white shadow-sm hover:shadow-md hover:bg-[#386ff0] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#477CFF]">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 00.5 6.2C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 002.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 002.1-2.1C24 16 24 12 24 12s0-4-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: text per slide */}
            <div className="order-1 lg:order-2 space-y-6 md:space-y-8 lg:pl-2">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold text-gray-900 leading-tight tracking-tight max-w-[32ch]">
                  {slide.title.split('\n').map((line, i) => (
                    <span key={i} className="block" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
                      {line}
                    </span>
                  ))}
                </h1>
                {slide.subtitle ? (
                  <div className="mt-3 md:mt-4 text-lg sm:text-xl font-semibold text-slate-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {slide.subtitle}
                  </div>
                ) : null}
              </div>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {slide.description}
              </p>

              {/* Subscribe */}
              <form className="max-w-3xl relative">
                <div className="flex items-center rounded-full overflow-hidden border border-slate-900/60 bg-white lg:max-w-[720px]">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-3.5 sm:py-4 text-slate-900 placeholder-slate-400 focus:outline-none"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  />
                  <button
                    type="submit"
                    className="mr-1 my-1 px-6 sm:px-7 h-10 sm:h-11 rounded-full bg-[#24263A] text-white text-sm font-semibold tracking-wide shadow-sm hover:bg-[#1f2134] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#24263A]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    SUBSCRIBE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Stats ribbon */}
      <div className="relative z-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-[#4285F4] text-white p-8 text-center">
              <div className="text-5xl font-bold mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>50+</div>
              <div className="text-xs uppercase tracking-wider font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>AID CAMPAIGNS</div>
            </div>
            <div className="bg-gray-800 text-white p-8 text-center">
              <div className="text-5xl font-bold mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>100K+</div>
              <div className="text-xs uppercase tracking-wider font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>PEOPLE HELPED</div>
            </div>
            <div className="bg-[#4285F4] text-white p-8 text-center">
              <div className="text-5xl font-bold mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>10K+</div>
              <div className="text-xs uppercase tracking-wider font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>VOLUNTEERS<br />IN THE WORLD</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSlider;