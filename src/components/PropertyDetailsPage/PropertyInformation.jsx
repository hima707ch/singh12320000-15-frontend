import React from 'react';

const PropertyInformation = ({ property }) => {
  return (
    <div id="PropertyInformation_1" className="bg-white rounded-lg shadow-lg p-6">
      <h1 id="PropertyInformation_2" className="text-3xl font-bold mb-4">Luxury Villa with Ocean View</h1>
      <div id="PropertyInformation_3" className="mb-6">
        <p id="PropertyInformation_4" className="text-2xl font-semibold text-blue-600">$1,250,000</p>
        <p id="PropertyInformation_5" className="text-gray-600">123 Ocean Drive, Miami Beach, FL</p>
      </div>
      <div id="PropertyInformation_6" className="grid grid-cols-2 gap-4 mb-6">
        <div id="PropertyInformation_7" className="flex items-center">
          <span className="text-gray-600">Bedrooms:</span>
          <span className="ml-2 font-semibold">4</span>
        </div>
        <div id="PropertyInformation_8" className="flex items-center">
          <span className="text-gray-600">Bathrooms:</span>
          <span className="ml-2 font-semibold">3.5</span>
        </div>
        <div id="PropertyInformation_9" className="flex items-center">
          <span className="text-gray-600">Square Ft:</span>
          <span className="ml-2 font-semibold">3,500</span>
        </div>
        <div id="PropertyInformation_10" className="flex items-center">
          <span className="text-gray-600">Year Built:</span>
          <span className="ml-2 font-semibold">2020</span>
        </div>
      </div>
      <div id="PropertyInformation_11" className="mb-6">
        <h2 id="PropertyInformation_12" className="text-xl font-semibold mb-2">Description</h2>
        <p id="PropertyInformation_13" className="text-gray-700">Stunning luxury villa with breathtaking ocean views. This modern property features high-end finishes, an open concept layout, and state-of-the-art amenities.</p>
      </div>
      <div id="PropertyInformation_14">
        <h2 id="PropertyInformation_15" className="text-xl font-semibold mb-2">Amenities</h2>
        <ul id="PropertyInformation_16" className="grid grid-cols-2 gap-2">
          <li className="flex items-center"><span className="text-blue-600 mr-2">✓</span> Swimming Pool</li>
          <li className="flex items-center"><span className="text-blue-600 mr-2">✓</span> Smart Home System</li>
          <li className="flex items-center"><span className="text-blue-600 mr-2">✓</span> Wine Cellar</li>
          <li className="flex items-center"><span className="text-blue-600 mr-2">✓</span> Home Theater</li>
        </ul>
      </div>
    </div>
  );
};

export default PropertyInformation;