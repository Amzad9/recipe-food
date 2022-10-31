import React from 'react'
import {  useSelector } from "react-redux";
import RecipeCard from './../../components/recipe/RecipeCard'

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
                title={item.title}
                btnClass="hidden"
              />
          ))}
        </div>
    </section>
  )
}

export default WishList