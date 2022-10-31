import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RecipeHealthy from "../../components/recipe/RecipeHealthy";
import RecipePopular from "../../components/recipe/RecipePopular";
import RecipeAll from "../../components/recipe/RecipeAll";
function Home() {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("recipe"));
    if (items) {
      setRecipe(items);
    }
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': 'b5827700e1msha890d46801eab89p1e308ajsnb12617f4810a',
    //     'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    //   }
    // };

    // fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=40', options)
    //   .then(response => response.json())
    //   .then(response => {
    //     // setRecipe(response.recipes)
    //     localStorage.setItem("recipe", JSON.stringify(response.recipes))
    //   })
    //   .catch(err => console.error(err));
  }, []);
  console.log(recipe);
  return (
    <>
    <RecipeAll recipe={recipe}/>
    <RecipeHealthy recipe={recipe} />
    <RecipePopular recipe={recipe} />
    </>
  );
}

export default Home;
