import { createContext, useState, useEffect } from 'react';

export const LoanCartContext = createContext({
  loanedItems: [],
  totalQuantity: 0,
  loanItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

const defaultCartState = {
  loanedItems: [],
  totalQuantity: 0,
};

const LoanCartProvider = (props) => {
  const storedCart = JSON.parse(localStorage.getItem('loanCart'));

  const [cartState, setCartState] = useState(storedCart || defaultCartState);

  useEffect(() => {
    localStorage.setItem('loanCart', JSON.stringify(cartState));
  }, [cartState]);

  const loanItemHandler = (item) => {
    setCartState((prevCartState) => {
      const isItemInCart = prevCartState.loanedItems.some(
        (cartItem) => cartItem.id === item.id
      );

      if (isItemInCart) {
        return prevCartState;
      } else {
        const newItem = { ...item, isLoaned: true, isPurchased: false };
        console.log(
          `Added to loanCart: ${newItem.volumeInfo.title}, isLoaned: ${newItem.isLoaned}, isPurchased: ${newItem.isPurchased}`
        );

        return {
          loanedItems: [...prevCartState.loanedItems, newItem],
          totalQuantity: prevCartState.totalQuantity + 1,
        };
      }
    });
  };

  const removeItemToCartHandler = (id) => {
    setCartState((prevCartState) => {
      //   const removedItem = prevCartState.loanedItems.find(
      //     (item) => item.id === id
      //   );
      const updatedPurchasedItems = prevCartState.loanedItems.filter(
        (item) => item.id !== id
      );

      return {
        loanedItems: updatedPurchasedItems,
        totalQuantity: prevCartState.totalQuantity - 1,
      };
    });
  };

  const clearCartHandler = () => {
    setCartState(defaultCartState);
  };

  const cartContext = {
    loanedItems: cartState.loanedItems,
    totalQuantity: cartState.totalQuantity,
    loanItem: loanItemHandler,
    removeItem: removeItemToCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <LoanCartContext.Provider value={cartContext}>
      {props.children}
    </LoanCartContext.Provider>
  );
};

export default LoanCartProvider;
