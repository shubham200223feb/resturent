import CartContext from "./CartContext";
const CartContextProvider=(props)=>{
    const addItemHandler=(item)=>{};
    const removeItemHandler=(id)=>{}
    const context ={items:[],totalamount:0,addItem:addItemHandler,removeItem:removeItemHandler}
    return(<CartContext.Provider value={context}>
        {props.children}
    </CartContext.Provider>)
};
export default CartContextProvider