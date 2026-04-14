import React from 'react'

const Button = ({text}) => {
  return (
    <div>
      <button className='bg-orange-400 rounded-xl px-5 py-2 cursor-pointer md:text-lg text-md mt-2'>{text}</button>
    </div>
  )
}

export default Button
