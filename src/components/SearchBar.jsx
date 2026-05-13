import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
      setInput('');
    }
  };

  const quickCities = ['London', 'New York', 'Tokyo', 'Paris', 'Sydney'];

  return (
    <div className="w-full md:w-1/2">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search for a city..."
          className="w-full px-6 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors"
        >
          <Search className="w-5 h-5" />
        </button>
      </form>
      
      {/* Quick City Buttons */}
      <div className="flex flex-wrap gap-2 mt-4">
        {quickCities.map((quickCity) => (
          <button
            key={quickCity}
            onClick={() => onSearch(quickCity)}
            className="px-4 py-2 bg-white bg-opacity-20 text-white rounded-full hover:bg-opacity-30 transition-all text-sm font-medium"
          >
            {quickCity}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
