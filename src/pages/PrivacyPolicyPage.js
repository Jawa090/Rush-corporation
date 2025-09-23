import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage = () => {
  useEffect(() => {
    document.title = 'Privacy Policy | Rush Group';
  }, []);

  const lastUpdated = 'September 2025';
  return (
    <main className="min-h-screen bg-white">
      <div className="relative border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <nav className="text-sm text-slate-600 mb-3">
            <Link to="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-medium">Privacy Policy</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Privacy Policy</h1>
          <p className="text-slate-600 mt-2">Last updated: {lastUpdated}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="prose prose-slate">
        <p>
          Your privacy is important to us. This policy explains what information we collect, why we collect it,
          and how we use it.
        </p>
        <h2>Information we collect</h2>
        <ul>
          <li>Contact information (e.g., name, email)</li>
          <li>Usage data (pages visited, interactions)</li>
          <li>Technical data (browser, device, IP)</li>
        </ul>
        <h2>How we use information</h2>
        <ul>
          <li>Provide and improve our services</li>
          <li>Communicate with you about updates</li>
          <li>Maintain security and prevent abuse</li>
        </ul>
        <h2>Your rights</h2>
        <p>You may request access, correction, or deletion of your personal data.</p>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;


