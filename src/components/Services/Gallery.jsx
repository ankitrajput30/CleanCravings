import React from "react";

// Import your images
import img1 from "../../assets/biryani.png";
import img2 from "../../assets/biryani2.png";
import img3 from "../../assets/biryani4.png";
import img4 from "../../assets/biryani3.png";
import img5 from "../../assets/biryani5.png";
import img6 from "../../assets/biryani.png";
// Add more as needed...

const images = [img1, img2, img3, img4, img5, img6];

const Gallery = () => {
  return (
    <section id="gallery" className="px-4 py-12 bg-white dark:bg-gray-900">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-[#1d7e37]">
        Our Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <img
              src={img}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
