import React from 'react'
import Navbar from '../navabar/Navbar'
import Footer from '../footer/Footer'
import CategoryPage from '../categoryPage/CategoryPage'
import BgAll from '../../assets/all-banner.jpg'

const ViewAll = () => {


  return (
    <div>
      <Navbar/>
      <CategoryPage title="All Products" bgImage={BgAll} categories={['All']} />
      <Footer/>
    </div>
  )
}

export default ViewAll
