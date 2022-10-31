import React from 'react'

function recipe({recipe}) {
  return (
    <>
      <div className="container mx-auto py-8">
        <Heading headingSection="veryHealthy" />
        <div className="grid grid-cols-12 gap-4">
          {recipe.map((item) =>
            item.veryHealthy ? (
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
  )
}

export default recipe