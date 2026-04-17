import  React, { useContext, useState } from "react";
import "./MealForm.css"
import Input from "../UI/Input";
import CartContext from "../../Store/CartContext";


const MealForm=(props)=>{
    const CartCtx=useContext(CartContext);
    const[productQuantity,setProductQuantity]= useState(1);
    const Inputvalue=(value)=>{
        console.log(typeof(value))
        console.log(Number(value))
        const Quantity=Number(value);
        setProductQuantity(Quantity);
    }
    const SubmiteHandler=(e)=>{
          e.preventDefault();

        console.log("Submit clicked");
  console.log(props.name, props.price, productQuantity);

  const Item = {
    name: props.name,
    price: props.price,
    Quantity: productQuantity
  };
console.log(CartCtx.items)
  CartCtx.addItem(Item);
  console.log(CartCtx.items)

    }
    return (
        <form onSubmit={SubmiteHandler} className="form">
            <Input label="Amount" input={{id:"amount" ,type:"Number" ,min:'1',max:'5' ,step:'1'}} Quantity={Inputvalue}/>
            <button>+ Add</button>
        </form>
    )
}
export default MealForm