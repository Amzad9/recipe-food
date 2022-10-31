import React, { useEffect, useState } from "react";
import {  QueryClient, QueryClientProvider, useQuery } from 'react-query';
import RecipeHealthy from "../../components/recipe/RecipeHealthy";
import RecipePopular from "../../components/recipe/RecipePopular";
import RecipeAll from "../../components/recipe/RecipeAll";

function Home() {
  const queryClient = new QueryClient();

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem("recipe"));
  //   if (items) {
  //     setRecipe(items);
  //   }
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': 'b5827700e1msha890d46801eab89p1e308ajsnb12617f4810a',
  //       'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
  //     }
  //   };
  //   const fetchRecipe = async () => {
  //     const response = await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=40`, options);
  //     const data = await response.json();
  //     return data
  //   }
  //   // const options = {
  //   //   method: 'GET',
  //   //   headers: {
  //   //     'X-RapidAPI-Key': 'b5827700e1msha890d46801eab89p1e308ajsnb12617f4810a',
  //   //     'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
  //   //   }
  //   // };

  //   // fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=40', options)
  //   //   .then(response => response.json())
  //   //   .then(response => {
  //   //     // setRecipe(response.recipes)
  //   //     localStorage.setItem("recipe", JSON.stringify(response.recipes))
  //   //   })
  //   //   .catch(err => console.error(err));
  // }, []);
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b5827700e1msha890d46801eab89p1e308ajsnb12617f4810a',
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };
  const fetchRecipe = async () => {
    const response = await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=40`, options);
    const data = await response.json();
    localStorage.setItem("recipe", JSON.stringify(data.recipes))
    return data.recipes
  }
  const { data, status } = useQuery("recipe", fetchRecipe);
  return (
    <>
    <div>
      <img src="https://www.allrecipes.com/thmb/fSh16MWg7oA3Ze0nqPWclVH7xRw=/2000x666/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8-5-Ingredient-Breakfast-Sandwiches-hero-02-99e824465e5d4c418083638974f5db97.jpg" alt="banner" />
    </div>
    <RecipeAll recipe={data}/>
    <RecipeHealthy recipe={data} />
    <RecipePopular recipe={data} />
    </>
  );

}

export default Home;
