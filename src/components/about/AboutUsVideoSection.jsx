import React from "react";
import AboutVideo from "../../assets/video/about/VideoProject1.mp4";

const AboutUsVideoSection = () => {
    return (
        <div className="w-full bg-white mt-20  flex flex-col items-center justify-center">

            <h2 className="font-narin font-bold text-[64px] leading-[80px] tracking-[-0.03em] text-center">
                Get to know about us
            </h2>


            {/* Single Video */}
            <video
                src={AboutVideo}   // <-- replace with your video file
                autoPlay
                loop
                muted
                
                className="w-full  object-contain"
            />
        </div>
    );
};

export default AboutUsVideoSection;
