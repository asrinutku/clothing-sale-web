import "./shop.scss";

import { Fragment } from "react/cjs/react.production.min";
import ProductCard from "../../components/product-card/product-card";
import { ProductContext } from "../../context/productContext";
import { useContext } from "react";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <Fragment>
      {Object.keys(products).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="shop-container">
            {products[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Shop;
