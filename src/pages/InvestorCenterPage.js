import React from 'react';
import { Link } from 'react-router-dom';

const InvestorCenterPage = () => {
  const Footer = require('../components/Footer').default;

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0a132e' }}>
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 max-w-6xl mx-auto">
        <div className="flex items-center">
          <Link to="/" aria-label="Rush home">
            <img src="/logo1.png" alt="Rush" className="h-16 w-auto" />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-2" style={{fontFamily: 'Inter, Segoe UI, Roboto, system-ui, -apple-system'}}>
          <Link to="/" className="px-3 py-2 text-sm font-semibold tracking-wide text-white/90 hover:text-white rounded-md transition-colors hover:bg-white/10 hover:underline underline-offset-8 decoration-white/30">Home</Link>
          <Link to="/brands" className="px-3 py-2 text-sm font-semibold tracking-wide text-white/90 hover:text-white rounded-md transition-colors hover:bg-white/10 hover:underline underline-offset-8 decoration-white/30">Group brands</Link>
          <Link to="/about" className="px-3 py-2 text-sm font-semibold tracking-wide text-white/90 hover:text-white rounded-md transition-colors hover:bg-white/10 hover:underline underline-offset-8 decoration-white/30">About us</Link>
          <span className="px-3 py-2 text-sm font-semibold tracking-wide text-white rounded-md bg-white/10">Investor Center</span>
          <Link to="/contact" className="ml-1 px-4 py-2 text-sm font-semibold tracking-wide text-white rounded-md bg-white/10 hover:bg-white/20 transition-colors">Contact us</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-8 md:py-12">
        <div className="absolute inset-0">
          <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-500 blur-[120px] opacity-20 right-0 top-0" style={{mixBlendMode: 'screen'}} />
          <div className="absolute w-[300px] h-[300px] rounded-full bg-purple-600 blur-[140px] opacity-20 left-0 bottom-0" style={{mixBlendMode: 'screen'}} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-3">
            Investor Center
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-4xl mx-auto leading-snug">
            Discover Rush Corporation's growth story, financial performance, and investment opportunities in the rapidly evolving technology landscape.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#financials" className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-[#0a132e] font-semibold hover:bg-gray-100 transition-colors">
              View Financials
            </a>
            <a href="#strategy" className="inline-flex items-center px-6 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors">
              Growth Strategy
            </a>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">$2.4B</div>
              <div className="text-white/70">Annual Revenue</div>
              <div className="text-green-400 text-sm mt-1">+28% YoY</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">$890M</div>
              <div className="text-white/70">EBITDA</div>
              <div className="text-green-400 text-sm mt-1">+32% YoY</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">8</div>
              <div className="text-white/70">Portfolio Companies</div>
              <div className="text-blue-400 text-sm mt-1">Growing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">2.1M</div>
              <div className="text-white/70">Active Users</div>
              <div className="text-green-400 text-sm mt-1">+45% YoY</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">About Rush Corporation</h2>
              <p className="text-white/80 leading-normal mb-2">
                Rush Corporation is a leading technology holding company that operates and invests in innovative software companies across multiple sectors. Founded in 2018, we've built a portfolio of complementary businesses that serve diverse markets while sharing common technology infrastructure and design principles.
              </p>
              <p className="text-white/80 leading-normal mb-2">
                Our companies span estimating software, remote collaboration tools, contractor management platforms, and automotive technology solutions. Each business operates independently while benefiting from shared resources, best practices, and cross-company synergies.
              </p>
              <p className="text-white/80 leading-normal">
                We focus on companies that solve real problems for real people, with products that are both powerful and delightful to use. Our approach combines deep technical expertise with strong business fundamentals and a commitment to long-term value creation.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Investment Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-white/80">Diversified portfolio across high-growth technology sectors</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-white/80">Proven track record of scaling companies from startup to market leader</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-white/80">Strong recurring revenue model with high customer retention</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-white/80">Experienced management team with deep industry expertise</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Companies - Growth Tree */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">Our Portfolio Companies</h2>
          <p className="text-white/70 text-center mb-8 max-w-3xl mx-auto">
            A diversified portfolio of high-growth technology companies, each positioned for market leadership in their respective sectors.
          </p>
          
                     {/* Organizational Tree Chart */}
           <div className="relative mb-8">
             {/* Central Rush Node */}
             <div className="flex justify-center mb-8">
               <div className="relative">
                 <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-30"></div>
                 <div className="relative bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-sm">
                   <h3 className="text-white font-bold text-xl text-center">Rush Corporation</h3>
                   <p className="text-white/60 text-sm text-center mt-1">Parent Company</p>
                 </div>
               </div>
             </div>

             {/* Connection Lines */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
               <svg className="w-full h-full" viewBox="0 0 1200 800">
                 <defs>
                   <linearGradient id="treeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                     <stop offset="0%" style={{stopColor: '#3B82F6', stopOpacity: 0.4}} />
                     <stop offset="100%" style={{stopColor: '#8B5CF6', stopOpacity: 0.4}} />
                   </linearGradient>
                 </defs>
                 {/* Tree structure lines */}
                 <path d="M 600 200 L 200 350" stroke="url(#treeGradient)" strokeWidth="3" fill="none" opacity="0.6"/>
                 <path d="M 600 200 L 400 350" stroke="url(#treeGradient)" strokeWidth="3" fill="none" opacity="0.6"/>
                 <path d="M 600 200 L 600 350" stroke="url(#treeGradient)" strokeWidth="3" fill="none" opacity="0.6"/>
                 <path d="M 600 200 L 800 350" stroke="url(#treeGradient)" strokeWidth="3" fill="none" opacity="0.6"/>
                 <path d="M 600 200 L 1000 350" stroke="url(#treeGradient)" strokeWidth="3" fill="none" opacity="0.6"/>
                 <path d="M 600 200 L 1200 350" stroke="url(#treeGradient)" strokeWidth="3" fill="none" opacity="0.6"/>
                 
                 {/* Second level connections */}
                 <path d="M 200 350 L 150 500" stroke="url(#treeGradient)" strokeWidth="2" fill="none" opacity="0.4"/>
                 <path d="M 200 350 L 250 500" stroke="url(#treeGradient)" strokeWidth="2" fill="none" opacity="0.4"/>
                 <path d="M 400 350 L 350 500" stroke="url(#treeGradient)" strokeWidth="2" fill="none" opacity="0.4"/>
                 <path d="M 400 350 L 450 500" stroke="url(#treeGradient)" strokeWidth="2" fill="none" opacity="0.4"/>
                 <path d="M 600 350 L 550 500" stroke="url(#treeGradient)" strokeWidth="2" fill="none" opacity="0.4"/>
                 <path d="M 600 350 L 650 500" stroke="url(#treeGradient)" strokeWidth="2" fill="none" opacity="0.4"/>
                 <path d="M 800 350 L 750 500" stroke="url(#treeGradient)" strokeWidth="2" fill="none" opacity="0.4"/>
                 <path d="M 800 350 L 850 500" stroke="url(#treeGradient)" strokeWidth="2" fill="none" opacity="0.4"/>
                 <path d="M 1000 350 L 950 500" stroke="url(#treeGradient)" strokeWidth="2" fill="none" opacity="0.4"/>
                 <path d="M 1000 350 L 1050 500" stroke="url(#treeGradient)" strokeWidth="2" fill="none" opacity="0.4"/>
                 <path d="M 1200 350 L 1150 500" stroke="url(#treeGradient)" strokeWidth="2" fill="none" opacity="0.4"/>
                 <path d="M 1200 350 L 1250 500" stroke="url(#treeGradient)" strokeWidth="2" fill="none" opacity="0.4"/>
               </svg>
             </div>

             {/* First Level - Major Companies */}
             <div className="grid grid-cols-6 gap-3 mb-6">
               <div className="relative group">
                 <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-white/20 rounded-lg p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                   <div className="text-center">
                     <h4 className="text-white font-semibold text-sm mb-2">Paradise Estimating</h4>
                     <div className="text-green-400 text-xs font-medium">+35% YoY</div>
                     <div className="text-white/60 text-xs mt-1">$180M</div>
                   </div>
                 </div>
               </div>

               <div className="relative group">
                 <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-white/20 rounded-lg p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                   <div className="text-center">
                     <h4 className="text-white font-semibold text-sm mb-2">Estimating Hub</h4>
                     <div className="text-green-400 text-xs font-medium">+42% YoY</div>
                     <div className="text-white/60 text-xs mt-1">$95M</div>
                   </div>
                 </div>
               </div>

               <div className="relative group">
                 <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-white/20 rounded-lg p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                   <div className="text-center">
                     <h4 className="text-white font-semibold text-sm mb-2">DEC Experts</h4>
                     <div className="text-green-400 text-xs font-medium">+28% YoY</div>
                     <div className="text-white/60 text-xs mt-1">$320M</div>
                   </div>
                 </div>
               </div>

               <div className="relative group">
                 <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-white/20 rounded-lg p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                   <div className="text-center">
                     <h4 className="text-white font-semibold text-sm mb-2">Remote Seat</h4>
                     <div className="text-green-400 text-xs font-medium">+48% YoY</div>
                     <div className="text-white/60 text-xs mt-1">$210M</div>
                   </div>
                 </div>
               </div>

               <div className="relative group">
                 <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-white/20 rounded-lg p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                   <div className="text-center">
                     <h4 className="text-white font-semibold text-sm mb-2">Contractor List</h4>
                     <div className="text-green-400 text-xs font-medium">+55% YoY</div>
                     <div className="text-white/60 text-xs mt-1">$75M</div>
                   </div>
                 </div>
               </div>

               <div className="relative group">
                 <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-white/20 rounded-lg p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                   <div className="text-center">
                     <h4 className="text-white font-semibold text-sm mb-2">Fusion Cortex</h4>
                     <div className="text-green-400 text-xs font-medium">+38% YoY</div>
                     <div className="text-white/60 text-xs mt-1">$450M</div>
                   </div>
                 </div>
               </div>
             </div>

             {/* Second Level - Subsidiaries */}
             <div className="grid grid-cols-12 gap-2">
               <div className="col-span-2">
                 <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                   <h5 className="text-white font-medium text-xs">Construction Tech</h5>
                   <div className="text-green-400 text-xs">+25%</div>
                 </div>
               </div>
               <div className="col-span-2">
                 <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                   <h5 className="text-white font-medium text-xs">Project Management</h5>
                   <div className="text-green-400 text-xs">+30%</div>
                 </div>
               </div>
               <div className="col-span-2">
                 <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                   <h5 className="text-white font-medium text-xs">Enterprise Solutions</h5>
                   <div className="text-green-400 text-xs">+22%</div>
                 </div>
               </div>
               <div className="col-span-2">
                 <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                   <h5 className="text-white font-medium text-xs">Collaboration Tools</h5>
                   <div className="text-green-400 text-xs">+40%</div>
                 </div>
               </div>
               <div className="col-span-2">
                 <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                   <h5 className="text-white font-medium text-xs">Marketplace</h5>
                   <div className="text-green-400 text-xs">+45%</div>
                 </div>
               </div>
               <div className="col-span-2">
                 <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                   <h5 className="text-white font-medium text-xs">AI Development</h5>
                   <div className="text-green-400 text-xs">+35%</div>
                 </div>
               </div>
             </div>
           </div>

          {/* Growth Metrics Summary */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">$1.33B</div>
              <div className="text-white/70 text-sm">Total Portfolio Revenue</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">+41%</div>
              <div className="text-white/70 text-sm">Average YoY Growth</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">6</div>
              <div className="text-white/70 text-sm">Active Portfolio Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Performance */}
      <section id="financials" className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">Financial Performance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">Revenue Growth</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white/80">2021</span>
                  <span className="text-white font-semibold">$1.2B</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">2022</span>
                  <span className="text-white font-semibold">$1.8B</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">2023</span>
                  <span className="text-white font-semibold">$2.4B</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">2024 (Projected)</span>
                  <span className="text-white font-semibold">$3.1B</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">Profitability Metrics</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Gross Margin</span>
                  <span className="text-green-400 font-semibold">78%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">EBITDA Margin</span>
                  <span className="text-green-400 font-semibold">37%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Net Income Margin</span>
                  <span className="text-green-400 font-semibold">24%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Customer Retention</span>
                  <span className="text-blue-400 font-semibold">94%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Strategy */}
      <section id="strategy" className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">Growth Strategy</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Organic Growth</h3>
              <p className="text-white/70">
                Expand existing product offerings and enter new markets through product development and customer acquisition.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Strategic Acquisitions</h3>
              <p className="text-white/70">
                Acquire complementary businesses to expand our portfolio and accelerate growth in key markets.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Global Expansion</h3>
              <p className="text-white/70">
                Enter new international markets and establish local presence to capture global opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-6 md:p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Investment Opportunities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Why Invest in Rush?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-white/80">Diversified portfolio reduces risk while maintaining high growth potential</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-white/80">Strong recurring revenue model with predictable cash flows</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-white/80">Experienced management team with proven track record</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-white/80">Technology-driven competitive advantages</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Market Position</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Construction Tech</span>
                    <span className="text-white font-semibold">#2 Market Share</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Remote Collaboration</span>
                    <span className="text-white font-semibold">#3 Market Share</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">AI Development</span>
                    <span className="text-white font-semibold">#1 Market Share</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Automotive Tech</span>
                    <span className="text-white font-semibold">#4 Market Share</span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Risk Factors */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">Risk Factors</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h3 className="text-xl font-semibold text-white mb-3">Market Risks</h3>
              <ul className="space-y-1 text-white/70">
                <li>• Economic downturns affecting customer spending</li>
                <li>• Increased competition in key markets</li>
                <li>• Rapid technological changes</li>
                <li>• Regulatory changes in target industries</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h3 className="text-xl font-semibold text-white mb-3">Operational Risks</h3>
              <ul className="space-y-1 text-white/70">
                <li>• Dependence on key personnel</li>
                <li>• Cybersecurity threats</li>
                <li>• Integration challenges from acquisitions</li>
                <li>• Supply chain disruptions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Get in Touch</h2>
          <p className="text-white/80 mb-4">
            For investor inquiries, financial information, or to schedule a meeting with our management team.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h3 className="text-xl font-semibold text-white mb-4">Investor Relations</h3>
              <p className="text-white/70 mb-4">Email: investors@rush.com</p>
              <p className="text-white/70">Phone: +1 (555) 123-4567</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h3 className="text-xl font-semibold text-white mb-4">Media Inquiries</h3>
              <p className="text-white/70 mb-4">Email: press@rush.com</p>
              <p className="text-white/70">Phone: +1 (555) 987-6543</p>
            </div>
          </div>
        </div>
      </section>

      {React.createElement(Footer)}
    </div>
  );
};

export default InvestorCenterPage;
