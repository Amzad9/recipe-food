import React from 'react'
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <nav className='bg-green-600'>
        <ul>
            <li>
                <Link to="/">Recipe</Link>
            </li>
            <li>
                <Link to="/product">Product</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navigation