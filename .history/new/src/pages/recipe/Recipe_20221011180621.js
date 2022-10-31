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
  
  fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch', options)
    .then(response => response.json())
    .then(response => setRecipe(response.results))
    .catch(err => console.error(err));
},[])
console.log(recipe)
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-12 gap-4">
        {recipe.map((item) => (
          <div key={item.id} className="col-span-3">
            <Link to={item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home