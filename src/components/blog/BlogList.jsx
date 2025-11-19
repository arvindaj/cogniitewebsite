import React from "react";
import ChatGPTimg from "../../assets/Images/blog/ChatGPTimg.svg";
import AGIimg from "../../assets/Images/blog/AGIimg.svg";
import Blockchainimg from "../../assets/Images/blog/Blockchainimg.svg";
import Shopifyimg from "../../assets/Images/blog/Shopifyimg.svg";
import Workshopimg from "../../assets/Images/blog/Workshopimg.svg";

const blogData = [
  {
    img: ChatGPTimg,
    title:
      "Mastering ChatGPT Blog Creation : Do’s & Don’ts for SaaS Marketing Managers",
    time: "4 Min",
    date: "August 19, 2022",
  },
  {
    img: Blockchainimg,
    title: "Fundamental of Blockchain and Cryptocurrency",
    time: "4 Min",
    date: "August 19, 2022",
  },
  {
    img: AGIimg,
    title: "How AGI will take over AI and Gen AI in the future",
    time: "4 Min",
    date: "August 19, 2022",
  },
  {
    img: Shopifyimg,
    title:
      "Shopify platform to build and boost your business with AIO features",
    time: "4 Min",
    date: "August 19, 2022",
  },
  {
    img: Workshopimg,
    title: "Workshop Coffee Brewing",
    time: "4 Min",
    date: "August 19, 2022",
  },
];

const BlogList = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      {blogData.map((blog, index) => (
        <div key={index} className="py-6 border-b">
          <div className="flex flex-col md:flex-row gap-4">
            
            {/* Thumbnail */}
            <img
              src={blog.img}
              alt={blog.title}
              className="
                w-full 
                h-48 
                object-cover 
                rounded-md 
                md:w-80 
                md:h-60
              "
            />

            {/* Content */}
            <div>
              <h1
                className="
                  text-2xl  
                  md:text-[44px] 
                  font-semibold 
                  text-gray-900 
                  leading-snug 
                  hover:text-red-500 
                  cursor-pointer 
                  transition
                "
              >
                {blog.title}
              </h1>

              <p className="text-sm md:text-xl text-gray-500 mt-1">
                {blog.time} · {blog.date}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Load More Button */}
      <div className="flex justify-center mt-8">
        <button className="px-6 py-2 text-sm font-medium border border-red-400 text-red-500 rounded-md hover:bg-red-500 hover:text-white transition">
          Load More
        </button>
      </div>
    </div>
  );
};

export default BlogList;
