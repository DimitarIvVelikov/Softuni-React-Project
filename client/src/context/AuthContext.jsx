import { createContext, useState } from "react";

export const AuthContext = createContext({
  isAuthenticated: accessToken ? true : false,
  username: "",
  userId: "",
  accessToken: "",
  email: "",
  changeAuthState: (authState = {}) => null,
});

export default function AuthContextProvider(props) {
  const [authState, setAuthState] = useState({});

  const changeAuthState = (authState) => {
    setAuthState(authState);
  };

  const contextData = {
    username: authState.username,
    userId: authState.userId,
    email: authState.email,
    accessToken: authState.accessToken,
    isAuthenticated: authState.accessToken ? true : false,
    changeAuthState,
  };
  return (
    <AuthContext.Provider value={contextData}>
      {props.children}
    </AuthContext.Provider>
  );
}
