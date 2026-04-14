import React, { useState } from 'react'
import { MdFavorite } from "react-icons/md";
import { IoBagHandle } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { CgMenuMotion } from "react-icons/cg";
import { Link } from 'react-router-dom';


const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)

    const handleCLick = ()=>{
        setShowMenu(!showMenu)
    }

  return (
    <div>
      <header className='bg-white fixed top-0 left-0 right-0 z-50'>
        <nav className='max-w-350 mx-auto px-10 md:h-[14vh] h-[10vh] flex justify-between items-center'>
            {/* logo */}
            <Link to="/" className='text-3xl font-bold'>
                Gr<span className='text-orange-500 uppercase'>o</span>cery
            </Link>

            {/* desktop menu */}
            <ul className='md:flex items-center gap-x-15 hidden'>
                <li>
                    <a href="#" className='font-semibold tracking-wider text-orange-500'>Home</a>
                </li>
                <li>
                    <a href="#" className='font-semibold tracking-wider hover:text-orange-500'>About Us</a>
                </li>
                <li>
                    <a href="#" className='font-semibold tracking-wider hover:text-orange-500'>Menu</a>
                </li>
                <li>
                    <a href="#" className='font-semibold tracking-wider hover:text-orange-500'>Contact Us</a>
                </li>
            </ul>

            {/* action search */}
            <div className='flex items-center gap-x-5'>
                {/* input search */}
                <div className='border-2 rounded-full border-orange-500 md:flex p-1 hidden'>
                    <input type="text" placeholder='Search...' 
                    className='flex h-[3vh] w-60 p-3 focus:outline-none'/>

                    <button className='bg-orange-400 rounded-full text-xl text-white h-7 w-7 flex items-center justify-center '><IoSearch/></button>
                </div>

                {/* icons */}
                <a href="#" className='text-2xl'>
                    <MdFavorite/>
                </a>

                <a href="#" className='text-2xl'>
                    <IoBagHandle/>
                </a>

                <a href="#" className='text-3xl md:hidden' onClick={handleCLick}>
                    {showMenu ?<CgMenuMotion/>:<IoMenu/>}
                </a>
            </div>


            {/* only for mobile responsive menu */}
            {showMenu && (
            <ul className='flex flex-col gap-y-12 bg-orange-500/10 backdrop-blur-lg p-10 items-center gap-x-15 md:hidden absolute top-30 left-1/2 transform -translate-x-1/2 transition-all duration-500'>
                <li>
                    <a href="#" className='font-semibold tracking-wider text-orange-500'>Home</a>
                </li>
                <li>
                    <a href="#" className='font-semibold tracking-wider hover:text-orange-500'>About Us</a>
                </li>
                <li>
                    <a href="#" className='font-semibold tracking-wider hover:text-orange-500'>Menu</a>
                </li>
                <li>
                    <a href="#" className='font-semibold tracking-wider hover:text-orange-500'>Contact Us</a>
                </li>
                <li className='border-2 rounded-full border-orange-500 flex p-1 md:hidden'>
                    <input type="text" placeholder='Search...' 
                    className='flex h-[3vh] w-60 p-3 focus:outline-none'/>

                    <button className='bg-orange-400 rounded-full text-xl text-white h-7 w-7 flex items-center justify-center '><IoSearch/></button>
                </li>
            </ul>
            )}
        </nav>
      </header>
    </div>
  )
}

export default Navbar
