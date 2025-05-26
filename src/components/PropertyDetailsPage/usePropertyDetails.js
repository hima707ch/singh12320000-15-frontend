import { useState, useEffect } from 'react';

const usePropertyDetails = () => {
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulated property data
    const mockProperty = {
      id: 1,
      title: 'Luxury Villa with Ocean View',
      price: 1250000,
      address: '123 Ocean Drive, Miami Beach, FL',
      bedrooms: 4,
      bathrooms: 3.5,
      squareFt: 3500,
      yearBuilt: 2020,
      description: 'Stunning luxury villa with breathtaking ocean views...',
      amenities: ['Swimming Pool', 'Smart Home System', 'Wine Cellar', 'Home Theater']
    };

    setProperty(mockProperty);
    setLoading(false);
  }, []);

  return { property, loading, error };
};

export default usePropertyDetails;