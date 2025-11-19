import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Hire_Expertise from "../../assets/Images/home/hire-expertise.png";

const HireExpertise = () => {
  const jobs = [
    {
      title: "UI / UX Designer",
      tags: ["Full time", "Remote"],
      details: [
        "8+ Years of Experience",
        "Excellent communication skills",
        "Flexible work schedule",
      ],
    },
    {
      title: "Frontend Developer",
      tags: ["Full time", "Remote"],
      details: [
        "5+ Years of Experience",
        "React, Tailwind, Next.js expert",
        "Team collaboration",
      ],
    },
    {
      title: "Backend Developer",
      tags: ["Full time", "Remote"],
      details: [
        "6+ Years of Experience",
        "Node.js, MongoDB, API design",
        "Flexible hours",
      ],
    },
    {
      title: "Project Manager",
      tags: ["Full time", "Hybrid"],
      details: [
        "10+ Years of Experience",
        "Agile project management",
        "Strong leadership skills",
      ],
    },
  ];

  const [current, setCurrent] = React.useState(0);
  const [cardsToShow, setCardsToShow] = React.useState(2);

  // Responsive - decide how many cards to show
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setCardsToShow(1);
      else setCardsToShow(2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto slide
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + cardsToShow) % jobs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [jobs.length, cardsToShow]);

  // Compute visible slides
  const visibleJobs = Array.from({ length: cardsToShow }, (_, i) => {
    return jobs[(current + i) % jobs.length];
  });

  return (
    <div className="bg-[#fff4f3] px-6 lg:px-20 py-16 min-h-screen overflow-hidden flex flex-col font-poppins">
      {/* Top Heading and Button Row */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h2 className="text-2xl lg:text-5xl font-semibold text-gray-800 mb-6 md:mb-0 text-center md:text-left">
          Hire Your Expertise
        </h2>
        <button className="font-poppins text-sm cursor-pointer group flex items-center justify-center border-2 border-[#ec372d] bg-[#ec372d] text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:bg-[#c72a22]">
          Start Your Project
          <ArrowUpRight className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </div>

      {/* Main Section - Image Left / Slider Right */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side (Image + Text) */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <p className=" text-gray-600 mb-10 text-2xl font-extralight">
            A Smart solution for your <br /> business needs
          </p>

          <img
            src={Hire_Expertise}
            alt="Team Illustration"
            className="w-full max-w-md mx-auto lg:mx-0"
          />
        </motion.div>

        {/* Right Side (Responsive Slider) */}
        <div className="lg:w-1/2 flex flex-col items-center">
          <div className="relative flex justify-center items-center w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className={`flex gap-6 ${
                  cardsToShow === 1 ? "justify-center" : ""
                }`}
              >
                {visibleJobs.map((job, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-8 w-72 md:w-80 text-left flex-shrink-0"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      {job.title}
                    </h3>
                    <div className="flex gap-3 mb-4">
                      {job.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="border border-red-400 text-red-500 text-sm px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ul className="text-gray-500 space-y-2 text-sm">
                      {job.details.map((d, i) => (
                        <li key={i}>• {d}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Dots */}
          <div className="flex gap-3 mt-6">
            {Array.from({ length: Math.ceil(jobs.length / cardsToShow) }).map(
              (_, i) => (
                <span
                  key={i}
                  onClick={() => setCurrent(i * cardsToShow)}
                  className={`cursor-pointer w-4 h-2 rounded-full ${
                    Math.floor(current / cardsToShow) === i
                      ? "bg-red-500 w-6"
                      : "bg-gray-300"
                  } transition-all`}
                ></span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireExpertise;
