import UserContextProvider from "./userContext";

export const ContextWrapper = ({ children }) => {
  return <UserContextProvider>{children}</UserContextProvider>;
};
