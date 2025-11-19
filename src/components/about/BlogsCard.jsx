import React, { useRef, useState } from "react";
import ArticleImage1 from "../../assets/Images/about/Article-Image1.svg";
import ArticleImage2 from "../../assets/Images/about/Article-Image-2.svg";
import ArticleImage3 from "../../assets/Images/about/Article-Image-3.svg";
import ArticleImage4 from "../../assets/Images/about/Article-Image-4.svg";
import ArrowIcon from "../../assets/icon/arrowicon.svg";
import { Link } from "react-router-dom";

const blogs = [
    {
        id: 1,
        title: "Fundamental Of Javascript",
        image: ArticleImage1,
        author: "Dasteen",
        date: "Jan 10, 2022",
        read: "3 Min Read",
    },
    {
        id: 2,
        title: "Grid CSS Make Your Life Easier",
        image: ArticleImage2,
        author: "Dasteen",
        date: "Feb 12, 2022",
        read: "4 Min Read",
    },
    {
        id: 3,
        title: "Make Animated Light Mode And Dark Mode Toggle With CSS",
        image: ArticleImage3,
        author: "Dasteen",
        date: "Mar 05, 2022",
        read: "5 Min Read",
    },
    {
        id: 4,
        title: "Make Tic Tac Toe Games With React JS",
        image: ArticleImage4,
        author: "Dasteen",
        date: "Apr 21, 2022",
        read: "2 Min Read",
    },
    {
        id: 1,
        title: "Fundamental Of Javascript",
        image: ArticleImage1,
        author: "Dasteen",
        date: "Jan 10, 2022",
        read: "3 Min Read",
    },
    {
        id: 2,
        title: "Grid CSS Make Your Life Easier",
        image: ArticleImage2,
        author: "Dasteen",
        date: "Feb 12, 2022",
        read: "4 Min Read",
    },
    {
        id: 3,
        title: "Make Animated Light Mode And Dark Mode Toggle With CSS",
        image: ArticleImage3,
        author: "Dasteen",
        date: "Mar 05, 2022",
        read: "5 Min Read",
    },
    {
        id: 4,
        title: "Make Tic Tac Toe Games With React JS",
        image: ArticleImage4,
        author: "Dasteen",
        date: "Apr 21, 2022",
        read: "2 Min Read",
    },
];

const BlogsCard = () => {
    const sliderRef = useRef(null);

    // Drag States
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // ✔ Ultra Smooth Scroll Animation
    const smoothScroll = (element, distance, duration = 600) => {
        const start = element.scrollLeft;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing curve (smooth + soft stop)
            const ease = 1 - Math.pow(1 - progress, 4);

            element.scrollLeft = start + distance * ease;

            if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    };

    // Left & Right Button Scroll
    const scrollLeftBtn = () => {
        smoothScroll(sliderRef.current, -350, 600);
    };

    const scrollRightBtn = () => {
        smoothScroll(sliderRef.current, 350, 600);
    };

    // Mouse Drag Start
    const startDrag = (e) => {
        setIsDown(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    // Mouse Drag End
    const stopDrag = () => setIsDown(false);

    // Mouse Drag Move
    const dragMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 1.1; // smoother drag speed
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    // Touch Move (for mobile)
    const handleTouchMove = (e) => {
        if (!isDown) return;
        const touchX = e.touches[0].pageX - sliderRef.current.offsetLeft;
        const walk = (touchX - startX) * 1.1;
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <section className="w-full px-6 lg:px-20 py-12">
            {/* Header */}
            <div className="flex justify-between items-center mb-20">
                <h1 className="text-3xl font-bold text-gray-900">Blogs</h1>
            </div>

            {/* Subheading */}
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                    Blog <span className="w-12 h-[2px] bg-black block"></span>
                </h2>
                <Link to={"/blog"}>
                    <button className="text-gray-700 flex items-center gap-1 font-medium">
                        See All Blogs
                        <img src={ArrowIcon} alt="" className="w-3 h-3 -mb-1" />
                    </button>
                </Link>

            </div>

            {/* Slider Wrapper */}
            <div className="relative">


                {/* Slider Track */}
                <div
                    ref={sliderRef}
                    className="
            flex gap-6 overflow-x-scroll scrollbar-hide 
            cursor-grab active:cursor-grabbing select-none  [&::-webkit-scrollbar]:hidden
    [-ms-overflow-style:'none']
    [scrollbar-width:'none']
          "
                    onMouseDown={startDrag}
                    onMouseLeave={stopDrag}
                    onMouseUp={stopDrag}
                    onMouseMove={dragMove}
                    onTouchStart={(e) => {
                        setIsDown(true);
                        setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
                        setScrollLeft(sliderRef.current.scrollLeft);
                    }}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={() => setIsDown(false)}
                >
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="
                min-w-[300px] sm:min-w-[340px] lg:min-w-[320px]
                bg-white rounded-lg p-4  hover:shadow-lg transition
              "
                        >
                            {/* Image */}
                            <div className="w-full h-60 rounded-xl overflow-hidden">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="mt-4 text-base font-semibold text-gray-900 leading-snug">
                                {blog.title}
                            </h3>

                            {/* Author */}
                            <div className="flex items-center gap-3 mt-5">
                                <img
                                    src="https://i.pravatar.cc/40"
                                    className="w-10 h-10 rounded-full"
                                    alt="avatar"
                                />
                                <div className="text-sm">
                                    <p className="font-medium text-gray-800">{blog.author}</p>
                                    <p className="text-xs text-gray-500 flex items-center gap-2">
                                        {blog.date} <span>•</span> {blog.read}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default BlogsCard;
