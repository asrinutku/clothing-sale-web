import { createContext, useMemo, useState } from "react";

export const ProductContext = createContext({
  products: [],
});

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

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
