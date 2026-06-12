import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Link } from 'react-router-dom';

const features = [
  { icon: '🎯', title: 'Targeted Outreach', desc: 'Precisely identify and reach your ideal customer segments with data-driven strategies.' },
  { icon: '📈', title: 'Growth Analytics', desc: 'Track KPIs and optimize campaigns with real-time engagement dashboards.' },
  { icon: '🤝', title: 'Partnership Building', desc: 'Build lasting relationships with stakeholders through proactive engagement.' },
  { icon: '💡', title: 'Creative Campaigns', desc: 'Craft compelling narratives that resonate and drive meaningful action.' },
];

const Engage = () => {
  return (
    <>
      <Header />

      <div style={{ paddingTop: '72px' }}>
        <div className="page-hero" style={{ background: 'linear-gradient(135deg, rgba(108,99,255,0.15) 0%, rgba(78,205,196,0.08) 100%)' }}>
          <div className="tag-v2" style={{ marginBottom: '16px', display: 'inline-block', background: 'rgba(108,99,255,0.15)', color: 'var(--primary-light)', borderColor: 'rgba(108,99,255,0.3)' }}>
            ⚡ Services
          </div>
          <h1 className="gradient-text">Engage</h1>
          <p>Dramatically engage empowered networks and parallel market platforms to objectively innovate lasting customer relationships.</p>
          <div style={{ marginTop: '24px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-v2 btn-primary-v2">Start Engaging →</Link>
            <Link to="/services" className="btn-v2 btn-outline-v2">← All Services</Link>
          </div>
        </div>

        <div className="container-v2" style={{ padding: '48px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {features.map(f => (
              <div key={f.title} className="glass-card" style={{ padding: '28px' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '16px' }}>{f.icon}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '10px' }}>{f.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Engage;