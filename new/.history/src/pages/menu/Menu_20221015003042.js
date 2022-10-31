import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { MenuList } from "./../../pages/helper/Helper"

function Menu() {
  return (
    <div className="container mx-auto py-8 mt-32">
      <div className="grid grid-cols-12 gap-8">
        {MenuList.map((item) => (
            <Link to={`${item.title}`} key={item.id} className="col-span-3 bg-white p-5 shadow-md rounded-md">
            <img src={item.image} alt={item.title} className="w-full h-44 object-contain" />
            <h4 className='font-medium text-lg mt-3 font-Montserrat capitalize'>{item.title}</h4>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default Menu