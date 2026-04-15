import  React from "react";
import "./MealForm.css"
import Input from "../UI/Input";
const MealForm=()=>{
    return (
        <form className="form">
            <Input label="Amount" input={{id:"amount" ,type:"Number" ,min:'1',max:'5', defaultValue:'1' ,step:'1'}}/>
            <button>+ Add</button>
        </form>
    )
}
export default MealForm