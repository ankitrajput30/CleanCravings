import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import dish1 from "../../assets/biryani.png";
import dish2 from "../../assets/biryani2.png";
import dish3 from "../../assets/biryani3.png";
import dish4 from "../../assets/biryani4.png";

const menuData = {
  Starters: [
    {
      id: 1,
      name: "Veg Spring Roll",
      price: "$5.99",
      img: dish1,
      description: "Crispy vegetable rolls with sweet chili sauce",
    },
    {
      id: 2,
      name: "Paneer Tikka",
      price: "$7.99",
      img: dish2,
      description: "Grilled cottage cheese with Indian spices",
    },
    {
      id: 3,
      name: "Chilli Potato",
      price: "$6.49",
      img: dish3,
      description: "Spicy fried potatoes with tangy sauce",
    },
    {
      id: 4,
      name: "Hara Bhara Kabab",
      price: "$6.99",
      img: dish4,
      description: "Spinach and green pea patties",
    },
  ],
  Biryani: [
    {
      id: 5,
      name: "Hyderabadi Biryani",
      price: "$12.99",
      img: dish1,
      description: "Fragrant basmati rice with marinated meat",
    },
    {
      id: 6,
      name: "Veg Biryani",
      price: "$9.99",
      img: dish2,
      description: "Aromatic rice with mixed vegetables",
    },
    {
      id: 7,
      name: "Chicken Biryani",
      price: "$13.99",
      img: dish3,
      description: "Traditional dum-cooked chicken biryani",
    },
  ],
  Desserts: [
    {
      id: 8,
      name: "Gulab Jamun",
      price: "$4.99",
      img: dish4,
      description: "Soft milk balls in rose-flavored syrup",
    },
    {
      id: 9,
      name: "Rasmalai",
      price: "$5.49",
      img: dish1,
      description: "Cottage cheese patties in sweetened milk",
    },
  ],
  Beverages: [
    {
      id: 10,
      name: "Mango Lassi",
      price: "$3.49",
      img: dish2,
      description: "Refreshing yogurt drink with mango",
    },
    {
      id: 11,
      name: "Masala Chai",
      price: "$2.49",
      img: dish3,
      description: "Spiced Indian tea with milk",
    },
  ],
  "Main Course": [
    {
      id: 12,
      name: "Butter Chicken",
      price: "$14.99",
      img: dish4,
      description: "Creamy tomato-based chicken curry",
    },
    {
      id: 13,
      name: "Paneer Butter Masala",
      price: "$12.99",
      img: dish1,
      description: "Cottage cheese in rich tomato gravy",
    },
    {
      id: 14,
      name: "Dal Makhani",
      price: "$10.99",
      img: dish2,
      description: "Creamy black lentils cooked overnight",
    },
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
    <section className="dark:bg-black-800 bg-primary/10 py-16 px-4" id="menu">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Our Culinary Offerings
          </p>
          <hr className="border-t border-yellow-600 my-2 w-20 mx-auto" />
          <h1 className="text-3xl md:text-4xl font-bold dark:text-white text-gray-800">
            Explore Our Menu
          </h1>
          <p className="text-sm md:text-base text-gray-400 mt-2 max-w-2xl mx-auto">
            Discover our carefully crafted dishes made with authentic flavors
            and fresh ingredients
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === cat
                  ? "bg-yellow-500 text-white shadow-md"
                  : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-yellow-100 dark:hover:bg-gray-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          data-aos="fade-up"
        >
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold dark:text-white">
                    {item.name}
                  </h3>
                  <span className="text-yellow-500 font-medium">
                    {item.price}
                  </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-2 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {hasMoreItems && (
          <div className="text-center mt-10">
            <button
              onClick={() => openModal(activeCategory, getFilteredItems())}
              className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full font-medium transition-colors duration-300 inline-flex items-center"
            >
              View Full {activeCategory === "All" ? "Menu" : activeCategory}
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Full Menu Modal */}
        {modalData.isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white dark:bg-gray-800 p-4 border-b flex justify-between items-center">
                <h2 className="text-2xl font-bold dark:text-white">
                  {modalData.category}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 dark:text-gray-300 hover:text-yellow-500 text-2xl"
                >
                  &times;
                </button>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {modalData.items.map((item) => (
                    <div key={item.id} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-24 h-24 overflow-hidden rounded-lg">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-medium dark:text-white">
                            {item.name}
                          </h3>
                          <span className="text-yellow-500">{item.price}</span>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
