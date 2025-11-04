import React from 'react'
import background from '../png/bg.svg'

const Hero = () => {
  return (
    <div 
        style={{ backgroundImage: `url(${background})` }}
        className='w-full h-[800px]  flex flex-col justify-center items-center text-center bg-cover bg-center  text-white' 
    >
        <h1 className='text-9xl' >The fastest delivery in <br /> your city</h1>
        <p className='text-7xl' > Visit our restaurant to taste our italian cuisine or <br /> simply order it from our website.</p>
        <button>Order now</button>
    </div>
  )
}

export default Hero