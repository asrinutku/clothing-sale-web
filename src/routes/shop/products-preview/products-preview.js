import "./products-preview.scss";

import ProductCard from "../../../components/product-card/product-card";

const ProductsPreview = ({ title, products }) => {
  return (
    <div className="products-preview-container">
      <h2>
        <span className="title">{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default ProductsPreview;
