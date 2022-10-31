import React, { useEffect, useState } from 'react'

function WishList() {
    const [wish, setWish] =useState();
    useEffect(()=>{
        const check = localStorage.getItem("persist:wishlist")
        if(check){
          const item = JSON.parse(check);
          setWish(item)
        }
    },[])
    console.log(wish.data)
  return (
    <section className='mt-32'>
        <div className='container mx-auto'>
        {wish.map( (item) => (
            {item.title}
        ))}
        {wish.data}
        </div>
    </section>
  )
}

export default WishList