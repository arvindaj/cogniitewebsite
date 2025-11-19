import React from "react";

const NewsletterSection = () => {
  return (
    <div className="w-full bg-[#E84032] min-h-[60vh] flex items-center py-14 px-5 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

        {/* LEFT TEXT */}
        <div className="text-center lg:text-left">
          <h2 className="text-white text-3xl sm:text-4xl font-semibold leading-snug mb-4">
            Subscribe to our Newsletter
          </h2>

          <p className="text-white text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
            Subscribe for Updates: Stay informed about the latest investor
            updates, financial results, and announcements by subscribing to our
            newsletter.
          </p>
        </div>

        {/* RIGHT INPUT + BUTTON */}
        <div className="w-full flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:flex-1 px-5 py-3 bg-[#EB5344] text-white placeholder-white/80 rounded-lg sm:rounded-l-lg sm:rounded-r-none outline-none"
          />

          <button className="w-full sm:w-auto px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg sm:rounded-r-lg sm:rounded-l-none">
            Subscribe
          </button>
        </div>

      </div>
    </div>
  );
};

export default NewsletterSection;
