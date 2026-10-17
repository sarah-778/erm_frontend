import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    service: 'Enterprise Risk Advisory',
    urgency: 'Standard',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:8000/api/consultations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          industry: '',
          service: 'Enterprise Risk Advisory',
          urgency: 'Standard',
          message: '',
        });
      } else {
        setErrorMessage(data.message || 'Failed to submit consultation request.');
      }
    } catch (error) {
      setErrorMessage('Could not connect to the backend server.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 focus:outline-none text-sm text-slate-900 bg-white placeholder:text-slate-400";
  const labelClass = "block text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-1.5";

  return (
    <div className="w-full text-gray-900 font-sans bg-slate-50 min-h-screen overflow-x-hidden">
      
      {/* HEADER */}
      <section className="pt-24 sm:pt-28 pb-10 sm:pb-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center max-w-3xl space-y-4">
          <span className="inline-flex items-center space-x-2 bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.15em]">
            <span>Get In Touch</span>
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Schedule a Confidential <span className="text-emerald-600">Consultation</span>
          </h1>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Reach out to our risk consultants and operational strategists across East Africa. We respond within hours.
          </p>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-start">
          
          {/* CONTACT INFO */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white p-6 sm:p-10 rounded-2xl border border-slate-800 shadow-xl space-y-8">
              <h2 className="text-2xl font-bold">Contact Details</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">📞</div>
                  <div>
                    <h3 className="text-[10px] uppercase tracking-[0.15em] text-slate-400 font-bold">Direct Lines</h3>
                    <p className="text-white font-bold text-sm mt-1">+256 760 527 159</p>
                    <p className="text-white font-bold text-sm">+256 781 047 668</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/15 text-teal-400 flex items-center justify-center shrink-0">✉️</div>
                  <div>
                    <h3 className="text-[10px] uppercase tracking-[0.15em] text-slate-400 font-bold">Email Inquiry</h3>
                    <p className="text-white font-bold text-sm mt-1">erm.linsolutions@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/15 text-violet-400 flex items-center justify-center shrink-0">📍</div>
                  <div>
                    <h3 className="text-[10px] uppercase tracking-[0.15em] text-slate-400 font-bold">Regional Office</h3>
                    <p className="text-white font-bold text-sm mt-1">Kampala, Uganda</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/256760527159"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 hover:bg-emerald-100 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 font-bold">WA</div>
              <div>
                <p className="text-sm font-bold text-slate-900">Prefer WhatsApp?</p>
                <p className="text-xs text-emerald-600 mt-0.5">Click here to start an instant direct chat</p>
              </div>
            </a>
          </div>

          {/* FORM */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="py-16 text-center space-y-6">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto text-2xl font-bold">✓</div>
                <h3 className="text-2xl font-black text-slate-900">Thank You for Contacting ERM Solutions</h3>
                <p className="text-slate-500 text-sm max-w-md mx-auto">A senior risk consultant will review your request and reach out shortly.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold uppercase text-emerald-600 tracking-widest cursor-pointer"
                >
                  Submit Another Inquiry →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">{errorMessage}</div>
                )}

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <input type="text" required placeholder="Sarah Orishaba" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Phone Number</label>
                    <input type="tel" placeholder="+256 700 000 000" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputClass} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Company Email *</label>
                    <input type="email" required placeholder="name@company.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Company Name</label>
                    <input type="text" placeholder="ERM Solutions" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className={inputClass} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Industry</label>
                    <select value={formData.industry} onChange={(e) => setFormData({ ...formData, industry: e.target.value })} className={inputClass}>
                      <option value="">Select industry</option>
                      <option>Retail & Wholesale industry</option>
                      <option>Hospitals and Pharmacies</option>
                      <option>Logistics & Supply Chain</option>
                      <option>Manufacturing</option>
                      <option>Government & NGO</option>
                      <option>Warehousing</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Service Required *</label>
                    <select required value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className={inputClass}>
                      <option>Enterprise Risk Advisory</option>
                      <option>Stock take Services</option>
                      <option>Internal Risk & Financial Controls</option>
                      <option>HR Compliance & Vetting</option>
                      <option>Loss Control&  Inventory Audits</option>
                      <option>Stock Managment</option>
                      <option>Retail & Hospitality Security</option>
                      <option>labour outsourcing</option>
                      <option>Camera room operator</option>
                      
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Message *</label>
                  <textarea rows="4" required placeholder="Briefly describe your company's risk mitigation needs..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`${inputClass} resize-none`} />
                </div>

                <button type="submit" disabled={loading} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-2xl shadow-lg transition-all text-sm tracking-wide uppercase">
                  {loading ? 'Submitting Inquiry...' : 'Submit Inquiry'}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}