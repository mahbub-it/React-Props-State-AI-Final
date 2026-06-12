import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Link } from 'react-router-dom';

const features = [
  { icon: '🌐', title: 'Market Leadership', desc: 'Holistically pontificate premier niche markets to maintain long-term competitive advantage.' },
  { icon: '📣', title: 'Thought Leadership', desc: 'Establish authority with insightful content that speaks directly to your industry.' },
  { icon: '🔍', title: 'SEO Domination', desc: 'Rank at the top with white-hat strategies and technical SEO excellence.' },
  { icon: '📱', title: 'Omnichannel Presence', desc: 'Maintain consistent brand messaging across all digital and physical touchpoints.' },
];

const Pontificate = () => {
  return (
    <>
      <Header />

      <div style={{ paddingTop: '72px' }}>
        <div className="page-hero" style={{ background: 'linear-gradient(135deg, rgba(255,107,107,0.12) 0%, rgba(255,217,61,0.06) 100%)' }}>
          <div className="tag-v2" style={{ marginBottom: '16px', display: 'inline-block', background: 'rgba(255,107,107,0.12)', color: 'var(--secondary)', borderColor: 'rgba(255,107,107,0.3)' }}>
            🌐 Services
          </div>
          <h1 style={{ background: 'linear-gradient(135deg,#FF6B6B,#FFD93D)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, marginBottom: '0.75rem' }}>
            Pontificate
          </h1>
          <p>Holistically pontificate installed base portals and maintainable products for premier niche markets.</p>
          <div style={{ marginTop: '24px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-v2 btn-primary-v2">Get Started →</Link>
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

export default Pontificate;