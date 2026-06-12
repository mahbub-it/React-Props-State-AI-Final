import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import TextPanelLeft from './TextPanel-Left';

const serviceLinks = [
  { to: '/services/engage',      label: 'Resource Taxing',        icon: '⚡' },
  { to: '/services/pontificate', label: 'Premier Niche Markets',  icon: '🌐', badge: 'New' },
  { to: '/services/synergize',   label: 'Dynamically Innovate',   icon: '🔧' },
  { to: '/services/engage',      label: 'Objectively Innovate',   icon: '✦' },
  { to: '/services/pontificate', label: 'Proactively Envisioned', icon: '🚀' },
];

const Sidebar = (props) => {
  const location = useLocation();

  return (
    <>
      {/* Nav links card */}
      <div className="glass-card" style={{ padding: '20px', marginBottom: '20px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          marginBottom: '16px', paddingBottom: '14px',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}>
          <div style={{
            width: '32px', height: '32px', borderRadius: '8px',
            background: 'linear-gradient(135deg,#6C63FF,#4ECDC4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem',
          }}>
            🔀
          </div>
          <h3 style={{ fontSize: '0.95rem', fontWeight: 700, margin: 0 }}>
            Completely Synergize
          </h3>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {serviceLinks.map((link, i) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={i}
                to={link.to}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: isActive ? '#fff' : 'var(--text-secondary)',
                  background: isActive ? 'rgba(108,99,255,0.2)' : 'transparent',
                  border: isActive ? '1px solid rgba(108,99,255,0.35)' : '1px solid transparent',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  gap: '8px',
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '0.85rem' }}>{link.icon}</span>
                  {link.label}
                </span>
                {link.badge && (
                  <span style={{
                    fontSize: '0.65rem', fontWeight: 700,
                    padding: '2px 7px', borderRadius: '100px',
                    background: 'linear-gradient(135deg,#6C63FF,#4ECDC4)',
                    color: '#fff',
                  }}>
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Text panel */}
      <TextPanelLeft
        title={props.title || 'Web Development'}
        description={props.description || 'We build responsive and user-friendly websites for businesses and individuals. Our sites are fast, secure, and easy to use.'}
        button={props.button || 'Discover More'}
      />
    </>
  );
};

export default Sidebar;