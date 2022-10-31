import React from 'react'
import RecipeCard from './RecipeCard';
import Heading from '../heading/Heading';
function RecipeAll({recipe}) {
  return (
    <>
      <div className="container mx-auto py-8">
        <Heading headingSection="Recipe" />
        <div className="grid grid-cols-12 gap-4">
          {recipe.map((item) =>
              <RecipeCard
                headingSection="Healthy"
                link={`/${item.id}`}
                image={item.image}
                imageAlt={item.title}
                sourceName={item.sourceName}
                title={item.title}
              />
          )}
        </div>
      </div>
    </>
  )
}

export default RecipeAll