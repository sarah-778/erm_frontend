import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [footerData, setFooterData] = useState({
    subtitle: 'EAST AFRICA LTD',
    description: 'Mitigating Risks, Enhancing Success. Professional risk management, corporate investigations, and security advisory across East Africa.',
    phone: '+256 760 527 159',
    email: 'erm.linsolutions@gmail.com',
    location: 'Kampala, Uganda',
    quickLinks: [
      { label: 'Risk Management', to: '/services' },
      { label: 'Security Services', to: '/services' },
      { label: 'About ERM Solitions', to: '/about' },
      { label: 'Request Consultation', to: '/contact' },
    ],
    specialties: [
      'Corporate Investigations',
      'Loss Control & Stock Audits',
      'Polygraph Testing',
      'Retail & hospitality security',
    ],
  });

  useEffect(() => {
    fetch('/api/content/footer')
      .then((res) => res.ok ? res.json() : null)
      .then((data) => {
        if (data) setFooterData((prev) => ({ ...prev, ...data }));
      })
      .catch((err) => console.error('Error fetching footer content:', err));
  }, []);

  return (
    <footer className="relative bg-slate-950 text-slate-400 pt-20 pb-10 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-slate-800/60">
          
          {/* Column 1: Brand */}
          <div className="md:col-span-4 space-y-5">
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-black text-white">ERM Solutions</span>
              <div className="border-l-2 border-emerald-500/60 h-6 mx-1" />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-200 tracking-[0.15em]">{footerData.companyName}</span>
                <span className="text-[10px] text-emerald-400/70 font-semibold tracking-wider">{footerData.subtitle}</span>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">{footerData.description}</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.15em] mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {footerData.quickLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.to} className="text-sm hover:text-emerald-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Specialties */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.15em] mb-5">Specialties</h4>
            <ul className="space-y-3">
              {footerData.specialties.map((item, i) => (
                <li key={i} className="text-sm text-slate-400">{item}</li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.15em] mb-5">Contact Us</h4>
            <p className="text-sm text-slate-300">{footerData.location}</p>
            <p className="text-sm text-emerald-400">{footerData.email}</p>
            <p className="text-sm text-slate-300">{footerData.phone}</p>
          </div>
        </div>

        <div className="pt-8 flex justify-between items-center text-xs text-slate-600">
          <p>© {new Date().getFullYear()} ERM Solutions East Africa Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}