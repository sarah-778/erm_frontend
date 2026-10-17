import React, { useState, useEffect } from 'react';
import ceoImg from '../assets/ceo.jpg';
import meImg from '../assets/me.jpg';
import sarahImg from '../assets/sarah.jpg';

export default function ExecutiveSection() {
  const [executives, setExecutives] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fallback data in case the backend API is offline
  const defaultExecutives = [
    {
      id: 1,
      name: 'Franklin Wesonga',
      title: 'Chief Executive Officer',
      accent_color: 'text-emerald-600',
      description: 'Leads overall strategic vision, enterprise risk consulting frameworks, and key corporate advisory across Uganda and East Africa.',
      fallbackImg: ceoImg,
    },
    {
      id: 2,
      name: 'Ronald Wafula',
      title: 'Inventory & Loss Control',
      accent_color: 'text-violet-600',
      description: 'Oversees inventory auditing teams, stock controllers, double checkers, and daily corporate loss-prevention operations.',
      fallbackImg: meImg,
    },
    {
      id: 3,
      name: 'Sarah Orishaba',
      title: 'Facility & Risk Compliance',
      accent_color: 'text-teal-600',
      description: 'Directs corporate facility access protocols, asset protection standards, and operational risk compliance systems.',
      fallbackImg: sarahImg,
    },
  ];

  const fallbackImages = {
    'Franklin Wesonga': ceoImg,
    'Ronald Wafula': meImg,
    'Sarah Orishaba': sarahImg,
  };

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/executives')
      .then((res) => {
        if (!res.ok) throw new Error('API network response was not ok');
        return res.json();
      })
      .then((data) => {
        if (data && data.length > 0) {
          setExecutives(data);
        } else {
          setExecutives(defaultExecutives);
        }
      })
      .catch((err) => {
        console.warn('Backend API unavailable, using default local data:', err);
        setExecutives(defaultExecutives);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12 text-slate-400 text-sm">
        Loading leadership team...
      </div>
    );
  }

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
            Leadership & Governance
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Guided by Proven Risk Experts
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Our executive team brings operational precision, risk governance, and loss control expertise to safeguard corporate assets across East Africa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {executives.map((person) => (
            <div 
              key={person.id || person.name}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm text-center p-8 space-y-5 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:border-slate-300"
            >
              <div className="w-28 h-28 mx-auto rounded-full overflow-hidden bg-slate-200 border-4 border-white shadow-lg ring-1 ring-slate-100 group-hover:ring-emerald-200 transition-all duration-500">
                <img 
                  src={person.image_url || person.fallbackImg || fallbackImages[person.name] || ceoImg} 
                  alt={person.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">{person.name}</h3>
                <p className={`text-xs font-bold uppercase tracking-[0.15em] ${person.accent_color || person.titleColor || 'text-emerald-600'}`}>
                  {person.title}
                </p>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed max-w-[200px] mx-auto">
                {person.description || person.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}w