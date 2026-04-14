import React from 'react'
import Home from './components/home/Home'
import { Route, Routes } from 'react-router-dom'
import Fruits from './components/fruits/Fruits'
import Dairy from './components/dairy/Dairy'
import SeeFood from './components/seeFood/SeeFood'
import ViewAll from './components/viewAll/ViewAll'

const App = () => {
  return (
    <div>
      

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/fruits' element={<Fruits/>}/>
        <Route path='/dairy' element={<Dairy/>}/> 
        <Route path='/seafood' element={<SeeFood/>}/> 
        <Route path='/allproducts' element={<ViewAll/>}/> 
      </Routes>
    </div>
  )
}

export default App
