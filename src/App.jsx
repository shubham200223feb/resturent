import React,{useState} from "react";

import Header from "./components/Layout/Header.jsx"
import Meal from "./components/Meal/Meal.jsx";
import Cart from "./components/Cart/Cart.jsx";
import CartContextProvider from "./Store/CartContextProvider.jsx";
function App() {
const[ShowCart,setShowCart]=  useState(false);
  const showCartHandler=()=>{
    setShowCart(true);
  }
  const hideCartHandler=()=>{
    setShowCart(false)
  }

  return (
    <CartContextProvider>
   {ShowCart && <Cart onClose={hideCartHandler}/>}
   <Header onShowCart={showCartHandler}/>
   <Meal/>
      
    </CartContextProvider>
  )
}

export default App
