import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const contactInfo = [
  { icon: '📍', label: 'Address', value: '123 Tech Street, Dhaka, Bangladesh' },
  { icon: '📧', label: 'Email', value: 'hello@antigravity.dev' },
  { icon: '📞', label: 'Phone', value: '+880 1234 567890' },
  { icon: '🕐', label: 'Hours', value: 'Mon–Fri, 9AM – 6PM (BST)' },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <Header />

      <div style={{ paddingTop: '72px' }}>
        {/* Hero */}
        <div className="page-hero">
          <div className="tag-v2" style={{ marginBottom: '16px', display: 'inline-block' }}>Get in Touch</div>
          <h1 className="gradient-text">Contact Us</h1>
          <p>
            Have a project in mind? We'd love to hear from you.
            Send us a message and we'll respond within 24 hours.
          </p>
        </div>

        <div className="container-v2" style={{ padding: '48px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px', alignItems: 'start' }}>

            {/* Contact form */}
            <div className="glass-card" style={{ padding: '36px' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px' }}>Send a Message</h2>
              <div className="gradient-divider" />

              {submitted && (
                <div style={{
                  padding: '14px 20px', borderRadius: '8px', marginBottom: '20px',
                  background: 'rgba(78,205,196,0.12)', border: '1px solid rgba(78,205,196,0.3)',
                  color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 500,
                  animation: 'slideDown 0.3s ease',
                }}>
                  ✅ Message sent! We'll be in touch within 24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px', letterSpacing: '0.05em' }}>
                      YOUR NAME *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      className="input-v2"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px', letterSpacing: '0.05em' }}>
                      EMAIL ADDRESS *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      className="input-v2"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px', letterSpacing: '0.05em' }}>
                    SUBJECT
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    className="input-v2"
                    placeholder="How can we help?"
                    value={form.subject}
                    onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px', letterSpacing: '0.05em' }}>
                    MESSAGE *
                  </label>
                  <textarea
                    id="contact-message"
                    className="input-v2"
                    placeholder="Tell us about your project..."
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    required
                    rows={6}
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <button type="submit" className="btn-v2 btn-primary-v2" style={{ fontSize: '1rem', padding: '13px 28px', alignSelf: 'flex-start' }}>
                  📨 Send Message
                </button>
              </form>
            </div>

            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {contactInfo.map(info => (
                <div key={info.label} className="glass-card" style={{ padding: '20px', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
                    background: 'linear-gradient(135deg,#6C63FF,#4ECDC4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem',
                  }}>
                    {info.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--primary-light)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>
                      {info.label}
                    </div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{info.value}</div>
                  </div>
                </div>
              ))}

              {/* Social */}
              <div className="glass-card" style={{ padding: '20px' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--primary-light)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
                  Follow Us
                </div>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {[['𝕏', 'Twitter'], ['in', 'LinkedIn'], ['f', 'Facebook'], ['▶', 'YouTube']].map(([icon, label]) => (
                    <button key={label} className="social-icon" aria-label={label} title={label} style={{ margin: 0 }}>
                      {icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;