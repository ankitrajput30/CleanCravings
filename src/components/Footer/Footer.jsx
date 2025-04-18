import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/logo-cc.png";
import HoursOfOperation from "./HoursOfOperation";
import FeedbackSection from "./Feedback";

const Footer = () => {
  return (
    <>
      <span id="footer"></span>
      <div className="bg-[#1a1a1a] dark:bg-gray-950 text-white">
        <section className="max-w-[1200px] mx-auto">
          {/* 3-Column Footer Grid */}
          <div className="grid md:grid-cols-3 gap-6 py-10">
            {/* Left: Brand Info */}
            <div className="px-4">
              <h1 className="text-xl sm:text-3xl font-bold mb-3 flex items-center gap-3">
                <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
                CleanCravings
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Possimus, voluptate.
              </p>
              <br />
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Mohali, Punjab</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p>+91 123456789</p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-2xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-2xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </div>

            {/* Middle: Hours of Operation */}
            <div className="px-4">
              <HoursOfOperation />
            </div>

            {/* Right: Feedback */}
            <div className="px-4">
              <FeedbackSection />
            </div>
          </div>

          {/* Footer Bottom Text */}
          <div className="text-center py-8 border-t border-gray-300/50 text-sm">
            © 2025 All rights reserved || Made with ❤️ by Ankit
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
