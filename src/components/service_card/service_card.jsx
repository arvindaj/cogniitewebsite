import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { GoArrowUpRight } from "react-icons/go";

// 🧩 Image constants
const icons = {
  ai: "https://cdn-icons-png.flaticon.com/512/4712/4712100.png",
  dev: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
  marketing: "https://cdn-icons-png.flaticon.com/512/3135/3135706.png",
  cloud: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
};

const services = [
  {
    id: "01",
    title: "Artificial",
    title1: "Intelligence",
    desc: "Build smarter systems using data-driven machine learning and automation.",
    icon: icons.ai,
  },
  {
    id: "02",
    title: "Software",
    title1: "Development",
    desc: "Build scalable applications with modern frameworks and cloud integration.",
    icon: icons.dev,
  },
  {
    id: "03",
    title: "Digital",
    title1: "Marketing",
    desc: "Grow your brand using SEO, social media and data-driven ad campaigns.",
    icon: icons.marketing,
  },
  {
    id: "04",
    title: "DevOps and",
    title1: "Multi Cloud",
    desc: "Optimize your infrastructure using CI/CD, automation and cloud-native tools.",
    icon: icons.cloud,
  },
];

export default function ServiceCard() {
  return (
    <section className="py-16 px-4 md:px-10 bg-white font-poppins">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl font-bold text-gray-900">Services</h2>
        <button className="font-poppins cursor-pointer group flex items-center justify-center text-sm border-2 border-[#ec372d] bg-[#fef5f4] text-[#ec372d] font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:bg-[#ec372d] hover:text-white">
          More Services
          <ArrowUpRight className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </div>

      {/* Grid for tablet & desktop */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div
            key={s.id}
            className="group relative p-6 rounded-2xl border border-[#bfbfbf] transition bg-white hover:shadow-lg hover:-translate-y-1 overflow-hidden"
          >
            <div className="text-gray-800 font-medium mb-2  group-hover:text-red-500">
              {s.id}
            </div>

            {/* Header + Arrow */}
            <div className="flex justify-between items-start">
              <h3 className="mt-4 text-2xl font-semibold text-gray-800 group-hover:text-red-500 transition">
                {s.title} <br />
                {s.title1}
              </h3>
              {/* <div className="opacity-0 group-hover:opacity-100 transform group-hover:rotate-45 transition-all duration-300 text-red-500">
                <ArrowUpRight/>
              </div> */}
            </div>

            {/* Icon */}
            <div className="flex justify-evenly">
              <img
                src={s.icon}
                alt=""
                className="w-35 mt-6 mb-3 opacity-0 group-hover:opacity-100 transition duration-500"
              />
              <div className="relative group w-10 h-10">
                <GoArrowUpRight
                  className="text-red-500 w-10 h-10 absolute bottom-0 left-0 
               opacity-0 transform transition-all duration-500 
               group-hover:opacity-100 
               group-hover:translate-x-6 group-hover:-translate-y-6 
               group-hover:scale-90"
                />
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-7">{s.desc}</p>

            {/* Underline */}
            <div className="h-[2px] bg-red-500 mt-3 rounded-full w-0 group-hover:w-3/5 transition-all duration-300"></div>
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="sm:hidden">
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          modules={[Autoplay]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={900}
        >
          {services.map((s) => (
            <SwiperSlide key={s.id}>
              <div className="relative p-6 rounded-2xl border border-gray-200 bg-white shadow-sm active:scale-[0.98] transition-all duration-300 overflow-hidden">
                <div className="text-red-500 font-medium mb-2">{s.id}</div>

                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {s.title}
                  </h3>
                  <ArrowUpRight className="text-red-500 opacity-80" />
                </div>

                <img src={s.icon} alt="" className="w-12 mt-6 mb-3" />

                <p className="text-sm text-gray-500">{s.desc}</p>

                <div className="h-[2px] bg-red-500 mt-3 rounded-full w-3/5"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
