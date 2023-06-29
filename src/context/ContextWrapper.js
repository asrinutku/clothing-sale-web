import ProductContextProvider from "./productContext";
import UserContextProvider from "./userContext";

export const ContextWrapper = ({ children }) => {
  return (
    <UserContextProvider>
      <ProductContextProvider>{children}</ProductContextProvider>
    </UserContextProvider>
  );
};
