import Header from "../Components/Header";
import LeftSidebar from "../Components/Sidebars/Left-Sidebar";
import Alart from "../Components/Alart";
import Post from "../Components/Post";
import Carousel from "../Components/Carousel";
import Footer from "../Components/Footer";
import RightSidebar from "../Components/Sidebars/Right-Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";

// const posts = [
//   {
//     id: 1,
//     title: 'Shah Mahbubur Rahman',
//     description:
//       'Professional Full Stack Developer with 10 years of experience in web development. Expertise includes Laravel, React, Node.js, Express.js, and more. Passionate about building scalable and efficient web applications.',
//     time: '2022-01-01',
//     comment_count: '20',
//     share_count: 'yesterday',
//   },
//   {
//     id: 2,
//     title: 'Shah Nafiur Rahman',
//     description:
//       'CSE Engineer & Professional Youtuber with 5 years of experience. Expertise includes Laravel, React, Node.js, Express.js, and more. Passionate about building scalable and efficient web applications.',
//     time: 'one week ago',
//     comment_count: '10',
//     share_count: '20',
//   },
//   {
//     id: 3,
//     title: 'Shah Mahbubur Rahman',
//     description:
//       'Professional IT Expert with 10 years of experience. Expertise includes Networking, Laravel, React, Node.js, Express.js, and more. Passionate about building scalable IT infrastructure.',
//     time: 'today',
//     comment_count: '10',
//     share_count: '20',
//   },
// ];

const Home = () => {
  // All Post Data Fetch
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/api/posts')
      .then(response => {
        setPosts(response.data);
        console.log(response.data);
      });
  }, []);
  
  return (
    <>
      <Header />

      {/* Hero carousel sits directly below the fixed navbar */}
      <div style={{ paddingTop: '72px' }}>
        <Carousel />
      </div>

      {/* 3-column content grid */}
      <div className="home-grid">
        {/* Left sidebar */}
        <aside className="home-sidebar-left">
          <LeftSidebar />
        </aside>

        {/* Center: posts */}
        <main>
          <Alart />
          {/* Articles */}
          {/* All Post Data Show */}
          {posts.map((post, index) => {
            return(
              <Post key={index} id={post.id} title={post.title} description={post.content} comment_count={post.comment_count} like_count={post.like_count} share_count={post.share_count} />
            )
          })}
        </main>

        {/* Right sidebar */}
        <aside className="home-sidebar-right">
          <RightSidebar />
        </aside>
      </div>

      <Footer />
    </>
  );
};

export default Home;