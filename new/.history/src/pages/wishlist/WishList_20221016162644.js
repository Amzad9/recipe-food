import React from 'react'
import {  useSelector } from "react-redux";
import RecipeCard from './../../components/recipe/RecipeCard'

function WishList() {
const results = useSelector( (state) => state.wishlist.data);
console.log({results})
  return (
    <section className='mt-32'>
        <div className='container mx-auto'>
         <div className="grid grid-cols-12 gap-8">
          {results.map((item, index) => (
            <RecipeCard key={item.id}
                cardClass="border shadow-sm text-center col-span-4"
                headingSection="Healthy"
                link={`${item.id}`}
                image={item.image}
                imageAlt={item.title}
                title={item.title}
                btnClass="hidden"
              />
          ))}
          </div>
        </div>
    </section>
  )
}

export default WishList