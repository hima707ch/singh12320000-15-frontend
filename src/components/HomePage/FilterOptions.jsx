import React from 'react';

const FilterOptions = ({ filters, isOpen, onFilterChange, onToggle }) => {
  return (
    <>
      <button
        id="FilterOptions_1"
        className="md:hidden fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg"
        onClick={onToggle}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      </button>
      <div
        id="FilterOptions_2"
        className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:relative left-0 top-0 h-full md:h-auto w-64 bg-white md:bg-transparent shadow-lg md:shadow-none transition-transform z-20 p-4`}
      >
        <h2 id="FilterOptions_3" className="text-xl font-bold mb-4">Filters</h2>
        <div id="FilterOptions_4" className="space-y-4">
          <div className="space-y-2">
            <label className="block font-medium">Price Range</label>
            <input
              type="range"
              min="0"
              max="1000000"
              value={filters.priceRange}
              onChange={(e) => onFilterChange('priceRange', e.target.value)}
              className="w-full"
            />
            <div className="flex justify-between">
              <span>$0</span>
              <span>${filters.priceRange}</span>
            </div>
          </div>
          <div className="space-y-2">
            <label className="block font-medium">Property Type</label>
            <select
              value={filters.propertyType}
              onChange={(e) => onFilterChange('propertyType', e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="">All Types</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterOptions;