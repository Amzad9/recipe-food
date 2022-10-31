import React from 'react'
import {  useSelector } from "react-redux";

function WishList() {
  const results = useSelector( (state) => state.wishlist.data);
  console.log(results)
  return (
    <section className='mt-32'>
        <div className='container mx-auto'>
          {results}
        </div>
    </section>
  )
}

export default WishList