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

    for (let item of wish) {
        console.log(item.title); // Will display contents of the object inside the array
    }
  return (
    <section className='mt-32'>
        <div className='container mx-auto'>
          
        </div>
    </section>
  )
}

export default WishList