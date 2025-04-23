import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
// import AppStore from "./components/AppStore/AppStore.jsx";
// import CoverBanner from "./components/CoverBanner/CoverBanner.jsx";
import Testimonial from "./components/Testimonial/Testimonial.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Gallery from "./components/Gallery/Gallery.jsx";
import Menu from "./components/Services/Menu.jsx";
import ScrollToTop from "./components/Footer/ScrollToTop.jsx";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <Hero />
      <hr className="border-t border-yellow-600 my-4" />
      <Banner />
      <hr className="border-t border-yellow-600 my-4" />
      <Menu />
      {/* <hr className="border-t border-yellow-600 my-4" /> */}
      <Services />
      <hr className="border-t border-yellow-600 my-4" />
      <Gallery />
      <hr className="border-t border-yellow-600 my-4" />
      <Testimonial />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
