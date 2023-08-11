import { useState, createContext, useContext } from "react";
import { Cart, cartItem } from "../types/types";

const CartContext = createContext();

function CartProvider({children}) {
  const [cart, setCart] = useState<Cart>([]);

  function addItemToCart(item: cartItem){
    setCart((prevCartItems) => [...prevCartItems, item])
  }
  return (
    <CartContext.Provider value={{cart, addItemToCart}}>
        {children}
        <p>test</p>
    </CartContext.Provider>
  )
}

function useCart(){
    const context = useContext(CartContext);
    if(context === undefined) console.log("Context being used outside")
    return context;
}


export {CartProvider, useCart};