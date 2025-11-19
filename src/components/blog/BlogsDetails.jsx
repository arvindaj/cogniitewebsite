import React from 'react'
import BlogBanner from './DetailsBlogs/Left/BlogBanner'
import BlogSidebar from './DetailsBlogs/Right/BlogSidebar'

const BlogsDetails = () => {
    return (
        <div className="flex flex-col md:flex-row w-full gap-6 bg-white p-8 rounded-sm mt-10">
            <div className="w-full md:w-[65%]  xl:w-[75%] flex flex-col gap-5">
                <BlogBanner/>
            </div>

            <div className="w-[100%] lg:w-[30%] xl:w-[25%] space-y-8 pb-8 pr-0 pt-6 lg:mt-10 md:mt-10 mt-0">
                <BlogSidebar/>
            </div>
        </div>
    )
}

export default BlogsDetails