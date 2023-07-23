import { createContext, useEffect, useMemo, useReducer } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  user: null,
  setUser: () => null,
});

export const USER_ACTION_TYPES = { SET_CURRENT_USER: "SET_CURRENT_USER" };

const INITIAL_STATE = { user: null };

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, user: payload };

    default:
      throw new Error(`unhandled type ${type} error`);
  }
};

const UserContextProvider = ({ children }) => {
  const [user, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const setUser = (userData) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: userData });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((userData) => {
      if (userData) {
        createUserDocumentFromAuth(userData);
      }
      setUser(userData);
    });

    return unsubscribe;
  }, []);

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
