import React from "react";
import { useCart } from "../store/cartContext";

const CartSidebar = () => {
  const {
    cartItems,
    isCartOpen,
    toggleCart,
    removeItemFromCart,
    setCartItems,
  } = useCart();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-1/3 bg-white shadow-lg transform ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform ease-in-out duration-300`}
    >
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Your Cart</h2>
        <button
          className="text-gray-600 hover:text-gray-800"
          onClick={toggleCart}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="p-4">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center mb-2"
              >
                <div>
                  <p className="text-rose-400 font-bold">{item.name}</p>
                  <p className="text-rose-400">Price: {item.price}</p>
                  <p className="text-rose-400">Quantity: {item.quantity}</p>
                </div>
                <button
                  className="text-rose-600 hover:text-black"
                  onClick={() => removeItemFromCart(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="p-4 border-t border-gray-300">
        <p className="text-xl font-semibold">
          Total: ₹
          {parseInt(
            cartItems.reduce(
              (total, item) => total + parseFloat(item.price) * item.quantity,
              0
            )
          )}
        </p>

        <button
          className={`bg-rose-500 text-white px-4 py-2 rounded mt-4 ${
            cartItems.length === 0 ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={cartItems.length === 0}
          onClick={() => {
            toggleCart(); // Toggle the cart
            setCartItems([]); // Clear the cart items
          }}
        >
          Order
        </button>
      </div>
    </div>
  );
};

export default CartSidebar;
