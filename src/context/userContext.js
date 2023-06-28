import { createContext, useMemo, useState } from "react";

export const UserContext = createContext({
  user: null,
  setUser: () => null,
});

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider
      value={useMemo(() => {
        return { user, setUser };
      }, [user])}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
