import React, { useEffect, useState } from 'react'

function WishList() {
    const [wish, setWish] = useState([]);
    useEffect(()=>{
        const items = JSON.parse(localStorage.getItem('persist:wishlist'));
        if (items) {
            const result = items.data;
            setWish(result);
        }
    },[])
    console.log(wish)
  return (
    <section className='mt-32'>
        <div className='container mx-auto'>
            {wish.map((value) => 
              <div>{value}</div>
             )}
            {/* {wish.data} */}
        </div>
    </section>
  )
}

export default WishList