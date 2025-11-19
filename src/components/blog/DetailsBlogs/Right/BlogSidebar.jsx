import React from "react";
import { FaLinkedin, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import PersonBlog1 from "../../../../assets/Images/blog/personblog1.svg";


const BlogSidebar = () => {
  return (
    <div
      className="
        w-full 
        max-w-xs 
        md:max-w-sm 
        lg:max-w-xs 
        mx-auto 
        space-y-6
        px-3   /* mobile padding */
      "
    >

      {/* ---------- AUTHOR CARD ---------- */}
      <div
        className="
          bg-gradient-to-br from-red-500 to-red-700 
          p-4 md:p-5 
          rounded-lg 
          text-white 
          shadow-lg
        "
      >
        <div className="flex items-center gap-4">
          <img
            src={PersonBlog1}
            alt="Author"
            className="w-14 h-14 md:w-16 md:h-16 rounded-lg object-cover"
          />
          <FaLinkedin className="text-2xl md:text-3xl text-white" />
        </div>

        <h3 className="text-base md:text-lg font-semibold mt-4">
          Tamás Hám-Szabó
        </h3>

        <p className="text-xs md:text-sm mt-2 leading-relaxed">
          Founder of SAAS First – the Best AI and Data-Driven Customer
          Engagement Tool. With 11 years in SaaS, I've built MillionVerifier
          and SAAS First. Passionate about SaaS, data, and AI.
        </p>
      </div>

      {/* ---------- SHARE SECTION ---------- */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <p className="text-sm md:text-base font-semibold text-gray-700 mb-3">
          Share with your community!
        </p>

        <div className="flex items-center gap-5 md:gap-6">
          <FaFacebookF className="text-red-500 text-lg md:text-xl cursor-pointer" />
          <FaXTwitter className="text-red-500 text-lg md:text-xl cursor-pointer" />
          <FaLinkedin className="text-red-500 text-lg md:text-xl cursor-pointer" />
        </div>
      </div>

      {/* ---------- IN THIS ARTICLE ---------- */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-3 text-base md:text-lg">
          In this article
        </h3>

        <div className="space-y-2 text-sm md:text-base">

          {/* Active Item */}
          <div className="bg-red-50 border-l-4 border-red-500 p-2 rounded">
            <p className="text-red-700 font-semibold">
              Exploring Generative AI in Content Creation
            </p>
          </div>

          {/* List Items */}
          <p className="hover:text-red-600 cursor-pointer">
            Steering Clear of Common AI Writing Pitfalls
          </p>
          <p className="hover:text-red-600 cursor-pointer">
            Understanding ChatGPT Capabilities – Define Your Style
          </p>
          <p className="hover:text-red-600 cursor-pointer">
            Understand Your Readers
          </p>
          <p className="hover:text-red-600 cursor-pointer">
            Creating Quality AI-powered Blogs that Stand Out
          </p>
          <p className="hover:text-red-600 cursor-pointer">
            Conclusion: Embracing AI in Blog Creation
          </p>
          <p className="hover:text-red-600 cursor-pointer">
            Afterword: The AI Behind This Article
          </p>
        </div>
      </div>

    </div>
  );
};


export default BlogSidebar;
