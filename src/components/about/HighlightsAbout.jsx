import React from "react";

import YearsImg from "../../assets/Images/about/yearsAbout.svg";
import TechImg from "../../assets/Images/about/techAbout.svg";
import ClientsImg from "../../assets/Images/about/ClientsImgAbout.svg";
import PolygonalStyleBackground from "../../assets/Images/about/polygonal-style-background.svg";
import TeamSvgRepo from "../../assets/Images/about/team-svgrepo.svg";

const HighlightsAbout = () => {
    const cards = [
        {
            title: "Years of\nService",
            img: YearsImg,
            height: "h-[540px]",
            textColor: "text-white",
        },
        {
            title: "",
            img: TechImg,
            height: "h-[400px]",
            textColor: "text-white",
        },
        {
            title: "Team\nStrength",
            bgColor: "bg-[#F3E8DD]",
            height: "h-[260px]",
            textColor: "text-[#5B4A3F]",
            icon: true,
        },
        {
            title: "Countries\nEstablished",
            bgColor: "bg-[#DFF0FF]",
            height: "h-[300px]",
            textColor: "text-[#1381D8]",
            globe: true,
        },
        {
            title: "Clients\nAcquired",
            img: ClientsImg,
            height: "h-[540px]",
            textColor: "text-white",
        },
    ];

    return (
        <div className="w-full bg-white py-16 px-6 lg:px-20">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">Highlights</h2>

            {/* GRID → ALIGN ALL CARDS BOTTOM LIKE YOUR IMAGE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-end">
                {cards.map((card, i) => (
                    <div
                        key={i}
                        className={`
          ${card.bgColor || ""}
          ${card.height}
          bg-cover bg-center rounded-3xl 
          p-6 flex flex-col justify-between
          w-full
        `}
                        style={
                            card.img
                                ? { backgroundImage: `url(${card.img})` }
                                : {}
                        }
                    >
                        <div>
                            {card.icon && (
                                <img src={TeamSvgRepo} alt="" className="w-23 h-22 mb-4" />
                            )}

                            <p
                                className={`
              whitespace-pre-line text-2xl sm:text-3xl font-semibold leading-tight
              ${card.textColor}
            `}
                            >
                                {card.title}
                            </p>
                        </div>

                        {card.globe && (
                            <img
                                src={PolygonalStyleBackground}
                                className="w-[240px] sm:w-[300px] opacity-90 mx-auto"
                                alt=""
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>

    );
};

export default HighlightsAbout;
