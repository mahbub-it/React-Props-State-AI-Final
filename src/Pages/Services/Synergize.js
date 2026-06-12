import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Link } from 'react-router-dom';

const features = [
  { icon: '🔀', title: 'API Integration', desc: 'Seamlessly connect disparate systems and services through robust, scalable API architectures.' },
  { icon: '🛠️', title: 'Workflow Automation', desc: 'Eliminate repetitive tasks by automating complex workflows with intelligent pipelines.' },
  { icon: '📊', title: 'Data Synergy', desc: 'Unify data sources and generate actionable insights with real-time synced dashboards.' },
  { icon: '⚙️', title: 'Resource Optimization', desc: 'Maximize operational efficiency by synergizing resource allocation across all channels.' },
];

const Synergize = () => {
  return (
    <>
      <Header />

      <div style={{ paddingTop: '72px' }}>
        <div className="page-hero" style={{ background: 'linear-gradient(135deg, rgba(78,205,196,0.12) 0%, rgba(108,99,255,0.08) 100%)' }}>
          <div className="tag-v2" style={{ marginBottom: '16px', display: 'inline-block', background: 'rgba(78,205,196,0.12)', color: 'var(--accent)', borderColor: 'rgba(78,205,196,0.3)' }}>
            🔀 Services
          </div>
          <h1 style={{ background: 'linear-gradient(135deg,#4ECDC4,#6C63FF)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, marginBottom: '0.75rem' }}>
            Synergize
          </h1>
          <p>Completely synergize resource taxing relationships via premier niche markets. Dynamically innovate resource-leveling customer service.</p>
          <div style={{ marginTop: '24px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-v2 btn-primary-v2">Start Synergizing →</Link>
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

export default Synergize;