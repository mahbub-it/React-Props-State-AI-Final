import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 0,
    eyebrow: 'Unleash Your Potential',
    title: 'Dramatically Engage',
    description: 'Objectively innovate empowered manufactured products whereas parallel platforms.',
    gradient: 'linear-gradient(135deg, #6C63FF22 0%, #4ECDC422 100%)',
    cta: 'Explore Services',
    ctaLink: '/services',
    emoji: '🚀',
  },
  {
    id: 1,
    eyebrow: 'Scale Efficiently',
    title: 'Efficiently Unleash',
    description: 'Dramatically maintain clicks-and-mortar solutions without functional solutions.',
    gradient: 'linear-gradient(135deg, #FF6B6B22 0%, #FFD93D22 100%)',
    cta: 'Learn More',
    ctaLink: '/about',
    emoji: '⚡',
  },
  {
    id: 2,
    eyebrow: 'Think Beyond',
    title: 'Proactively Pontificate',
    description: 'Holistically pontificate installed base portals after maintainable products.',
    gradient: 'linear-gradient(135deg, #4ECDC422 0%, #6C63FF22 100%)',
    cta: 'Contact Us',
    ctaLink: '/contact',
    emoji: '✨',
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="hero-section" style={{ minHeight: '520px', position: 'relative', overflow: 'hidden' }}>
      {/* Glow orbs */}
      <div className="hero-glow-orb orb-1" />
      <div className="hero-glow-orb orb-2" />

      {/* Grid decoration */}
      <div
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(rgba(108,99,255,0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
        }}
      />

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide${index === activeIndex ? ' active' : ''}`}
          style={{ background: index === activeIndex ? slide.gradient : 'transparent' }}
        >
          <div className="hero-content">
            <div className="hero-eyebrow">{slide.emoji} {slide.eyebrow}</div>
            <h1 className="hero-title gradient-text">{slide.title}</h1>
            <p className="hero-description">{slide.description}</p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link to={slide.ctaLink} className="btn-v2 btn-primary-v2">
                {slide.cta} →
              </Link>
              <Link to="/" className="btn-v2 btn-outline-v2">
                Watch Demo
              </Link>
            </div>
          </div>

          {/* Big emoji decoration */}
          <div
            style={{
              position: 'absolute',
              right: '10%',
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: 'clamp(80px, 12vw, 160px)',
              opacity: 0.12,
              userSelect: 'none',
              pointerEvents: 'none',
              filter: 'blur(2px)',
            }}
          >
            {slide.emoji}
          </div>
        </div>
      ))}

      {/* Prev / Next */}
      <button className="hero-nav-btn prev" onClick={prevSlide} aria-label="Previous slide">
        ←
      </button>
      <button className="hero-nav-btn next" onClick={nextSlide} aria-label="Next slide">
        →
      </button>

      {/* Dot indicators */}
      <div className="hero-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot${index === activeIndex ? ' active' : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;