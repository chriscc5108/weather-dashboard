import React from 'react';

const WeatherCard = ({ icon, label, value }) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center weather-card">
      <div className="flex justify-center mb-2 text-blue-600">
        {icon}
      </div>
      <p className="text-gray-600 text-sm font-medium mb-1">{label}</p>
      <p className="text-lg font-bold text-gray-800">{value}</p>
    </div>
  );
};

export default WeatherCard;
