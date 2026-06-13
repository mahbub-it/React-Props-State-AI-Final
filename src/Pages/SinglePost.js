import Header from "../Components/Header";
import LeftSidebar from "../Components/Sidebars/Left-Sidebar";
import Footer from "../Components/Footer";
import RightSidebar from "../Components/Sidebars/Right-Sidebar";
import { useParams } from "react-router-dom";

const SinglePost = () => {
    const { id } = useParams();

    const SinglePostData = [
        {
            id: 1,
            title: "Shah Mahbubur Rahman",
            profession: "Professional Full Stack Developer",
            description: "Professional Full Stack Developer. I have 10 years of experience in web development. My expertise includes Laravel, React, Node.js, Express.js, and more. I am passionate about building scalable and efficient web applications.",
            time: "2022-01-01",
            comment_count: "20",
            share_count: "yesterday"
        },
        {
            id: 2,
            title: "Shah Nafiur Rahman",
            description: "CSE Engineer & Professional Youtuber. I have 5 years of experience in Youtube. My expertise includes Laravel, React, Node.js, Express.js, and more. I am passionate about building scalable and efficient web applications.",
            time: "one week ago",
            comment_count: "10",
            share_count: "20"
        },
        {
            id: 3,
            title: "Shah Mahbubur Rahman",
            description: "Professional IT Expert. I have 10 years of experience in IT. My expertise includes Networking, Laravel, React, Node.js, Express.js, and more. I am passionate about building scalable and efficient IT infrastructure.",
            time: "today",
            comment_count: "10",
            share_count: "20"
        }
    ]

    const singlePost = SinglePostData.find((post) => post.id === Number(id));
    // console.log(singlePost);

    return (
        <>

    {/* Navigation */}
    <Header />
    <div style={{ paddingTop: '72px' }}>
        {/* Hero */}
        <div className="page-hero">
            <h1 className="gradient-text">{singlePost.title}</h1>
            <div className="tag-v2" style={{ marginBottom: '16px', display: 'inline-block' }}>{singlePost.profession}</div>
            
        </div>
        {/* 3-column content grid */}
        <div className="home-grid">
        {/* Left sidebar */}
        <aside className="home-sidebar-left">
          <LeftSidebar />
        </aside>

        {/* Center: posts */}
        <main>
          {/* Articles */}
          <div style={{ flex: 1, minWidth: 0 }}>
          <p
            to={`/SinglePost/${singlePost.id}`}
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
            {singlePost.title}
          </p>

          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            lineHeight: 1.7,
            marginBottom: '16px',
          }}>
            {singlePost.description}
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
                🕐 {singlePost.time}
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                💬 {singlePost.comment_count} Comments
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                🔗 {singlePost.share_count} Shares
              </span>
            </div>

            {/* Tags */}
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
            <span className="tag-v2">keyword</span>
            <span className="tag-v2" style={{ background: 'rgba(78,205,196,0.12)', color: 'var(--accent)', borderColor: 'rgba(78,205,196,0.25)' }}>tag</span>
            <span className="tag-v2" style={{ background: 'rgba(255,107,107,0.12)', color: 'var(--secondary)', borderColor: 'rgba(255,107,107,0.25)' }}>post</span>
          </div>

          </div>
        </div>
              
        </main>

        {/* Right sidebar */}
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