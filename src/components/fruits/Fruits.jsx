import React from 'react'
import Navbar from '../navabar/Navbar'
import Banner from '../banner/Banner'
import Footer from '../footer/Footer'
import CategoryPage from '../categoryPage/CategoryPage'
import BgFruits from '../../assets/Fruits-banner.jpg'

const Fruits = () => {
  return (
    <div>
      <Navbar/>
      <CategoryPage title="Fruits & Veggies" bgImage={BgFruits} categories={['Fruits', 'Vegetables']} />
      <Footer/>

    </div>
  )
}

export default Fruits
