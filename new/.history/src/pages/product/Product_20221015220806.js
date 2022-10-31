import React, { useEffect, useState } from "react";
import RecipeCard from "../../components/recipe/RecipeCard";
function Home() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("recipe"));
    if (items) {
        setProduct(items);
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
            setProduct(response.recipes)
          localStorage.setItem("recipe", JSON.stringify(response.recipes))
        })
        .catch(err => console.error(err));
  }, []);
  console.log(product);
  return (
    <>
     {product.map((item) => (
          <RecipeCard key={item.id}
             cardClass="shadow-lg block text-center"
                    headingSection="Healthy"
                    link={`${item.title}`}
                    image={item.image}
                    imageAlt={item.title}
                    sourceName={item.sourceName}
                    title={item.title}
          />
        ))}
    </>
  );
}

export default Home;
