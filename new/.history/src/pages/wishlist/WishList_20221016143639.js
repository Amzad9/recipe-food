import React, { useEffect, useState } from 'react'

function WishList() {
    const [wish, setWish] =useState();
    useEffect(()=>{
        const check = localStorage.getItem("persist:wishlist")
        if(check){
          const item = JSON.parse(check);
          setWish(item.data)
        }
    },[])
    console.log(wish)
  return (
    <section className='mt-32'>
        <div className='container mx-auto'>
        {wish.data.map( (item) => (
            {item}
        ))}
        </div>
    </section>
  )
}

export default WishList