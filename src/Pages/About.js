import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: 'Shah Mahbubur Rahman',
    role: 'Full Stack Developer',
    bio: '10+ years building scalable web apps with Laravel, React, and Node.js.',
    emoji: '👨‍💻',
    gradient: 'linear-gradient(135deg,#6C63FF,#4ECDC4)',
    socials: ['𝕏', 'in', '▶'],
  },
  {
    name: 'Shah Nafiur Rahman',
    role: 'CSE Engineer & Youtuber',
    bio: '5 years creating tech content and engineering efficient cloud solutions.',
    emoji: '🎬',
    gradient: 'linear-gradient(135deg,#FF6B6B,#FFD93D)',
    socials: ['𝕏', 'in', '▶'],
  },
  {
    name: 'Alex Johnson',
    role: 'UI/UX Designer',
    bio: 'Crafts stunning digital experiences with a focus on user delight.',
    emoji: '🎨',
    gradient: 'linear-gradient(135deg,#4ECDC4,#6C63FF)',
    socials: ['𝕏', 'in'],
  },
];

const skills = [
  { label: 'React / Next.js', value: 95, gradient: 'linear-gradient(90deg,#6C63FF,#4ECDC4)' },
  { label: 'Laravel / PHP', value: 90, gradient: 'linear-gradient(90deg,#4ECDC4,#6C63FF)' },
  { label: 'Node.js / API', value: 85, gradient: 'linear-gradient(90deg,#FF6B6B,#FFD93D)' },
  { label: 'UI/UX Design', value: 78, gradient: 'linear-gradient(90deg,#FFD93D,#FF6B6B)' },
  { label: 'DevOps / Cloud', value: 70, gradient: 'linear-gradient(90deg,#6C63FF,#FF6B6B)' },
];

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '200+', label: 'Projects Delivered' },
  { value: '50+', label: 'Happy Clients' },
  { value: '99%', label: 'Satisfaction Rate' },
];

const About = () => {
  return (
    <>
      <Header />

      <div style={{ paddingTop: '72px' }}>
        {/* Hero */}
        <div className="page-hero">
          <div className="tag-v2" style={{ marginBottom: '16px', display: 'inline-block' }}>About Us</div>
          <h1 className="gradient-text">We Build the Future</h1>
          <p>
            A passionate team of engineers, designers, and creators dedicated to crafting
            digital experiences that drive real-world impact.
          </p>
        </div>

        <div className="container-v2" style={{ padding: '48px 24px' }}>
          {/* Stats row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '16px',
            marginBottom: '56px',
          }}>
            {stats.map(s => (
              <div key={s.label} className="glass-card" style={{ padding: '28px 20px', textAlign: 'center' }}>
                <div style={{ fontSize: '2.2rem', fontWeight: 900 }} className="gradient-text">{s.value}</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '6px' }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Team */}
          <h2 className="section-title">Meet the Team</h2>
          <div className="gradient-divider" />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
            marginBottom: '56px',
          }}>
            {teamMembers.map(m => (
              <div key={m.name} className="glass-card" style={{ padding: '28px', textAlign: 'center' }}>
                <div style={{
                  width: '72px', height: '72px', borderRadius: '20px',
                  background: m.gradient, margin: '0 auto 16px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '2rem', boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                }}>
                  {m.emoji}
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '4px' }}>{m.name}</h3>
                <div style={{ fontSize: '0.8rem', color: 'var(--primary-light)', fontWeight: 600, marginBottom: '12px' }}>{m.role}</div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '16px' }}>{m.bio}</p>
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                  {m.socials.map(icon => (
                    <button key={icon} className="social-icon" style={{ margin: 0 }}>{icon}</button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center', marginBottom: '48px' }}>
            <div>
              <h2 className="section-title">Our Expertise</h2>
              <div className="gradient-divider" />
              <p style={{ color: 'var(--text-secondary)', marginBottom: '28px', lineHeight: 1.7 }}>
                We bring together a diverse set of technical skills to deliver outstanding digital products.
              </p>
              {skills.map(s => (
                <div key={s.label} style={{ marginBottom: '16px' }}>
                  <div className="progress-label"><span>{s.label}</span><span style={{ fontWeight: 700 }}>{s.value}%</span></div>
                  <div className="progress-v2">
                    <div className="progress-v2-bar" style={{ width: `${s.value}%`, background: s.gradient }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="glass-card" style={{ padding: '32px', textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🌐</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '12px' }} className="gradient-text">
                10+ Years of Excellence
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px' }}>
                Building web applications that scale, perform, and delight users around the globe.
              </p>
              <Link to="/contact" className="btn-v2 btn-primary-v2">Work With Us →</Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;