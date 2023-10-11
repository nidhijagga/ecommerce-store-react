import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../store/cartContext";

const Header = () => {
  const { toggleCart, cartItems } = useCart();

  return (
    <header className="bg-rose-300 text-rose-500 p-4 flex items-center justify-between">
      <Link
        to="/"
        className="text-2xl font-bold text-rose-500 hover:text-rose-300"
      >
        Music Store
      </Link>
      <div className="flex items-center space-x-4">
        {/* Use NavLink for navigation links */}
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active font-bold text-black" : "text-rose-500"
          }
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/store"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active font-bold text-black" : "text-rose-500"
          }
        >
          Store
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active font-bold text-black" : "text-rose-500"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active font-bold text-black" : "text-rose-500"
          }
        >
          Contact Us
        </NavLink>
        <button
          className="bg-rose-200 text-rose-500 px-4 py-2 rounded hover:bg-rose-500 hover:text-rose-200"
          onClick={toggleCart}
        >
          🛒 Cart
          <span className="bg-rose-300 text-rose-500 ml-3 px-1 py-1 rounded">
            {cartItems.length}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
