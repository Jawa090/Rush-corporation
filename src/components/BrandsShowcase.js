import React from 'react';

const BrandsShowcase = () => {
  // Array of brand image numbers (based on your folder structure)
  const brandImages = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedBrands = [...brandImages, ...brandImages];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our leadership team has collaborated with industry-leading companies to drive digital transformation and innovation across various sectors.
          </p>
        </div>

        {/* Scrolling Brands Container */}
        <div className="relative">
          {/* Add custom CSS for smooth infinite scroll */}
          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .scroll-animation {
              animation: scroll 30s linear infinite;
            }
            .scroll-animation:hover {
              animation-play-state: paused;
            }
          `}</style>
          
          {/* Scrolling Brands */}
          <div className="flex space-x-8 scroll-animation">
            {duplicatedBrands.map((brandNumber, index) => (
              <div 
                key={`${brandNumber}-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-32 h-20 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <img
                  src={`/brands/${brandNumber}.png`}
                  alt={`Brand ${brandNumber}`}
                  className="max-h-12 max-w-24 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-gray-100 to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            And many more companies trust our expertise in digital transformation
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandsShowcase;