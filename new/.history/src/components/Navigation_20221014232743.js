import React from 'react'
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <nav className='px-4 bg-white shadow-lg fixed w-full top-0 py-3 flex justify-between items-center z-50'>
       <Link href="#" className='text-3xl font-bold font-Merienda'>Foodies Recipe</Link>
        <ul className='flex justify-center'>
            <li>
                <Link to="/" className='px-3 py-4 inline-block text-dark'>Recipe</Link>
            </li>
            <li>
                <Link to="/menu" className='px-4 py-4 inline-block text-dark'>Menu</Link>
            </li>
            <li>
                <Link to="/product" className='px-4 py-4 inline-block text-dark'>Product</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navigation