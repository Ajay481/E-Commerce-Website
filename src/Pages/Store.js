import React, { useContext } from "react";
import { Redirect } from "react-router";
import { AvailableCart } from "../components/Cart/AvailableCart";
import { AuthContext } from "../store/cart-context";

export const Store = () => {
  const authCtx = useContext(AuthContext);

  return (
    <div>
      {authCtx.isLoggedIn ? <AvailableCart /> : <Redirect to="/login" />}
    </div>
  );
};
