import React from 'react';

const SearchBar = ({ searchQuery, onSearchChange }) => {
  return (
    <div id="SearchBar_1" className="sticky top-0 bg-white shadow-md z-10">
      <div className="container mx-auto px-4 py-4">
        <div id="SearchBar_2" className="flex items-center bg-gray-100 rounded-lg p-2">
          <input
            id="SearchBar_3"
            type="text"
            placeholder="Search properties..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-transparent outline-none px-4 py-2"
          />
          <button
            id="SearchBar_4"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;