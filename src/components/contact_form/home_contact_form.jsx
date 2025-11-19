import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

const HomeContactForm = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20 relative">
      {/* Title Section */}
      <div className="max-w-8xl mx-auto font-poppins">
        <div className="flex flex-col md:flex-row justify-between mb-12 gap-8">
          <div className="flex-1">
            <p className="text-sm text-gray-700 mb-2">Get Started</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-2">
              Get in touch with us.
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              We&apos;re here to assist you.
            </h2>
          </div>

          {/* Social Icons */}
          <div className="flex md:flex-col gap-4 md:gap-6">
            {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <form className="w-full space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col">
              <label className="text-sm mb-2 text-gray-600">
                Your Name / Company Name
              </label>
              <input
                type="text"
                placeholder="Ex: Cognitec Private Limited"
                className="border-b border-gray-300 focus:border-black outline-none py-2 text-gray-800 placeholder-gray-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-2 text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Ex: info@cognitec.com"
                className="border-b border-gray-300 focus:border-black outline-none py-2 text-gray-800 placeholder-gray-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-2 text-gray-600">
                Phone Number (optional)
              </label>
              <input
                type="tel"
                placeholder="Ex: +91 99999 00000"
                className="border-b border-gray-300 focus:border-black outline-none py-2 text-gray-800 placeholder-gray-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-2 text-gray-600">Services</label>
              <input
                type="text"
                placeholder="Ex: Web Development"
                className="border-b border-gray-300 focus:border-black outline-none py-2 text-gray-800 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Message Box */}
          <div className="flex flex-col">
            <label className="text-sm mb-2 text-gray-600">Message</label>
            <textarea
              rows="4"
              placeholder="Type your message here..."
              className="border-b border-gray-300 focus:border-black outline-none py-2 text-gray-800 placeholder-gray-400 resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <div>
            <button className="font-poppins cursor-pointer group flex items-center justify-center border-2 border-[#ec372d] bg-[#ec372d] text-white text-sm font-small px-6 py-3 rounded-lg transition-all duration-300 hover:bg-[#c72a22]">
              Leave Us a Message
              <ArrowUpRight className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HomeContactForm;
