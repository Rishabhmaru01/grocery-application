import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer className='bg-zinc-100'>
        <div className='flex flex-wrap gap-y-12 max-w-350 mx-auto px-10 py-20'>
            <div className='flex-1 basis-75'>
                <a href="#" className='text-3xl font-bold'>
                    Gr<span className='text-orange-500 uppercase'>o</span>cery
                </a>

                <p className='text-zinc-400 mt-6 max-w-87'>
                    Bred for a high content of beneficial substance. Our products are all fresh and healthy.
                </p>

                <p className='text-zinc-800 mt-6'>
                    2025 &copy; all rights reserved
                </p>
            </div>

            <ul className='flex-1'>
                <li>
                    <h5 className='text-zinc-600 text-2xl font-bold'>Company</h5>
                </li>
                <li className='mt-6'>
                    <a href="#" className='hover:text-orange-400 text-zinc-600'>About</a>
                </li>
                <li className='mt-6'> 
                    <a href="#" className='hover:text-orange-400 text-zinc-600'>FAQ</a>
                </li>
            </ul>

            <ul className='flex-1'>
                <li>
                    <h5 className='text-zinc-600 text-2xl font-bold'>Support</h5>
                </li>
                <li className='mt-6'>
                    <a href="#" className='hover:text-orange-400 text-zinc-600'>Support Center</a>
                </li>
                <li className='mt-6'> 
                    <a href="#" className='hover:text-orange-400 text-zinc-600'>Feedback</a>
                </li>
                <li className='mt-6'> 
                    <a href="#" className='hover:text-orange-400 text-zinc-600'>Contact Us</a>
                </li>
            </ul>

            <div className='flex-1'>
                <h5 className='text-zinc-600 text-2xl font-bold'>Stay Connected</h5>
            
                <p className='mt-6 text-zinc-600'>
                    Questions or Feedback?<br />
                    We love from here you... 
                </p>

                <div className='flex bg-white p-1 mt-6 rounded-lg'>
                    <input type="email" name="email" id="email" autoComplete='off' placeholder='Email Addresh' className='h-[5vh] pl-2 flex-1 focus:outline-none' />
                    <button className='bg-orange-400 p-2 rounded-lg text-white text-xl'>
                        <IoIosArrowForward/>
                    </button>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
