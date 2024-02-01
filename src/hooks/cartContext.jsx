import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext({
  purchasedItems: [],
  loanedItems: [],
  totalAmount: 0,
  totalQuantity: 0,
  buyItem: (item) => {},
  loanItem: (id) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

const defaultCartState = {
  purchasedItems: [],
  loanedItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const CartProvider = (props) => {
  const storedCart = JSON.parse(localStorage.getItem('cart'));

  const [cartState, setCartState] = useState(storedCart || defaultCartState);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartState));
  }, [cartState]);

  const buyItemHandler = (item) => {
    setCartState((prevCartState) => {
      const isItemInCart = prevCartState.purchasedItems.some(
        (cartItem) => cartItem.id === item.id
      );

      if (isItemInCart) {
        return prevCartState;
      } else {
        const newItem = { ...item, isPurchased: true, isLoaned: false };
        console.log(
          `Added to cart: ${newItem.volumeInfo.title}, isPurchased: ${newItem.isPurchased}, isLoaned: ${newItem.isLoaned}`
        );

        return {
          purchasedItems: [...prevCartState.purchasedItems, newItem],
          loanedItems: [...prevCartState.loanedItems], // Добавляем пустой массив для займа
          totalAmount:
            prevCartState.totalAmount + item.saleInfo.listPrice.amount,
          totalQuantity: prevCartState.totalQuantity + 1,
        };
      }
    });
  };

  const loanItemHandler = (id) => {
    setCartState((prevCartState) => {
      const updatedPurchasedItems = prevCartState.purchasedItems.map((item) =>
        item.id === id ? { ...item, isLoaned: true } : item
      );

      const loanedItem = updatedPurchasedItems.find((item) => item.id === id);
      if (loanedItem) {
        console.log(
          `Book loaned: ${loanedItem.volumeInfo.title}, isLoaned: ${loanedItem.isLoaned}`
        );
      } else {
        console.error(
          `Book not found in the purchased items array with id: ${id}`
        );
      }

      return {
        ...prevCartState,
        purchasedItems: updatedPurchasedItems,
      };
    });
  };

  const removeItemToCartHandler = (id) => {
    setCartState((prevCartState) => {
      const removedItem = prevCartState.purchasedItems.find(
        (item) => item.id === id
      );

      const updatedPurchasedItems = prevCartState.purchasedItems.filter(
        (item) => item.id !== id
      );

      return {
        purchasedItems: updatedPurchasedItems,
        loanedItems: prevCartState.loanedItems,
        totalAmount:
          prevCartState.totalAmount - removedItem.saleInfo.listPrice.amount,
        totalQuantity: prevCartState.totalQuantity - 1,
      };
    });
  };

  const clearCartHandler = () => {
    setCartState(defaultCartState);
  };

  const cartContext = {
    purchasedItems: cartState.purchasedItems,
    loanedItems: cartState.loanedItems,
    totalAmount: cartState.totalAmount.toFixed(1),
    totalQuantity: cartState.totalQuantity,
    buyItem: buyItemHandler,
    loanItem: loanItemHandler,
    removeItem: removeItemToCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
