import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../assets/hero.jpeg';
import riskAdvisoryImg from '../assets/risk-advisory.jpg';
import financialControlsImg from '../assets/financial-controls.jpg';
import hrVettingImg from '../assets/hr-vetting.jpg';
import lossControlImg from '../assets/loss-control.jpg';
import assetProImg from '../assets/asset-pro.jpg';
import digitalCompImg from '../assets/digital-comp.jpg';
import salesImg from '../assets/sales.jpg';
import managerImg from '../assets/manager.jpg';
import stockImg from '../assets/stock.jpg';
import riskImg from '../assets/risk.jpg';
import businessImg from '../assets/business.jpg'; 

export default function Services() {
  const serviceList = [
    {
      badge: 'CONSULTING',
      title: 'Enterprise Risk Management Consulting',
      description: 'Comprehensive ERM consulting services to help organizations identify, assess, and manage risks that could impact their operations, reputation, or bottom line.',
      features: ['Risk Management Frameworks', 'Compliance Programs', 'Business Continuity Planning', 'Crisis Management'],
      image: riskAdvisoryImg,
      accent: 'emerald',
    },
    {
      badge: 'CONSULTING',
      title: 'Inventory Management Consulting',
      description: 'Help businesses optimize inventory levels, reduce costs, and improve supply chain efficiency by minimizing stockouts, overstocking, and obsolescence.',
      features: ['Just-In-Time (JIT) Systems', 'Vendor-Managed Inventory (VMI)', 'Independent Stock take', 'Cash Flow Improvement'],
      image: financialControlsImg,
      accent: 'teal',
    },
    {
      badge: 'MANAGEMENT',
      title: 'Risk Control Manager',
      description: 'Safeguard an organization’s integrity and financial health by identifying potential risks, monitoring risk exposure, and providing regular stakeholder reporting.',
      features: ['Asset & Operation Safeguarding', 'Continuous Risk Monitoring', 'ERM Framework Support', 'Stakeholder Performance Insights'],
      image: managerImg,
      accent: 'violet',
    },
    {
      badge: 'OUTSOURCING',
      title: 'Double Checkers',
      description: 'Mitigate inventory-related risks by performing independent verification and accuracy checks on physical stock movements against documentation.',
      features: ['Receiving & Dispatch Area Audits', 'Stock Record Verification', 'Error & Discrepancy Minimization', 'Organizational Policy Adherence'],
      image: lossControlImg,
      accent: 'emerald',
    },
    {
      badge: 'OUTSOURCING',
      title: 'Risk Monitoring & Surveillance Specialist',
      description: 'Camera room operators constantly monitoring potential security risks via CCTV surveillance, recording and reporting incidents on a 24/7 basis.',
      features: ['24/7 CCTV Monitoring', 'Criminal Activity Mitigation', 'Staff Productivity Tracking', 'Safe Environment Maintenance'],
      image: digitalCompImg,
      accent: 'teal',
    },
    {
      badge: 'OUTSOURCING',
      title: 'Stock Management Specialist',
      description: 'Stock controllers verifying the movement of stocks from storage areas to designated points through daily inventory movement and reconciliation.',
      features: ['Daily Inventory Movement Tracking', 'System vs Physical Reconciliation', 'Variance & Discrepancy Investigation', 'Loss Mitigation'],
      image: stockImg,
      accent: 'violet',
    },
    {
      badge: 'OUTSOURCING',
      title: 'Receiving Risk Coordinator',
      description: 'Responsible for identifying and mitigating risks associated with receiving goods, auditing receiving processes, and managing damage and discrepancies.',
      features: ['Receiving Process Auditing', 'Inventory Verification', 'Supplier Risk Monitoring', 'Training & Awareness Programs'],
      image: riskImg,
      accent: 'emerald',
    },
    {
      badge: 'OUTSOURCING',
      title: 'Dispatch Risk Coordinator',
      description: 'Ensure secure and efficient dispatch of goods, mitigating risks such as damage, loss, and non-compliance while monitoring carrier performance.',
      features: ['Carrier Performance Monitoring', 'Dispatch Control Implementation', 'Asset & Record Protection', 'Regulatory Compliance'],
      image: financialControlsImg,
      accent: 'teal',
    },
    {
      badge: 'OUTSOURCING',
      title: 'Point of Sale Risk coordinators',
      description: 'Front End Controllers (FECs) deployed at POS and dispatch areas conducting random spot checks to ensure cashiers follow company policies and pricing accuracy.',
      features: ['Random Spot Checks', 'Payment & Product Accuracy', 'Pricing & Non-Scanned Item Audits', 'Revenue Loss Prevention'],
      image: salesImg,
      accent: 'violet',
    },
    {
      badge: 'AUDIT SERVICES',
      title: 'Stock Taking Services',
      description: 'Provide regular, independent stock takes that ensure alignment between system figures and physical stock counts to detect and investigate variances.',
      features: ['Independent Physical Counts', 'System vs. Physical Alignment', 'Variance Investigation', 'Real-Time Stock Visibility'],
      image: lossControlImg,
      accent: 'emerald',
    },
    {
      badge: 'INTELLIGENCE',
      title: 'Business Intelligence Analysts',
      description: 'Utilize undercover agents and a network of informers across retail, trade, and industry to infiltrate and identify sources of loss and irregularities.',
      features: ['Undercover Agent Operations', 'Loss Source Identification', 'Trade Informer Network', 'Actionable Risk Intelligence'],
      image: businessImg,
      accent: 'teal',
    },
    {
      badge: 'SECURITY & WAREHOUSING',
      title: 'Transportation Risk & Warehousing Solutions',
      description: 'Embedded Logistics Security Officers accompanying valuable inventory in transit, paired with secure warehousing optimization and monitoring systems.',
      features: ['In-Transit Escort Officers', 'Precise Receiving & Dispatch', 'Sales Proceeds Compliance', 'Secure Warehousing Operations'],
      image: assetProImg,
      accent: 'violet',
    },
  ];

  const accentColors = {
    emerald: {
      badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
      topBar: 'from-emerald-500 via-teal-500 to-emerald-600',
      hoverTitle: 'group-hover:text-emerald-600',
      dot: 'bg-emerald-500',
      link: 'text-emerald-600 hover:text-emerald-500',
    },
    teal: {
      badge: 'bg-teal-500/15 text-teal-300 border-teal-500/30',
      topBar: 'from-teal-500 via-emerald-500 to-teal-600',
      hoverTitle: 'group-hover:text-teal-600',
      dot: 'bg-teal-500',
      link: 'text-teal-600 hover:text-teal-500',
    },
    violet: {
      badge: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
      topBar: 'from-violet-500 via-purple-500 to-violet-600',
      hoverTitle: 'group-hover:text-violet-600',
      dot: 'bg-violet-500',
      link: 'text-violet-600 hover:text-violet-500',
    },
  };

  return (
    <div className="w-full bg-slate-50 font-sans text-gray-900 overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[55vh] flex items-center pt-32 pb-20 bg-slate-950 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: `url(${bannerImg})` }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-7 text-center z-10">
          <span className="inline-flex items-center space-x-2.5 bg-emerald-500/10 text-emerald-300 border border-emerald-500/25 text-xs font-bold px-5 py-2 rounded-full uppercase tracking-widest">
            <span>Enterprise Risk & Advisory Solutions</span>
          </span>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase max-w-5xl mx-auto leading-tight">
            Our Risk Management
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-200">
              Solutions & Services
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Protecting corporate revenue, human capital, and operational assets with proven risk management methodologies across East Africa.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceList.map((service, idx) => {
              const colors = accentColors[service.accent];
              return (
                <div 
                  key={idx} 
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between relative"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.topBar}`} />

                  <div>
                    <div className="h-48 overflow-hidden bg-slate-900 relative">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                      />
                      <span className={`absolute top-4 right-4 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded backdrop-blur-md border ${colors.badge}`}>
                        {service.badge}
                      </span>
                    </div>

                    <div className="p-7 space-y-4">
                      <h3 className={`text-xl font-bold text-slate-900 transition-colors ${colors.hoverTitle}`}>
                        {service.title}
                      </h3>

                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                        {service.description}
                      </p>

                      <div className="pt-3 border-t border-slate-100 space-y-2">
                        {service.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center text-xs font-semibold text-slate-600 space-x-2">
                            <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-7 pb-7 pt-3 border-t border-slate-100">
                    <Link to="/contact" className={`inline-flex items-center space-x-2 text-sm font-bold ${colors.link}`}>
                      <span>Request Details</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}