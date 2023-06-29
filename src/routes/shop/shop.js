import "./shop.scss";

import ProductCard from "../../components/product-card/product-card";
import { ProductContext } from "../../context/productContext";
import { useContext } from "react";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="shop-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
