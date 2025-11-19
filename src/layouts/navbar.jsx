import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Logo from "../assets/Images/logo/cogniitec-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-20 top-0 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-5 lg:px-10 py-3">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img src={Logo} alt="COGNIITEC Logo" className="h-7 sm:h-8 md:h-9" />
        </a>

        {/* Desktop & Tablet Menu */}
        <div className="hidden lg:flex items-center space-x-8 font-poppins text-sm font-medium">
          {/* {["Home", "About"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-800 hover:text-[#ec372d] transition"
            >
              {item}
            </a>
          ))} */}
          <a
            href="/"
            className="text-gray-800 hover:text-[#ec372d] transition"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-gray-800 hover:text-[#ec372d] transition"
          >
            About
          </a>

          {/* Dropdown - Services */}
          <div className="relative group">
            <button className="text-gray-800 hover:text-[#ec372d] transition flex items-center text-sm font-medium">
              Services
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded-lg min-w-[180px]">
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 text-sm font-medium"
              >
                Web Development
              </a>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 text-sm font-medium"
              >
                Cloud Solutions
              </a>
            </div>
          </div>

          {/* Dropdown - Products */}
          <div className="relative group">
            <button className="text-gray-800 hover:text-[#ec372d] transition flex items-center text-sm font-medium">
              Products
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded-lg min-w-[180px]">
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 text-sm font-medium"
              >
                AI Platform
              </a>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 text-sm font-medium"
              >
                Analytics Suite
              </a>
            </div>
          </div>

          <a
            href="/blog"
            className="text-gray-800 hover:text-[#ec372d] transition text-sm font-medium"
          >
            Blog
          </a>
          <a
            href="contact-us"
            className="text-gray-800 hover:text-[#ec372d] transition text-sm font-medium"
          >
            Contact
          </a>

          <button className="cursor-pointer group flex items-center border-2 border-[#ec372d] bg-[#fef5f4] text-[#ec372d] font-medium text-sm px-5 py-2 rounded-xl transition-all duration-300
        
           ">
            Let’s Talk
            <div
              className="ml-2 relative w-6 h-6 rounded-full bg-[#ec372d] text-white flex items-center justify-center overflow-hidden
      transition-all duration-300
       "
            >
              {/* First Arrow */}
              <ArrowUpRight className="absolute w-4 h-4 opacity-100 transform transition-all duration-300 group-hover:-translate-y-2 group-hover:opacity-0" />
              {/* Second Arrow (follows upward) */}
              <ArrowUpRight className="absolute w-4 h-4 opacity-0 transform translate-y-2 transition-all duration-300 delay-150 group-hover:translate-y-0 group-hover:opacity-100" />
            </div>
          </button>
        </div>

        {/* Mobile / Tablet Menu Button */}
        <div className="flex items-center lg:hidden space-x-2 sm:space-x-3">
          <button className="cursor-pointer group flex items-center border-2 border-[#ec372d] bg-[#fef5f4] text-[#ec372d] text-sm font-medium sm:text-base font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all duration-300 hover:bg-[#ec372d] hover:text-white">
            Let’s Talk
            <ArrowUpRight className="ml-1 sm:ml-2 w-3.5 sm:w-4 h-3.5 sm:h-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>

          <button
            className="text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 sm:h-7 sm:w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md border-t border-gray-100">
          <ul className="flex flex-col items-center space-y-2 sm:space-y-3 py-3 sm:py-4 font-poppins text-sm font-medium sm:text-base">
            {["Home", "About", "Services", "Products", "Blog", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-800 hover:text-[#ec372d] transition"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
