import React from "react";

export const CartContext = React.createContext({
  cartItem: [],
});

export const AuthContext = React.createContext({
  contextValue: { token: "", isLoggedIn: false, login: (token) => {} },
});
