import React, { useEffect, useState } from 'react'

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
    .then(response => setRecipe(response))
    .catch(err => console.error(err));
},[])

console.log(recipe)
  return (
    <div>
        {recipe && recipe.map(item => (
          item
        ))}
    </div>
  )
}

export default Home