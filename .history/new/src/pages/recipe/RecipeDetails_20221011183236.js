import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function RecipeDetails() {
  const [information, setInformation] = useState([]);
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

    fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${params.id}/information`, options)
      .then((response) => response.json())
      .then((response) => setInformation(response))
      .catch((err) => console.error(err));
  }, [params.id]);
  console.log(information)
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3">
            <img src={information.image} alt={information.title} />
            <h4>{information.title}</h4>
          </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
