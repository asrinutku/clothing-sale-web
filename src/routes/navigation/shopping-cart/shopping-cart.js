import "./shopping-cart.scss";

import { CartContext } from "../../../context/CartContext";
import { ReactComponent as ShoppingIcon } from "../../../assets/shopping-bag.svg";
import { useContext } from "react";

const ShoppingCart = () => {
  const { isOpen, setIsOpen, itemOnCartCount } = useContext(CartContext);

  return (
    <div className="shopping-cart-container" onClick={() => setIsOpen(!isOpen)}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemOnCartCount}</span>
    </div>
  );
};

export default ShoppingCart;
