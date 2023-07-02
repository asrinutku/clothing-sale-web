import { createContext, useEffect, useMemo, useState } from "react";

export const CartContext = createContext();

export const addCartItem = (productToAdd, cartItems) => {
  // product already exist
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) => (cartItem.id === productToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem)
    );
  }

  // new product added to cartItems
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const removeCartItem = (productToRemove, cartItems) => {
  // product already exist
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartitem) => cartitem.id !== productToRemove.id);
  }

  return cartItems.map((cartItem) => (cartItem.id === productToRemove.id
    ? { ...cartItem, quantity: cartItem.quantity - 1 }
    : cartItem)
  );
};

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
