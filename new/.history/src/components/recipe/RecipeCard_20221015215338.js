import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ image, imageAlt, sourceName, title, link , cardClass}) {
  return (
    <>
          <Link to={link} className={`col-span-3 rounded-md bg-white p-3 pb-8 ` + cardClass}>
            <img src={image} alt={imageAlt} className="w-44 h-44 rounded-full" />
            <h6 className="font-roboto font-light text-gray-600 mt-2">
              {sourceName}
            </h6>
            <h4 className="font-medium text-lg mt-3 font-Merienda capitalize">
              {title.length  > 25 ? title.slice(1, 25) + "..." : title}
            </h4>
          </Link>
    </>
  );
}

export default RecipeCard;
