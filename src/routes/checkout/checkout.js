import "./checkout.scss";

import { CartContext } from "../../context/CartContext";
import CheckoutItem from "./checkout-item/checkout-item";
import { useContext } from "react";

const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Ürün</span>
        </div>
        <div className="header-block">
          <span>Açıklama</span>
        </div>
        <div className="header-block">
          <span>Miktar</span>
        </div>
        <div className="header-block">
          <span>Ücret</span>
        </div>
        <div className="header-block">
          <span>Kaldır</span>
        </div>
      </div>

      {cartItems.map((product) => (
        <CheckoutItem key={product.id} product={product} />
      ))}
      <span className="total-price">Toplam Fiyat : ₺{totalPrice}</span>
    </div>
  );
};

export default Checkout;
