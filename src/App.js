import { AvailableCart } from "./components/Cart/AvailableCart";
import { Route, Switch } from "react-router-dom";
import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";
import { CartContext } from "./store/cart-context";
import { useState } from "react";
import { About } from "./Pages/About";
import { Home } from "./Pages/Home";

function App() {
  const [cartItem, setCartItem] = useState([]);
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
          <Route exact path="/about">
            <About />
          </Route>
          <Footer />
        </CartContext.Provider>
      </Switch>
    </div>
  );
}

export default App;
