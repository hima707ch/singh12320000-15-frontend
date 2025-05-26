import React, { useState } from 'react';
import images from '../assets/images';

const EditPropertyForm = ({ property, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: property?.title || '',
    description: property?.description || '',
    price: property?.price || '',
    imageURL: property?.imageURL || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form id="EditPropertyForm_1" onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
      <div id="EditPropertyForm_2">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          id="EditPropertyForm_3"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div id="EditPropertyForm_4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="EditPropertyForm_5"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div id="EditPropertyForm_6">
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
        <input
          type="number"
          id="EditPropertyForm_7"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div id="EditPropertyForm_8">
        <label htmlFor="imageURL" className="block text-sm font-medium text-gray-700">Image URL</label>
        <input
          type="url"
          id="EditPropertyForm_9"
          name="imageURL"
          value={formData.imageURL}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div id="EditPropertyForm_10" className="flex justify-end">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Update Property
        </button>
      </div>
    </form>
  );
};

export default EditPropertyForm;