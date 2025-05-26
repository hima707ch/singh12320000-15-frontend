import { useState, useEffect } from 'react';

const useHome = () => {
  const [properties, setProperties] = useState([
    {
      id: 1,
      title: 'Modern Apartment in Downtown',
      description: 'Luxurious 2-bedroom apartment with city views',
      price: 350000,
      imageURL: ''
    },
    {
      id: 2,
      title: 'Suburban Family Home',
      description: '4-bedroom house with large backyard',
      price: 550000,
      imageURL: ''
    },
    {
      id: 3,
      title: 'Beachfront Condo',
      description: 'Beautiful 1-bedroom condo with ocean views',
      price: 450000,
      imageURL: ''
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    priceRange: 500000,
    propertyType: ''
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  const toggleFilter = () => {
    setIsFilterOpen(prev => !prev);
  };

  return {
    properties,
    searchQuery,
    filters,
    isFilterOpen,
    handleSearchChange,
    handleFilterChange,
    toggleFilter
  };
};

export default useHome;