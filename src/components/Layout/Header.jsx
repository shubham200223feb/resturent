import React ,{useContext} from "react"
import "./Header.css"
import headerimage from "../../assets/image.png"
import { TiShoppingCart } from "react-icons/ti";
import CartContext from "../../Store/CartContext";

const Header=(props)=>{
    const CartCtx=useContext(CartContext);
    const Number=CartCtx.totalamount
    return( <>
    <header>
<h1>Resto App</h1>
<button className="button" onClick={props.onShowCart}>
    <span className="icon"><TiShoppingCart /></span>
    <span>Cart</span>
    <span className="badge">{Number}</span>
</button>
    </header>
    <img src={headerimage} alt="this is background image below the header" ></img>
    </>)
}
export default Header