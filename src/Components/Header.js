import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          background: scrolled
            ? 'rgba(13,13,26,0.92)'
            : 'rgba(13,13,26,0.7)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          transition: 'background 0.3s ease, box-shadow 0.3s ease',
          boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.4)' : 'none',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                backgroundImage: 'url(/images/logo.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(108,99,255,0.45)',
                flexShrink: 0,
              }}
            >
              <img src="/images/logo.png" alt="logo" style={{ width: '100%', height: '100%', borderRadius: '200px' }} />
            </div>
            <span
              style={{
                fontSize: '1.25rem',
                fontWeight: 900,
                background: 'linear-gradient(135deg, #6C63FF 0%, #4ECDC4 100%)',

                backgroundClip: 'text',
                WebkitTextFillColor: 'rgba(255,255,255,0.75)',
                letterSpacing: '-0.02em',
              }}
            >
              DreamWebdev.
            </span>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Nav mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
          </div>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
            style={{
              display: 'none',
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              color: '#F0F0FF',
              padding: '8px',
              cursor: 'pointer',
              fontSize: '1.25rem',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
            }}
            className="hamburger-btn"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            style={{
              position: 'absolute',
              top: '72px',
              left: 0, right: 0,
              background: 'rgba(13,13,26,0.98)',
              backdropFilter: 'blur(24px)',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              padding: '16px 24px',
              animation: 'slideDown 0.2s ease',
            }}
          >
            <Nav mobile setMobileOpen={setMobileOpen} />
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .hamburger-btn { display: flex !important; }
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default Header;