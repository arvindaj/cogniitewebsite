import React from "react";
import BgPattern from "../../assets/Images/contact/bgpattern.svg";

const ContactInfo = () => {
  return (
    <div
      className="w-full bg-cover bg-center py-14 px-5 sm:px-8 md:px-10 min-h-[60vh] flex items-center"
      style={{ backgroundImage: `url(${BgPattern})` }}
    >
      {/* 50 / 50 LEFT RIGHT LAYOUT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT SECTION */}
        <div className="w-full text-center md:text-left">
          <p className="text-lg sm:text-xl text-gray-600 mb-2">
            Contact Info
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            We are always <br /> happy to assist you
          </h2>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-10 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">

          {/* EMAIL SECTION */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
              Email Address
            </h3>
            <div className="w-8 h-[2px] bg-gray-800 mt-1 mb-3"></div>

            <p className="text-gray-900 font-medium text-lg sm:text-xl">
              help@cogniitec.com
            </p>

            <p className="text-lg sm:text-xl text-gray-600 mt-3 leading-relaxed">
              Assistance hours: <br />
              Monday – Friday 6 am to <br />
              8 pm EST
            </p>
          </div>

          {/* PHONE SECTION */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
              Number
            </h3>
            <div className="w-8 h-[2px] bg-gray-800 mt-1 mb-3"></div>

            <p className="text-gray-900 font-medium text-lg sm:text-xl">
              (808) 998-34256
            </p>

            <p className="text-lg sm:text-xl text-gray-600 mt-3 leading-relaxed">
              Assistance hours: <br />
              Monday – Friday 6 am to <br />
              8 pm EST
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ContactInfo;
