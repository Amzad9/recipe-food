import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
function Menu() {
const [menu, setMenu] = useState([])
useEffect(()=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b5827700e1msha890d46801eab89p1e308ajsnb12617f4810a',
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    };
    
    fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/menuItems/search?query=burger&number=30&offset=0', options)
        .then(response => response.json())
        .then(response => setMenu(response.menuItems))
        .catch(err => console.error(err));
},[setMenu])
console.log(menu)
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-12 gap-4">
        {menu.map((item) => (
         
            <Link to={`${item.id}`} key={item.id} className="col-span-3">
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            </Link>
         
        ))}
        Menu
      </div>
    </div>
  )
}

export default Menu