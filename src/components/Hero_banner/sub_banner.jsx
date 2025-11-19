import React from "react";
import Layer_Banner from "../../assets/Images/home/layer_banner.png";

const Sub_Banner = () => {
  return (
    <div
      className="font-poppins relative w-full h-48 sm:h-60 md:h-72 flex items-center justify-center bg-[#fef5f4] bg-cover bg-center px-4 sm:px-6 md:px-10"
      style={{ backgroundImage: `url(${Layer_Banner})` }}
    >
      {/* Card */}
      <div className="max-w-2xl">
        <p className="text-[#535353] text-sm sm:text-base md:text-lg lg:text-[23px] font-semibold leading-relaxed text-left">
          Move beyond just running your business by turning it into one that
          sees the next best action, and then acts as if on intuition—in the
          moments that matter.
        </p>
      </div>
    </div>
  );
};

export default Sub_Banner;
