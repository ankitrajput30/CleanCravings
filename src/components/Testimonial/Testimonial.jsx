import React, { useState } from "react";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Food Blogger",
      content:
        "The biryani here is absolutely divine! The flavors are perfectly balanced and the portion sizes are generous. I've been recommending this place to all my followers.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Regular Customer",
      content:
        "Best Indian food in town! The service is exceptional and the ambiance is perfect for both family dinners and romantic dates. The butter chicken is to die for!",
      rating: 4,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Local Chef",
      content:
        "As a professional chef, I'm very particular about authentic flavors. This restaurant nails it every time. Their tandoori dishes are cooked to perfection.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/63.jpg",
    },
    {
      id: 4,
      name: "David Wilson",
      role: "First-time Visitor",
      content:
        "Came here based on a friend's recommendation and wasn't disappointed. The samosas were crispy and flavorful, and the mango lassi was the perfect complement.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
  ];

  // Add this useEffect for auto-rotation
  React.useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        className={`${
          i < rating ? "text-yellow-500" : "text-gray-300"
        } inline-block mx-0.5`}
      />
    ));
  };

  return (
    <div className="w-full py-16 px-16 dark:bg-gray-800 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            What Our Customers Say
          </p>
          <hr className="border-t border-yellow-600 my-2 w-20 mx-auto" />
          <h1 className="text-3xl md:text-4xl font-bold dark:text-white text-gray-800">
            Customer Testimonials
          </h1>
          <p className="text-sm md:text-base text-gray-400 mt-2 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our satisfied customers
            have to say about their dining experience.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 md:p-10 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover rounded-full border-4 border-yellow-500 p-1"
                />
              </div>

              <div className="text-center md:text-left">
                <div className="mb-4">
                  <FaQuoteLeft className="text-yellow-500 text-xl opacity-30 inline-block mr-2" />
                  <p className="text-gray-600 dark:text-gray-300 italic inline">
                    {testimonials[currentIndex].content}
                  </p>
                  <FaQuoteRight className="text-yellow-500 text-xl opacity-30 inline-block ml-2" />
                </div>

                <div className="mb-2">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>

                <h3 className="text-lg font-semibold dark:text-white text-gray-800">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 md:-left-12 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 p-3 rounded-full shadow-md hover:bg-yellow-500 hover:text-white transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-yellow-500 hover:text-white" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 md:-right-12 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 p-3 rounded-full shadow-md hover:bg-yellow-500 hover:text-white transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-yellow-500 hover:text-white" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index
                    ? "bg-yellow-500"
                    : "bg-gray-300 dark:bg-gray-500"
                } transition-colors duration-300`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
