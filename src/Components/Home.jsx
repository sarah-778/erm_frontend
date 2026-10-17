import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.jpeg';
import auditingImg from '../assets/auditing.jpg';
import lossControlImg from '../assets/loss-control.jpg';
import assetProImg from '../assets/asset-pro.jpg';
import ceoImg from '../assets/ceo.jpg';
import sarahImg from '../assets/sarah.jpg';
import meImg from '../assets/me.jpg';

export default function Home() {
  const fullText = "AT ERM SOLUTIONS, WE DON'T JUST MANAGE RISK; WE ELIMINATE THE VULNERABILITIES THAT DRAIN YOUR PROFITS.";
  const [displayedText, setDisplayedText] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsDone(true);
        clearInterval(timer);
      }
    }, 40);

    return () => clearInterval(timer);
  }, []);

  const serviceCards = [
    {
      img: auditingImg,
      badge: 'RISK & AUDITING',
      badgeStyle: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
      title: 'Inventory Auditing & Management',
      description: 'Comprehensive stock verification, warehouse controls, inventory flow auditing, and reconciliation management.',
      linkLabel: 'Explore Auditing Services',
      linkColor: 'text-emerald-400',
    },
    {
      img: lossControlImg,
      badge: 'LOSS CONTROL',
      badgeStyle: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
      title: 'Loss Control Management',
      description: 'Process optimization, revenue leakage prevention, supply chain oversight, and operational risk mitigation frameworks.',
      linkLabel: 'Explore Loss Control',
      linkColor: 'text-violet-400',
    },
    {
      img: assetProImg,
      badge: 'BUSINESS SECURITY',
      badgeStyle: 'bg-teal-500/15 text-teal-300 border-teal-500/30',
      title: 'Business & Facility Security',
      description: 'Commercial facility access monitoring, operational asset protection, corporate compliance checks, and internal risk controls.',
      linkLabel: 'Explore Business Security',
      linkColor: 'text-teal-400',
    },
  ];

  return (
    <div className="w-full text-gray-900 font-sans bg-slate-950 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center pt-32 pb-20 bg-slate-950 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] ease-out hover:scale-110"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-950/40 to-slate-950/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/20" />
        </div>

        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-teal-500/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-8">
          <div>
            <span className="inline-flex items-center space-x-2.5 bg-emerald-500/15 text-emerald-200 border border-emerald-500/30 text-[11px] sm:text-xs font-bold px-5 py-2 rounded-full uppercase tracking-[0.15em] backdrop-blur-md shadow-lg shadow-emerald-900/40">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="drop-shadow-sm">Landalin ERM Solutions E.Africa Ltd</span>
            </span>
          </div>

          <div className="max-w-4xl space-y-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide text-white leading-relaxed drop-shadow-md">
              {displayedText}
              {!isDone && (
                <span className="animate-pulse text-emerald-400 font-normal ml-1">|</span>
              )}
            </h1>

            <div className="h-px w-24 bg-emerald-500 my-4" />

            <p className="text-slate-100 text-sm sm:text-base md:text-lg max-w-3xl font-medium leading-relaxed tracking-wide drop-shadow-md">
              "Specialized Enterprise Risk Management consultation, inventory management, stock auditing, corporate investigations, and loss control management, tailored across East Africa."
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold py-4 px-10 rounded-2xl shadow-2xl transition-all duration-500 hover:-translate-y-1 text-sm tracking-wide"
            >
              <span>REQUEST CONSULTATION</span>
            </Link>
            <Link 
              to="/services"
              className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 font-semibold py-4 px-10 rounded-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-1 text-sm tracking-wide"
            >
              <span>OUR SERVICES</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="relative bg-slate-900 py-12 border-y border-slate-800/80 text-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-0 text-center">
          {[
            { value: '100%', label: 'Audit Precision', color: 'text-emerald-400' },
            { value: '24 / 7', label: 'Risk Analytics', color: 'text-emerald-400' },
            { value: '50+', label: 'Corporate Partners', color: 'text-teal-300' },
            { value: 'Zero', label: 'Shrinkage Tolerance', color: 'text-violet-400' },
          ].map((stat, i) => (
            <div key={i} className={`py-6 px-4 ${i < 3 ? 'border-r border-slate-700/50' : ''}`}>
              <span className={`block text-3xl sm:text-5xl font-black ${stat.color} tracking-tight`}>{stat.value}</span>
              <span className="text-[11px] sm:text-xs text-slate-400 font-semibold uppercase tracking-widest mt-2 block">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CORE SERVICE CARDS */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-emerald-500 font-bold uppercase tracking-widest text-xs">Business Capabilities</span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Targeted Risk Intervention
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceCards.map((card, idx) => (
              <div key={idx} className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
                  <span className={`absolute top-4 left-4 text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-lg backdrop-blur-xl border ${card.badgeStyle}`}>
                    {card.badge}
                  </span>
                </div>
                <div className="p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-slate-900">{card.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{card.description}</p>
                  </div>
                  <Link to="/services" className={`inline-flex items-center space-x-2 text-sm font-bold ${card.linkColor}`}>
                    <span>{card.linkLabel}</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Heading & Overview */}
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-block text-emerald-600 font-bold uppercase tracking-widest text-xs bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-100">
                Why Partner With Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Securing Your Bottom Line Through Proactive Risk Management
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                We have helped organizations like yours to identify, assess, respond to, and monitor risks across the entire business not just financial or compliance risks, but also operational, strategic, reputational, and other risk areas.
              </p>
            </div>

            {/* Right Column: Structured Key Components Grid */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {[
                { num: '01', title: 'Risk Identification', desc: 'What could go wrong?' },
                { num: '02', title: 'Risk Assessment', desc: 'Evaluating likelihood and impact.' },
                { num: '03', title: 'Risk Response', desc: 'Avoid, transfer, mitigate, or accept.' },
                { num: '04', title: 'Control Activities', desc: 'Policies, procedures, and checks.' },
              ].map((item, index) => (
                <div key={index} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 transition-all duration-300 hover:shadow-md hover:border-emerald-200 hover:bg-emerald-50/20">
                  <span className="text-xs font-black text-emerald-600 uppercase tracking-widest">Phase {item.num}</span>
                  <h4 className="font-bold text-slate-900 text-base">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs">Client Endorsements</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Trusted by Regional Corporate Businesses
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Testimonial 1 */}
            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-lg border bg-emerald-500/10 text-emerald-300 border-emerald-500/25">Inventory Auditing</span>
                <p className="text-slate-300 text-sm leading-relaxed italic">"ERM inventory auditors transformed our warehouse controls. Their stock controllers minimized shrinkages completely within three months."</p>
              </div>
              <div className="border-t border-slate-700/50 pt-5 flex items-center space-x-3">
              
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-lg border bg-violet-500/10 text-violet-300 border-violet-500/25">Business Risk Management</span>
                <p className="text-slate-300 text-sm leading-relaxed italic">"Their business risk unit helped us restructure our internal controls processes and asset protection measures with great professionalism."</p>
              </div>
              <div className="border-t border-slate-700/50 pt-5 flex items-center space-x-3">
                
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-lg border bg-teal-500/10 text-teal-300 border-teal-500/25">Loss Control Management</span>
                <p className="text-slate-300 text-sm leading-relaxed italic">"Outstanding loss control systems. Since deploying ERM's risk mitigation strategies across our superstores, our shrinkage rate has hit zero."</p>
              </div>
              <div className="border-t border-slate-700/50 pt-5 flex items-center space-x-3">
             
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. EXECUTIVE TEAM */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-emerald-500 font-bold uppercase tracking-widest text-xs">Leadership & Governance</span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Our Executive Leadership
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { img: ceoImg, name: 'Franklin Wesonga', title: 'Managing Director', color: 'text-emerald-600', desc: 'Leads overall strategic vision, enterprise risk management frameworks, and key corporate ERM advisory.' },
              { img: meImg, name: 'Ronald Wafula', title: 'Chief Operation Officer', color: 'text-violet-600', desc: 'Client satisfaction lies at the heart of ERM Solutions ethos. The direct involvement of his leadership and a results-driven team ensures consistently positive outcomes for our clients.' },
              { img: sarahImg, name: 'Sarah Orishaba', title: 'IT Manager', color: 'text-teal-600', desc: 'Directs IT infrastructure, oversees technical support teams, and aligns technology strategies with organizational goals while ensuring robust network security and system reliability.' }
            ].map((person, idx) => (
              <div key={idx} className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm text-center p-8 space-y-5">
                <div className="w-28 h-28 mx-auto rounded-full overflow-hidden bg-slate-200 border-4 border-white shadow-lg">
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{person.name}</h3>
                  <p className={`text-xs font-bold uppercase tracking-widest ${person.color}`}>{person.title}</p>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed max-w-[200px] mx-auto">{person.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}