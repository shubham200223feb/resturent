import React, { useContext } from "react";
import "./Cart.css"
import Modal from "../UI/Modal";
import CartContext from "../../Store/CartContext";
import { IoAdd } from "react-icons/io5";
import { RiSubtractFill } from "react-icons/ri";

const Cart=(props)=>{
    const CartCTx = useContext(CartContext);
    const items= CartCTx.items;
    const merged = Object.values(
  items.reduce((acc, item) => {

    if (acc[item.name]) {
      acc[item.name].Quantity += item.Quantity;
    } else {
      acc[item.name] = { ...item };
    }

    return acc;

  }, {})
);
const incressByOne=(item)=>{
    
    CartCTx.addItem( item);
}
const decreeByOne=(item)=>{
    i
    cartitem.addItem(item);
    
}
    const cartitem= <ul className="cart-items">{merged.map((item,i)=>{
        return (<li className="listitem" key={i}><div className="listDetail"><p>{item.name}</p> < p><span className="price">${item.price.toFixed(2)}</span>  ....  x{item.Quantity}</p></div>
        <div className="listbutton"><button onClick={()=>{incressByOne({name:item.name,Quantity:1,price:item.price})}}><IoAdd/></button><button>{item.Quantity>1? <RiSubtractFill  onClick={()=>{incressByOne({name:item.name,Quantity:-1,price:item.price})}}/>:"Delete"}</button></div></li>)
    })}</ul>
    const Total= merged.reduce((acc,item)=>{
       const eachprice=item.Quantity*item.price;
       acc+=eachprice;
       return acc;
    },0)
    return (
        <Modal onClose={props.onClose}>
              {cartitem}
            <div className="total"> <span>Total Amount</span> <span>{Total.toFixed(2)}</span></div>
            <div className="actions">
                <button className="button--alt" onClick={props.onClose}>Close</button>
                <button className="button">Order</button>
            </div>
        </Modal>
    )
};
export default Cart;