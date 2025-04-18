import React from "react";
import Logo from "../../assets/logores.png";
// import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 dark:text-white duration-200">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
      <a href="#" className="font-bold text-2xl sm:text-3xl flex">
        <img src={Logo} alt="Logo" className="w-10 sm:w-12" />
        <div className="centreImg">
          <span className="text-[#1d7e37] font-bold sm:text-base">
            Clean
          </span>{" "}
          <span className="text-gray-600 sm:text-base">Cravings</span>
        </div>
        </a>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 font-medium">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#services">About</a>
        </li>
        <li>
          <a href="#footer">Contact</a>
        </li>
      </ul>

      {/* Right section */}
      <div className="flex items-center gap-4">
        <DarkMode />

        {/* Hamburger for small screens */}
        <div className="md:hidden">
          <GiHamburgerMenu
            fontSize={24}
            onClick={() => setToggleMenu(true)}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Small Screen Menu Overlay */}
      {toggleMenu && (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
          <MdOutlineRestaurantMenu
            fontSize={28}
            className="absolute top-6 right-6 text-white cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
          <ul className="flex flex-col gap-6 text-white text-2xl">
            <li>
              <a href="#home" onClick={() => setToggleMenu(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setToggleMenu(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setToggleMenu(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
