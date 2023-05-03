import Header from "./components/Layout/Header";
import React, {useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const[cardIsShown,setCardIsShown] = useState(false);

  const showCartHandler = () =>{
    setCardIsShown(true);
  }
  const hideCartHandler = () =>{
    setCardIsShown(false);
  }

  return (
    <CartProvider>
      {cardIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
