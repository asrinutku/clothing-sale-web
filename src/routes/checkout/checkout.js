import "./checkout.scss";

import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const Checkout = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const addCartItem = (productToAdd) => {
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

  return (
    <div>
      <h1>sepetim</h1>
      <div>
        {cartItems.map((product) => {
          return (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <span>{product.quantity}</span>
              <span>azalt</span>
              <br />
              <span onClick={() => setCartItems(addCartItem(product))}>
                arttır
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
