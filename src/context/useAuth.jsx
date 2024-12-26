import { useContext } from "react";
import { sendAllDataAuth } from "./AuthProvider";

const useAuth = () => {
  return useContext(sendAllDataAuth);
};

export default useAuth;
