// import React from "react";
// import Img from "../../assets/biryani.png";
// import Img2 from "../../assets/biryani2.png";
// import Img3 from "../../assets/biryani4.png";
// import StarRatings from "react-star-ratings";
// const ServicesData = [
//   {
//     id: 1,
//     img: Img2,
//     name: "Biryani",
//     description:
//       "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
//   },
//   {
//     id: 2,
//     img: Img2,
//     name: "Chiken kari",
//     description:
//       "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
//   },
//   {
//     id: 3,
//     img: Img2,
//     name: "Cold Cofee",
//     description:
//       "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
//   },
// ];
// const Services = () => {
//   return (
//     <>
//       <span id="services"></span>
//       <div className="py-10 dark:bg-gray-800 bg-primary/10">
//         <div className="container">
//           <div className="text-center mb-20 max-w-[400px] mx-auto">
//             <p className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
//               Our Menu for you
//             </p>
//             <h1 className="text-3xl font-bold">Special Menu</h1>
//             <p className="text-xs text-gray-400">
//               we are serving something special Everyday, let's catch up with us
//             </p>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
//             {ServicesData.map((service) => (
//               <div
//                 data-aos="zoom-in"
//                 data-aos-duration="300"
//                 className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
//               >
//                 <div className="h-[100px]">
//                   <img
//                     src={service.img}
//                     alt=""
//                     className="max-w-[200px] block mx-auto transform -translate-y-14
//                   group-hover:scale-105 group-hover:rotate-6 duration-300"
//                   />
//                 </div>
//                 <div className="p-4 text-center">
//                   <div className="w-full ">
//                     {/* <StarRatings
//                       rating={4}
//                       starRatedColor="yellow"
//                       isSelectable={false}
//                       starHoverColor="yellow"
//                       // starSelectingHoverColor
//                       starDimension="20px"
//                       changeRating={() => {}}
//                       numberOfStars={5}
//                       name="rating"
//                     /> */}
//                   </div>
//                   <h1 className="text-xl font-bold">{service.name}</h1>
//                   <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
//                     {service.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Services;

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import dish1 from "../../assets/biryani.png";
import dish2 from "../../assets/biryani2.png";
import dish3 from "../../assets/biryani3.png";
import dish4 from "../../assets/biryani4.png";

// Sample data (you can expand with more sections)
const menuData = {
  Starters: [
    { id: 1, name: "Veg Spring Roll", price: "$5.99", img: dish1 },
    { id: 2, name: "Paneer Tikka", price: "$7.99", img: dish2 },
    { id: 3, name: "Chilli Potato", price: "$6.49", img: dish3 },
    { id: 4, name: "Hara Bhara Kabab", price: "$6.99", img: dish4 },
    { id: 5, name: "Corn Tikki", price: "$5.49", img: dish1 },
  ],
  Biryani: [
    { id: 6, name: "Hyderabadi Biryani", price: "$12.99", img: dish2 },
    { id: 7, name: "Lucknowi Biryani", price: "$11.99", img: dish3 },
    { id: 8, name: "Veg Biryani", price: "$9.99", img: dish4 },
    { id: 9, name: "Chicken Biryani", price: "$13.99", img: dish1 },
    { id: 10, name: "Egg Biryani", price: "$10.99", img: dish2 },
  ],
  Desserts: [
    { id: 11, name: "Gulab Jamun", price: "$4.99", img: dish3 },
    { id: 12, name: "Rasgulla", price: "$3.99", img: dish4 },
    { id: 13, name: "Ice Cream", price: "$2.99", img: dish1 },
  ],
  Beverages: [
    { id: 14, name: "Mango Lassi", price: "$3.49", img: dish2 },
    { id: 15, name: "Masala Chai", price: "$2.49", img: dish3 },
    { id: 16, name: "Cold Coffee", price: "$3.99", img: dish4 },
  ],
  "Main Course": [
    { id: 17, name: "Butter Naan", price: "$1.99", img: dish1 },
    { id: 18, name: "Paneer Butter Masala", price: "$9.99", img: dish2 },
    { id: 19, name: "Dal Makhani", price: "$8.49", img: dish3 },
    { id: 20, name: "Chole Bhature", price: "$7.99", img: dish4 },
    { id: 21, name: "Mix Veg", price: "$6.99", img: dish1 },
  ],
};

const Services = () => {
  const categories = ["All", ...Object.keys(menuData)];
  const [activeCategory, setActiveCategory] = useState("All");
  const [modalData, setModalData] = useState({
    isOpen: false,
    category: "",
    items: [],
  });

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const getFilteredItems = () => {
    if (activeCategory === "All") {
      return Object.values(menuData).flat();
    }
    return menuData[activeCategory] || [];
  };

  const openModal = (category, items) => {
    setModalData({ isOpen: true, category, items });
  };

  const closeModal = () => {
    setModalData({ isOpen: false, category: "", items: [] });
  };

  const visibleItems = getFilteredItems().slice(0, 4);
  const hasMoreItems = getFilteredItems().length > 4;

  return (
    <section className="bg-gray-100 py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Our Full Menu
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center mb-8 gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              activeCategory === cat
                ? "bg-yellow-500 text-white border-yellow-500"
                : "bg-white text-gray-700 border-gray-300 hover:bg-yellow-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="max-w-6xl mx-auto" data-aos="fade-up">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-3 hover:shadow-lg transition"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h4 className="text-md font-semibold text-gray-800 text-center">
                {item.name}
              </h4>
              <p className="text-sm text-gray-600 text-center">{item.price}</p>
            </div>
          ))}
        </div>

        {/* Show All */}
        {hasMoreItems && (
          <div className="text-center mt-6 h-5">
            {hasMoreItems && (
              <button
                onClick={() => openModal(activeCategory, getFilteredItems())}
                className="text-yellow-500 hover:underline text-sm"
              >
                Show All
              </button>
            )}
          </div>
        )}
      </div>

      {/* Modal */}
      {modalData.isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-start pt-20 z-50">
          <div className="bg-white max-w-5xl w-full mx-4 rounded-lg shadow-xl p-6 relative overflow-y-auto max-h-[80vh]">
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-xl"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-6 text-center">
              {modalData.category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {modalData.items.map((item) => (
                <div key={item.id} className="text-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-40 object-cover rounded-md mb-2"
                  />
                  <h4 className="text-md font-semibold text-gray-800">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-600">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
