import React from 'react'
import HeroImg from "../assets/hero-image.png";

const HeroSerivces = () => {
    return (
        <div className="w-full bg-[#FFF7F2] rounded-b-[50px] px-6 lg:px-20 py-20 flex flex-col lg:flex-row items-center justify-between">

            {/* LEFT CONTENT */}
            <div className="max-w-xl">
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
                    Cogniitec is your <br />
                    go to provider when it <br />
                    comes to tailored <br />
                    software services
                </h1>

                <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-3">
                        <span className="text-yellow-500 text-lg">✔</span>
                        <p className="text-gray-700 text-lg">Leader in the software services industry</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-yellow-500 text-lg">✔</span>
                        <p className="text-gray-700 text-lg">90% customer satisfaction rate</p>
                    </div>
                </div>

                <button className="mt-8 bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-900 transition">
                    Request a demo →
                </button>
            </div>

            {/* RIGHT IMAGE SECTION */}
            <div className="relative mt-10 lg:mt-0">
                <img
                    src={HeroImg}
                    alt="Hero Visual"
                    className="rounded-3xl w-[360px] lg:w-[480px]"
                />

                {/* FLOATING TAGS */}
                <span className="absolute top-4 right-6 bg-yellow-400 px-4 py-2 rounded-full text-sm font-medium">
                    AI Driven solution for your business
                </span>

                <span className="absolute top-24 -left-10 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Instant Support
                </span>

                <span className="absolute bottom-16 left-6 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Tailored & Customised Softwares
                </span>

                <span className="absolute bottom-6 right-6 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Feasible Price
                </span>
            </div>
        </div>
    )
}

export default HeroSerivces