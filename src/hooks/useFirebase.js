import firebaseInitialize from "../firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

firebaseInitialize();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);
  const [loadData, setLoadData] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const googleWithlogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(true);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
      }
      setLoadData(false);
    });
  }, []);

  return {
    error,
    setError,
    loadData,
    setLoadData,
    user,
    setUser,
    googleWithlogin,
    logOut,
  };
};

export default useFirebase;
