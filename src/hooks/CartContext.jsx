import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add item to the cart by ID
  const addToCart = (id) => {
    // Check if the item is already in the cart
    const itemExists = cart.find((item) => item.id === id);

    if (itemExists) {
      // If the item already exists, update its quantity
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id ? { ...item, amount: item.amount + 1 } : item
        )
      );
    } else {
      // If the item doesn't exist, add it to the cart with a quantity of 1
      setCart([...cart, { id, amount: 1 }]);
    }
  };

  // Log the updated cart whenever it changes
  useEffect(() => {
    console.log("Updated Cart:", cart);
  }, [cart]);

  return (
    <CartContext.Provider value={{ addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
