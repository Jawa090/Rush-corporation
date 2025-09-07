import React from 'react';

const Icon = ({ title, children }) => (
  <svg
    aria-label={title}
    role="img"
    viewBox="0 0 24 24"
    className="w-5 h-5 fill-white/80 group-hover:fill-white transition-colors"
  >
    {children}
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#08112a] text-white/80 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Left brand + nav */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <img src="/logo1.png" alt="Rush Group" className="h-6 w-auto" />
            </div>
            <nav className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Careers</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            </nav>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3 md:gap-4">
            <a href="#" className="group p-2 rounded bg-white/10 hover:bg-white/15" aria-label="YouTube">
              <Icon title="YouTube">
                <path d="M23.5 6.2c-.3-1.2-1.2-2.1-2.4-2.4C19 3.3 12 3.3 12 3.3s-7 0-9.1.5C1.7 4.1.8 5 .5 6.2.1 8.3.1 12 .1 12s0 3.7.4 5.8c.3 1.2 1.2 2.1 2.4 2.4 2.1.5 9.1.5 9.1.5s7 0 9.1-.5c1.2-.3 2.1-1.2 2.4-2.4.4-2.1.4-5.8.4-5.8s0-3.7-.4-5.8zM9.8 15.5V8.5l6.1 3.5-6.1 3.5z"/>
              </Icon>
            </a>
            <a href="#" className="group p-2 rounded bg-white/10 hover:bg-white/15" aria-label="LinkedIn">
              <Icon title="LinkedIn">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8 8.5h3.8v2h.05c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.79 2.66 4.79 6.11V23h-4v-5.9c0-1.41-.03-3.22-1.96-3.22-1.96 0-2.26 1.53-2.26 3.11V23h-4V8.5z"/>
              </Icon>
            </a>
            {/* <a href="#" className="group p-2 rounded bg-white/10 hover:bg-white/15" aria-label="Instagram">
              <Icon title="Instagram">
                <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 2 .2 2.7.5.7.3 1.3.6 1.9 1.2.6.6.9 1.2 1.2 1.9.3.7.4 1.5.5 2.7.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 2-.5 2.7-.3.7-.6 1.3-1.2 1.9-.6.6-1.2.9-1.9 1.2-.7.3-1.5.4-2.7.5-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-2-.2-2.7-.5-.7-.3-1.3-.6-1.9-1.2-.6-.6-.9-1.2-1.2-1.9-.3-.7-.4-1.5-.5-2.7C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-2 .5-2.7.3-.7.6-1.3 1.2-1.9.6-.6 1.2-.9 1.9-1.2.7-.3 1.5-.4 2.7-.5C8.4 2.2 8.8 2.2 12 2.2m0 2.2c-3.1 0-3.5 0-4.7.1-1 0-1.6.2-2 .4-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.2.4-.4 1-.4 2 0 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c0 1 .2 1.6.4 2 .2.5.4.8.7 1.1.3.3.6.5 1.1.7.4.2 1 .4 2 .4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1 0 1.6-.2 2-.4.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.2-.4.4-1 .4-2 0-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c0-1-.2-1.6-.4-2-.2-.5-.4-.8-.7-1.1-.3-.3-.6-.5-1.1-.7-.4-.2-1-.4-2-.4-1.2-.1-1.6-.1-4.7-.1zm0 2.2a5.4 5.4 0 1 1 0 10.8 5.4 5.4 0 0 1 0-10.8zm7-1.6a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6z"/>
              </Icon>
            </a> */}
            <a href="#" className="group p-2 rounded bg-white/10 hover:bg-white/15" aria-label="X">
              <Icon title="X">
                <path d="M18 2h3l-7.5 8.6L22 22h-6.8l-4.3-6-4.9 6H2l8.2-9.5L2 2h6.9l4 5.6L18 2z"/>
              </Icon>
            </a>
            <a href="#" className="group p-2 rounded bg-white/10 hover:bg-white/15" aria-label="Facebook">
              <Icon title="Facebook">
                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.4 1.4-3.8 3.6-3.8 1 0 2 .2 2 .2v2.3h-1.1c-1.1 0-1.5.7-1.5 1.4V12h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 22 12"/>
              </Icon>
            </a>
            <a href="#" className="group p-2 rounded bg-white/10 hover:bg-white/15" aria-label="GitHub">
              <Icon title="GitHub">
                <path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7 1.9 2.8 1.4 0-.8.4-1.4.8-1.7-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C16.1 5 17 5.3 17 5.3c.6 1.7.2 3 .1 3.3.8.8 1.3 1.9 1.3 3.2 0 4.5-2.7 5.5-5.3 5.8.5.4.9 1.2.9 2.4v3.5c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5z"/>
              </Icon>
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-white/60">© Rush Group International Limited 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


