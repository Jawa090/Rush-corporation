import React from 'react';

const TEAM = [
  // From provided images: global team members (excluding executives)
  { id: 'mazam', name: 'Muhammad Azam', role: 'Executive Director', photo: '/MuhammadAzam.png', linkedin: '#', website: '#' },
  { id: 'aakhan', name: 'Aamir A. Khan', role: 'Head of BD, Central & West US', photo: '/AamirKhan.png', linkedin: '#', website: '#' },
  { id: 'dhassan', name: 'Daniyal Hassan', role: 'PMO Head', photo: '/DaniyalHassan.png', linkedin: '#', website: '#' },
  { id: 'wtariq', name: 'Waqas Tariq', role: 'CTO', photo: '/waqas.jpg', linkedin: '#', website: '#' },
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
  { id: 'mzahar', name: 'Mudassar Zafar', role: 'BDM, North America', photo: '/mudasar.jpg', linkedin: '#', website: '#' },
  { id: 'waleed', name: 'Waleed Ahmad', role: '—', photo: '/waleed.jpg', linkedin: '#', website: '#' },
  { id: 'fiqbal', name: 'Faisal Iqbal', role: '—', photo: '/faisal.jpg', linkedin: '#', website: '#' },
  { id: 'hafiz', name: 'Hafiz Anees', role: '—', photo: '/anees.jpg', linkedin: '#', website: '#' },
  { id: 'ajamil', name: 'Aqsa Jamil', role: 'BDM, MENA', photo: '/aqsa.jpg', linkedin: '#', website: '#' },
  { id: 'shina', name: 'Bushra A.', role: 'HR Manager', photo: '/bushra.jpg', linkedin: '#', website: '#' },
  // Existing project images
  { id: 'hs', name: 'Hassan Sakif', role: 'Product Manager', photo: '/hassan.png', linkedin: '#', website: '#' },
  { id: 'ry', name: 'Rayan CH', role: 'Marketing Head', photo: '/Rayan.png', linkedin: '#', website: '#' },
];

// Categorized sections built from the spreadsheet provided
const TEAM_SECTIONS = [
  {
    id: 'management',
    title: 'Global Management Team',
    members: [
      { ref: 'hs', name: 'Hassan Sakif', role: 'Product Manager', available: true },
      { ref: 'ry', name: 'Muhammad Raiyan', role: 'Marketing Head', available: true },
      { ref: 'mazam', name: 'Muhammad Azam', role: 'Executive Director', available: true },
      { ref: 'aakhan', name: 'Aamir A. Khan', role: 'Head of BD, Central & West US', available: false },
      { ref: 'wtariq', name: 'Waqas Tariq', role: 'CTO', available: true },
      { ref: 'asaigal', name: 'Asif Saigal', role: 'CPO', available: true },
      { ref: 'skhan', name: 'Sarfaraz Khan', role: 'Solution Architect', available: true },
      { ref: 'kwaheed', name: 'Kamran Waheed', role: 'Solution Architect', available: true },
      { ref: 'wmajid', name: 'Waqas Majid', role: 'BDM, West Europe', available: true },
      { ref: 'waleed', name: 'Waleed Ahmad', role: '—', available: true },
      { ref: 'mzahar', name: 'Mudassar Zafar', role: 'BDM, North America', available: true },
      { ref: 'ajamil', name: 'Aqsa Jamil', role: 'BDM, MENA', available: true },
      { ref: 'shina', name: 'Bushra A.', role: 'HR Manager', available: true },
      { ref: 'fiqbal', name: 'Faisal Iqbal', role: 'Digital Marketing Head', available: true },
      { ref: 'hafiz', name: 'Hafiz Anees', role: 'Legal Advisor', available: true },
    ]
  },
  {
    id: 'advisory',
    title: 'Advisory Board',
    members: [
      { ref: 'ichaudhry', name: 'Imran Chaudhry', role: 'Senior Tech Advisor', available: true },
      { ref: 'tahmad', name: 'Tanveer Ahmad', role: 'Senior Tech Risk Advisor', available: true },
      { ref: 'mmalik', name: 'Mudassar Malik', role: 'Technical Architect', available: true },
      { ref: 'dhassan', name: 'Daniyal Hassan', role: 'PMO Head', available: true },
      { ref: 'mmumreez', name: 'Mumreez Khan', role: 'BDM North Europe', available: true },
    ]
  }
];

function MemberCard({ member }){
  return (
    <div className="group shrink-0 w-52 md:w-56 mr-5 md:mr-7 rounded-2xl p-3 transition-transform duration-300 hover:scale-[1.03]">
      <div className="relative h-28 w-28 mx-auto">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500 blur-[10px] opacity-20"></div>
        <div className="relative h-full w-full rounded-full p-[2px] bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500">
          <div className="h-full w-full rounded-full overflow-hidden bg-[#0a132e] border border-white/10 relative">
            <img
          src={member.photo}
          alt={member.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e)=>{ e.currentTarget.style.display='none'; const f=e.currentTarget.parentElement?.querySelector('.fallback'); if(f){f.style.display='grid';} }}
        />
        <div className="fallback hidden absolute inset-0 place-items-center text-white/80 text-xl font-bold">
          {member.name.split(' ').map(w=>w[0]).slice(0,2).join('')}
        </div>
        {!member.available && (
          <div className="absolute inset-0 grid place-items-center bg-black/50 text-white text-xs font-semibold">
            Not Available
          </div>
        )}
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <div className="text-white font-semibold text-base md:text-lg opacity-100">{member.name}</div>
        <div className="inline-block mt-1 px-2 py-0.5 rounded-full text-xs text-white/80 bg-white/10 border border-white/10">{member.role}</div>
      </div>
      <div className="mt-3 flex justify-center gap-3">
        {(member.linkedin || member.website) && (
          <>
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zm7 0h3.8v2.1h.1c.5-1 1.7-2.1 3.5-2.1 3.7 0 4.4 2.4 4.4 5.6V24h-4v-6.6c0-1.6 0-3.7-2.3-3.7-2.3 0-2.7 1.8-2.7 3.6V24h-4V8.5z"/></svg>
              </a>
            )}
            {member.website && (
              <a href={member.website} target="_blank" rel="noopener noreferrer" aria-label="Website" className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
}

const GlobalTeamScroller = ({ members, sections = TEAM_SECTIONS, speedSeconds = 28, gap = 16 }) => {
  // Helper to resolve members from refs and merge base data
  const resolveMember = (refIdOrMember) => {
    if (typeof refIdOrMember === 'object' && refIdOrMember.id) return refIdOrMember;
    const base = TEAM.find(t => t.id === refIdOrMember.ref);
    if (!base) {
      return {
        id: refIdOrMember.ref,
        name: refIdOrMember.name,
        role: refIdOrMember.role || '',
        photo: '/R.png',
        available: refIdOrMember.available !== false,
      };
    }
    return {
      ...base,
      name: refIdOrMember.name || base.name,
      role: refIdOrMember.role || base.role,
      available: refIdOrMember.available !== false,
    };
  };

  const renderScroller = (list) => {
    const items = [...list, ...list];
    return (
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
    );
  };

  return (
    <section className="relative max-w-7xl mx-auto px-6 mt-16" id="team">
      <div className="pointer-events-none absolute -z-10 inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-10 h-56 w-56 md:h-80 md:w-80 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute -bottom-28 -right-10 h-60 w-60 md:h-96 md:w-96 rounded-full bg-purple-500/20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 h-40 w-40 md:h-56 md:w-56 rounded-full bg-cyan-500/10 blur-3xl"></div>
      </div>
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-display bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">Our Global Team</h3>
        <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        <p className="text-white/70 mt-3">A snapshot of the brilliant people building Rush worldwide.</p>
      </div>

      {Array.isArray(members) && members.length > 0 && (
        <div className="mt-6">
          {renderScroller(members)}
        </div>
      )}

      {!members && sections.map(section => {
        const list = section.members
          .map(resolveMember)
          .map(m => ({ ...m, opacity: m.available ? 1 : 0.8 }));
        return (
          <div key={section.id} className="mt-12">
            <div className="text-center mb-4">
              <h4 className="text-xl md:text-2xl text-white font-semibold">{section.title}</h4>
            </div>
            {renderScroller(list)}
          </div>
        );
      })}

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


