import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const products = [
  { icon: '🌐', title: 'WebForge Pro', price: '$49/mo', desc: 'Full-stack web app builder with drag-and-drop components, real-time preview, and one-click deployment.', tags: ['Web', 'SaaS'], gradient: 'linear-gradient(135deg,#6C63FF,#4ECDC4)' },
  { icon: '⚡', title: 'SpeedKit API', price: '$29/mo', desc: 'Blazing-fast RESTful API platform with auto-scaling, 99.99% uptime SLA, and global edge distribution.', tags: ['API', 'Cloud'], gradient: 'linear-gradient(135deg,#FF6B6B,#FFD93D)' },
  { icon: '📊', title: 'Insight Dashboard', price: '$19/mo', desc: 'Real-time analytics and monitoring platform with custom KPIs, alerts, and beautiful report exports.', tags: ['Analytics', 'BI'], gradient: 'linear-gradient(135deg,#4ECDC4,#6C63FF)' },
  { icon: '🔐', title: 'SecureVault', price: '$39/mo', desc: 'Enterprise-grade security suite with end-to-end encryption, audit logs, and compliance reporting.', tags: ['Security', 'Enterprise'], gradient: 'linear-gradient(135deg,#6C63FF,#FF6B6B)' },
  { icon: '🤖', title: 'AutoFlow AI', price: '$59/mo', desc: 'Intelligent workflow automation powered by machine learning — eliminate repetitive tasks instantly.', tags: ['AI', 'Automation'], gradient: 'linear-gradient(135deg,#FFD93D,#FF6B6B)' },
  { icon: '📱', title: 'AppLaunch Kit', price: '$99/mo', desc: 'Cross-platform mobile app development toolkit with React Native templates and CI/CD pipelines.', tags: ['Mobile', 'React Native'], gradient: 'linear-gradient(135deg,#4ECDC4,#FFD93D)' },
];

const Products = () => {
  return (
    <>
      <Header />

      <div style={{ paddingTop: '72px' }}>
        {/* Hero */}
        <div className="page-hero">
          <div className="tag-v2" style={{ marginBottom: '16px', display: 'inline-block' }}>What We Build</div>
          <h1 className="gradient-text">Our Products</h1>
          <p>
            Powerful, scalable digital products designed to help your team
            move faster, work smarter, and deliver more value.
          </p>
        </div>

        <div className="container-v2" style={{ padding: '48px 24px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
            marginBottom: '48px',
          }}>
            {products.map(p => (
              <div key={p.title} className="glass-card" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{
                    width: '56px', height: '56px', borderRadius: '16px',
                    background: p.gradient, flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.6rem', boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
                  }}>
                    {p.icon}
                  </div>
                  <div style={{
                    padding: '4px 12px', borderRadius: '100px',
                    background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.25)',
                    fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary-light)',
                  }}>
                    {p.price}
                  </div>
                </div>

                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '10px' }}>{p.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '16px', flex: 1 }}>
                  {p.desc}
                </p>

                <div style={{ display: 'flex', gap: '6px', marginBottom: '20px', flexWrap: 'wrap' }}>
                  {p.tags.map(t => <span key={t} className="tag-v2">{t}</span>)}
                </div>

                <button className="btn-v2 btn-primary-v2" style={{ width: '100%', justifyContent: 'center' }}>
                  Try Free for 14 Days →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Products;