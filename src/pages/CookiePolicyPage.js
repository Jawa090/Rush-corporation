import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookiePolicyPage = () => {
  useEffect(() => {
    document.title = 'Cookie Policy | Rush Group';
  }, []);

  const lastUpdated = 'September 2025';

  return (
    <main className="min-h-screen bg-white">
      <div className="relative border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <nav className="text-sm text-slate-600 mb-3">
            <Link to="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-medium">Cookie Policy</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Cookie Policy</h1>
          <p className="text-slate-600 mt-2">Last updated: {lastUpdated}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="prose prose-slate">
          <p>
            We use cookies to personalize content, to provide social media features and to analyze our traffic.
            You consent to our cookies if you continue to use our website.
          </p>
          <h2>What are cookies?</h2>
          <p>
            Cookies are small text files that can be used by websites to make a user's experience more efficient.
          </p>
          <h2>How we use cookies</h2>
          <ul>
            <li>Essential cookies for core site functionality</li>
            <li>Analytics cookies to measure usage and improve services</li>
            <li>Preference cookies to remember settings</li>
          </ul>
          <h2>Managing cookies</h2>
          <p>You can manage or disable cookies in your browser settings.</p>
        </div>
      </div>
    </main>
  );
};

export default CookiePolicyPage;


