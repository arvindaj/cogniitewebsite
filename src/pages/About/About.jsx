import React from 'react'
import AboutUsVideoSection from '../../components/about/AboutUsVideoSection'
import OverviewSectionAbout from '../../components/about/OverviewSectionAbout'
import HighlightsAbout from '../../components/about/HighlightsAbout'
import WhatWeDo from '../../components/about/WhatWeDo'
import Group_Photo from "../../assets/Images/home/group-pic.jpg";
import BlogsCard from '../../components/about/BlogsCard'


const About = () => {
    return (
        <div className='mt-10'>

            <AboutUsVideoSection />
            <OverviewSectionAbout />
            <HighlightsAbout />
            <WhatWeDo />
            <div className="w-full overflow-hidden">
                <img
                    src={Group_Photo}
                    alt="Group"
                    className="w-full h-60 object-cover sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem]"
                />
            </div>
            <BlogsCard />


        </div>
    )
}

export default About