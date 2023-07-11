import { createContext, useEffect, useMemo, useState } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const ProductContext = createContext({
  products: {},
});

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const data = await getCategoriesAndDocuments();
      setProducts(data);
      console.log(data);
    };

    getCategoriesMap();
  }, []);

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
