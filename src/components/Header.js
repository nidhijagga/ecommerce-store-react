import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <Link to="/" className="text-2xl font-bold text-yellow-400 hover:text-yellow-300">Music Store</Link>
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-white hover:text-yellow-300">Home</Link>
        <Link to="/store" className="text-white hover:text-yellow-300">Store</Link>
        <Link to="/about" className="text-white hover:text-yellow-300">About</Link>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Cart</button>
      </div>
    </header>
  );
};

export default Header;
