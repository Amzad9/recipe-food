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
        <div className="grid grid-cols-12 gap-8">
          <Splide className="col-span-12" aria-label="My Favorite Images">
            {recipe.map((item) =>
              item.veryHealthy ? (
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
      </div>
    </section>
  );
}

export default recipe;
