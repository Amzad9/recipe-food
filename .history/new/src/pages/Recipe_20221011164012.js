import React, { useEffect } from 'react'

function Home() {

useEffect(()=>{
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b5827700e1msha890d46801eab89p1e308ajsnb12617f4810a',
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };
  
  fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/479101/information', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

})
  return (
    <div>
        <h1 className="text-gray-800 text-3xl"> Home</h1>
    </div>
  )
}

export default Home