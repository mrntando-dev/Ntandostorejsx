import React from 'react';

const WebsiteCard = ({ website }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold">{website.name}</h2>
      <p className="text-gray-600">{website.description}</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        View Website
      </button>
    </div>
  );
};

export default WebsiteCard;




















