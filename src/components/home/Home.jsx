import React from 'react'
import Navbar from '../navabar/Navbar'
import Hero from '../hero/Hero'
import Category from '../category/Category'
import Values from '../values/values'
import Products from '../products/Products'
import Discount from '../discount/Discount'
import Process from '../process/Process'
import Testimonial from '../testimonial/Testimonial'
import Footer from '../footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Category/>
      <Values/>
      <Products/>
      <Discount/>
      <Process/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default Home
