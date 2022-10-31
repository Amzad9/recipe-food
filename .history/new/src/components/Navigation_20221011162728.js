import React from 'react'
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <div>
        <ul>
            <li>
                <Link to="/">Recipe</Link>
            </li>
            <li>
                <Link to="/product">Product</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navigation