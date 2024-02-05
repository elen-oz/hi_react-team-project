import { createContext, useState, useEffect } from 'react';

export const LoanCartContext = createContext({
  loanedItems: [],
  totalQuantity: 0,
  loanItem: () => {},
  removeItem: () => {},
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
    console.log('click loan on item:', item);

    setCartState((prevCartState) => {
      const isItemInCart = prevCartState.loanedItems.some(
        (cartItem) => cartItem.id === item.id
      );

      if (isItemInCart) {
        return prevCartState;
      } else {
        const newItem = { ...item };
        return {
          loanedItems: [...prevCartState.loanedItems, newItem],
          totalQuantity: prevCartState.totalQuantity + 1,
        };
      }
    });
  };

  const removeItemToCartHandler = (id) => {
    setCartState((prevCartState) => {
      const updatedPurchasedItems = prevCartState.loanedItems.filter(
        (item) => item.id !== id
      );

      console.log('removed: loanedItems', cartContext.loanedItems);

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
    totalLoanQuantity: cartState.totalQuantity,
    loanItem: loanItemHandler,
    removeLoanedItem: removeItemToCartHandler,
    clearLoanCart: clearCartHandler,
  };

  return (
    <LoanCartContext.Provider value={cartContext}>
      {props.children}
    </LoanCartContext.Provider>
  );
};

export default LoanCartProvider;
