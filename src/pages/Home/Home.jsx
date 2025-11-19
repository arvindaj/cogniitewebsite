import React from "react";
import Hero_banner from "../../components/Hero_banner/Hero_banner.jsx";
import ServiceCard from "../../components/service_card/service_card.jsx";
import HireExpertise from "../../components/hire_expertise/hire_expertise.jsx";
import Statistics from "../../components/statistics/statistics.jsx";
import Sub_Banner from "../../components/Hero_banner/sub_banner.jsx";
import Testimonials from "../../components/testimonial/testimonial.jsx";
import JoinUsSection from "../../components/join_us/join_us.jsx";
import HomeContactForm from "../../components/contact_form/home_contact_form.jsx";
import Group_Photo from "../../assets/Images/home/group-pic.jpg";
import BlogSection from "../../components/blog/BlogSection.jsx";
const Home = () => {
  return (
    <>
      <div className="mt-10">
        <Hero_banner />
        <ServiceCard />
        <HireExpertise />
        <Statistics />
        <Sub_Banner />
        <Testimonials />
        <BlogSection />
        <JoinUsSection />
        <div className="w-full overflow-hidden">
          <img
            src={Group_Photo}
            alt="Group"
            className="w-full h-60 object-cover sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem]"
          />
        </div>
        <HomeContactForm />
      </div>
    </>
  );
};

export default Home;
