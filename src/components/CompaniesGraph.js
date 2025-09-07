import React, { useMemo } from 'react';

const CompaniesGraph = () => {
  const logos = useMemo(
    () => [
      '/logo2.png',
      '/logo3.png',
      '/logo4.png',
      '/logo5.png',
      '/logo6.png',
      '/logo7.png',
      '/logo8.png',
    ],
    []
  );

  const featured = '/logo7.png';
  const secondaryFeatured = '/logo9.png';
  const others = useMemo(() => logos.filter((l) => l !== featured && l !== secondaryFeatured), [logos, secondaryFeatured]);

  const linkMap = useMemo(
    () => ({
      '/logo2.png': 'https://paradiseestimating.com/',
      '/logo3.png': 'https://estimatinghub.com/',
      '/logo4.png': 'https://decexperts.com/',
      '/logo5.png': 'http://www.remoteseat.com/',
      '/logo7.png': 'https://fusioncortex.com/',
      '/logo8.png': 'https://3remotors.com/',
      '/logo9.png': 'https://bitwords.com/',
    }),
    []
  );

  const rows = useMemo(() => {
    const chunked = [];
    for (let i = 0; i < others.length; i += 3) {
      chunked.push(others.slice(i, i + 3));
    }
    return chunked;
  }, [others]);

  return (
    <section className="relative pt-6 pb-0 -mb-40 md:-mb-56 lg:-mb-64" style={{ backgroundColor: '#0a132e' }}>
      <style>{`
        @keyframes rowBob {
          0%   { transform: translateY(0) }
          50%  { transform: translateY(-2px) }
          100% { transform: translateY(0) }
        }
      `}</style>
      <div className="max-w-6xl mx-auto space-y-0">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <img src="/R.png" alt="Rush" className="h-20 md:h-24 lg:h-28 w-auto" />
          </div>
          <div className="mt-3 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Partners and brands moving with us to shape the future.
          </p>
        </div>

        {/* Featured top logos row */}
        <div className="flex items-center justify-center gap-6">
          <a
            href={linkMap[secondaryFeatured]}
            target="_blank"
            rel="noopener noreferrer"
            className="group focus:outline-none focus:ring-0 rounded"
            aria-label="Secondary featured company link"
          >
            <img
              src={secondaryFeatured}
              alt="Company logo"
              className="w-[150px] md:w-[200px] lg:w-[260px] h-auto opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105 drop-shadow-[0_0_22px_rgba(0,0,0,0.18)]"
            />
          </a>
          <a
            href={linkMap[featured]}
            target="_blank"
            rel="noopener noreferrer"
            className="group focus:outline-none focus:ring-0 rounded"
            aria-label="Featured company link"
          >
            <img
              src={featured}
              alt="Company logo"
              className="w-[60px] md:w-[90px] lg:w-[120px] h-auto filter invert brightness-110 opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105 drop-shadow-[0_0_22px_rgba(255,255,255,0.18)]"
            />
          </a>
        </div>

        {/* Two rows with 3 logos each */}
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8"
            style={{ animation: `rowBob 6s ease-in-out ${rowIndex * 0.6}s infinite` }}
          >
            {row.map((src, colIndex) => (
              <a
                key={`${rowIndex}-${colIndex}`}
                href={linkMap[src] || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="group focus:outline-none focus:ring-0 rounded"
                aria-label="Company link"
              >
                <img
                  src={src}
                  alt="Company logo"
                  className={`${src === '/logo5.png' ? 'w-[260px] md:w-[300px] lg:w-[360px] relative -top-[40px] md:-top-[56px] lg:-top-[68px]' : 'w-[180px] md:w-[220px] lg:w-[240px]'} ${src === '/logo6.png' || src === '/logo8.png' ? 'relative -top-[100px] md:-top-[140px] lg:-top-[180px]' : ''} ${src === '/logo5.png' || src === '/logo6.png' || src === '/logo8.png' ? 'relative -left-[20px] md:-left-[28px] lg:-left-[36px]' : ''} h-auto ${src === '/logo2.png' || src === '/logo3.png' ? '' : 'filter invert brightness-110'} opacity-85 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105 drop-shadow-[0_0_18px_rgba(255,255,255,0.15)]`}
                />
              </a>
            ))}
            {row.length < 3 && Array.from({ length: 3 - row.length }).map((_, i) => (
              <span key={`spacer-${i}`} className="w-[180px] md:w-[220px] lg:w-[240px]" />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompaniesGraph;

