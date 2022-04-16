import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Gifts from "./components/Gifts/Gifts";
import Header from "./components/Layout/Header";
import CartProvider from "./container/CartProvider";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Gifts />
      </main>
    </CartProvider>
  );
};

export default App;
