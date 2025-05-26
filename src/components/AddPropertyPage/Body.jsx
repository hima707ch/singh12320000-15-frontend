import React from 'react';
import PropertyForm from './PropertyForm';
import useAddProperty from './useAddProperty';
import images from '../assets/images';

const Body = () => {
  const { handleSubmit, isLoading, error } = useAddProperty();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" id="Body_1">
      <div className="max-w-3xl mx-auto" id="Body_2">
        <div className="text-center mb-8" id="Body_3">
          <h2 className="text-3xl font-extrabold text-gray-900" id="Body_4">List Your Property</h2>
          <p className="mt-2 text-sm text-gray-600" id="Body_5">Fill out the form below to list your property</p>
        </div>
        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" id="Body_6">{error}</div>}
        <PropertyForm onSubmit={handleSubmit} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Body;