import React from 'react'
import arrow from '../png/arrow.svg'
import dandruff from '../png/dandruff.svg'

const Header = () => {
  return (
    <div className='flex w-[95%] h-[60px] justify-between  items-center bg-amber-300' >
        <div className='flex gap-25 items-center ' >
            <p className=' text-4xl ' >Naples</p>
            <nav>
                <ul className='flex gap-10 text-3xl' >
                    <li>Home</li>
                    <li className='flex gap-1.5 relative' >Menu <img src={arrow} className='absolute right-[-17px] top-[40%]' alt="" /> </li>
                    <li>Contact Us</li>
                </ul>
            </nav>
        </div>
        
        <div className='relative'>
            <input 
                className='w-[300px] h-[50px] border border-black/10 rounded-2xl px-3 bg-black/5 
                    placeholder:text-3xl placeholder:text-gray-500
                    flex items-center text-3xl leading-[50px] outline-none'                
                type="text" 
                placeholder='Search something...' 
            />
            <img className='absolute w-5 h-5 right-5 top-[30%]' src={dandruff} alt="dandruff" />   
        </div>
        
    </div>
  )
}

export default Header