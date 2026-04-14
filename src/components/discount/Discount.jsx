import React from 'react'
import FreshFruit from '../../assets/fresh-fruits.png'
import Button from '../button/Button'

const Discount = () => {
  return (
    <section className='bg-zinc-100 bg-no-repeat bg-right bg-contain' style={{backgroundImage: `url(${FreshFruit})`}}>
      <div className='flex md:flex-row flex-col max-w-350 mx-auto px-10 py-10'> 
        <span className='md:text-9xl text-5xl text-orange-400 font-bold transform md:-rotate-90 h-fit md:self-center'>20%</span>
        
        <div className='max-w-175'>
          <h3 className='md:text-7xl text-4xl text-zinc-600 font-bold'>First Order</h3>
          <p className='text-zinc-500 my-6'>Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase. Fast delivery and quality guaranteed.</p>
          <Button text="Get a Discount"/>
        </div>
      </div>
    </section>
  )
}

export default Discount

