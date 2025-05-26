import React, { useState } from 'react';
import images from '../assets/images';

const ImageGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div id="ImageGallery_1" className="relative">
      <div id="ImageGallery_2" className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
        <img
          id="ImageGallery_3"
          src={images[currentImage]}
          alt={`Property image ${currentImage + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      <button
        id="ImageGallery_4"
        onClick={prevImage}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        ←
      </button>
      <button
        id="ImageGallery_5"
        onClick={nextImage}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        →
      </button>
      <div id="ImageGallery_6" className="flex justify-center mt-4 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full ${currentImage === index ? 'bg-blue-600' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;