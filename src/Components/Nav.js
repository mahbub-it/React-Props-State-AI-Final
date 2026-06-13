import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const pageTitles = {
  '/': 'Home — Antigravity',
  '/about': 'About — Antigravity',
  '/products': 'Products — Antigravity',
  '/services': 'Services — Antigravity',
  '/contact': 'Contact — Antigravity',
  '/services/engage': 'Engage — Antigravity',
  '/services/pontificate': 'Pontificate — Antigravity',
  '/services/synergize': 'Synergize — Antigravity',
};

const mainLinks = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/products', name: 'Products' },
];

const serviceLinks = [
  { path: '/services/engage', name: 'Engage' },
  { path: '/services/pontificate', name: 'Pontificate' },
  { path: '/services/synergize', name: 'Synergize' },
];

const navLinkStyle = (isActive) => ({
  padding: '8px 14px',
  borderRadius: '8px',
  fontSize: '0.9rem',
  fontWeight: 500,
  color: isActive ? '#fff' : 'rgba(240,240,255,0.7)',
  background: isActive ? 'rgba(108,99,255,0.2)' : 'transparent',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
});

const Nav = ({ mobile, setMobileOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const address = useLocation();
  const isServicesActive = address.pathname.startsWith('/services');

  const handleLinkClick = () => {
    setDropdownOpen(false);
    if (setMobileOpen) setMobileOpen(false);
  };

  if (mobile) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {mainLinks.map(link => (
          <Link
            key={link.path}
            to={link.path}
            onClick={handleLinkClick}
            style={{
              ...navLinkStyle(address.pathname === link.path),
              display: 'block',
              padding: '12px 16px',
            }}
          >
            {link.name}
          </Link>
        ))}
        <div style={{ padding: '8px 16px', color: 'rgba(240,240,255,0.4)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Services
        </div>
        {serviceLinks.map(link => (
          <Link
            key={link.path}
            to={link.path}
            onClick={handleLinkClick}
            style={{ ...navLinkStyle(address.pathname === link.path), display: 'block', padding: '12px 16px 12px 28px' }}
          >
            ↳ {link.name}
          </Link>
        ))}
        <Link
          to="/contact"
          onClick={handleLinkClick}
          style={{ ...navLinkStyle(address.pathname === '/contact'), display: 'block', padding: '12px 16px' }}
        >
          Contact
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{pageTitles[address.pathname] || 'Antigravity'}</title>
      </Helmet>

      <nav
        className="desktop-nav"
        style={{ display: 'flex', alignItems: 'center', gap: '2px' }}
      >
        {mainLinks.map(link => (
          <Link
            key={link.path}
            to={link.path}
            style={navLinkStyle(address.pathname === link.path)}
            onMouseEnter={e => {
              if (address.pathname !== link.path) {
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
              }
            }}
            onMouseLeave={e => {
              if (address.pathname !== link.path) {
                e.currentTarget.style.color = 'rgba(240,240,255,0.7)';
                e.currentTarget.style.background = 'transparent';
              }
            }}
          >
            {link.name}
          </Link>
        ))}

        {/* Services dropdown */}
        <div
          style={{ position: 'relative' }}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <Link
            to="/services"
            style={{
              ...navLinkStyle(isServicesActive),
              gap: '4px',
            }}
          >
            Services
            <span style={{ fontSize: '0.65rem', opacity: 0.7 }}>▼</span>
          </Link>

          {dropdownOpen && (
            <div
              style={{
                position: 'absolute',
                top: 'calc(100% + 2px)',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(13,13,26,0.96)',
                backdropFilter: 'blur(24px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                padding: '8px',
                minWidth: '170px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                animation: 'slideDown 0.15s ease',
                zIndex: 100,
              }}
            >
              {serviceLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={handleLinkClick}
                  style={{
                    display: 'block',
                    padding: '10px 16px',
                    borderRadius: '8px',
                    color: address.pathname === link.path ? '#fff' : 'rgba(240,240,255,0.7)',
                    background: address.pathname === link.path ? 'rgba(108,99,255,0.2)' : 'transparent',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    transition: 'all 0.15s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(108,99,255,0.12)';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={e => {
                    if (address.pathname !== link.path) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'rgba(240,240,255,0.7)';
                    }
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link
          to="/contact"
          style={navLinkStyle(address.pathname === '/contact')}
          onMouseEnter={e => {
            if (address.pathname !== '/contact') {
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
            }
          }}
          onMouseLeave={e => {
            if (address.pathname !== '/contact') {
              e.currentTarget.style.color = 'rgba(240,240,255,0.7)';
              e.currentTarget.style.background = 'transparent';
            }
          }}
        >
          Contact
        </Link>

        {/* CTA button */}
        <Link
          to="/contact"
          className="btn-v2 btn-primary-v2"
          style={{ marginLeft: '12px', padding: '9px 20px', fontSize: '0.875rem' }}
        >
          Get Started →
        </Link>
      </nav>
    </>
  );
};

export default Nav;