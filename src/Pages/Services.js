import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: '⚡',
    title: 'Engage',
    description: 'Dramatically engage empowered networks and dynamic market strategies to objectively innovate.',
    link: '/services/engage',
    gradient: 'linear-gradient(135deg,#6C63FF,#4ECDC4)',
    tags: ['Strategy', 'Growth'],
  },
  {
    icon: '🌐',
    title: 'Pontificate',
    description: 'Holistically pontificate installed base portals and maintainable products for premier markets.',
    link: '/services/pontificate',
    gradient: 'linear-gradient(135deg,#FF6B6B,#FFD93D)',
    tags: ['Marketing', 'SEO'],
  },
  {
    icon: '🔀',
    title: 'Synergize',
    description: 'Completely synergize resource taxing relationships via premier niche markets dynamically.',
    link: '/services/synergize',
    gradient: 'linear-gradient(135deg,#4ECDC4,#6C63FF)',
    tags: ['Integration', 'API'],
  },
  {
    icon: '🛡️',
    title: 'Security',
    description: 'Proactively maintain robust security frameworks to protect your digital infrastructure.',
    link: '/services',
    gradient: 'linear-gradient(135deg,#6C63FF,#FF6B6B)',
    tags: ['Security', 'SSL'],
  },
  {
    icon: '🚀',
    title: 'Performance',
    description: 'Efficiently unleash cross-media information for real-time schemas and lightning-fast delivery.',
    link: '/services',
    gradient: 'linear-gradient(135deg,#FFD93D,#FF6B6B)',
    tags: ['Speed', 'CDN'],
  },
  {
    icon: '📊',
    title: 'Analytics',
    description: 'Objectively leverage existing operational change management insights for data-driven decisions.',
    link: '/services',
    gradient: 'linear-gradient(135deg,#4ECDC4,#FFD93D)',
    tags: ['Data', 'Reports'],
  },
];

export const Services = () => {
  return (
    <>
      <Header />

      <div style={{ paddingTop: '72px' }}>
        {/* Hero */}
        <div className="page-hero">
          <div className="tag-v2" style={{ marginBottom: '16px', display: 'inline-block' }}>What We Offer</div>
          <h1 className="gradient-text">Our Services</h1>
          <p>
            We offer a comprehensive suite of digital services to help your business
            grow, scale, and succeed in the modern era.
          </p>
        </div>

        <div className="container-v2" style={{ padding: '48px 24px' }}>
          {/* Service cards grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
            marginBottom: '56px',
          }}>
            {services.map(s => (
              <div key={s.title} className="glass-card" style={{ padding: '28px' }}>
                <div style={{
                  width: '56px', height: '56px', borderRadius: '16px',
                  background: s.gradient, marginBottom: '20px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.6rem', boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
                }}>
                  {s.icon}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '10px' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '16px' }}>
                  {s.description}
                </p>
                <div style={{ display: 'flex', gap: '6px', marginBottom: '20px', flexWrap: 'wrap' }}>
                  {s.tags.map(t => (
                    <span key={t} className="tag-v2">{t}</span>
                  ))}
                </div>
                <Link to={s.link} className="btn-v2 btn-outline-v2" style={{ fontSize: '0.85rem', padding: '8px 16px' }}>
                  Learn More →
                </Link>
              </div>
            ))}
          </div>

          {/* CTA banner */}
          <div className="glass-card" style={{
            padding: '48px 40px', textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(108,99,255,0.12) 0%, rgba(78,205,196,0.08) 100%)',
          }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '12px' }} className="gradient-text">
              Ready to Transform Your Business?
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '28px', fontSize: '1rem' }}>
              Let's discuss how our services can accelerate your growth.
            </p>
            <Link to="/contact" className="btn-v2 btn-primary-v2" style={{ fontSize: '1rem', padding: '14px 32px' }}>
              Get a Free Consultation →
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Services;