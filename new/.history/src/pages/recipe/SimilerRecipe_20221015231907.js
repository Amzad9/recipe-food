
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "../../components/recipe/RecipeCard";
function SimilerRecipe() {
  const [similar, setSimilar] = useState([]);
  let params = useParams();
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b5827700e1msha890d46801eab89p1e308ajsnb12617f4810a",
        "X-RapidAPI-Host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };
      fetch(
        `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${params.id}/similar/`,
        options
      )
        .then((response) => response.json())
        .then((response) => setSimilar(response))
        .catch((err) => console.error(err));

  }, [params.id]);
  console.log(similar);
  return (
    <div className="container mx-auto py-8 mt-32">
      <div className="grid grid-cols-12 gap-4">
            {similar[0].title}
      </div>
    </div>
  );
}

export default SimilerRecipe;
