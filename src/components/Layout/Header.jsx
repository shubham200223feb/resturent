import React from "react"
import "./Header.css"
import headerimage from "../../assets/image.png"
import { TiShoppingCart } from "react-icons/ti";
const Header=()=>{
    return( <>
    <header>
<h1>Resto App</h1>
<button className="button">
    <span className="icon"><TiShoppingCart /></span>
    <span>Cart</span>
    <span className="badge">3</span>
</button>
    </header>
    <img src={headerimage} alt="this is background image below the header" ></img>
    </>)
}
export default Header