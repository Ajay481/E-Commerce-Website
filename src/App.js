import { AvailableCart } from "./components/Cart/AvailableCart";
import { Route, Switch } from "react-router-dom";
import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";
import { CartContext } from "./store/cart-context";
import { useState } from "react";
import { About } from "./Pages/About";
import { Home } from "./Pages/Home";
import { Store } from "./Pages/Store";
import { ContactUs } from "./Pages/Contactus";

function App() {
  const [cartItem, setCartItem] = useState([]);
  const submitHandler = async (detailRef) => {
    const response = await fetch(
      "https://react-http-2dd6e-default-rtdb.firebaseio.com/productissue.json",
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
          <Route exact path="/contactus">
            <ContactUs onSubmit={submitHandler} />
          </Route>
          <Footer />
        </CartContext.Provider>
      </Switch>
    </div>
  );
}

export default App;
