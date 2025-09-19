import React from 'react';
import { FiShield, FiBarChart2, FiServer, FiSliders, FiGitMerge, FiCpu, FiActivity, FiCheckSquare } from 'react-icons/fi';

const Row = ({ icon, title, desc }) => (
  <div className="flex items-start gap-3">
    <span className="mt-1 inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#477CFF]/15 text-[#477CFF]">{icon}</span>
    <div>
      <div className="text-sm font-extrabold tracking-wide text-slate-900">{title}</div>
      <div className="text-xs text-slate-600">{desc}</div>
    </div>
  </div>
);

const ManagementConsulting = () => {
  return (
    <section className="relative py-12" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-wider text-[#0a132e] mb-1">MANAGEMENT CONSULTING</h2>
        <p className="text-[#0a132e]/80 max-w-4xl mb-6">
          Our products improve financial accessibility with innovative, user-friendly solutions for businesses and consumers.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left image */}
          <div className="relative hidden md:flex items-center justify-center">
            <div className="w-full max-w-sm">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/management.png"
                  alt="Management Consulting"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right two-column list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Row icon={<FiSliders className="w-4 h-4" />} title="STRATEGY AND PLANNING" desc="Roadmaps to evaluate existing IT systems, identify capabilities, and define strategic initiatives." />
            <Row icon={<FiShield className="w-4 h-4" />} title="CYBERSECURITY AND RISK MANAGEMENT" desc="Proactive approach to protect data, manage risk, and ensure resilience across platforms." />
            <Row icon={<FiGitMerge className="w-4 h-4" />} title="IMPLEMENTATION & INTEGRATION" desc="System configuration, integration, and vendor coordination with robust change control." />
            <Row icon={<FiBarChart2 className="w-4 h-4" />} title="DATA ANALYTICS AND BI" desc="Insights at scale: data modeling, visualization, and modern analytics platforms." />
            <Row icon={<FiActivity className="w-4 h-4" />} title="CHANGE MANAGEMENT" desc="Communication, training, and adoption programs to realize benefits quickly." />
            <Row icon={<FiServer className="w-4 h-4" />} title="ENTERPRISE ARCHITECTURE" desc="Scalable systems design aligning business outcomes and technology stacks." />
            <Row icon={<FiCpu className="w-4 h-4" />} title="IT INFRASTRUCTURE OPTIMIZATION" desc="Performance tuning, reliability engineering, and cost optimization." />
            <Row icon={<FiCheckSquare className="w-4 h-4" />} title="VENDOR SELECTION & IT GOVERNANCE" desc="Objective evaluation, governance design, and executive alignment with goals." />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementConsulting;
