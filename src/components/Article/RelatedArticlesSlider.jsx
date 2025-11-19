import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FrameScreen35 from "../../assets/Images/Article/Frame 35.svg";
import FrameScreen34 from "../../assets/Images/Article/Frame 34.svg";

const articles = [
  { id: 1, image: FrameScreen35, category: "UI/UX Design", title: "10 Modern UI Design Trends You Should Know in 2025", date: "Nov 05", read: "8 min read" },
  { id: 2, image: FrameScreen34, category: "Web Development", title: "How to Build a Responsive Layout Using Tailwind CSS", date: "Oct 28", read: "12 min read" },
  { id: 3, image: FrameScreen35, category: "Artificial Intelligence", title: "AI Tools That Boost Productivity: Complete 2025 Guide", date: "Nov 02", read: "9 min read" },
  { id: 4, image: FrameScreen34, category: "Business & Startup", title: "How to Validate Your Startup Idea Before Building It", date: "Oct 21", read: "7 min read" },
  { id: 5, image: FrameScreen35, category: "Graphic Design", title: "Master Color Psychology to Improve Your Branding", date: "Sep 30", read: "6 min read" },
  { id: 6, image: FrameScreen34, category: "App Development", title: "Why Mobile-First Design Still Matters in 2025", date: "Nov 01", read: "11 min read" },
  { id: 7, image: FrameScreen35, category: "Digital Marketing", title: "How to Create High-Converting Landing Pages", date: "Oct 17", read: "9 min read" },
  { id: 8, image: FrameScreen34, category: "AI Writing", title: "Write Smarter With AI: Techniques for Better Articles", date: "Oct 26", read: "10 min read" },
  { id: 9, image: FrameScreen35, category: "Frontend Development", title: "React Best Practices for Building Scalable UI", date: "Nov 03", read: "13 min read" }
];

const RelatedArticlesSlider = () => {
  const scrollRef = useRef(null);
  const pos = useRef({
    left: 0,
    startX: 0,
    dragging: false,
    velocity: 0,
    lastX: 0,
    frame: null,
  });

  // Arrow slide
  const slideLeft = () => scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  const slideRight = () => scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });

  // Start drag
  const startDrag = (e) => {
    pos.current.dragging = true;
    pos.current.startX = e.pageX || e.touches[0].pageX;
    pos.current.left = scrollRef.current.scrollLeft;
    pos.current.lastX = pos.current.startX;
    cancelAnimationFrame(pos.current.frame);
  };

  // Smooth drag
  const moveDrag = (e) => {
    if (!pos.current.dragging) return;

    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - pos.current.startX) * 1.2;

    scrollRef.current.scrollLeft = pos.current.left - walk;

    pos.current.velocity = x - pos.current.lastX;
    pos.current.lastX = x;
  };

  // Momentum end
  const endDrag = () => {
    pos.current.dragging = false;

    const momentum = () => {
      scrollRef.current.scrollLeft -= pos.current.velocity;
      pos.current.velocity *= 0.92;

      if (Math.abs(pos.current.velocity) > 0.3) {
        pos.current.frame = requestAnimationFrame(momentum);
      }
    };

    momentum();
  };

  return (
    <div className="w-full px-4 md:px-8">
      <h2 className="text-xl md:text-2xl font-semibold mb-5">Related Articles</h2>

      <div className="relative flex items-center">

        {/* Left Button — show only on md and up */}
        <button
          onClick={slideLeft}
          className="hidden md:flex absolute left-0 z-10 bg-white shadow-md p-2 rounded-full no-scrollbar "
        >
          <ChevronLeft size={22} />
        </button>

        <div
          ref={scrollRef}
          onMouseDown={startDrag}
          onMouseMove={moveDrag}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
          onTouchStart={startDrag}
          onTouchMove={moveDrag}
          onTouchEnd={endDrag}
          className="
    flex overflow-x-auto gap-4 md:gap-6 px-1 md:px-2
    cursor-grab active:cursor-grabbing select-none
    scroll-smooth
    [&::-webkit-scrollbar]:hidden
    [-ms-overflow-style:'none']
    [scrollbar-width:'none']
  "
        >

          {articles.map((item) => (
            <div
              key={item.id}
              className="
                min-w-[210px]   /* Mobile */
                sm:min-w-[260px] 
                md:min-w-[300px]
                lg:min-w-[330px] 
                bg-[#F8F8F8] rounded-xl  hover:shadow-lg transition p-3
              "
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 sm:h-44 md:h-48 object-cover rounded-lg"
              />

              <div className="flex items-center gap-2 text-sm text-gray-500 mt-3">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <p className="text-gray-600">{item.category}</p>
              </div>

              <h3 className="font-semibold text-[16px] md:text-[17px] mt-2 leading-snug">
                {item.title}
              </h3>

              <div className="text-sm text-gray-500 flex gap-3 mt-3">
                <span>{item.date}</span>
                <span>•</span>
                <span>{item.read}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button — show only on md and up */}
        <button
          onClick={slideRight}
          className="hidden md:flex absolute right-0 z-10 bg-white shadow-md p-2 rounded-full"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </div>
  );
};

export default RelatedArticlesSlider;
