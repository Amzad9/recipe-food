import React from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import RecipeCard from './RecipeCard';
import Heading from '../heading/Heading';
import './../../pages/recipe/recipe.scss';
function RecipePopular({recipe}) {
  return (
    <section className='py-16 bg-white'>
      <div className="container mx-auto">
        <Heading level="2" headingSection="Popular Recipe" />
        <Splide data-splide='{"type":"loop","perPage":4,"gap":30}'>
          {recipe.map((item) =>
            item.veryPopular === true ? (
                <SplideSlide key={item.id}>
              <RecipeCard
                cardClass="shadow-lg block"
                headingSection="Healthy"
                link={`/${item.id}`}
                image={item.image}
                imageAlt={item.title}
                sourceName={item.sourceName}
                title={item.title}
              />
              </SplideSlide>
            ) : (
              false
            )
          )}
          </Splide>
        </div>
    </section>
  )
}

export default RecipePopular