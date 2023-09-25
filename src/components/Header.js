import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../store/cartContext'; // Import the CartContext

const Header = () => {
  const { toggleCart, cartItems } = useCart(); // Get the toggleCart function from the cart context

  return (
    <header className="bg-rose-300 text-rose-500 p-4 flex items-center justify-between">
      <Link to="/" className="text-2xl font-bold text-rose-500 hover:text- rose-300">Music Store</Link>
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-rose-500 hover:text-black">Home</Link>
        <Link to="/store" className="text-rose-500 hover:text-black">Store</Link>
        <Link to="/about" className="text-rose-500 hover:text-black">About</Link>
        {/* Call toggleCart when the "Cart" button is clicked */}
        <button className="bg-rose-200 text-rose-500 px-4 py-2 rounded hover:bg-rose-500 hover:text-rose-200" onClick={toggleCart}>
          🛒 Cart
          <span className='bg-rose-300 text-rose-500 ml-3 px-1 py-1 rounded'>{cartItems.length}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
