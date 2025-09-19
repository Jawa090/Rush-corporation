import React from 'react';
import { Link } from 'react-router-dom';

const AboutRush = () => {
  return (
    <>
      <section className="relative py-6 md:py-10">
        <div className="absolute inset-0 bg-[#e8f1ff]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display text-[#0a132e] mb-3">Our company</h2>
              <p className="text-[#0a132e]/80 leading-relaxed mb-2">
                Rush is a global technology group building platforms and products that bring people closer to the magic of innovation. We connect brands, creators, and customers through delightful digital experiences.
              </p>
              <p className="text-[#0a132e]/80 leading-relaxed mb-2">
                With a growing portfolio of companies, we combine design, engineering, and data to deliver solutions used around the world. Our teams experiment, learn fast, and scale what works.
              </p>
              <p className="text-[#0a132e]/80 leading-relaxed">
                From concept to launch, Rush powers the user journey - secure, performant, and human-centered. We measure success by customer outcomes and sustained, long-term impact.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 mt-3 text-[#0a132e] font-semibold hover:underline">
                Learn more about Rush
                <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="relative py-3 md:py-6 flex justify-center md:justify-end">
              <img src="/company.png" alt="Rush offices" className="w-[92%] sm:w-[85%] md:w-[70%] h-auto shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-5 md:py-8">
        <div className="absolute inset-0 bg-white" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
            <div className="relative py-2 md:py-4 flex justify-center md:justify-start">
              <img src="/people.png" alt="Rush people" className="w-[92%] sm:w-[85%] md:w-[70%] h-auto shadow-lg" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-display text-[#0a132e] mb-2">Our people</h2>
              <p className="text-[#0a132e]/80 leading-relaxed mb-2">
                People are at the heart of Rush. We’re a community of designers, engineers, storytellers, and operators who care deeply about craft and impact.
              </p>
              <p className="text-[#0a132e]/80 leading-relaxed mb-2">
                We celebrate diverse perspectives, share what we learn, and support each other to do the best work of our careers.
              </p>
              <p className="text-[#0a132e]/80 leading-relaxed">
                Together, we build products millions love - while building a culture where everyone can thrive. We invest in mentorship and growth so people can do the best work of their lives.
              </p>
              <Link to="/about#team" className="inline-flex items-center gap-2 mt-3 text-[#0a132e] font-semibold hover:underline">
                Meet the team
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Brands section */}
      <section className="relative py-5 md:py-8">
        <div className="absolute inset-0 bg-[#f7f9ff]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
            {/* Text on the left */}
            <div>
              <h2 className="text-3xl md:text-4xl font-display text-[#0a132e] mb-2">Our brands</h2>
              <p className="text-[#0a132e]/80 leading-relaxed mb-2">
                Rush empowers a family of brands across software, media, and commerce. Each brand is built to serve a focused community with products that feel fast, simple, and joyful.
              </p>
              <p className="text-[#0a132e]/80 leading-relaxed mb-2">
                Together, our brands share a platform of technology, design systems, and values - so we can move quickly and deliver consistent quality at scale.
              </p>
              <p className="text-[#0a132e]/80 leading-relaxed">
                From early ideas to global launches, Rush supports the full journey - so teams can focus on what matters most: delighting users. We aim for clarity, reliability, and delight in every product.
              </p>
              <Link to="/brands" className="inline-flex items-center gap-2 mt-3 text-[#0a132e] font-semibold hover:underline">
                Explore our brands
                <span aria-hidden>→</span>
              </Link>
            </div>

            {/* Image on the right */}
            <div className="relative py-2 md:py-4 flex justify-center md:justify-end">
              <img src="/brands.png" alt="Rush brands" className="w-[92%] sm:w-[85%] md:w-[70%] h-auto shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Centered CTA section */}
      <section className="relative py-8">
        <div className="absolute inset-0 bg-white" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display text-[#0a132e] leading-snug">
            The global leader in delivering software and tech for the film industry
          </h2>
          <div className="mt-3 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
          <p className="mt-4 text-lg md:text-xl text-[#0a132e]/80 leading-normal">
            Rush brands power the film ecosystem end-to-end - from production and distribution to cinema exhibition and the magic of the moviegoer experience.
          </p>
          <div className="mt-5">
            <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#0a132e] text-white font-semibold hover:bg-[#0b1740] transition-colors">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutRush;


