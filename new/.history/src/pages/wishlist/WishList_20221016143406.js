import React, { useEffect } from 'react'

function WishList() {
    const [wish, setWish] =useState();
    useEffect(()=>{
        const check = localStorage.getItem("persist:wishlist")
        if(check){
          const item = JSON.parse(check);
          setWish(item)
        }
    })
  return (
    <section className='mt-32'>
        <div className='container mx-auto'>
        WishList
        </div>
    </section>
  )
}

export default WishList