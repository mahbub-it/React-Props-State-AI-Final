import Header from "../Components/Header";
import LeftSidebar from "../Components/Sidebars/Left-Sidebar";
import Alart from "../Components/Alart";
import Carousel from "../Components/Carousel";
import Footer from "../Components/Footer";
import RightSidebar from "../Components/Sidebars/Right-Sidebar";
import { useParams } from "react-router-dom";

const products = [
    { icon: '🌐', title: 'WebForge Pro', price: '$49/mo', desc: 'Full-stack web app builder with drag-and-drop components, real-time preview, and one-click deployment.', tags: ['Web', 'SaaS'], gradient: 'linear-gradient(135deg,#6C63FF,#4ECDC4)' },
    { icon: '⚡', title: 'SpeedKit API', price: '$29/mo', desc: 'Blazing-fast RESTful API platform with auto-scaling, 99.99% uptime SLA, and global edge distribution.', tags: ['API', 'Cloud'], gradient: 'linear-gradient(135deg,#FF6B6B,#FFD93D)' },
    { icon: '📊', title: 'Insight Dashboard', price: '$19/mo', desc: 'Real-time analytics and monitoring platform with custom KPIs, alerts, and beautiful report exports.', tags: ['Analytics', 'BI'], gradient: 'linear-gradient(135deg,#4ECDC4,#6C63FF)' },
    { icon: '🔐', title: 'SecureVault', price: '$39/mo', desc: 'Enterprise-grade security suite with end-to-end encryption, audit logs, and compliance reporting.', tags: ['Security', 'Enterprise'], gradient: 'linear-gradient(135deg,#6C63FF,#FF6B6B)' },
    { icon: '🤖', title: 'AutoFlow AI', price: '$59/mo', desc: 'Intelligent workflow automation powered by machine learning — eliminate repetitive tasks instantly.', tags: ['AI', 'Automation'], gradient: 'linear-gradient(135deg,#FFD93D,#FF6B6B)' },
    { icon: '📱', title: 'AppLaunch Kit', price: '$99/mo', desc: 'Cross-platform mobile app development toolkit with React Native templates and CI/CD pipelines.', tags: ['Mobile', 'React Native'], gradient: 'linear-gradient(135deg,#4ECDC4,#FFD93D)' },
];

const SinglePost = () => {
    const { id } = useParams();

    const SinglePostData = [
        {
            id: 1,
            title: "Shah Mahbubur Rahman",
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

            <div className="jumbotron feature">
                <div className="container">
                    {/* Carousel */}
                    <Carousel />

                </div>
            </div>

            <div className="container-fluid">

                {/* Left Sidebar Column Start */}
                <div className="col-sm-3">

                    <LeftSidebar />

                </div>{/* Left Sidebar Column End */}


                {/* Center Column Start */}
                <div className="col-sm-6">

                    {/* Alert */}
                    <Alart />

                    {/* Articles */}
                    <h1>{singlePost.title}</h1>
                    <p>{singlePost.description}</p>
                    <p>{singlePost.time}</p>
                    <p>{singlePost.comment_count}</p>
                    <p>{singlePost.share_count}</p>

                    <hr />
                </div>{/* /Center Column End */}


                {/* Right Column Start */}
                <div className="col-sm-3">

                    <RightSidebar />


                </div>{/* /Right Column End */}

            </div>{/* /container-fluid */}

            {/* Footer */}
            <Footer />

        </>
    )
}

export default SinglePost;