import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import RecipeCard from "./RecipeCard";
import Heading from "../heading/Heading";
function recipe({ recipe }) {
  return (
    <section className="bg-white">
      <div className="container mx-auto py-4">
        <Heading headingSection="Healthy Recipe" />
          <Splide data-splide='{"type":"loop","perPage":4,"gap":30}'>
            {recipe.map((item) =>
              item.veryHealthy ? (
                <SplideSlide className="shadow-lg">
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
    </section>
  );
}

export default recipe;
