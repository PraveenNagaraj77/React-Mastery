import React, { useState } from "react";
import AuthContext from "./AuthContext";
import useLocalStorage from "../../hooks/customhooks/useLocalStorage";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user",null);

  function login() {
    setUser({
      id: 1,
      name: "Praveen",
      email: "praveennagaraj76@gmail.com",
    });
  }

  function logout() {
    setUser(null);
  }

  const isLoggedIn = user !== null;

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;