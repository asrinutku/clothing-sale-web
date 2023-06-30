import "./cart-dropdown.scss";

import Button from "../../../../components/shared/button/button";
import { CartContext } from "../../../../context/CartContext";
import CartItem from "./cart-item/cart-item";
import { useContext } from "react";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => <CartItem key={item.id} item={item} />
        )}
      </div>
      <Button type="button">Satın Al</Button>
    </div>
  );
};

export default CartDropdown;
