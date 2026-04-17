import { useState } from "react";
import CartContext from "./CartContext";
const CartContextProvider=(props)=>{
    const[cartItem,SetcartItem]= useState([]);
    const addItemHandler=(item)=>{
        if(item.Quantity>=1){
        SetcartItem((prev)=>{
            return([...prev,item])
        })}
    };
    const removeItemHandler=(id)=>{
        const newItem=cartItem.filter((item)=>{
            return (item.id!=id);
        })
        SetcartItem(newItem);
    }
    const context ={items:cartItem,totalamount:cartItem.reduce((curr,item)=>{
return curr+item.Quantity;
    },0),addItem:addItemHandler,removeItem:removeItemHandler}
    return(<CartContext.Provider value={context}>
        {props.children}
    </CartContext.Provider>)
};
export default CartContextProvider