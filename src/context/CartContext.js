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

export const clearCartItem = (productToClear, cartItems) => {
  return cartItems.filter((cartitem) => cartitem.id !== productToClear.id);
};

const CartContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

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

  useEffect(() => {
    const newTotalPrice = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setTotalPrice(newTotalPrice);
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
          totalPrice,
          setTotalPrice,
        };
      }, [isOpen, cartItems, itemOnCartCount, totalPrice])}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
