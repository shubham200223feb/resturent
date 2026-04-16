import React from "react";
import "./Cart.css"
import Modal from "../UI/Modal";
const Cart=()=>{
    const cartitem= <ul className="cart-items">{[{id:"c1",name:"shushi",amount:2,price:12.99}].map((item)=>{
        return (<li>{item.name}</li>)
    })}</ul>
    return (
        <Modal>
              {cartitem}
            <div className="total"> <span>Total Amount</span> <span>36.66</span></div>
            <div className="actions">
                <button className="button--alt">Close</button>
                <button className="button">Order</button>
            </div>
        </Modal>
    )
};
export default Cart;