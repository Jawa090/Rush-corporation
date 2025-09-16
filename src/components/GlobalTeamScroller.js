import React from 'react';

const TEAM = [
  // From provided images: global team members (excluding executives)
  { id: 'mazam', name: 'Muhammad Azam', role: 'Executive Director', photo: '/MuhammadAzam.png', linkedin: '#', website: '#' },
  { id: 'aakhan', name: 'Aamir A. Khan', role: 'Head of BD, Central & West US', photo: '/AamirKhan.png', linkedin: '#', website: '#' },
  { id: 'dhassan', name: 'Daniyal Hassan', role: 'PMO Head', photo: '/DaniyalHassan.png', linkedin: '#', website: '#' },
  { id: 'wtariq', name: 'Waqas Tariq', role: 'CTO', photo: '/WaqasTariq.png', linkedin: '#', website: '#' },
  { id: 'asaigal', name: 'Asif Saigal', role: 'CPO', photo: '/AsifSaigal.png', linkedin: '#', website: '#' },
  { id: 'rsidebottom', name: 'Richard Sidebottom', role: 'Senior Solution Architect', photo: '/RichardSidebottom.png', linkedin: '#', website: '#' },
  { id: 'ohampton', name: 'Orlando Hampton', role: 'AI Solution Architect', photo: '/OrlandoHampton.png', linkedin: '#', website: '#' },
  { id: 'ehaberland', name: 'Eric Haberland', role: 'Solution Architect', photo: '/EricHaberland.png', linkedin: '#', website: '#' },
  { id: 'skhan', name: 'Sarfaraz Khan', role: 'Solution Architect', photo: '/SarfarazKhan.png', linkedin: '#', website: '#' },
  { id: 'kwaheed', name: 'Kamran Waheed', role: 'Solution Architect', photo: '/KamranWaheed.png', linkedin: '#', website: '#' },
  { id: 'wmajid', name: 'Waqas Majid', role: 'BDM, West Europe', photo: '/WaqasMajid.png', linkedin: '#', website: '#' },
  { id: 'mmumreez', name: 'M. Mumreez', role: 'BDM North Europe', photo: '/Mumreez.png', linkedin: '#', website: '#' },
  { id: 'mmalik', name: 'Mudassar Malik', role: 'Technical Architect', photo: '/MudassarMalik.png', linkedin: '#', website: '#' },
  { id: 'tahmad', name: 'Tanveer Ahmad', role: 'Senior Tech Risk Advisor', photo: '/TanveerAhmad.png', linkedin: '#', website: '#' },
  { id: 'ichaudhry', name: 'Imran Chaudhry', role: 'Senior Tech Advisor', photo: '/ImranChaudhry.png', linkedin: '#', website: '#' },
  { id: 'mzahar', name: 'Mudassar Zahar', role: 'BDM, North America', photo: '/MudassarZahar.png', linkedin: '#', website: '#' },
  { id: 'ajamil', name: 'Aqsa Jamil', role: 'BDM, MENA', photo: '/AqsaJamil.png', linkedin: '#', website: '#' },
  { id: 'shina', name: 'Syeda Hina', role: 'HR Manager', photo: '/SyedaHina.png', linkedin: '#', website: '#' },
  // Existing project images
  { id: 'hs', name: 'Hassan Sakif', role: 'Product Manager', photo: '/hassan.png', linkedin: '#', website: '#' },
  { id: 'ry', name: 'Rayan CH', role: 'Marketing Head', photo: '/Rayan.png', linkedin: '#', website: '#' },
];

function MemberCard({ member }){
  return (
    <div className="shrink-0 w-64 md:w-72 mr-5 md:mr-7 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-transform duration-300 hover:scale-[1.04] hover:border-white/20 shadow-xl">
      <div className="h-36 w-36 mx-auto rounded-full overflow-hidden bg-[#0a132e] border border-white/10 relative shadow-2xl">
        <img
          src={member.photo}
          alt={member.name}
          className="h-full w-full object-cover"
          onError={(e)=>{ e.currentTarget.style.display='none'; const f=e.currentTarget.parentElement?.querySelector('.fallback'); if(f){f.style.display='grid';} }}
        />
        <div className="fallback hidden absolute inset-0 place-items-center text-white/80 text-xl font-bold">
          {member.name.split(' ').map(w=>w[0]).slice(0,2).join('')}
        </div>
      </div>
      <div className="mt-4 text-center">
        <div className="text-white font-semibold text-base md:text-lg">{member.name}</div>
        <div className="text-white/70 text-sm md:text-base">{member.role}</div>
      </div>
      <div className="mt-3 flex justify-center gap-3">
        {(member.linkedin || member.website) && (
          <>
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white/80 hover:bg-white/20 transition">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zm7 0h3.8v2.1h.1c.5-1 1.7-2.1 3.5-2.1 3.7 0 4.4 2.4 4.4 5.6V24h-4v-6.6c0-1.6 0-3.7-2.3-3.7-2.3 0-2.7 1.8-2.7 3.6V24h-4V8.5z"/></svg>
              </a>
            )}
            {member.website && (
              <a href={member.website} target="_blank" rel="noopener noreferrer" aria-label="Website" className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white/80 hover:bg-white/20 transition">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
}

const GlobalTeamScroller = ({ members = TEAM, speedSeconds = 28, gap = 16 }) => {
  const items = [...members, ...members];
  return (
    <section className="relative max-w-7xl mx-auto px-6 mt-16" id="team">
      <div className="pointer-events-none absolute -z-10 inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-10 h-56 w-56 md:h-80 md:w-80 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute -bottom-28 -right-10 h-60 w-60 md:h-96 md:w-96 rounded-full bg-purple-500/20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 h-40 w-40 md:h-56 md:w-56 rounded-full bg-cyan-500/10 blur-3xl"></div>
      </div>
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-display text-white">Our Global Team</h3>
        <p className="text-white/70 mt-2">A snapshot of the brilliant people building Rush worldwide.</p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#0a132e] to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#0a132e] to-transparent"></div>

        <div className="flex overflow-x-hidden group" aria-label="Global team scroller">
          <div className="flex whitespace-nowrap" style={{ animation: `marquee ${speedSeconds}s linear infinite`, gap: `${gap}px` }}>
            {items.map((m, idx) => (
              <MemberCard key={`${m.id}-${idx}`} member={m} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        /* Pause on hover */
        .group:hover > div { animation-play-state: paused; }
      `}</style>
    </section>
  );
};

export default GlobalTeamScroller;


