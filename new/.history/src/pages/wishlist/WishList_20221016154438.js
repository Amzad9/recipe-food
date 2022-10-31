import React, { useEffect, useState } from 'react'

function WishList() {
    const [wish, setWish] = useState(null);
    useEffect(()=>{
        const items = JSON.parse(localStorage.getItem('persist:wishlist'));
        if (items) {
            setWish(items);
        }
    },[])
    console.log(wish.data)
  return (
    <section className='mt-32'>
        <div className='container mx-auto'>
            {/* {wish.data.map((value) => 
              <div>{value}</div>
             )} */}
            {wish.data}
        </div>
    </section>
  )
}

export default WishList