import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import HeroSlider from './components/HeroSlider';
import CompaniesGraph from './components/CompaniesGraph';
import AboutRush from './components/AboutRush';
import Footer from './components/Footer';
import BuiltToMeetYou from './components/BuiltToMeetYou';
import ServicesSection from './components/ServicesSection';
import ManagementConsulting from './components/ManagementConsulting';

import AboutPage from './pages/AboutPage';
import GroupBrandsPage from './pages/GroupBrandsPage';
import ContactPage from './pages/ContactPage';
import InvestorCenterPage from './pages/InvestorCenterPage';

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/brands" element={<GroupBrandsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/investors" element={<InvestorCenterPage />} />
      </Routes>
    </Router>
  );
}
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}
function HomePage() {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);
  const closeMobile = () => setIsMobileNavOpen(false);
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      <style>{`
        @keyframes riseUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .rise-1 { animation: riseUp .8s ease-out both .05s; }
        .rise-2 { animation: riseUp .9s ease-out both .2s; }
      `}</style>
      <header className="flex items-center justify-between px-4 py-4 max-w-6xl mx-auto">
        <div className="flex items-center">
          <img
            src="/logo1.png"
            alt="Logo"
            className="h-16 w-auto"
          />
        </div>
        <nav className="hidden md:flex items-center gap-2">
          <Link to="/" className="px-3 py-2 text-sm font-semibold tracking-wide text-slate-800 hover:text-black rounded-md transition-colors hover:bg-slate-100 hover:underline underline-offset-8 decoration-slate-400">Home</Link>
          <Link to="/brands" className="px-3 py-2 text-sm font-semibold tracking-wide text-slate-800 hover:text-black rounded-md transition-colors hover:bg-slate-100 hover:underline underline-offset-8 decoration-slate-400">Group brands</Link>
          <Link to="/about" className="px-3 py-2 text-sm font-semibold tracking-wide text-slate-800 hover:text-black rounded-md transition-colors hover:bg-slate-100 hover:underline underline-offset-8 decoration-slate-400">About us</Link>
          <Link to="/investors" className="px-3 py-2 text-sm font-semibold tracking-wide text-slate-800 hover:text-black rounded-md transition-colors hover:bg-slate-100 hover:underline underline-offset-8 decoration-slate-400">Investor Center</Link>
          <Link to="/contact" className="ml-1 px-4 py-2 text-sm font-semibold tracking-wide text-white rounded-md bg-slate-900 hover:bg-black transition-colors">Contact us</Link>
        </nav>
        <button
          aria-label="Open menu"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-300"
          onClick={() => setIsMobileNavOpen((v) => !v)}
        >
          <span className="sr-only">Open menu</span>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Mobile nav */}
      {isMobileNavOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white/95 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <img src="/logo1.png" alt="Logo" className="h-10 w-auto" />
            <button
              aria-label="Close menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-300"
              onClick={closeMobile}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
          <nav className="px-6 space-y-2">
            <Link onClick={closeMobile} to="/" className="block px-4 py-3 rounded-lg text-slate-800 hover:text-black hover:bg-slate-100">Home</Link>
            <Link onClick={closeMobile} to="/brands" className="block px-4 py-3 rounded-lg text-slate-800 hover:text-black hover:bg-slate-100">Group brands</Link>
            <Link onClick={closeMobile} to="/about" className="block px-4 py-3 rounded-lg text-slate-800 hover:text-black hover:bg-slate-100">About us</Link>
            <Link onClick={closeMobile} to="/investors" className="block px-4 py-3 rounded-lg text-slate-800 hover:text-black hover:bg-slate-100">Investor Center</Link>
            <Link onClick={closeMobile} to="/contact" className="block px-4 py-3 rounded-lg text-white bg-slate-900 hover:bg-black">Contact us</Link>
          </nav>
        </div>
      )}

      <HeroSlider />


      <section className="relative z-10 text-center pt-8 pb-4 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-display text-slate-900 mb-3 leading-snug tracking-normal rise-1">
            Tech Solutions for the Global Tech Industry
          </h1>
          <p className="text-lg md:text-xl text-slate-700 leading-normal max-w-4xl mx-auto font-body rise-2">
            We bring people together through technology and innovation, creating platforms that connect industries and power user experiences.
          </p>
        </div>
      </section>

      <section>
        <CompaniesGraph />
      </section>

      <BuiltToMeetYou />

      <ServicesSection />

      <ManagementConsulting />

      <AboutRush />

      <Footer />
    </div>
  );
}

export default App;
