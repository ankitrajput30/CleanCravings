import "./Menu.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

import dish1 from "../../assets/biryani.png";
import dish2 from "../../assets/biryani2.png";
import dish3 from "../../assets/biryani3.png";
import dish4 from "../../assets/biryani4.png";

const dishes = [
  { id: 1, image: dish1, name: "Delicious Food", price: "$49.99" },
  { id: 2, image: dish2, name: "Spicy Delight", price: "$39.99" },
  { id: 3, image: dish3, name: "Tandoori Treat", price: "$29.99" },
  { id: 4, image: dish4, name: "Sushi Special", price: "$59.99" },
];

const Menu = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div className="w-full py-16 px-4  dark:bg-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Heading Text */}
        <div className="md:w-1/3 text-center md:text-left">
          <p className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            What we serve
          </p>
          <hr className="border-t border-yellow-600 my-2 w-1/9 mx-auto" />
          <h1 className="text-3xl font-bold">Today's Special</h1>
          <p className="text-xs text-gray-400">
            we are serving something special today, let's catch up with us
          </p>
        </div>

        {/* Right Carousel */}
        <div className="md:w-1/3 w-full">
          <Slider {...settings}>
            {dishes.map((dish) => (
              <div key={dish.id} className="px-2">
                <div className="dark:bg-gray-800 rounded-xl p-4 transition-all duration-500 text-center">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-20 h-20 object-cover rounded-full mx-auto"
                  />
                  <h3 className="text-md font-semibold mt-3 text-black-700">
                    {dish.name}
                  </h3>
                  <p className="text-yellow-500 mt-1 text-sm font-medium">
                    {dish.price}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Menu;
