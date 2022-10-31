import React, { useEffect, useState } from 'react'
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
function RecipeDetails() {
  return (
    <div>RecipeDetails</div>
  )
}

export default RecipeDetails