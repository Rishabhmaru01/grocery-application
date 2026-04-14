import React from 'react'
import Heading from '../heading/Heading'
import FruitsCat from '../../assets/fruits-and-veggies.png'
import DairyCat from '../../assets/dairy-and-eggs.png'
import SeafoodCat from '../../assets/meat-and-seafood.png'
import Button from '../button/Button'
import { Link } from 'react-router-dom'

const Category = () => {

    const categoryData = [
        {
            id: 1,
            title: "Fruits & Veggies",
            description: "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
            image: FruitsCat,
            path: '/fruits'
        },
        {
            id: 2,
            title: "Dairy & Eggs",
            description: "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
            image: DairyCat,
            path: '/dairy'
        },
        {
            id: 3,
            title: "Meat & SeaFood",
            description: "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
            image: SeafoodCat,
            path: '/seafood'
        }
    ]

  return (
    <section>
        <div className='max-w-350 mx-auto px-10 py-20'>
            <Heading span="Shop" text="by Category"/>
        
            {/* Category Card */}
            <div className='flex flex-wrap gap-10 md:mt-10 -mt-15'>
                {categoryData.map(({id, title, description, image, path})=>(
                    <div key={id} className='flex-1 flex-basis-[300px]'>
                        <div className='w-full min-h-[30vh] relative -mb-12'>
                            <img src={image} alt={title} className='absolute bottom-0'/>
                        </div>

                        <div className='bg-zinc-100 pt-16 p-8 rounded-xl'>
                            <h3 className='text-2xl font-bold'>{title}</h3>
                            <p className='mt-3 mb-5'>{description}</p>
                            {/* <Button text="See All"/> */}
                            <Link to={path} className='bg-orange-400 rounded-xl px-5 py-2 cursor-pointer md:text-lg text-md mt-2'>
                                See All
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </section>
  )
}

export default Category
