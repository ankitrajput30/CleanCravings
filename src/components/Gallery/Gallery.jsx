import React, { useState } from 'react';
import { FiZoomIn, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      alt: 'Restaurant interior'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      alt: 'Chef preparing food'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      alt: 'Delicious biryani dish'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      alt: 'Restaurant ambiance'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      alt: 'Fresh ingredients'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      alt: 'Tandoori dishes'
    },
  ];

  const openImage = (img, index) => {
    setSelectedImage(img);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const navigate = (direction) => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    } else {
      newIndex = (currentIndex + 1) % galleryImages.length;
    }
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <div className="w-full py-16 px-4 dark:bg-gray-800 bg-gray-50" id='gallery'>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Our Visual Story
          </p>
          <hr className="border-t border-yellow-600 my-2 w-20 mx-auto" />
          <h1 className="text-3xl md:text-4xl font-bold dark:text-white text-gray-800">
            Restaurant Gallery
          </h1>
          <p className="text-sm md:text-base text-gray-400 mt-2 max-w-2xl mx-auto">
            Explore our culinary world through these captivating moments from our kitchen and dining experience.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, index) => (
            <div 
              key={img.id}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openImage(img, index)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FiZoomIn className="text-white text-3xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <button 
              onClick={closeImage}
              className="absolute top-4 right-4 text-white text-2xl hover:text-yellow-500 transition-colors"
            >
              <FiX />
            </button>
            
            <div className="relative max-w-4xl w-full">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full max-h-[80vh] object-contain"
              />
              
              <button 
                onClick={() => navigate('prev')}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:bg-yellow-500 transition-colors"
              >
                <FiChevronLeft className="text-gray-800 dark:text-white hover:text-white" />
              </button>
              
              <button 
                onClick={() => navigate('next')}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:bg-yellow-500 transition-colors"
              >
                <FiChevronRight className="text-gray-800 dark:text-white hover:text-white" />
              </button>
              
              <div className="text-center mt-4 text-white">
                <p className="text-sm">{currentIndex + 1} / {galleryImages.length}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;