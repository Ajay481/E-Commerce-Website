import { AvailableCart } from "./components/Cart/AvailableCart";
import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";
import { CartContext } from "./store/cart-context";
import { useState } from "react";

function App() {
  const [cartItem, setCartItem] = useState([])
  return (
    <div>
      <CartContext.Provider value={{cartItem, setCartItem}}>
        <Header />
        <AvailableCart />
        <Footer />
      </CartContext.Provider>
    </div>
  );
}

export default App;
