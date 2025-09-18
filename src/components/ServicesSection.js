import React from 'react';
import { FiMonitor, FiCpu, FiSmartphone, FiBox, FiLayers, FiRefreshCcw, FiRepeat, FiTrendingUp, FiCloud, FiShield } from 'react-icons/fi';

const Item = ({ icon, title, desc }) => (
  <div className="flex items-start gap-3">
    <span className="mt-1 inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#477CFF]/15 text-[#477CFF]">{icon}</span>
    <div>
      <div className="font-semibold text-slate-900 text-sm">{title}</div>
      <div className="text-xs text-slate-600">{desc}</div>
    </div>
  </div>
);

const ServicesSection = () => {
  return (
    <section className="relative py-12" style={{ backgroundColor: '#f7f9ff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a132e] tracking-tight mb-2">Services We Offer</h2>
        <p className="text-[#0a132e]/80 max-w-3xl mb-8">
          We offer a comprehensive range of services that help organizations leverage digital technologies to enhance business
          processes and improve customer experience.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left image */}
          <div className="relative hidden md:flex items-center justify-center">
            <div className="w-full max-w-sm">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/service.png"
                  alt="Services We Offer"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right service list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Item icon={<FiMonitor className="w-4 h-4" />} title="Web Application Development" desc="Scalable apps tailored to your business needs." />
            <Item icon={<FiCpu className="w-4 h-4" />} title="AI & Machine Learning" desc="ML models for insights, automation, and prediction." />
            <Item icon={<FiSmartphone className="w-4 h-4" />} title="Mobile App Development" desc="iOS & Android apps that delight customers." />
            <Item icon={<FiBox className="w-4 h-4" />} title="Enterprise Mobility" desc="Secure device management and mobile strategy." />
            <Item icon={<FiLayers className="w-4 h-4" />} title="Digital UI/UX" desc="Personalized experiences across multiple channels." />
            <Item icon={<FiRefreshCcw className="w-4 h-4" />} title="Application Modernization" desc="Cloud-ready refactor and migration of legacy apps." />
            <Item icon={<FiRepeat className="w-4 h-4" />} title="Process Automation" desc="RPA and workflow automation for efficiency." />
            <Item icon={<FiTrendingUp className="w-4 h-4" />} title="Agile Transformation" desc="Adopt agile culture, tools, and practices." />
            <Item icon={<FiCloud className="w-4 h-4" />} title="Cloud Solutions" desc="Cloud strategy, migration, and cost optimization." />
            <Item icon={<FiShield className="w-4 h-4" />} title="Cybersecurity" desc="Protect digital assets and ensure compliance." />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
