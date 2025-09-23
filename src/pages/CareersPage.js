import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CareersPage = () => {
  useEffect(() => {
    document.title = 'Careers | Rush Group';
  }, []);

  const [form, setForm] = useState({ name: '', email: '', role: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application submitted', form);
    alert('Application submitted!');
    setForm({ name: '', email: '', role: '', message: '' });
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="relative border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <nav className="text-sm text-slate-600 mb-3">
            <Link to="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-medium">Careers</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Careers</h1>
          <p className="text-slate-600 mt-2 max-w-3xl">Join a global team building products that power digital transformation.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-10 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900 mb-2">Why work with us</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-1">
            <li>Impactful work with industry leaders</li>
            <li>Hybrid and remote-friendly roles</li>
            <li>Learning budget and mentorship</li>
            <li>Inclusive, collaborative culture</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Apply now</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="name">Full name</label>
              <input id="name" name="name" value={form.name} onChange={handleChange} className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#477CFF]" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="email">Email</label>
              <input id="email" type="email" name="email" value={form.email} onChange={handleChange} className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#477CFF]" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="role">Role of interest</label>
              <input id="role" name="role" value={form.role} onChange={handleChange} className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#477CFF]" placeholder="e.g., Frontend Engineer" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" value={form.message} onChange={handleChange} className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#477CFF]" placeholder="Tell us about yourself" />
            </div>
            <div className="flex items-center justify-end">
              <button type="submit" className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-[#24263A] text-white font-semibold shadow-sm hover:bg-[#1f2134] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#24263A]">Submit application</button>
            </div>
          </form>
          <p className="text-xs text-slate-500 mt-3">Or email your resume to careers@rush.example</p>
        </div>
      </div>
    </main>
  );
};

export default CareersPage;


