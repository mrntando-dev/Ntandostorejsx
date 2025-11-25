import React from 'react';

const DomainCard = ({ domain }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold">{domain.name}</h2>
      <p className="text-gray-600">{domain.description}</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Buy Now
      </button>
    </div>
  );
};

export default DomainCard;

















