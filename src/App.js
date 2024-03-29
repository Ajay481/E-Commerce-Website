import { AvailableCart } from "./components/Cart/AvailableCart";
import { Route, Switch, Redirect } from "react-router-dom";
import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";
import { AuthContext, CartContext } from "./store/cart-context";
import { useState } from "react";
import { About } from "./Pages/About";
import { Home } from "./Pages/Home";
import { Store } from "./Pages/Store";
import { ContactUs } from "./Pages/Contactus";
import { ProductPage } from "./Pages/Product-Page";
import { Login } from "./Pages/Login";

function App() {
  const [cartItem, setCartItem] = useState([]);
  const [token, setToken] = useState(false);
  const [email, setEmail] = useState("");

  const userIsLoggedIn = !!token;

  const loginHandler = (token, email) => {
    setToken(token);
    setEmail(email);
    localStorage.setItem("token", token);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    userEmailId: email,
  };

  const submitHandler = async (detailRef) => {
    const response = await fetch(
      "https://react-ecommerce-14f24-default-rtdb.firebaseio.com/productissue.json",
      {
        method: "POST",
        body: JSON.stringify(detailRef),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };
  return (
    <div>
      <Switch>
        <AuthContext.Provider value={contextValue}>
          <CartContext.Provider value={{ cartItem, setCartItem }}>
            <Header />
            <Route exact path="/">
              <AvailableCart />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/store">
              <Store />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/contactus">
              <ContactUs onSubmit={submitHandler} />
            </Route>
            <Route exact path="/product-page/:id">
              <ProductPage />
            </Route>
            <Route path="*">
              <Redirect to="/login" />
            </Route>
            <Footer />
          </CartContext.Provider>
        </AuthContext.Provider>
      </Switch>
    </div>
  );
}

export default App;
