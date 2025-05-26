import React from 'react';
import PropertyList from './PropertyList';
import SearchBar from './SearchBar';
import FilterOptions from './FilterOptions';
import useHome from './useHome';

const Body = () => {
  const { 
    properties, 
    searchQuery, 
    filters,
    isFilterOpen,
    handleSearchChange,
    handleFilterChange,
    toggleFilter
  } = useHome();

  return (
    <div className="bg-gray-100">
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">Discover Your Dream Home</h2>
            <p className="mt-4 text-xl text-gray-600">Browse through thousands of properties across the country.</p>
          </div>
        </div>
        <div className="mt-10">
          <SearchBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
        </div>
      </div>
      <div className="mt-10 pb-12 sm:pb-16 lg:pb-20">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-100"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
              <div className="bg-white p-6 flex flex-col justify-between">
                <FilterOptions
                  filters={filters}
                  isOpen={isFilterOpen}
                  onFilterChange={handleFilterChange}
                  onToggle={toggleFilter}
                />
              </div>
              <div className="py-6 px-6 lg:p-8">
                <PropertyList properties={properties} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;