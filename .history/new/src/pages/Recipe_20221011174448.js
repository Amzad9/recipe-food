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
    .then(response => setRecipe(response.results))
    .catch(err => console.error(err));
},[])

  return (
    <div className='container'>
    {recipe.map((item) => (
      <div key={item.id}>
      <img src={item.image} alt={item.title} />
        <h4>{item.title}</h4>
      </div>
    ))}
    </div>
  )
}

export default Home