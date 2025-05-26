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
    <div id="Body_1" className="min-h-screen bg-gray-100">
      <SearchBar id="Body_2" searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <div id="Body_3" className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">
        <FilterOptions
          id="Body_4"
          filters={filters}
          isOpen={isFilterOpen}
          onFilterChange={handleFilterChange}
          onToggle={toggleFilter}
        />
        <PropertyList id="Body_5" properties={properties} />
      </div>
    </div>
  );
};

export default Body;