import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import HeroSlider from './components/HeroSlider';
import CompaniesGraph from './components/CompaniesGraph';
import AboutRush from './components/AboutRush';
import Footer from './components/Footer';

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
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0a132e' }}>
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
          <Link to="/brands" className="px-3 py-2 text-sm font-semibold tracking-wide text-white/90 hover:text-white rounded-md transition-colors hover:bg-white/10 hover:underline underline-offset-8 decoration-white/30">Group brands</Link>
          <Link to="/about" className="px-3 py-2 text-sm font-semibold tracking-wide text-white/90 hover:text-white rounded-md transition-colors hover:bg-white/10 hover:underline underline-offset-8 decoration-white/30">About us</Link>
          <Link to="/investors" className="px-3 py-2 text-sm font-semibold tracking-wide text-white/90 hover:text-white rounded-md transition-colors hover:bg-white/10 hover:underline underline-offset-8 decoration-white/30">Investor Center</Link>
          <Link to="/contact" className="ml-1 px-4 py-2 text-sm font-semibold tracking-wide text-white rounded-md bg-white/10 hover:bg-white/20 transition-colors">Contact us</Link>
        </nav>
      </header>

      <HeroSlider />


      <section className="relative z-10 text-center pt-8 pb-4 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-display text-white mb-3 leading-snug tracking-normal rise-1">
            Tech Solutions for the Global Tech Industry
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-normal max-w-4xl mx-auto font-body rise-2">
            We bring people together through technology and innovation, creating platforms that connect industries and power user experiences.
          </p>
        </div>
      </section>

      <section>
        <CompaniesGraph />
      </section>

      <AboutRush />

      <Footer />
    </div>
  );
}

export default App;
