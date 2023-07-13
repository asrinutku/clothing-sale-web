import "./shop.scss";

import { ProductContext } from "../../context/productContext";
import ProductsPreview from "./products-preview/products-preview";
import { useContext } from "react";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="shop-container">
      {Object.keys(products).map((title) => {
        return (
          <ProductsPreview
            key={title}
            title={title}
            products={products[title]}
          />
        );
      })}
    </div>
  );
};

export default Shop;
