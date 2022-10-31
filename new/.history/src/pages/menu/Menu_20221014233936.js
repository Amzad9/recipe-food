import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
function Menu() {
const [menu, setMenu] = useState([]);
// const [loading, setLoading] = useState(false);
useEffect(()=>{
    const items = JSON.parse(localStorage.getItem('menu'));
    if (items) {
        setMenu(items);
    }
    // setLoading(true)
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'b5827700e1msha890d46801eab89p1e308ajsnb12617f4810a',
    //         'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    //     }
    // };
    
    // fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/menuItems/search?query=Chocolate-Chip-Cookies&number=30&offset=0', options)
    //     .then(response => response.json())
    //     .then(response => {
    //         // setMenu(response.menuItems)
    //         localStorage.setItem("menu", JSON.stringify(response.menuItems))
    //         setLoading(false)
    //     })
    //     .catch(err => console.error(err));
},[])

// if(loading){
//     return <p>loading</p>
// }
  return (
    <div className="container mx-auto py-8 mt-32">
      <div className="grid grid-cols-12 gap-4">
        {menu.map((item) => (
            <Link to={`${item.id}`} key={item.id} className="col-span-3 bg-brand-100 p-5 shadow-md">
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