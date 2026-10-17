import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../assets/logo.png'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-md border-b border-slate-100'
          : 'bg-white shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <img 
              src={logoImage} 
              alt="ERM Landalin East Africa Logo" 
              className="h-12 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="border-l-2 border-emerald-500 h-8 sm:h-9 mx-0.5 sm:mx-1" />
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-bold text-slate-800 tracking-wider">ERM SOLUTIONS E.AFRICA LTD</span>
             
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-4 py-2 text-[13px] font-semibold tracking-wide rounded-lg transition-all duration-300 ${
                  isActive(link.to)
                    ? 'text-emerald-700 bg-emerald-50/80'
                    : 'text-slate-600 hover:text-emerald-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
                {isActive(link.to) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-emerald-500 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white px-5 py-2.5 rounded-xl text-[13px] font-semibold tracking-wide transition-all duration-300 shadow-md shadow-emerald-900/10 hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Request Assessment</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 flex items-center justify-center rounded-xl text-slate-600 hover:text-emerald-700 hover:bg-slate-50 focus:outline-none transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div className="w-5 flex flex-col items-center space-y-1.5">
                <span className={`block h-0.5 w-5 bg-current rounded-full transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 w-5 bg-current rounded-full transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : ''}`} />
                <span className={`block h-0.5 w-5 bg-current rounded-full transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-slate-100 px-6 pt-4 pb-8 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl text-[15px] font-medium transition-all duration-300 ${
                isActive(link.to)
                  ? 'text-emerald-700 bg-emerald-50 font-semibold'
                  : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3">
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)} 
              className="block text-center bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-3.5 rounded-xl font-semibold text-sm tracking-wide shadow-lg shadow-emerald-900/10"
            >
              Request Assessment
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}