import React from 'react'
import RecipeCard from './RecipeCard';
import Heading from '../heading/Heading';
function RecipeAll({recipe,sectionTitle }) {
  return (
    <section className='pb-12 pt-25'>
      <div className="container mx-auto py-4">
        <Heading level="2" headingSection={sectionTitle} />
        <div className="grid grid-cols-12 gap-8 mt-5">
          {recipe.map((item) =>
              <RecipeCard key={item.id}
                cardClass="border shadow-sm"
                headingSection="Healthy"
                link={`${item.id}`}
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