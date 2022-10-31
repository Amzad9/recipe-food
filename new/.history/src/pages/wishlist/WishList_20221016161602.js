import React from 'react'
import {  useSelector } from "react-redux";

function WishList() {
  const results = useSelector( (state) => state.wishlist.data);
console.log({results})
  return (
    <section className='mt-32'>
        <div className='container mx-auto'>
          {results.map((item, index) => (
            <RecipeCard key={item.id}
                cardClass="border shadow-sm text-center"
                headingSection="Healthy"
                link={`${item.id}`}
                image={item.image}
                imageAlt={item.title}
                sourceName={item.sourceName}
                title={item.title}
                onSave={()=> incrementHandle(item)}
              />
          ))}
        </div>
    </section>
  )
}

export default WishList