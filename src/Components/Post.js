import React from 'react';
import { Link } from 'react-router-dom';

const getInitials = (title = '') =>
  title.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();

const avatarGradients = [
  'linear-gradient(135deg, #6C63FF, #4ECDC4)',
  'linear-gradient(135deg, #FF6B6B, #FFD93D)',
  'linear-gradient(135deg, #4ECDC4, #6C63FF)',
];

const Post = (props) => {
  return (
    <article
      className="glass-card"
      style={{ padding: '24px', marginBottom: '20px' }}
    >
      <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
        {/* Avatar */}
        <div
          style={{
            width: '52px',
            height: '52px',
            borderRadius: '14px',
            background: avatarGradients[props.index % avatarGradients.length],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1rem',
            fontWeight: 800,
            color: '#fff',
            flexShrink: 0,
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            letterSpacing: '-0.02em',
          }}
        >
          {getInitials(props.title)}
        </div>

        {/* Body */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <Link
            to={`/SinglePost/${props.id}`}
            style={{
              fontSize: '1.1rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              textDecoration: 'none',
              display: 'block',
              marginBottom: '8px',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--primary-light)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-primary)'}
          >
            {props.title}
          </Link>

          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            lineHeight: 1.7,
            marginBottom: '16px',
          }}>
            {props.description}
          </p>

          
          {/* Meta row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '10px',
          }}>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                🕐 {props.time}
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                💬 {props.comment_count} Comments
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                🔗 {props.share_count} Shares
              </span>
            </div>

            <Link to={`/SinglePost/${props.id}`}
              className="btn-v2 btn-outline-v2"
              style={{ padding: '6px 16px', fontSize: '0.8rem' }}
            >
              Read More →
            </Link>

            {/* Tags */}
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
            <span className="tag-v2">keyword</span>
            <span className="tag-v2" style={{ background: 'rgba(78,205,196,0.12)', color: 'var(--accent)', borderColor: 'rgba(78,205,196,0.25)' }}>tag</span>
            <span className="tag-v2" style={{ background: 'rgba(255,107,107,0.12)', color: 'var(--secondary)', borderColor: 'rgba(255,107,107,0.25)' }}>post</span>
          </div>

          </div>
        </div>
      </div>
    </article>
  );
};

export default Post;
