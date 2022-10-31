import React, { useEffect, useState } from 'react'

function RecipeDetails() {
    const [information, setInformation] = useState([])
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
          .then(response => setInformation(response.results))
          .catch(err => console.error(err));
      },[])
  return (
    <div>{information}</div>
  )
}

export default RecipeDetails