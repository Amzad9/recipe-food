import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import RecipeAll from "../../components/recipe/RecipeAll";
function RecipeList() {
  const [recipe, setRecipe] = useState([]);
  const filterBy = useSelector( (state) => state.wishlist.search);

  const {name} = useParams();
  const str = name.replaceAll(" ","-");
  console.log(str)

  const fetchData = (title) => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b5827700e1msha890d46801eab89p1e308ajsnb12617f4810a',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    };

    fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${title}`, options)
      .then(response => response.json())
      .then(response => {
        console.log(response.results)
        setRecipe(response.results)
        localStorage.setItem("recipeList", JSON.stringify(response.recipes))
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchData(str)
  }, [str]);

  return (
    <> 
      
    <RecipeAll recipe={recipe.filter((wishlist) => filterBy ? wishlist.title.toLowerCase().includes(filterBy): true} sectionTitle={`${name} Recipe`}/>
    </>
  );
}

export default RecipeList;
