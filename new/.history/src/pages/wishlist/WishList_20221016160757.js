import React, { useEffect, useState } from 'react'
import { useDispatch , useSelector } from "react-redux";

function WishList() {
  const results = useSelector( (state) => state.wishlist.data);

  return (
    <section className='mt-32'>
        <div className='container mx-auto'>
          {results}
        </div>
    </section>
  )
}

export default WishList