import React from 'react'
import { FaHeart, FaPlus } from "react-icons/fa";
import Button from '../button/Button';

const Cards = ({image,name,price}) => {
  return (
    <div className='bg-zinc-100 p-5 rounded-xl'>
        {/* Card icon */}
      <div className='flex justify-between'>
        <span className='text-3xl text-zinc-400'><FaHeart/></span>
        <button className='text-white bg-orange-400 text-xl px-4 py-3 rounded-lg'><FaPlus/></button>
      </div>

        {/* card image */}
      <div className='w-full h-50'>
        <img src={image} className='w-full h-full mx-auto object-contain'/>
      </div>

        {/* card details */}
      <div className='text-center'>
        <h3 className='text-2xl'>{name}</h3>
        <p className='text-2xl font-semibold mt-2 mb-2'>${price.toFixed(2)}</p>
        <Button text="Shop Now"/>
      </div>

    </div>
  )
}

export default Cards
