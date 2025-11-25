import React from 'react';

const ForeignNumberCard = ({ number }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold">{number.country}</h2>
      <p className="text-gray-600">Number: {number.number}</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Buy Number
      </button>
    </div>
  );
};

export default ForeignNumberCard;

















