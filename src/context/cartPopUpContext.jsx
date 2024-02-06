import { createContext, useState } from 'react';

export const CartPopUpContext = createContext();

const CartPopUpProvider = ({ children }) => {
  const toggleCart = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <CartPopUpContext.Provider value={{ isOpen, toggleCart }}>
      {children}
    </CartPopUpContext.Provider>
  );
};

export default CartPopUpProvider;
