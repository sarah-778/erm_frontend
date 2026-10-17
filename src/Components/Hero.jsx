import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroData = {
    badgeText: 'Enterprise Risk & Governance',
    mainTitle: 'Landalin ERM Solutions',
    highlightTitle: 'East Africa',
    subheadline: 'Empowering enterprise growth through risk advisory, governance solutions, and auditing.',
    primaryBtnText: 'Get in Touch',
    secondaryBtnText: 'Our Services'
  };

  return (
    <section className="relative min-h-screen bg-slate-950 text-white flex items-center justify-center px-4">
      <div className="max-w-4xl text-center">
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 rounded-full">
          {heroData.badgeText}
        </span>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          {heroData.mainTitle} <span className="text-emerald-400">{heroData.highlightTitle}</span>
        </h1>
        
        <p className="text-slate-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          {heroData.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/contact" 
            className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold py-4 px-10 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {heroData.primaryBtnText}
          </Link>
          
          <Link 
            to="/services" 
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-white/30 font-semibold py-4 px-10 rounded-2xl transition-all duration-300 hover:-translate-y-1"
          >
            {heroData.secondaryBtnText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;