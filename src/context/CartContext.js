import { createContext, useEffect, useMemo, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const [itemOnCartCount, setItemOnCartCount] = useState(0);

  useEffect(() => {
    if (cartItems?.length > 0) {
      const newItemCountOnCart = cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity,
        0
      );
      setItemOnCartCount(newItemCountOnCart);
    }
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={useMemo(() => {
        return {
          isOpen,
          setIsOpen,
          cartItems,
          setCartItems,
          itemOnCartCount,
        };
      }, [isOpen, cartItems, itemOnCartCount])}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
