import { useState } from "react";

export default function usePersistedState(key, initialState) {
  const [state, setState] = useState(() => {
    const authData = localStorage.getItem("auth");

    if (!authData) {
      return initialState;
    }
    return JSON.parse(authData);
  });

  const updateState = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setState(value);
  };

  return [state, updateState];
}
