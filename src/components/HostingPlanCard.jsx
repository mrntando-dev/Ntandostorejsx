import React from 'react';

const HostingPlanCard = ({ plan }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold">{plan.name}</h2>
      <p className="text-gray-600">{plan.description}</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Choose Plan
      </button>
    </div>
  );
};

export default HostingPlanCard;

















