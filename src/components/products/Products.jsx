import React, { useState } from 'react'
import Heading from '../heading/Heading'
import ProductList from '../productlist/ProductList.js'
import Cards from '../cards/Cards.jsx'
import Button from '../button/Button.jsx'
import { Link } from 'react-router-dom'

const Products = () => {

    const categories = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood", "Meat"]
    const [isActive, setIsActive] = useState("All")

    function handleClick(item){
        setIsActive(item)
    }

    let filterItems = (isActive === "All" ? ProductList : ProductList.filter(item=>item.category === isActive))

    const renderCards = filterItems.slice(0,8).map(product=>{
        return(
            <Cards key={product.id} image={product.image} name={product.name} price={product.price}/>
        )
    })

  return (
    <section>
        <div className='max-w-350 mx-auto px-10 py-20'>
            <Heading span="Our" text="Products"/>

            {/* Tabs */}
            <div className='flex flex-wrap gap-3 justify-center mt-10'>
                {categories.map(item=>{
                    return(
                        <button key={item} 
                        onClick={()=>handleClick(item)}
                        className={`px-5 py-2 text-lg rounded-lg ${isActive === item ? 'bg-orange-500' : 'bg-zinc-200'}`}>
                            {item}
                        </button>
                    )
                })}
            </div>

            {/* Product Listing */}
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-20'>
                {renderCards}
            </div>

            {/* view all button */}
            <div className='mt-12 mx-auto w-fit'>
                {/* <Button text="View All"/> */}
                 <Link to='allproducts' className='bg-orange-400 rounded-xl px-5 py-2 cursor-pointer md:text-lg text-md mt-2'>
                    View All
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Products
 