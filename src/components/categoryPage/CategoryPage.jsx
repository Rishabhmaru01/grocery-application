import React from 'react'
import ProductList from '../productlist/ProductList.js'
import Cards from '../cards/Cards.jsx'
import Banner from '../banner/Banner.jsx'

const CategoryPage = ({title, bgImage, categories=[]}) => {

    let filterItems = categories.includes('All')
    ? ProductList
    : ProductList.filter(item=> categories.includes(item.category))

    const renderProductList = filterItems.map((product,index)=>(

            <Cards key={index} image={product.image} name={product.name} price={product.price}/>
        ))


  return (
    <div>
        <Banner title={title} bgImage={bgImage}/>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-9 py-20 max-w-350 mx-auto px-10'>
            {renderProductList}
        </div>
      
    </div>
  )
}

export default CategoryPage
