import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function RecipeDetails() {
  const [information, setInformation] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b5827700e1msha890d46801eab89p1e308ajsnb12617f4810a",
        "X-RapidAPI-Host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };

    fetch(`https://api.spoonacular.com/recipes/{id}/information`, options)
      .then((response) => response.json())
      .then((response) => setInformation(response.results))
      .catch((err) => console.error(err));
  }, []);
  console.log(information)
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-12 gap-4">
        {information.map((item) => (
          <div key={item.id} className="col-span-3">
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeDetails;
