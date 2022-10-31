import React from 'react'

function RecipeCard({image,imageAlt, sourceName,title}) {
  return (
    <>
     <div className="container mx-auto py-8">
      <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3 border p-4 rounded-md">
            <img src={image} alt={imageAlt} className="w-full" />
            <h6 className='font-roboto font-light text-gray-600 mt-2'>{sourceName}</h6>
            <h4 className="font-medium text-lg mt-3 font-Merienda">{item.title? item.title.slice(1,25)+ "...": item.title}</h4>
            </div>
      </div>
    </div>
    </>
  )
}

export default RecipeCard