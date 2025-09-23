import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TermsConditionsPage = () => {
  useEffect(() => {
    document.title = 'Terms & Conditions | Rush Group';
  }, []);

  const lastUpdated = 'September 2025';
  return (
    <main className="min-h-screen bg-white">
      <div className="relative border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <nav className="text-sm text-slate-600 mb-3">
            <Link to="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-medium">Terms & Conditions</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Terms & Conditions</h1>
          <p className="text-slate-600 mt-2">Last updated: {lastUpdated}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="prose prose-slate">
        <p>
          By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
        </p>
        <h2>Use of site</h2>
        <p>You agree to use the site only for lawful purposes and in a way that does not infringe the rights of others.</p>
        <h2>Liability</h2>
        <p>We provide this site on an "as is" basis and make no warranties of any kind.</p>
        <h2>Changes</h2>
        <p>We may update these terms from time to time. Continued use constitutes acceptance of the changes.</p>
        </div>
      </div>
    </main>
  );
};

export default TermsConditionsPage;


