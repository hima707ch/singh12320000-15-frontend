import React, { useState } from 'react';
import images from '../assets/images';

const PropertyForm = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    imageURL: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageSelect = (e) => {
    setFormData(prev => ({ ...prev, imageURL: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow" id="PropertyForm_1">
      <div id="PropertyForm_2">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          id="PropertyForm_3"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      <div id="PropertyForm_4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          name="description"
          id="PropertyForm_5"
          rows="4"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <div id="PropertyForm_6">
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
        <div className="mt-1 relative rounded-md shadow-sm" id="PropertyForm_7">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" id="PropertyForm_8">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            type="number"
            name="price"
            id="PropertyForm_9"
            required
            className="pl-7 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
      </div>

      <div id="PropertyForm_10">
        <label className="block text-sm font-medium text-gray-700">Property Image</label>
        <select
          name="imageURL"
          id="PropertyForm_11"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          value={formData.imageURL}
          onChange={handleImageSelect}
          required
        >
          <option value="">Select an image</option>
          {images.map((image, index) => (
            <option key={index} value={image}>Image {index + 1}</option>
          ))}
        </select>
      </div>

      {formData.imageURL && (
        <div className="mt-4" id="PropertyForm_12">
          <img src={formData.imageURL} alt="Selected property" className="w-full h-48 object-cover rounded-lg" />
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400"
        id="PropertyForm_13"
      >
        {isLoading ? 'Submitting...' : 'List Property'}
      </button>
    </form>
  );
};

export default PropertyForm;