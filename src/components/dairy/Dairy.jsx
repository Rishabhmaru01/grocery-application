import React from 'react'
import Navbar from '../navabar/Navbar'
import Footer from '../footer/Footer'
import Banner from '../banner/Banner'
import CategoryPage from '../categoryPage/CategoryPage'
import BgDairy from '../../assets/dairy-banner.jpg'

const Dairy = () => {
  return (
    <div>
      <Navbar/>
      <CategoryPage title="Dairy & Eggs" bgImage={BgDairy} categories={['Dairy']}/>
      <Footer/>
    </div>
  )
}

export default Dairy
