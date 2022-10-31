import React, { useEffect, useState } from 'react'

function Home() {
const [recipe, setRecipe] = useState([])
useEffect(()=>{
  fetch(`https://api.spoonacular.com/recipes/complexSearch`)
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