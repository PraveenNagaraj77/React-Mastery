import React from "react";
import UserContext from "../context/introduction/UserContext";
import ThemeProvider from "../context/theme/ThemeProvider";
import AuthProvider from "../context/auth/AuthProvider";
import CartProvider from "../context/cart/CartProvider";

const AppProviders = ({ children }) => {
  return (
    <UserContext.Provider value={"Praveen"}>
      <ThemeProvider>
        <AuthProvider>
          <CartProvider>{children}</CartProvider>
        </AuthProvider>
      </ThemeProvider>
    </UserContext.Provider>
  );
};

export default AppProviders;
