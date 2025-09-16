import React, { useMemo } from 'react';

const ProfessionalLogoShowcase = () => {
  const logos = useMemo(
    () => [
      { src: '/logo9.png', url: 'https://bitwords.com/', name: 'Bitwords' },
      { src: '/logo7.png', url: 'https://fusioncortex.com/', name: 'Fusion Cortex' },
      { src: '/logo5.png', url: 'http://www.remoteseat.com/', name: 'Remote Seat' },
      { src: '/logo6.png', url: '#', name: 'Contractor List' },
      { src: '/logo2.png', url: 'https://paradiseestimating.com/', name: 'Paradise Estimating' },
      { src: '/logo3.png', url: 'https://estimatinghub.com/', name: 'Estimating Hub' },
      { src: '/logo4.png', url: 'https://decexperts.com/', name: 'DEC Experts' },
      { src: '/logo8.png', url: 'https://3remotors.com/', name: '3RE Motors' },
    ],
    []
  );

  return (
    <section className="relative py-6 md:py-8 bg-gradient-to-b from-[#0a132e] to-[#1a2b5f] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)_0%,_transparent_70%)] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-4 md:mb-6">
          <div className="flex justify-center mb-3">
            <div className="relative">
              <img 
                src="/R.png" 
                alt="Rush" 
                className="relative h-24 md:h-32 lg:h-40 w-auto drop-shadow-xl"
              />
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-display text-white mb-1.5">
            A family of <span className="text-[#477CFF]">B2B</span> and <span className="text-[#477CFF]">B2C</span> brands
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-2"></div>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            Market leaders. Award winners. Digital protection pioneers. Our family of consumer brands are trusted by millions of customers, all over the world.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className="group relative flex items-center justify-center p-6 bg-gray-800/30 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10"
              style={{ 
                transitionDelay: `${index * 100}ms`,
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-500"></div>
              
              <a
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 flex items-center justify-center w-full h-full"
              >
                {logo.name === 'DEC Experts' ? (
                  <svg
                    viewBox="0 0 760 200"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="DECEXPERTS logo"
                    className="w-full h-auto max-h-16 transition-transform duration-500 group-hover:scale-110"
                  >
                    <title>DECEXPERTS logo</title>
                    <desc>Yellow triangle with DEC and outlined EXPERTS</desc>
                    <polygon points="40,20 200,20 120,160" fill="#FFFFFF" />
                    <text
                      x="116"
                      y="106"
                      fontFamily="Poppins, Inter, system-ui, sans-serif"
                      fontWeight="700"
                      fontSize="52"
                      textAnchor="middle"
                      fill="#000000"
                      style={{ letterSpacing: '4px' }}
                    >
                      DEC
                    </text>
                    <text
                      x="300"
                      y="118"
                      fontFamily="Poppins, Inter, system-ui, sans-serif"
                      fontWeight="400"
                      fontSize="56"
                      textAnchor="start"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="1.4"
                      style={{ letterSpacing: '9px' }}
                    >
                      EXPERTS
                    </text>
                  </svg>
                ) : logo.name === 'Remote Seat' ? (
                  <div className="flex items-center justify-center select-none">
                    <span
                      className="font-black tracking-wide text-base md:text-lg lg:text-xl"
                      style={{ color: 'transparent', WebkitTextStroke: '1px #FFFFFF' }}
                    >
                      REMOTE
                    </span>
                    <span className="mx-1" />
                    <span className="font-black tracking-wide text-base md:text-lg lg:text-xl text-white">SEAT</span>
                  </div>
                ) : (
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="w-full h-auto max-h-16 object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  />
                )}
              </a>
              
            </div>
            ))}
          </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        .group:hover {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ProfessionalLogoShowcase;