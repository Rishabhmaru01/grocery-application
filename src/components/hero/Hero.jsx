import React from 'react'
import Grocery from '../../assets/grocery.png'
import Button from '../button/Button'

const Hero = () => {
  return (
    <section>
        <div className='min-h-screen max-w-350 mx-auto px-10 flex md:flex-row flex-col items-center justify-center md:pt-25 pt-28'>
            {/* hero content */}
            <div className='flex-1'>
                <span className='bg-orange-500 rounded-full px-5 py-2 text-white'>Export Best Quality...</span>
                <h1 className='md:text-7xl/20 text-5xl/14 font-bold mt-5'>Tasty Organic <span className='text-orange-400'>Fruits</span> & <span className='text-orange-400'>Veggies</span><br /> In Your City</h1>
                <p className='md:text-lg text-md mt-5 mb-5 max-w-132'>Bred for a high content of beneficial substances. Our products are all fresh and healthy.</p>
                <Button text={"Shop Now"} />
            </div>
            {/* hero image */}
            <div className='flex-1'>
                <img src={Grocery} alt="hero image" />
            </div>
        </div>
    </section>
  )
}

export default Hero
