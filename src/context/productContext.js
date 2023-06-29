import { createContext, useMemo, useState } from "react";

import PRODUCTS_DATA from "../shop.json";

export const ProductContext = createContext({
  products: [],
});

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS_DATA);

  return (
    <ProductContext.Provider
      value={useMemo(() => {
        return { products, setProducts };
      }, [products])}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
