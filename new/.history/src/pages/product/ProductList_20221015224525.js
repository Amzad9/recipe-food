
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "../../components/recipe/RecipeCard";
function Home() {
  const [product, setProduct] = useState([]);
  const {name} = useParams();
  const str = name.replaceAll(" ","-");
  console.log(str)
  const fetchProduct = (title) => {
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'b5827700e1msha890d46801eab89p1e308ajsnb12617f4810a',
          'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
      };

      fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/search?query=${title}&number=10&offset=0&minCalories=0&maxCarbs=100&minCarbs=0&maxFat=100&minFat=0&maxProtein=100&minProtein=0&maxCalories=5000`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response.products)
            setProduct(response.products)
          localStorage.setItem("recipe", JSON.stringify(response.recipes))
        })
        .catch(err => console.error(err));
  }
  useEffect(() => {
    fetchProduct(str)
  }, [str]);
  return (
    <>
    <div className="container mx-auto py-8 mt-32">
      <div className="grid grid-cols-12 gap-8">
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
      </div>
    </div>
    </>
  );
}

export default Home;
