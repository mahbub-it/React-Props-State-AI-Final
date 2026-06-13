import Header from "../Components/Header";
import LeftSidebar from "../Components/Sidebars/Left-Sidebar";
import Footer from "../Components/Footer";
import RightSidebar from "../Components/Sidebars/Right-Sidebar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Post from "../Components/Post";

const SinglePost = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    axios
      .get(`http://localhost:8000/api/posts/${id}`)
      .then((response) => {
        // Normalize backend fields into the shape our Post component expects
        const data = response.data;
        const normalized = {
          id: data.id,
          title: data.title,
          content: data.content || data.description,
          description: data.content || data.description,
          comment_count: data.comments_count ?? data.comment_count ?? 0,
          like_count: data.likes_count ?? data.like_count ?? 0,
          share_count: data.shares_count ?? data.share_count ?? 0,
          time: data.created_at ?? data.time,
          profession: data.profession,
        };
        setPosts(normalized);
        setError(null);
      })
      .catch((err) => {
        console.error('Failed to fetch post:', err);
        setError('Failed to load post');
        setPosts(null);
      });
  }, [id]);

  return (
    <>
      <Header />
      <div style={{ paddingTop: '72px' }}>
        <div className="page-hero">
          <h1 className="gradient-text">{posts?.title || 'Loading...'}</h1>
          <div className="tag-v2" style={{ marginBottom: '16px', display: 'inline-block' }}>
            {posts?.profession || 'General'}
          </div>
        </div>

        <div className="home-grid">
          <aside className="home-sidebar-left">
            <LeftSidebar />
          </aside>

          <main>
            {posts ? (
              <Post
                key={posts.id}
                id={posts.id}
                title={posts.title}
                description={posts.content || posts.description}
                showReadMore={false}
                comment_count={posts.comment_count}
                like_count={posts.like_count}
                share_count={posts.share_count}
              />
            ) : error ? (
              <div style={{ padding: '24px 12px', color: 'var(--danger)' }}>{error}</div>
            ) : (
              <div style={{ padding: '24px 12px' }}>Loading post…</div>
            )}

            <div style={{ flex: 1, minWidth: 0, marginTop: '20px' }}>
              <p
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  display: 'block',
                  marginBottom: '8px',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-light)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              >
                {posts?.title}
              </p>

              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                  marginBottom: '16px',
                }}
              >
                {posts?.content || posts?.description}
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '10px',
                }}
              >
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    🕐 {posts?.time || 'Just now'}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    💬 {posts?.comment_count || 0} Comments
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    🔗 {posts?.share_count || 0} Shares
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
                  <span className="tag-v2">keyword</span>
                  <span className="tag-v2" style={{ background: 'rgba(78,205,196,0.12)', color: 'var(--accent)', borderColor: 'rgba(78,205,196,0.25)' }}>tag</span>
                  <span className="tag-v2" style={{ background: 'rgba(255,107,107,0.12)', color: 'var(--secondary)', borderColor: 'rgba(255,107,107,0.25)' }}>post</span>
                </div>
              </div>
            </div>
          </main>

          <aside className="home-sidebar-right">
            <RightSidebar />
          </aside>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default SinglePost;

