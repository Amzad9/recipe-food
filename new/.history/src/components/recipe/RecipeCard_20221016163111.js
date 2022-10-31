import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ image, imageAlt, sourceName, title, link , cardClass, onSave, btnClass}) {
  return (
    <>
          <div className={`col-span-3 rounded-md bg-white p-3 pb-8 relative` + cardClass}>
          <Link to={link} className="w-44 h-44 rounded-full inline-block">
          <img src={image} alt={imageAlt} className="w-44 h-44 rounded-full mx-auto" />
          </Link>
            <h6 className="font-roboto font-light text-gray-600 mt-2">
              {sourceName}
            </h6>
            <h4 className="font-medium text-lg mt-3 font-Merienda capitalize">
              {title.length  > 25 ? title.slice(1, 25) + "..." : title}
            </h4>
            <button className={btnClass} onClick={onSave}>Add WishList</button>
          </div>
    </>
  );
}

export default RecipeCard;
