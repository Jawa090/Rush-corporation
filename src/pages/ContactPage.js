import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WorldMap from '../components/WorldMap';

const offices = [
  {
    id: 1,
    city: 'New York',
    country: 'USA',
    address: '869 Bay Ridge Avenue Brooklyn NY 11220',
    phone: '+1 917 774 8864',
    email: 'info@rushcorporation.com',
    mapUrl: 'https://www.google.com/maps?q=869%20Bay%20Ridge%20Avenue%20Brooklyn%20NY%2011220,%20New%20York,%20USA&output=embed'
  },
  {
    id: 2,
    city: 'Austin',
    country: 'USA',
    address: '869 Bay Ridge Avenue Brooklyn NY 11220',
    phone: '+1 917 774 8864',
    email: 'info@rushcorporation.com',
    mapUrl: 'https://www.google.com/maps?q=869%20Bay%20Ridge%20Avenue%20Brooklyn%20NY%2011220,%20Austin,%20USA&output=embed'
  },
  {
    id: 3,
    city: 'Canada',
    country: 'Canada',
    address: '869 Bay Ridge Avenue Brooklyn NY 11220',
    phone: '+1 917 774 8864',
    email: 'info@rushcorporation.com',
    mapUrl: 'https://www.google.com/maps?q=869%20Bay%20Ridge%20Avenue%20Brooklyn%20NY%2011220,%20Canada&output=embed'
  },
  {
    id: 4,
    city: 'North Sydney',
    country: 'Australia',
    address: 'Suite 3A/74, Level 14, 275 Alfred St North Sydney, NSW 2060, Australia',
    phone: '+61 2 0000 0000',
    email: 'info@rushcorporation.com',
    mapUrl: 'https://www.google.com/maps?q=275%20Alfred%20St%20North%20Sydney%20NSW%202060%20Australia&output=embed'
  },
  {
    id: 5,
    city: 'London',
    country: 'United Kingdom',
    address: '20 Bushey Road, SW20 8EE',
    phone: '+447447713799',
    email: 'info@rushcorporation.com',
    mapUrl: 'https://www.google.com/maps?q=20%20Bushey%20Road%20SW20%208EE%20London&output=embed'
  },
  {
    id: 6,
    city: 'Denmark',
    country: 'Denmark',
    address: '869 Bay Ridge Avenue Brooklyn NY 11220',
    phone: '+1 917 774 8864',
    email: 'info@rushcorporation.com',
    mapUrl: 'https://www.google.com/maps?q=869%20Bay%20Ridge%20Avenue%20Brooklyn%20NY%2011220,%20Denmark&output=embed'
  },
  {
    id: 7,
    city: 'Istanbul',
    country: 'Turkey',
    address: 'B 1 Block, Daire 22, Collet Avcilar, Fruzkoy Blvd, Avcilar, Istanbul, Turkey',
    phone: '+90 000 000 0000',
    email: 'info@rushcorporation.com',
    mapUrl: 'https://www.google.com/maps?q=Fruzkoy%20Blvd%20Avcilar%20Istanbul%20Turkey&output=embed'
  },
  {
    id: 8,
    city: 'Sharjah',
    country: 'United Arab Emirates',
    address: 'Office No 312, Muhammad Al Mulla Tower, 8 AL-Etihad Street, Sharjah, UAE',
    phone: '+971 00 000 0000',
    email: 'info@rushcorporation.com',
    mapUrl: 'https://www.google.com/maps?q=Muhammad%20Al%20Mulla%20Tower%208%20Al-Etihad%20Street%20Sharjah&output=embed'
  },
  {
    id: 9,
    city: 'Saudi Arabia',
    country: 'Saudi Arabia',
    address: '869 Bay Ridge Avenue Brooklyn NY 11220',
    phone: '+1 917 774 8864',
    email: 'info@rushcorporation.com',
    mapUrl: 'https://www.google.com/maps?q=869%20Bay%20Ridge%20Avenue%20Brooklyn%20NY%2011220,%20Saudi%20Arabia&output=embed'
  },
  {
    id: 10,
    city: 'Pakistan',
    country: 'Pakistan',
    address: 'Nr 31 Johar Town Lahore',
    phone: '+92 348 589 6893',
    email: 'info@rushcorporation.com',
    mapUrl: 'https://www.google.com/maps?q=Nr%2031%20Johar%20Town%20Lahore,%20Pakistan&output=embed'
  }
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form submitted:', formData);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
            placeholder="your.email@company.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-white/90 mb-2">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
          placeholder="Your company"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">Message *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none transition-all duration-200"
          placeholder="Tell us about your project or inquiry..."
        />
      </div>
      
      {submitStatus === 'success' && (
        <div className="p-3 rounded-lg bg-green-500/20 border border-green-500/50 text-green-300">
          Thank you! Your message has been sent successfully.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300">
          Sorry, there was an error sending your message. Please try again.
        </div>
      )}
      
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center ${
          isSubmitting 
            ? 'bg-blue-400/70 cursor-not-allowed' 
            : 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-lg hover:shadow-blue-500/20'
        }`}
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
};

const ContactPage = () => {
  const Footer = require('../components/Footer').default;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a132e] to-[#1a2b5f]">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 max-w-6xl mx-auto">
        <div className="flex items-center">
          <Link to="/" aria-label="Rush home" className="flex items-center">
            <img src="/logo1.png" alt="Logo" className="h-16 w-auto" />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-2">
          <Link to="/" className="px-3 py-2 text-sm font-semibold tracking-wide text-white/90 hover:text-white rounded-md transition-colors hover:bg-white/10 hover:underline underline-offset-8 decoration-white/30">Home</Link>
          <Link to="/brands" className="px-3 py-2 text-sm font-semibold tracking-wide text-white/90 hover:text-white rounded-md transition-colors hover:bg-white/10 hover:underline underline-offset-8 decoration-white/30">Group brands</Link>
          <Link to="/about" className="px-3 py-2 text-sm font-semibold tracking-wide text-white/90 hover:text-white rounded-md transition-colors hover:bg-white/10 hover:underline underline-offset-8 decoration-white/30">About us</Link>
          <Link to="/investors" className="px-3 py-2 text-sm font-semibold tracking-wide text-white/90 hover:text-white rounded-md transition-colors hover:bg-white/10 hover:underline underline-offset-8 decoration-white/30">Investor Center</Link>
          <Link to="/contact" className="ml-1 px-4 py-2 text-sm font-semibold tracking-wide text-white rounded-md bg-white/10 hover:bg-white/20 transition-colors">Contact us</Link>
        </nav>
        <MobileMenu />
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-8 pb-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm text-white/80 mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
            We're here to help
          </div>
          <h1 className="text-4xl md:text-5xl font-display text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Get in touch with us
          </h1>
          <p className="mt-3 text-lg text-white/80 leading-normal max-w-2xl mx-auto">
            Ready to build something amazing? We'd love to hear from you. Reach out to our team
            or visit one of our global offices.
          </p>
        </div>
      </section>

      {/* Contact Form & Social */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl">
            <h2 className="text-2xl font-display text-white mb-1">Send us a message</h2>
            <p className="text-white/70 mb-4">Fill out the form and our team will get back to you within 24 hours.</p>
            <ContactForm />
          </div>

          {/* Social & Contact Info */}
          <div className="lg:pl-6">
            <h2 className="text-2xl font-display text-white mb-1">Connect with us</h2>
            <p className="text-white/70 mb-4">Follow us on social media or reach out directly.</p>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Social Card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/></svg>
                  Follow
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'YouTube', href: '#', icon: 'M23.5 6.2c-.3-1.2-1.2-2.1-2.4-2.4C19 3.3 12 3.3 12 3.3s-7 0-9.1.5C1.7 4.1.8 5 .5 6.2.1 8.3.1 12 .1 12s0 3.7.4 5.8c.3 1.2 1.2 2.1 2.4 2.4 2.1.5 9.1.5 9.1.5s7 0 9.1-.5c1.2-.3 2.1-1.2 2.4-2.4.4-2.1.4-5.8.4-5.8zM9.8 15.5V8.5l6.1 3.5-6.1 3.5z' },
                    { name: 'LinkedIn', href: '#', icon: 'M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8 8.5h3.8v2h.05c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.79 2.66 4.79 6.11V23h-4v-5.9c0-1.41-.03-3.22-1.96-3.22-1.96 0-2.26 1.53-2.26 3.11V23h-4V8.5z' },
                    { name: 'Instagram', href: '#', icon: 'M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5zm5.25-.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' },
                    { name: 'Twitter', href: '#', icon: 'M18 2h3l-7.5 8.6L22 22h-6.8l-4.3-6-4.9 6H2l8.2-9.5L2 2h6.9l4 5.6L18 2z' }
                  ].map((social, index) => (
                    <a key={index} href={social.href} className="p-3 rounded-xl bg-white/10 hover:bg-white/15 transition-all duration-300 group flex items-center justify-center relative" aria-label={social.name}>
                      <svg className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24" aria-hidden="true"><path d={social.icon} /></svg>
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                  Contact
                </h3>
                <div className="space-y-2">
                  <a href="mailto:hello@rush.com" className="text-white/90 text-sm flex items-center hover:text-white">
                    <svg className="w-4 h-4 mr-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                    hello@rush.com
                  </a>
                  <a href="tel:+15551234567" className="text-white/90 text-sm flex items-center hover:text-white">
                    <svg className="w-4 h-4 mr-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              {/* HQ Card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:col-span-2">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                  HQ
                </h3>
                <address className="not-italic text-white/80 leading-6 text-sm">
                898 Bay Ridge Avenue<br />
                  Brooklyn, NY 11220<br />
                  
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Map */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 text-center mb-8">
          <h2 className="text-3xl font-display text-white mb-4 text-center">Our Global Presence</h2>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            With offices across eight countries, we're positioned to serve clients around the world with local expertise and global perspective. Hover over the red dots to explore our locations.
          </p>
        </div>
        
        <WorldMap />
      </section>

      {React.createElement(Footer)}
    </div>
  );
};

export default ContactPage;

function MobileMenu(){
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        aria-label="Open menu"
        className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
        onClick={() => setOpen(v=>!v)}
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-[#0a132e]/95 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <img src="/logo1.png" alt="Logo" className="h-10 w-auto" />
            <button
              aria-label="Close menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
              onClick={() => setOpen(false)}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
          <nav className="px-6 space-y-2">
            <Link onClick={() => setOpen(false)} to="/" className="block px-4 py-3 rounded-lg text-white/90 hover:text-white hover:bg-white/10">Home</Link>
            <Link onClick={() => setOpen(false)} to="/brands" className="block px-4 py-3 rounded-lg text-white/90 hover:text-white hover:bg-white/10">Group brands</Link>
            <Link onClick={() => setOpen(false)} to="/about" className="block px-4 py-3 rounded-lg text-white/90 hover:text-white hover:bg-white/10">About us</Link>
            <Link onClick={() => setOpen(false)} to="/investors" className="block px-4 py-3 rounded-lg text-white/90 hover:text-white hover:bg-white/10">Investor Center</Link>
            <Link onClick={() => setOpen(false)} to="/contact" className="block px-4 py-3 rounded-lg text-white bg-white/10 hover:bg-white/20">Contact us</Link>
          </nav>
        </div>
      )}
    </>
  );
}