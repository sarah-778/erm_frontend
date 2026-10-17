import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../assets/hero.jpeg';

export default function About() {
  const corePillars = [
    {
      number: '01',
      title: 'Uncompromised Integrity',
      description: 'We apply strict ethical standards, regulatory compliance, and forensic accuracy across all client vetting and covert investigations.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622C17.176 19.29 21 14.591 21 9c0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      accent: 'emerald',
    },
    {
      number: '02',
      title: 'Proactive Risk Mitigation',
      description: 'Instead of reacting to losses, we design preventative vulnerability frameworks and real-time inventory controls to eliminate shrinkage before it occurs.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      accent: 'teal',
    },
    {
      number: '03',
      title: 'Regional Precision',
      description: "Our field operatives and risk analysts possess deep operational insight into East Africa's commercial and supply-chain dynamics.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      accent: 'violet',
    },
  ];

  const pillarColors = {
    emerald: { iconBg: 'bg-emerald-600', hoverBorder: 'hover:border-emerald-200', hoverShadow: 'hover:shadow-emerald-100/50', numberColor: 'text-emerald-400', lineColor: 'bg-emerald-100' },
    teal: { iconBg: 'bg-teal-600', hoverBorder: 'hover:border-teal-200', hoverShadow: 'hover:shadow-teal-100/50', numberColor: 'text-teal-400', lineColor: 'bg-teal-100' },
    violet: { iconBg: 'bg-violet-600', hoverBorder: 'hover:border-violet-200', hoverShadow: 'hover:shadow-violet-100/50', numberColor: 'text-violet-400', lineColor: 'bg-violet-100' },
  };

  const impactStats = [
    { value: '50+', label: 'Corporate Clients Secured', desc: 'Across East Africa', accent: 'emerald' },
    { value: '98.7%', label: 'Shrinkage Reduction Rate', desc: 'Avg. across retail audits', accent: 'teal' },
    { value: '100+', label: 'Background Vetting Cases', desc: 'Completed with zero disputes', accent: 'violet' },
    { value: '24/7', label: 'Active Surveillance Coverage', desc: 'Continuous protection ops', accent: 'emerald' },
  ];

  const statColors = {
    emerald: { text: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100', dot: 'bg-emerald-500' },
    teal: { text: 'text-teal-600', bg: 'bg-teal-50', border: 'border-teal-100', dot: 'bg-teal-500' },
    violet: { text: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-100', dot: 'bg-violet-500' },
  };

  const leadershipCircle = [
    { title: "CEO", role: "Chief Executive Officer", center: true },
    { title: "CFO", role: "Chief Financial Officer" },
    { title: "CHRO", role: "Chief Human Resources Officer" },
    { title: "COO", role: "Chief Operation Officer" },
    { title: "Risk Management", role: "Risk Management Officers" },
    { title: "CMO", role: "Chief Marketing Officer" },
    { title: "Internal Audit", role: "Director of Internal Audit" },
  ];

  const methodology = [
    {
      step: '01',
      title: 'Discovery & Risk Mapping',
      desc: 'We conduct a comprehensive assessment of your organization\'s threat landscape — mapping internal vulnerabilities, supply-chain risks, and compliance gaps.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      step: '02',
      title: 'Strategy & Framework Design',
      desc: 'Our consultants engineer bespoke risk mitigation frameworks with defined KPIs, control checkpoints, and escalation protocols tailored to your industry.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      step: '03',
      title: 'Implementation & Deployment',
      desc: 'Field teams deploy surveillance systems, inventory controls, vetting protocols, and digital access safeguards across your operational footprint.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      step: '04',
      title: 'Monitor, Report & Optimize',
      desc: 'We establish continuous monitoring with real-time dashboards, periodic audits, and quarterly risk reviews to ensure sustained protection and ROI.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white text-slate-950 overflow-x-hidden">

      {/* HERO */}
      <section
        className="relative min-h-[55vh] flex items-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="absolute inset-0 bg-slate-950/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-7">
            <span className="inline-flex items-center space-x-2 rounded-full border border-white/15 bg-white/5 px-4 sm:px-5 py-2 text-[10px] sm:text-[11px] font-bold tracking-[0.15em] text-white backdrop-blur-xl uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Landalin ERM Solutions East Africa Ltd</span>
            </span>

            <h1 className="text-3xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1] sm:leading-[0.95]">
              Corporate Integrity.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-400 mt-2">
                Risk Oversight.
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-slate-300 text-sm sm:text-lg leading-relaxed font-light tracking-wide px-2">
              Delivering premier Enterprise risk management, Labour Outsourcing, HR vetting, inventory managment , stock & cash variance auditing, and loss control solutions across East Africa.
            </p>

            <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row pt-2">
              <Link
                to="/contact"
                className="group w-full sm:w-auto inline-flex items-center space-x-2 min-w-[190px] justify-center rounded-xl bg-white px-7 py-3.5 sm:py-4 text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-slate-100 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span>Request a Consultation</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              <a
                href="#about"
                className="group w-full sm:w-auto inline-flex items-center space-x-2 min-w-[170px] justify-center rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 sm:py-4 text-sm font-bold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span>Discover More</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section id="about" className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <span className="text-emerald-500 font-bold uppercase tracking-[0.2em] text-xs sm:text-sm">Who We Are</span>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-slate-950 leading-snug">
              AT ERM SOLUTIONS, WE DON'T JUST MANAGE RISK; WE ELIMINATE THE VULNERABILITIES THAT DRAIN YOUR PROFITS.
            </h2>

            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed pt-2">
              "Our proactive and comprehensive 
approach to risk evaluation and end-to
end process management enables us to 
deliver tailored, turn-key solutions that 
address the evolving risks and challenges 
facing businesses. Our customized 
services are designed to meet the unique 
needs of each client, ensuring that we 
stay ahead of emerging trends and 
threats that can lead to business losses. 
Through our continuous monitoring and 
adaptation to the ever-changing industry 
landscape, we help minimize risks 
associated with shrinkage, theft of 
inventory and assets, and other potential 
losses. By integrating our services with 
ERM principles, we provide a holistic and 
sustainable approach to risk 
management, empowering businesses to 
achieve their objectives while 
maintaining resilience and 
competitiveness."
            </p>
          </div>

          <div className="mt-12 sm:mt-16 grid items-stretch gap-8 lg:grid-cols-2">
            <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:shadow-lg">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 text-white shadow-md">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M7 7h10M7 11h10M7 15h6" />
                  </svg>
                </div>

                <h3 className="mt-6 text-xl sm:text-2xl font-bold text-slate-950">Built Around Protection & Precision</h3>

                <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  Our multidisciplinary teams combine background intelligence, active physical surveillance, stock control auditing, and digital evidence recovery to shield your organization from internal and external threats.
                </p>
              </div>

              <div className="mt-auto grid grid-cols-2 gap-4 pt-8 sm:pt-10">
                <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
                  <p className="text-xl sm:text-2xl font-black text-slate-950">100%</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">Verification Rigor</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
                  <p className="text-xl sm:text-2xl font-black text-slate-950">24 / 7</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">Active Protection</p>
                </div>
              </div>
            </div>

            <div className="grid h-full gap-6">
              <div className="rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 sm:p-8 lg:p-10 text-white relative overflow-hidden">
                <div className="relative space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 sm:h-11 w-10 sm:w-11 items-center justify-center rounded-xl bg-white/10 border border-white/10">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold">Our Mission</h3>
                  </div>
                  <p className="leading-relaxed text-slate-300 text-sm sm:text-base">
                  To provide innovative, tailored ERM solutions that empower our clients to manage risk 
                  effectively, achieve their goals, and succeed in an ever-changing business environment. 
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 sm:h-11 w-10 sm:w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-800">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-950">Our Vision</h3>
                  </div>
                  <p className="leading-relaxed text-slate-600 text-sm sm:text-base">
                  To be the trusted ERM partner in East Africa, recognized for our expertise, objectivity, and 
                  commitment to excellence in risk management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-16 sm:py-24 lg:py-32 relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-12 sm:mb-16">
            <span className="text-emerald-400 font-bold uppercase tracking-[0.2em] text-[11px]">Our Track Record</span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Measurable Impact Across <span className="text-emerald-300">East Africa</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {impactStats.map((stat, i) => {
              const c = statColors[stat.accent];
              return (
                <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-7 backdrop-blur-sm">
                  <div className={`w-9 sm:w-10 h-9 sm:h-10 rounded-xl ${c.bg} ${c.border} border flex items-center justify-center mb-4`}>
                    <div className={`w-2 h-2 rounded-full ${c.dot}`} />
                  </div>
                  <p className={`text-2xl sm:text-3xl font-black tracking-tight ${c.text}`}>{stat.value}</p>
                  <p className="mt-1 text-sm font-bold text-white">{stat.label}</p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-[0.1em] text-slate-400">{stat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CORE PILLARS */}
      <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <span className="text-emerald-500 font-bold uppercase tracking-[0.2em] text-[11px]">Foundational Pillars</span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-tight">
              Driven by Precision and Ethics
            </h2>
          </div>

          <div className="mt-12 sm:mt-16 grid items-stretch gap-6 md:grid-cols-3">
            {corePillars.map((pillar) => {
              const colors = pillarColors[pillar.accent];
              return (
                <div key={pillar.number} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <div className={`flex h-11 sm:h-12 w-11 sm:w-12 items-center justify-center rounded-xl ${colors.iconBg} text-white shadow-md`}>
                      {pillar.icon}
                    </div>
                    <span className={`text-sm font-black ${colors.numberColor} opacity-50`}>{pillar.number}</span>
                  </div>
                  <h3 className="mt-6 sm:mt-7 text-lg sm:text-xl font-bold text-slate-950">{pillar.title}</h3>
                  <p className="mt-3 sm:mt-4 flex-1 text-sm sm:text-base leading-relaxed text-slate-600">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR METHODOLOGY */}
      <section className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-12 sm:mb-16">
            <span className="text-emerald-500 font-bold uppercase tracking-[0.2em] text-[11px]">How We Work</span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-tight">
              Our Proven Risk Governance Methodology
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((step) => (
              <div key={step.step} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <span className="flex h-10 sm:h-11 w-10 sm:w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                    {step.icon}
                  </span>
                  <span className="text-xs font-black text-slate-300">{step.step}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-950">{step.title}</h3>
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      {/* LEADERSHIP CIRCLE & GOVERNANCE STRUCTURE (Fully Mobile Responsive) */}
      <section className="bg-slate-950 py-16 sm:py-24 lg:py-32 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <span className="text-purple-400 font-bold uppercase tracking-[0.2em] text-[10px] sm:text-[11px]">Functional Hierarchy</span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Leadership Circle & Governance Structure
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm lg:text-base leading-relaxed px-2">
              The collaborative organizational architecture connecting executive direction with specialized operational divisions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto pt-2">
            {leadershipCircle.map((item, idx) => (
              <div 
                key={idx}
                className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-center text-center space-y-1.5 sm:space-y-2 backdrop-blur-md ${
                  item.center 
                    ? 'bg-gradient-to-br from-purple-700 to-purple-900 border-purple-500 shadow-xl sm:lg:col-span-2' 
                    : 'bg-slate-900 border-slate-800 hover:border-purple-500/50'
                }`}
              >
                <span className="text-[9px] sm:text-[10px] font-bold text-purple-300 uppercase tracking-widest">{item.title}</span>
                <h4 className="text-base sm:text-lg lg:text-xl font-bold text-white leading-snug">{item.role}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

     

    </div>
  );
}