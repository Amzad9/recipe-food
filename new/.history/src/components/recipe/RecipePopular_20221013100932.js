import React from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import RecipeCard from './RecipeCard';
import Heading from '../heading/Heading';
function RecipePopular({recipe}) {
  return (
    <>
      <div className="container mx-auto py-4">
        <Heading headingSection="Popular Recipe" />
        <Splide>
          {recipe.map((item) =>
            item.veryPopular ? (
                <SplideSlide>
              <RecipeCard
                headingSection="Healthy"
                link={`/${item.id}`}
                image={item.image}
                imageAlt={item.title}
                sourceName={item.sourceName}
                title={item.title}
              />
              </SplideSlide>
            ) : (
              ""
            )
          )}
          </Splide>
        </div>
    </>
  )
}

export default RecipePopular