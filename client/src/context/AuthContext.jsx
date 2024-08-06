import { createContext, useContext } from "react";
import usePersistedState from "../hooks/usePersistedState";

export const AuthContext = createContext({
  isAuthenticated: false,
  username: "",
  userId: "",
  accessToken: "",
  email: "",
  changeAuthState: (authState = {}) => null,
});

export default function AuthContextProvider(props) {
  const [authState, setAuthState] = usePersistedState("auth", {});

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

export function useAuthContext() {
  const authData = useContext(AuthContext);

  return authData;
}
