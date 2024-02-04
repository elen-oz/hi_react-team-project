import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext({
  purchasedItems: [],
  totalAmount: 0,
  totalQuantity: 0,
  buyItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

const defaultCartState = {
  purchasedItems: [],
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
        // console.log(
        //   `Added to cart: ${newItem.volumeInfo.id}, isPurchased: ${newItem.isPurchased}, isLoaned: ${newItem.isLoaned}`
        // );

        return {
          purchasedItems: [...prevCartState.purchasedItems, newItem],
          totalAmount:
            prevCartState.totalAmount + item.saleInfo.listPrice.amount,
          totalQuantity: prevCartState.totalQuantity + 1,
        };
      }
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
    totalAmount: cartState.totalAmount.toFixed(1),
    totalQuantity: cartState.totalQuantity,
    buyItem: buyItemHandler,
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
