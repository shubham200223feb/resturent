import React, { useContext } from "react";
import "./Cart.css"
import Modal from "../UI/Modal";
import CartContext from "../../Store/CartContext";
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
    const cartitem= <ul className="cart-items">{merged.map((item,i)=>{
        return (<li className="listitem" key={i}><p>{item.name}</p> <p>{item.Quantity}</p>  <p>{item.price}</p></li>)
    })}</ul>
    const Total= merged.reduce((acc,item)=>{
       const eachprice=item.Quantity*item.price;
       acc+=eachprice;
       return acc;
    },0)
    return (
        <Modal onClose={props.onClose}>
              {cartitem}
            <div className="total"> <span>Total Amount</span> <span>{Total}</span></div>
            <div className="actions">
                <button className="button--alt" onClick={props.onClose}>Close</button>
                <button className="button">Order</button>
            </div>
        </Modal>
    )
};
export default Cart;