import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const ShareSection = () => {
  return (
    <div className="w-full px-4">
      <div
        className="
          w-full 
          rounded-xl 
          py-6 
          px-6 
          flex 
          flex-col
          md:flex-row
          gap-4
          md:gap-0
          md:items-center 
          md:justify-between 
          bg-gradient-to-r 
          from-[#e52d27] 
          to-[#ff512f]
        "
      >
        {/* LEFT TEXT */}
        <p className="text-white text-lg font-medium text-center md:text-left">
          Like what you see? Share with a friend.
        </p>

        {/* RIGHT ICONS */}
        <div className="flex items-center justify-center md:justify-end gap-4">
          {/* Facebook */}
          <div className="w-9 h-9 rounded-md bg-white flex items-center justify-center shadow">
            <FaFacebookF className="text-[#e52d27] text-lg" />
          </div>

          {/* X (Twitter) */}
          <div className="w-9 h-9 rounded-md bg-white flex items-center justify-center shadow">
            <FaXTwitter className="text-[#e52d27] text-lg" />
          </div>

          {/* LinkedIn */}
          <div className="w-9 h-9 rounded-md bg-white flex items-center justify-center shadow">
            <FaLinkedinIn className="text-[#e52d27] text-lg" />
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="w-full border-b mt-4" />
    </div>
  );
};

export default ShareSection;
