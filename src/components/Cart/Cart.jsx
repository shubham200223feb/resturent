import React from "react";
import "./Cart.css"
import Modal from "../UI/Modal";
const Cart=(props)=>{
    const cartitem= <ul className="cart-items">{[{id:"c1",name:"shushi",amount:2,price:12.99}].map((item)=>{
        return (<li>{item.name}</li>)
    })}</ul>
    return (
        <Modal onClose={props.onClose}>
              {cartitem}
            <div className="total"> <span>Total Amount</span> <span>36.66</span></div>
            <div className="actions">
                <button className="button--alt" onClick={props.onClose}>Close</button>
                <button className="button">Order</button>
            </div>
        </Modal>
    )
};
export default Cart;