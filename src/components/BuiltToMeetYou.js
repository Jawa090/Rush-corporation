import React from 'react';

const Badge = ({ children, className }) => (
  <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${className}`}>{children}</span>
);

const Card = ({ variant = 'neutral', icon, title, desc }) => {
  const isPrimary = variant === 'primary';
  return (
    <div className={`rounded-2xl ${isPrimary ? 'bg-[#0d6efd] text-white' : 'bg-slate-100 text-slate-900'} p-6 shadow-sm h-full`}> 
      <div className="flex flex-col gap-3">
        <Badge className={isPrimary ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'}>{icon}</Badge>
        <div className="font-semibold text-base leading-snug">{title}</div>
        <div className={`text-xs ${isPrimary ? 'text-white/90' : 'text-slate-600'}`}>{desc}</div>
      </div>
    </div>
  );
};

const BuiltToMeetYou = () => {
  return (
    <section className="relative py-10 md:py-14" style={{ backgroundColor: '#e8f1ff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left copy */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a132e] leading-tight tracking-tight">
              BUILT TO MEET YOU
              <br />
              <span className="text-[#477CFF]">WHERE YOU ARE</span>
            </h2>
            <p className="mt-4 text-[#0a132e]/80 max-w-xl">
              Our tools are designed with flexibility and versatility at their core, adapting to your unique roles, industries, and needs.
            </p>
            <p className="mt-3 text-[#0a132e]/80 max-w-xl">
              From startups to enterprises, we meet you where you are - integrating with your stack, scaling with your growth,
              and delivering measurable outcomes. Modular, secure, and cloud-agnostic by design.
            </p>
          </div>

          {/* Right cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card
              variant="primary"
              icon={<svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="6" /></svg>}
              title="Industry 4.0 Automation Suite"
              desc="Smart factory automation, IIoT, and real-time analytics."
            />

            <Card
              icon={<svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3l9 4-9 4-9-4 9-4zm0 7l9 4-9 4-9-4 9-4z"/></svg>}
              title="AI based Health & Physician System"
              desc="Clinical AI for triage, diagnostics, and physician workflows."
            />

            <Card
              icon={<svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7h7l-5.5 4 2 7-6.5-4.5L5.5 20l2-7L2 9h7z"/></svg>}
              title="LiveEx Shield"
              desc="AI-powered AML/CFT and transaction monitoring system."
            />

            <Card
              icon={<svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 6a4 4 0 110 8 4 4 0 010-8z"/></svg>}
              title="Contractorslist"
              desc="AI portal and marketplace for construction professionals."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltToMeetYou;
