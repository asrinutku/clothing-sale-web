import CartContextProvider from "./CartContext";
import ProductContextProvider from "./productContext";
import UserContextProvider from "./userContext";

export const ContextWrapper = ({ children }) => {
  return (
    <UserContextProvider>
      <ProductContextProvider>
        <CartContextProvider> {children}</CartContextProvider>
      </ProductContextProvider>
    </UserContextProvider>
  );
};
