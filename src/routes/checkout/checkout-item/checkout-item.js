import "./checkout-item.scss";

import {
  CartContext,
  addCartItem,
  clearCartItem,
  removeCartItem,
} from "../../../context/CartContext";

import { useContext } from "react";

const CheckoutItem = ({ product }) => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const { name, imageUrl, price, quantity } = product;

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <div
          className="arrow"
          onClick={() => setCartItems(removeCartItem(product, cartItems))}
        >
          -
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={() => setCartItems(addCartItem(product, cartItems))}
        >
          +
        </div>
      </div>
      <span className="price">₺{price}</span>
      <div
        className="remove-button"
        onClick={() => setCartItems(clearCartItem(product, cartItems))}
      >
        X
      </div>
    </div>
  );
};

export default CheckoutItem;
