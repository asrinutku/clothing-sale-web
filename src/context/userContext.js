import { createContext, useEffect, useMemo, useState } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  user: null,
  setUser: () => null,
});

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChangedListener((userData) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setUser(userData);
    });
  });

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
