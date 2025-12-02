import React from 'react'
import background from '../png/bg.svg'

const Hero = React.memo(() => {
  console.log("hero render");
  
  return (
    <div 
        style={{ backgroundImage:`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${background})`,
        
    
    }}
        className='w-full h-[700px]  flex flex-col justify-center items-center text-center bg-cover bg-center  text-white' 
    >
        <h1 className='text-9xl' >The fastest delivery in <br /> your city</h1>
        <p className='text-7xl' > Visit our restaurant to taste our italian cuisine or <br /> simply order it from our website.</p>
        <button className='text-5xl border py-3 px-8 rounded-3xl cursor-pointer 
        transition duration-300 hover:bg-white/15 transform hover:scale-110
        active:scale-95 active:bg-white/25' >Order now</button>
    </div>
  )
})

export default Hero