import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Contactus from "../../src/pages/Contactus/Contactus.jsx";
import Navbar from "../layouts/navbar.jsx";
import Footer from "../layouts/footer.jsx";
import Services from "../pages/Services/Services.jsx";
import BlogsDetails from "../components/blog/BlogsDetails.jsx";
import About from "../pages/About/About.jsx";
import Blog from "../pages/Blogs/Blog.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";

function AppRouter() {
  return (
    <>
      {" "}
      <Navbar />
      <Router>
         <ScrollToTop /> 
        <Routes>
          {/* Layout wrapper */}
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<Contactus />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blogdetials" element={<BlogsDetails />} />
          </Route>

          {/* 404 Page */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default AppRouter;
