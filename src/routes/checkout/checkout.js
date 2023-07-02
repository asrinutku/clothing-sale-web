import "./checkout.scss";

import {
  CartContext,
  addCartItem,
  removeCartItem,
} from "../../context/CartContext";

import { useContext } from "react";

const Checkout = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Desc</span>
        </div>
        <div className="header-block">
          <span>quantity</span>
        </div>
        <div className="header-block">
          <span>price</span>
        </div>
        <div className="header-block">
          <span>remove</span>
        </div>
      </div>

      {cartItems.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.name}</h2> <br />
            <span>{product.quantity}</span> <br />
            <span
              onClick={() => setCartItems(removeCartItem(product, cartItems))}
            >
              azalt
            </span>
            <br />
            <span onClick={() => setCartItems(addCartItem(product, cartItems))}>
              arttır
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Checkout;
