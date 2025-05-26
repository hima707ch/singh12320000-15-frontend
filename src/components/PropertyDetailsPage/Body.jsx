import React from 'react';
import PropertyInformation from './PropertyInformation';
import ImageGallery from './ImageGallery';
import ContactForm from './ContactForm';
import usePropertyDetails from './usePropertyDetails';

const Body = () => {
  const { property } = usePropertyDetails();

  return (
    <div id="Body_1" className="container mx-auto px-4 py-8">
      <div id="Body_2" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ImageGallery />
        <PropertyInformation property={property} />
      </div>
      <div id="Body_3" className="mt-8">
        <ContactForm />
      </div>
    </div>
  );
};

export default Body;