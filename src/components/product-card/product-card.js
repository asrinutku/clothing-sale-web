import "./product-card.scss";

import { CartContext, addCartItem } from "../../context/CartContext";

import Button from "../shared/button/button";
import { useContext } from "react";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { cartItems, setCartItems } = useContext(CartContext);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType="inverted"
        onClick={() => setCartItems(addCartItem(product, cartItems))}
      >
        Sepete Ekle
      </Button>
    </div>
  );
};

export default ProductCard;
