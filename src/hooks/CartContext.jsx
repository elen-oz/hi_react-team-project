import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // Retrieve cart data from local storage, or an empty array if not present
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Update local storage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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

  return (
    <CartContext.Provider value={{ addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
