import React from "react";
import "./Mealitem.css"
import MealForm from "./MealForm.jsx"
const Mealitem=(props)=>{
    const prices=`$${props.price.toFixed(2)}`;
return(<li className="meal">
<div>
    <h1>{props.name}</h1>
    <div className="description">{props.description}</div>
    <div className="price">{prices}</div>
</div>
<div><MealForm  name={props.name} price={props.price}/></div>
</li>)
}
export default Mealitem;