import Header from "../Components/Header";
import LeftSidebar from "../Components/Sidebars/Left-Sidebar";
import Alart from "../Components/Alart";
import Carousel from "../Components/Carousel";
import Footer from "../Components/Footer";
import RightSidebar from "../Components/Sidebars/Right-Sidebar";
import { useParams } from "react-router-dom";

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