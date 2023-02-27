import React, { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../store/cart-context";

export const Login = () => {
  const authCtx = useContext(AuthContext);
  const emailInputRef = useRef("");
  const passwordInputRef = useRef("");
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBlvwm2UFysqlxp549MzHN_mTVXIn57d7s",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication Failed";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken, data.email);
        history.replace("/store");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <form className="text-center bg-warning">
      <h3>Login</h3>
      <div>
        <label>Your Email</label>
      </div>
      <input
        name="email"
        id="email"
        type="email"
        required
        ref={emailInputRef}
      />
      <div>
        <label>Your Password</label>
      </div>
      <input
        name="password"
        id="password"
        type="password"
        required
        ref={passwordInputRef}
      />
      <div>
        <button
          className="mt-3 mb-3 bg-primary text-white"
          onClick={submitHandler}
        >
          Login
        </button>
      </div>
    </form>
  );
};
