import React from 'react'
import { useDispatch , useSelector } from "react-redux";
import {  } from "../../store/wishlist/wishListSlice";
import RecipeCard from './../../components/recipe/RecipeCard'

function WishList() {
const results = useSelector( (state) => state.wishlist.data);
const dispatch = useDispatch();
const incrementHandle = (item) => {
  dispatch(saveWishList(item))
}
console.log({results})
  return (
    <section className='mt-32'>
        <div className='container mx-auto'>
         <div className="grid grid-cols-12 gap-8">
          {results.map((item, index) => (
            <RecipeCard key={item.id}
                cardClass="border shadow-sm text-center relative col-span-3"
                headingSection="Healthy"
                link={`${item.id}`}
                image={item.image}
                imageAlt={item.title}
                title={item.title}
                btnClass="hidden"
                onDelete={}
              />
          ))}
          </div>
        </div>
    </section>
  )
}

export default WishList