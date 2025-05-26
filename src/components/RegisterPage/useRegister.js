import { useState } from 'react';

const useRegister = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (formData) => {
    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      setSuccess('Registration successful! You can now login.');
      setError('');
    } catch (err) {
      setError(err.message);
      setSuccess('');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleSubmit,
    error,
    success,
    isLoading
  };
};

export default useRegister;