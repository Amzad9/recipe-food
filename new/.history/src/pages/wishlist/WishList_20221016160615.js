import React, { useEffect, useState } from 'react'
import { useDispatch , useSelector } from "react-redux";

function WishList() {
    const [wish, setWish] = useState([]);

  return (
    <section className='mt-32'>
        <div className='container mx-auto'>
          {wish}
        </div>
    </section>
  )
}

export default WishList