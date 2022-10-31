import React from 'react'
import { useSelector } from "react-redux";
import RecipeCard from '../../components/recipe/RecipeCard';
import { ProductList } from "./../../pages/helper/Helper"
function Product() {
  return (
    <div className="container mx-auto py-8 mt-32">
      <div className="grid grid-cols-12 gap-8">
        {ProductList.map((item) => (
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
  )
}

export default Product