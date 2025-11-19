import OviewAboutP1 from "../../assets/Images/about/oviewaboutP1.svg";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";




const OverviewSectionAbout = () => {
    return (
        <div className="w-full bg-white py-16 px-6 lg:px-20">
            {/* Heading */}
            <h2 className="text-[40px] text-black font-bold mb-6">Overview</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left Grid Content */}
                <div className="lg:col-span-2 space-y-14 mt-6">

                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            <h3 className="text-xl font-semibold text-[#343434] mb-3">Who We Are</h3>
                            <p className="font-sfpro font-normal text-[15.07px] leading-[100%] tracking-[-0.01em] text-[#8C8B90] ">
                                Build smarter systems using data-driven machine learning and automation.
                                Build smarter systems using data-driven machine learning and automation.
                                Build smarter systems using data-driven machine learning and automation.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-[#343434]  mb-3">What We Do</h3>
                            <p className="font-sfpro font-normal text-[15.07px] leading-[100%] tracking-[-0.01em]  text-[#8C8B90]">
                                Build smarter systems using data-driven machine learning and automation.
                                Build smarter systems using data-driven machine learning and automation.
                            </p>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            <h3 className="text-xl font-semibold text-[#343434]  mb-3">Mission</h3>
                            <p className="font-sfpro font-normal text-[15.07px] leading-[100%] tracking-[-0.01em]  text-[#8C8B90]">
                                Build smarter systems using data-driven machine learning and automation.
                                Build smarter systems using data-driven machine learning and automation.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-[#343434]  mb-3">Vision</h3>
                            <p className="font-sfpro font-normal text-[15.07px] leading-[100%] tracking-[-0.01em]  text-[#8C8B90]">
                                Build smarter systems using data-driven machine learning and automation.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Full Width */}
                    <div>
                        <h3 className="text-xl font-semibold text-[#343434] mb-3">
                            How We Embrace Technology To Help Various Business
                        </h3>
                        <p className="font-sfpro font-normal text-[15.07px] leading-[100%] tracking-[-0.01em]  text-[#8C8B90]">
                            Build smarter systems using data-driven machine learning and automation.
                            Build smarter systems using data-driven machine learning and automation.
                        </p>
                    </div>
                </div>

                {/* Right Brochure Card */}
                <div>
                    <div
                        className="rounded-2xl text-white h-[520px] flex flex-col justify-center bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${OviewAboutP1})`,
                        }}
                    >

                        <h3 className="text-xl font-semibold text-center mb-6">
                            DOWNLOAD BROCHURE
                        </h3>

                        <p className="text-center text-sm mb-8 leading-relaxed">
                            Keep informed about the latest updates,<br />
                            the projects, milestones and achievements
                        </p>

                        <div className="flex justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                                className="font-poppins text-sm cursor-pointer group flex items-center justify-center border-2 border-[#ec372d] bg-[#ec372d] text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:bg-white hover:text-[#e63946]"
                            >
                                DOWNLOAD NOW
                                <ArrowUpRight className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </motion.button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OverviewSectionAbout