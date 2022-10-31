import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ image, imageAlt, sourceName, title, link , cardClass, onSave, btnClass, deleteBtnClass}) {
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
            
            <button className={`absolute top-4 right-4 ` +btnClass} onClick={onSave}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
            </svg>
            </button>
            <button className={`absolute top-4 right-4 ` + deleteBtnClass} onClick={onSave}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
              </svg>
            </button>
          </div>
    </>
  );
}

export default RecipeCard;
