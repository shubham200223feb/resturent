import React from "react"
import "./Header.css"
import headerimage from "../../assets/image.png"
import { TiShoppingCart } from "react-icons/ti";
const Header=()=>{
    return( <>
    <header>
<h1>Resto App</h1>
<button className="button">
    <spam className="icon"><TiShoppingCart /></spam>
    <spam>Cart</spam>
    <spam className="badge">3</spam>
</button>
    </header>
    <img src={headerimage} alt="this is background image below the header" ></img>
    </>)
}
export default Header