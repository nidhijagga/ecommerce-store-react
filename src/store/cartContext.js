import React, { createContext, useContext, useState } from "react";

// Create a context for the cart
const CartContext = createContext();

// Custom hook to access the cart context
export const useCart = () => {
  return useContext(CartContext);
};

// CartProvider component to wrap your app
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addItemToCart = (product) => {
    // Check if the product is already in the cart
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      // Product is already in the cart, increase its quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      // Product is not in the cart, add it with a quantity of 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeItemFromCart = (index) => {
    // Remove item from cart based on its index
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };
  // Function to toggle the cart's visibility
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        addItemToCart,
        removeItemFromCart,
        toggleCart,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
