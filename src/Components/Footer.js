import { Link } from 'react-router-dom';

const footerCols = [
  {
    icon: '⚡',
    title: 'Dynamic',
    text: 'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.',
    cta: 'Procrastinate',
    link: '/',
  },
  {
    icon: '🔧',
    title: 'Efficient',
    text: 'Dramatically maintain clicks-and-mortar solutions without functional solutions. Efficiently unleash cross-media information without cross-media value.',
    cta: 'Unleash',
    link: '#',
  },
  {
    icon: '📎',
    title: 'Complete',
    text: 'Professionally cultivate one-to-one customer service with robust ideas. Completely synergize resource taxing relationships via premier niche markets.',
    cta: 'Complete',
    link: '#',
  },
];

const thumbGradients = [
  'linear-gradient(135deg, #6C63FF, #4ECDC4)',
  'linear-gradient(135deg, #FF6B6B, #FFD93D)',
  'linear-gradient(135deg, #4ECDC4, #6C63FF)',
  'linear-gradient(135deg, #FFD93D, #FF6B6B)',
];

const thumbEmojis = ['🌐', '⚡', '✨', '🚀'];

const socialLinks = [
  { icon: '𝕏', label: 'Twitter/X' },
  { icon: 'in', label: 'LinkedIn' },
  { icon: 'f', label: 'Facebook' },
  { icon: '▶', label: 'YouTube' },
];

const Footer = () => {
  return (
    <footer className="footer-v2">
      <div className="container-v2">
        <div className="footer-v2-grid">
          {footerCols.map((col) => (
            <div className="footer-v2-col" key={col.title}>
              <h3>
                <span>{col.icon}</span>
                {col.title}
              </h3>
              <p>{col.text}</p>
              <Link to={col.link} className="btn-v2 btn-ghost-v2" style={{ fontSize: '0.8rem', padding: '8px 16px' }}>
                {col.cta} →
              </Link>
            </div>
          ))}

          {/* Photo thumbs column */}
          <div className="footer-v2-col">
            <h3>
              <span>📸</span>
              Gallery
            </h3>
            <div className="footer-thumb-grid">
              {thumbGradients.map((grad, i) => (
                <Link to="/" className="footer-thumb" key={i}>
                  <div
                    className="footer-thumb-inner"
                    style={{ background: grad }}
                  >
                    {thumbEmojis[i]}
                  </div>
                </Link>
              ))}
            </div>

            {/* Social icons */}
            <div className="social-icons">
              {socialLinks.map(s => (
                <button
                  key={s.label}
                  className="social-icon"
                  title={s.label}
                  aria-label={s.label}
                >
                  {s.icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>Copyright © Antigravity 2025. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="#">Terms &amp; Conditions</Link>
            <Link to="#">Privacy Policy</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;