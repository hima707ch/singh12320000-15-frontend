import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const useEditProperty = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProperty();
  }, [id]);

  const fetchProperty = async () => {
    try {
      const response = await fetch(`/api/properties/${id}`);
      if (!response.ok) throw new Error('Failed to fetch property');
      const data = await response.json();
      setProperty(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (formData) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`/api/properties/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Failed to update property');
      
      // Handle successful update
      window.location.href = '/properties';
    } catch (err) {
      setError(err.message);
    }
  };

  return { property, handleSubmit, loading, error };
};