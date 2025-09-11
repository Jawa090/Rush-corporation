import React from 'react';
import { Link } from 'react-router-dom';

const InvestorCenterPage = () => {
  const Footer = require('../components/Footer').default;

  // Refs and dynamic connectors for the org tree
  const treeRef = React.useRef(null);
  const refRoot = React.useRef(null);
  const refBitwords = React.useRef(null);
  const refFusion = React.useRef(null);
  const refRemote = React.useRef(null);
  const refContractor = React.useRef(null);
  const refParadise = React.useRef(null);
  const refEstimatingHub = React.useRef(null);
  const refDecExperts = React.useRef(null);
  const refMotors = React.useRef(null);
  const [connectorPaths, setConnectorPaths] = React.useState([]);

  React.useLayoutEffect(() => {
    const compute = () => {
      const container = treeRef.current;
      if (!container) return;
      const containerRect = container.getBoundingClientRect();
      const center = (ref) => {
        const el = ref?.current;
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return { x: r.left + r.width / 2 - containerRect.left, y: r.top + r.height / 2 - containerRect.top };
      };

      const pairs = [
        [refRoot, refBitwords],
        [refRoot, refFusion],
        [refRoot, refRemote],
        // Removed middle root-to-contractor connector to hide the center line
        // [refRoot, refContractor],
        [refContractor, refParadise],
        [refContractor, refEstimatingHub],
        [refContractor, refDecExperts],
        [refContractor, refMotors],
      ];

      const paths = [];
      for (const [a, b] of pairs) {
        const p1 = center(a);
        const p2 = center(b);
        if (!p1 || !p2) continue;
        const yMid = (p1.y + p2.y) / 2;
        // Orthogonal elbow path: down, across, down
        const d = `M ${p1.x} ${p1.y} L ${p1.x} ${yMid} L ${p2.x} ${yMid} L ${p2.x} ${p2.y}`;
        paths.push(d);
      }
      setConnectorPaths(paths);
    };

    compute();
    const ro = new ResizeObserver(() => compute());
    if (treeRef.current) ro.observe(treeRef.current);
    window.addEventListener('resize', compute);
    const id = setInterval(compute, 400); // recalc as content loads
    return () => {
      window.removeEventListener('resize', compute);
      clearInterval(id);
      ro.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0a132e' }}>
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 max-w-6xl mx-auto">
        <div className="flex items-center">
          <Link to="/" aria-label="Rush home">
            <img src="/logo1.png" alt="Rush" className="h-16 w-auto" />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-2">
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
          <h1 className="text-4xl md:text-6xl font-display text-white tracking-tight mb-3">
            Investor Center
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-4xl mx-auto leading-snug font-body">
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
              <h2 className="text-3xl md:text-4xl font-display text-white mb-3">About Rush Corporation</h2>
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
          <h2 className="text-3xl md:text-4xl font-display text-white text-center mb-6">Our Portfolio Companies</h2>
          <p className="text-white/70 text-center mb-8 max-w-3xl mx-auto">
            A diversified portfolio of high-growth technology companies, each positioned for market leadership in their respective sectors.
          </p>
          
          {/* Organizational Tree Chart */}
          <div ref={treeRef} className="relative mb-8 z-0">
            {/* Dynamic connectors */}
            <div className="hidden md:block absolute inset-0 pointer-events-none z-20">
              <svg className="w-full h-full">
                <defs>
                  <linearGradient id="orgLine" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
                {connectorPaths.map((d, i) => (
                  <path key={i} d={d} stroke="url(#orgLine)" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.45" />
                ))}
              </svg>
            </div>

            {/* Rush (root) */}
            <div className="flex justify-center mb-8 relative z-10">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-30"></div>
                <div ref={refRoot} className="relative bg-white/10 border border-white/20 rounded-xl px-8 py-6 backdrop-blur-sm text-center">
                  <h3 className="text-white font-display text-xl">Rush Corporation</h3>
                  <p className="text-white/60 text-sm mt-1">Parent Company</p>
                </div>
              </div>
            </div>

            {/* Level 2: Bitwords, Fusion Cortex, Remote Seat */}
            <div className="grid grid-cols-5 gap-4 mb-6 relative z-10">
              <div className="col-start-2">
                <div ref={refBitwords} className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-white/20 rounded-lg p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="text-center">
                    <h4 className="text-white font-semibold text-sm mb-2">Bitwords</h4>
                    <div className="text-green-400 text-xs font-medium">+28% YoY</div>
                    <div className="text-white/60 text-xs mt-1">$210M</div>
                  </div>
                </div>
              </div>
              <div className="col-start-3">
                <div ref={refFusion} className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-white/20 rounded-lg p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="text-center">
                    <h4 className="text-white font-semibold text-sm mb-2">Fusion Cortex</h4>
                    <div className="text-green-400 text-xs font-medium">+38% YoY</div>
                    <div className="text-white/60 text-xs mt-1">$450M</div>
                  </div>
                </div>
              </div>
              <div className="col-start-4">
                <div ref={refRemote} className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-white/20 rounded-lg p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="text-center">
                    <h4 className="text-white font-semibold text-sm mb-2">Remote Seat</h4>
                    <div className="text-green-400 text-xs font-medium">+48% YoY</div>
                    <div className="text-white/60 text-xs mt-1">$210M</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Level 2: Contractor List */}
            <div className="grid grid-cols-5 mb-4 relative z-10">
              <div className="col-start-3">
                <div ref={refContractor} className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-white/20 rounded-lg p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="text-center">
                    <h4 className="text-white font-semibold text-sm mb-2">Contractor List</h4>
                    <div className="text-green-400 text-xs font-medium">+55% YoY</div>
                    <div className="text-white/60 text-xs mt-1">$75M</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Level 3: Children of Contractor List */}
            <div className="grid grid-cols-5 gap-4 mb-6 relative z-10">
              <div className="col-start-2">
                <div ref={refParadise} className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="text-center">
                    <h4 className="text-white font-semibold text-sm mb-2">Paradise Estimating</h4>
                    <div className="text-green-400 text-xs font-medium">+35% YoY</div>
                    <div className="text-white/60 text-xs mt-1">$180M</div>
                  </div>
                </div>
              </div>
              <div className="col-start-3">
                <div ref={refEstimatingHub} className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="text-center">
                    <h4 className="text-white font-semibold text-sm mb-2">Estimating Hub</h4>
                    <div className="text-green-400 text-xs font-medium">+42% YoY</div>
                    <div className="text-white/60 text-xs mt-1">$95M</div>
                  </div>
                </div>
              </div>
              <div className="col-start-4">
                <div ref={refDecExperts} className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="text-center">
                    <h4 className="text-white font-semibold text-sm mb-2">DEC Experts</h4>
                    <div className="text-green-400 text-xs font-medium">+28% YoY</div>
                    <div className="text-white/60 text-xs mt-1">$320M</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Level 2: 3RE Motors (last) */}
            <div className="grid grid-cols-5 relative z-10">
              <div className="col-start-3">
                <div ref={refMotors} className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-white/20 rounded-lg p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="text-center">
                    <h4 className="text-white font-semibold text-sm mb-2">3RE Motors</h4>
                    <div className="text-green-400 text-xs font-medium">+22% YoY</div>
                    <div className="text-white/60 text-xs mt-1">$120M</div>
                  </div>
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
          <h2 className="text-3xl md:text-4xl font-display text-white text-center mb-6">Financial Performance</h2>
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
          <h2 className="text-3xl md:text-4xl font-display text-white text-center mb-6">Growth Strategy</h2>
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

      {/* Investment Thesis */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">Why invest in Rush</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h3 className="text-white font-semibold text-lg mb-2">Durable growth</h3>
              <p className="text-white/70">Diversified portfolio across resilient software categories with strong retention and upsell.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h3 className="text-white font-semibold text-lg mb-2">Shared platform</h3>
              <p className="text-white/70">Common infrastructure, design systems, and GTM engine accelerate new brand scale efficiently.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h3 className="text-white font-semibold text-lg mb-2">Cash discipline</h3>
              <p className="text-white/70">Profitable unit economics, measured capital allocation, and focus on sustainable free cash flow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ESG & Governance */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-white text-2xl font-bold mb-3">ESG Highlights</h3>
              <ul className="space-y-2 text-white/80 list-disc list-inside">
                <li>Carbon‑aware cloud deployments; &gt;70% workloads on renewable-backed regions</li>
                <li>Privacy by design; regular third‑party security assessments (SOC2‑aligned)</li>
                <li>Inclusive hiring and pay equity reviews; global code of conduct</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-white text-2xl font-bold mb-3">Corporate Governance</h3>
              <ul className="space-y-2 text-white/80 list-disc list-inside">
                <li>Independent audit and compensation committees</li>
                <li>Clear capital allocation framework reviewed quarterly</li>
                <li>Shareholder communications program with regular updates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap & Milestones */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-white text-2xl font-bold mb-4 text-center">Upcoming milestones</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
              <div className="text-white font-semibold mb-1">Q2</div>
              <p className="text-white/70">Launch AI‑assisted workflows in two brands</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
              <div className="text-white font-semibold mb-1">Q3</div>
              <p className="text-white/70">Expand to 3 new regions; optimize gross margin +200bps</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
              <div className="text-white font-semibold mb-1">Q4</div>
              <p className="text-white/70">Ship unified design system v3 across portfolio</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
              <div className="text-white font-semibold mb-1">FY</div>
              <p className="text-white/70">Target EBITDA margin expansion with operating leverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-white text-2xl font-bold mb-4 text-center">Investor FAQs</h3>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="text-white font-semibold">What drives long‑term growth?</div>
              <p className="text-white/70">New product launches, international expansion, and cross‑sell within our installed base.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="text-white font-semibold">How do you think about capital allocation?</div>
              <p className="text-white/70">Prioritize organic investment, selective M&A with clear synergies, and disciplined returns.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="text-white font-semibold">Profitability vs growth?</div>
              <p className="text-white/70">Balanced approach—maintain attractive growth while expanding free cash flow over time.</p>
            </div>
          </div>
        </div>
      </section>

      {React.createElement(Footer)}
    </div>
  );
};

export default InvestorCenterPage;

