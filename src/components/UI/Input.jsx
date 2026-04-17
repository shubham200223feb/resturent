import React, { useState } from "react";
import "./Input.css"
const Input = (props)=>{
    const[InputValue,setInputvalue]= useState(1);
const InputChange=(e)=>{
    console.log(e.target.value)
    props.Quantity(e.target.value);
    setInputvalue(e.target.value)
}
    return(<div className="input">
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input } value={InputValue} onChange={InputChange}></input>
    </div>)
};
export default Input;