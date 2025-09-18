import React, { useState } from 'react';

const WorldMap = () => {
  const [hoveredLocation, setHoveredLocation] = useState(null);

  const locations = [
    {
      id: 1,
      name: 'New York',
      country: 'USA',
      x: 28, // Percentage from left
      y: 32, // Percentage from top
      details: {
        address: '869 Bay Ridge Avenue Brooklyn NY 11220',
        phone: '+1 917 774 8864',
        email: 'info@rushcorporation.com'
      }
    },
    {
      id: 2,
      name: 'Austin',
      country: 'USA',
      x: 25,
      y: 38,
      details: {
        address: '869 Bay Ridge Avenue Brooklyn NY 11220',
        phone: '+1 917 774 8864',
        email: 'info@rushcorporation.com'
      }
    },
    {
      id: 3,
      name: 'Toronto',
      country: 'Canada',
      x: 26,
      y: 28,
      details: {
        address: '869 Bay Ridge Avenue Brooklyn NY 11220',
        phone: '+1 917 774 8864',
        email: 'info@rushcorporation.com'
      }
    },
    {
      id: 4,
      name: 'Sydney',
      country: 'Australia',
      x: 82,
      y: 72,
      details: {
        address: 'Suite 3A/74, Level 14, 275 Alfred St North Sydney, NSW 2060, Australia',
        phone: '+1 917 774 8864',
        email: 'info@rushcorporation.com'
      }
    },
    {
      id: 5,
      name: 'Paris',
      country: 'France',
      x: 48,
      y: 28,
      details: {
        address: '869 Bay Ridge Avenue Brooklyn NY 11220',
        phone: '+1 917 774 8864',
        email: 'info@rushcorporation.com'
      }
    },
    {
      id: 6,
      name: 'London',
      country: 'UK',
      x: 46,
      y: 26,
      details: {
        address: '20 Bushey Road, SW20 8EE',
        phone: '+447447713799',
        email: 'info@rushcorporation.com'
      }
    },
    {
      id: 7,
      name: 'Tokyo',
      country: 'Japan',
      x: 78,
      y: 32,
      details: {
        address: '869 Bay Ridge Avenue Brooklyn NY 11220',
        phone: '+1 917 774 8864',
        email: 'info@rushcorporation.com'
      }
    },
    {
      id: 8,
      name: 'Sharjah',
      country: 'UAE',
      x: 54,
      y: 42,
      details: {
        address: 'Office No 312, Muhammad Al Mulla Tower, 8 AL-Etihad Street, Sharjah, UAE',
        phone: '+1 917 774 8864',
        email: 'info@rushcorporation.com'
      }
    },
    {
      id: 9,
      name: 'Istanbul',
      country: 'Turkey',
      x: 52,
      y: 34,
      details: {
        address: 'B 1 Block, Daire 22, Collet Avcilar, Fruzkoy Blvd, Avcilar, Istanbul, Turkey',
        phone: '+1 917 774 8864',
        email: 'info@rushcorporation.com'
      }
    }
  ];

  return (
    <div className="relative w-full h-[600px] overflow-hidden" style={{backgroundColor: '#0a132e'}}>
      {/* Real World Map Background */}
      <div className="absolute inset-0">
        <img 
          src="https://cdn.prod.website-files.com/62e1b5395a096c50d469e9d9/631fdd27724835943ecc2d7a_vgl-global-reach-map.png"
          alt="World Map"
          className="w-full h-full object-cover opacity-80"
          loading="lazy"
        />
        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0" style={{backgroundColor: 'rgba(10, 19, 46, 0.3)'}}></div>
      </div>

      {/* Location Dots */}
      {locations.map((location) => (
        <div
          key={location.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
          style={{
            left: `${location.x}%`,
            top: `${location.y}%`
          }}
          onMouseEnter={() => setHoveredLocation(location)}
          onMouseLeave={() => setHoveredLocation(null)}
          onClick={() => {
            // You can customize this action - here are some options:
            // Option 1: Open Google Maps
            window.open(`https://www.google.com/maps/search/${location.name}+${location.country}`, '_blank');
            
            // Option 2: Open contact form with pre-filled location
            // window.location.href = `/contact?location=${location.name}`;
            
            // Option 3: Show alert with location info
            // alert(`Contact ${location.name} office:\n${location.details.phone}\n${location.details.email}`);
          }}
        >
          {/* Red Dot */}
          <div className="relative">
            <div className="w-5 h-5 bg-red-500 rounded-full shadow-xl border-2 border-white group-hover:scale-125 transition-transform duration-300">
              <div className="absolute inset-0 bg-red-400 rounded-full animate-ping opacity-75"></div>
            </div>
            
            {/* Ripple Effect */}
            <div className="absolute inset-0 w-5 h-5 bg-red-500 rounded-full animate-ping opacity-30"></div>
            <div className="absolute inset-0 w-5 h-5 bg-red-500 rounded-full animate-ping opacity-20 animation-delay-1000"></div>
          </div>

          {/* Location Label */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 backdrop-blur-sm text-slate-900 px-3 py-1 rounded-lg text-sm font-medium shadow-lg">
              {location.name}, {location.country}
            </div>
          </div>
        </div>
      ))}

      {/* Hover Details Panel */}
      {hoveredLocation && (
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-white/20 max-w-sm">
          <div className="space-y-3">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                {hoveredLocation.name}
              </h3>
              <p className="text-sm text-slate-600">
                {hoveredLocation.country}
              </p>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <svg className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-slate-700">{hoveredLocation.details.address}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-slate-700">{hoveredLocation.details.phone}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-slate-700">{hoveredLocation.details.email}</span>
              </div>
            </div>
          </div>
        </div>
      )}

     
    </div>
  );
};

export default WorldMap;
