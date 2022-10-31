import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import RecipeCard from './RecipeCard';
import Heading from '../heading/Heading';
function recipe({recipe}) {
  return 
    <section className='bg-white'>
      <div className="container mx-auto py-4">
        <Heading headingSection="Healthy Recipe" />
        <div className="grid grid-cols-12 gap-8">
        <Splide aria-label="My Favorite Images">
        <SplideSlide>
          <img src="image1.jpg" alt="Image 1"/>
        </SplideSlide>
        <SplideSlide>
          <img src="image2.jpg" alt="Image 2"/>
        </SplideSlide>
      </Splide>
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
    </section>
  )
}

export default recipe