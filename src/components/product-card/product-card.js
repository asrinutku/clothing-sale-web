import "./product-card.scss";

import Button from "../shared/button/button";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
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
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType="inverted"
        onClick={() => setCartItems(addCartItem(product))}
      >
        Sepete Ekle
      </Button>
    </div>
  );
};

export default ProductCard;
