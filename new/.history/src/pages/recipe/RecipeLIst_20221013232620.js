import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeAll from "../../components/recipe/RecipeAll";
function RecipeList() {
  const [recipe, setRecipe] = useState([]);
  const {name} = useParams();
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("recipe"));
    if (items) {
      setRecipe(items);
    }

    
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b5827700e1msha890d46801eab89p1e308ajsnb12617f4810a',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    };

    fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=100', options)
      .then(response => response.json())
      .then(response => {
        // setRecipe(response.recipes)
        localStorage.setItem("recipe", JSON.stringify(response.recipes))
      })
      .catch(err => console.error(err));
  }, []);

 
  // const regexp = new RegExp(, 'i');
  // recipe.filter((x) => x.title.toLowerCase().includes(name.toLowerCase()))
  return (
    <>
    <div className="mt-20 min-h-32">
      <img className="max-w-[100%]" src="https://www.allrecipes.com/thmb/fSh16MWg7oA3Ze0nqPWclVH7xRw=/2000x666/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8-5-Ingredient-Breakfast-Sandwiches-hero-02-99e824465e5d4c418083638974f5db97.jpg" alt="banner" />
    </div>
    <RecipeAll recipe={recipe}/>
    </>
  );
}

export default RecipeList;
