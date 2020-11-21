import React, { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import firebase from "../firebaseConfig";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  return pending ? (
    <LoadingSpinner />
  ) : (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};
