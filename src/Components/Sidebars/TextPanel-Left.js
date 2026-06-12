import React from 'react';

const TextPanelLeft = ({ title, description, button }) => {
  return (
    <div className="glass-card" style={{ padding: '20px' }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: '10px',
        marginBottom: '14px', paddingBottom: '14px',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}>
        <div style={{
          width: '32px', height: '32px', borderRadius: '8px',
          background: 'linear-gradient(135deg, #4ECDC4, #6C63FF)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '0.85rem', flexShrink: 0,
        }}>
          ⚙️
        </div>
        <h3 style={{
          fontSize: '0.95rem', fontWeight: 700, margin: 0,
          background: 'linear-gradient(135deg, #6C63FF, #4ECDC4)',
          WebkitBackgroundClip: 'text', backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          {title}
        </h3>
      </div>

      <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '16px' }}>
        {description}
      </p>

      <button className="btn-v2 btn-primary-v2" style={{ width: '100%', justifyContent: 'center', padding: '10px 16px', fontSize: '0.85rem' }}>
        {button} →
      </button>
    </div>
  );
};

export default TextPanelLeft;