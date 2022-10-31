import React, { useEffect, useState } from "react";
import { useDispatch , useSelector } from "react-redux";
// import { increment } from "../../store/wishlist/wishListSlice";
import { popularData } from "./../helper/Helper";
import RecipeHealthy from "../../components/recipe/RecipeHealthy";
import RecipePopular from "../../components/recipe/RecipePopular";
import Vegetarian from "../../components/recipe/Vegetarian";
function Home() {
  const [recipe, setRecipe] = useState([]);
  const count = useSelector( (state) => state.wishlist);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(incremen())
  }
  useEffect(() => {
    // const items = JSON.parse(localStorage.getItem("recipe"));
    // if (items) {
    //   setRecipe(items);
    // }

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
          setRecipe(response.recipes)
          localStorage.setItem("recipe", JSON.stringify(response.recipes))
        })
        .catch(err => console.error(err));
  }, []);
  console.log(popularData);
  return (
    <>
      <div className="mt-20 min-h-72 items-center relative">
        <img src="https://www.allrecipes.com/thmb/fSh16MWg7oA3Ze0nqPWclVH7xRw=/2000x666/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8-5-Ingredient-Breakfast-Sandwiches-hero-02-99e824465e5d4c418083638974f5db97.jpg" alt="" />
        <div className="max-w-[500px] py-12 px-10 shadow-lg absolute top-24 left-20 bg-white">
          <h1 className="text-gray-white text-6xl font-bold font-Montserrat">
            Fastest <span className="text-primary">Delivery</span> & Easy Pickup
          </h1>
        </div>
      </div>
      <p>{count}</p>
      <button onClick={increment}>Click</button>
      <RecipePopular recipe={popularData} />
      <RecipeHealthy recipe={recipe} />
      <Vegetarian recipe={recipe} />
    </>
  );
}

export default Home;
