import React from 'react'
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <nav className='bg-white shadow-lg fixed w-full top-0'>
        <ul className='flex justify-center'>
            <li>
                <Link to="/" className='px-3 py-44 inline-block text-dark'>Recipe</Link>
            </li>
            <li>
                <Link to="/menu" className='px-4 py-3 inline-block text-dark'>Menu</Link>
            </li>
            <li>
                <Link to="/product" className='px-4 py-3 inline-block text-dark'>Product</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navigation