import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "../../components/recipe/RecipeCard";
import Heading from "../../components/heading/Heading";
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
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-12 gap-4">
          {recipe.map((item) => (
            <Link
              to={`/${item.id}`}
              key={item.id}
              className="col-span-3 border p-4 rounded-md"
            >
              <img src={item.image} alt={item.title} className="w-full" />
              <h6 className="font-roboto font-light text-gray-600 mt-2">
                {item.sourceName}
              </h6>
              <h4 class="font-medium text-lg mt-3 font-Merienda">
                {item.title ? item.title.slice(1, 25) + "..." : item.title}
              </h4>
            </Link>
          ))}
        </div>
      </div>
    
      <div className="container mx-auto py-8">
        <Heading headingSection="veryPopular" />
        <div className="grid grid-cols-12 gap-4">
          {recipe.map((item) =>
            item.veryPopular ? (
              <RecipeCard
                headingSection="Healthy"
                link={`/${item.id}`}
                image={item.image}
                imageAlt={item.title}
                sourceName={item.sourceName}
                title={item.title}
              />
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
