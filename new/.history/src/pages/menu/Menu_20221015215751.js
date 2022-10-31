import React from 'react'
import RecipeCard from '../../components/recipe/RecipeCard';
import { MenuList } from "./../../pages/helper/Helper"
function Menu() {
  return (
    <div className="container mx-auto py-8 mt-32">
      <div className="grid grid-cols-12 gap-8">
        {MenuList.map((item) => (
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

export default Menu