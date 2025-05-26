import React from 'react';
import images from '../assets/images';

const PropertyList = ({ properties }) => {
  return (
    <div id="PropertyList_1" className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property, index) => (
        <div
          key={property.id}
          id={`PropertyList_${index + 2}`}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <img
            src={property.imageURL || images[index % images.length]}
            alt={property.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{property.title}</h3>
            <p className="text-gray-600 mb-2">{property.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-blue-600">${property.price}</span>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;