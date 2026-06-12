import React, { useState } from 'react';
import LoginForm from './LoginForm';

const progressItems = [
  { label: 'Proactively Envisioned', value: 100, gradient: 'linear-gradient(90deg,#6C63FF,#4ECDC4)' },
  { label: 'Objectively Innovated', value: 80, gradient: 'linear-gradient(90deg,#4ECDC4,#6C63FF)' },
  { label: 'Portalled', value: 45, gradient: 'linear-gradient(90deg,#FFD93D,#FF6B6B)' },
  { label: 'Done', value: 35, gradient: 'linear-gradient(90deg,#FF6B6B,#FFD93D)' },
];

const RightSidebar = () => {
  const [formDta, setFormData] = useState({ uid: '', pwd: '' });

  return (
    <>
      {/* Login Card */}
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
            🔐
          </div>
          <h3 style={{ fontSize: '0.95rem', fontWeight: 700, margin: 0 }}>Sign In</h3>
        </div>
        <LoginForm />
      </div>

      {/* Progress Bars Card */}
      <div className="glass-card" style={{ padding: '20px', marginBottom: '20px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          marginBottom: '16px', paddingBottom: '14px',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}>
          <div style={{
            width: '32px', height: '32px', borderRadius: '8px',
            background: 'linear-gradient(135deg,#FF6B6B,#FFD93D)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem',
          }}>
            📊
          </div>
          <h3 style={{ fontSize: '0.95rem', fontWeight: 700, margin: 0 }}>Dramatically Engage</h3>
        </div>

        {progressItems.map((item) => (
          <div key={item.label} style={{ marginBottom: '14px' }}>
            <div className="progress-label">
              <span>{item.label}</span>
              <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{item.value}%</span>
            </div>
            <div className="progress-v2">
              <div
                className="progress-v2-bar"
                style={{ width: `${item.value}%`, background: item.gradient }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Text Panel */}
      <div className="glass-card" style={{ padding: '20px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          marginBottom: '14px', paddingBottom: '14px',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}>
          <div style={{
            width: '32px', height: '32px', borderRadius: '8px',
            background: 'linear-gradient(135deg,#4ECDC4,#6C63FF)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem',
          }}>
            📣
          </div>
          <h3 style={{ fontSize: '0.95rem', fontWeight: 700, margin: 0 }}>Active Predomination</h3>
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '16px' }}>
          Proactively envisioned multimedia based expertise and cross-media growth strategies.
        </p>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {['Resource', 'Envision', 'Niche'].map(label => (
            <button key={label} className="btn-v2 btn-ghost-v2" style={{ flex: 1, justifyContent: 'center', padding: '8px 10px', fontSize: '0.8rem', minWidth: '70px' }}>
              {label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default RightSidebar;