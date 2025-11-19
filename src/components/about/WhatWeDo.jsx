import React from "react";

const WhatWeDo = () => {
    return (
        <div className="w-full bg-white py-16 px-2 md:px-12 lg:px-20">
            {/* Title */}
            <h2 className="text-4xl font-bold text-black mb-10">What We Do</h2>

            {/* Main Container */}
            <div className="border border-gray-300 rounded-xl p-5 grid grid-cols-1 lg:grid-cols-2 gap-5 ">

                {/* LEFT TEXT SECTION */}
                <div className="space-y-10 text-gray-700 leading-relaxed">
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."



                    </p>

                    <p>

                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    </p>

                    <p>

                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>

                    <p>

                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    </p>
                </div>

                {/* RIGHT IMAGE SECTION */}
                <div className="relative mb-20 grid place-items-center ">

                    {/* Large founder box */}
                    <div className="w-[220px] h-[320px]  lg:w-[400px] lg:h-[460px] md:w-[430px] md:h-[460px]  xl:w-[500px] xl:h-[560px]
      rounded-xl bg-gradient-to-b from-[#F7C7C7] to-white 
      flex items-center justify-center text-xl font-semibold text-gray-800">
                        Founders Image <br /> here
                    </div>

                    {/* Small box */}
                    <div className="w-[180px] h-[140px] lg:w-[200px] lg:h-[160px] md:w-[200px] md:h-[160px] 
      xl:w-[240px] xl:h-[240px] rounded-xl bg-gradient-to-b 
      from-[#F7C7C7] to-white absolute -bottom-14 left-1 
      translate-l-2/3 shadow-sm">
                    </div>

                </div>


            </div>
        </div>
    );
};

export default WhatWeDo;
