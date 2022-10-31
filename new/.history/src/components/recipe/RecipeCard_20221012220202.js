import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ image, imageAlt, sourceName, title, headingSection, link }) {
  return (
    <>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-12">
            <div className="col-span-12">
                <h2 className='text-dark text-3xl uppercase mb-4'>{headingSection}</h2>
            </div>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <Link to={link} className="col-span-3 border p-4 rounded-md">
            <img src={image} alt={imageAlt} className="w-full" />
            <h6 className="font-roboto font-light text-gray-600 mt-2">
              {sourceName}
            </h6>
            <h4 class="font-medium text-lg mt-3 font-Merienda">
              {title ? title.slice(1, 25) + "..." : title}
            </h4>
          </Link>
        </div>
      </div>
    </>
  );
}

export default RecipeCard;
