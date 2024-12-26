import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const sendAllDataAuth = createContext();
const AuthProvider = ({ children }) => {
  const firebaseAll = useFirebase();
  return (
    <sendAllDataAuth.Provider value={firebaseAll}>
      {children}
    </sendAllDataAuth.Provider>
  );
};

export default AuthProvider;
