import React from 'react'
import Navbar from '../navabar/Navbar'
import Banner from '../banner/Banner'
import Footer from '../footer/Footer'
import CategoryPage from '../categoryPage/CategoryPage'
import BgSeeFood from '../../assets/seafood-banner.jpg'

const SeeFood = () => {
  return (
    <div>
      <Navbar/>
      <CategoryPage title="See Food" bgImage={BgSeeFood} categories={['SeaFood', 'Meat']}/>
      <Footer/>
    </div>
  )
}

export default SeeFood



