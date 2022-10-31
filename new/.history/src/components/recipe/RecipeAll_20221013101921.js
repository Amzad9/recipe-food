import React from 'react'
import RecipeCard from './RecipeCard';
import Heading from '../heading/Heading';
function RecipeAll({recipe}) {
  return (
    <section className='py-16'>
      <div className="container mx-auto py-4">
        <Heading headingSection="Recipe" />
        <div className="grid grid-cols-12 gap-8">
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
    </section>
  )
}

export default RecipeAll