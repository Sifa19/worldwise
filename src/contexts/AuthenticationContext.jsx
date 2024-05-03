import { createContext, useContext, useReducer } from "react";
import { act } from "react-dom/test-utils";

const users = {
  user: null,
  isAuthenticated: false,
};

const DEMO_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

const AuthContext = createContext();

function reducer({ state, action }) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Invalid Action");
  }
}

function AuthenticationContext({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(reducer, users);
  function login(email, password) {
    if (email === DEMO_USER.email && password === DEMO_USER.password) {
      dispatch({ action: "login", payload: DEMO_USER });
    }
  }
  function logout() {
    dispatch({ action: "logout" });
  }
  return (
    <AuthContext.Provider value={(user, isAuthenticated, login, logout)}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuthentication() {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error(
      "Authication Context was used outside Authentication Provider"
    );

  return context;
}

export { AuthenticationContext, useAuthentication };
