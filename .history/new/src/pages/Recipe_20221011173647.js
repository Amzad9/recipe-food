import React, { useEffect, useState } from 'react'

function Home() {
const [recipe, setRecipe] = useState(null)
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

const recip = recipe.map( (item) => {
   return(
    <div>item</div>
   )
})
  return (
    <div>
        {recip}
    </div>
  )
}

export default Home