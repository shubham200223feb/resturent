import React from "react";
import Card from "../UI/Card";
import Mealitem from "./Mealitem";
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];
const MealList=()=>{
    const list = DUMMY_MEALS.map((item)=>{
        return(<Mealitem key={item.id} name={item.name} price={item.price} description={item.description}/>)
    })
    return (<section>
  <Card><ul>{list}</ul></Card>  
    </section>)
}
export default MealList;