import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
function Home() {
const [recipe, setRecipe] = useState([])

useEffect(()=>{
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b5827700e1msha890d46801eab89p1e308ajsnb12617f4810a',
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };
  
  fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=40', options)
    .then(response => response.json())
    .then(response => {
      setRecipe(response.recipes)
      localStorage.setItem("recipe", JSON.stringify(response.recipes))
    })
    .catch(err => console.error(err));
},[])

if(localStorage.getItem("recipe")){
  let result = JSON.parse(localStorage.getItem("recipe"))
  console.log({result);
}
console.log(recipe)
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-12 gap-4">
        {recipe.map((item) => (
         
            <Link to={`/${item.id}`} key={item.id} className="col-span-3">
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            </Link>
         
        ))}
      </div>
    </div>
  )
}

export default Home