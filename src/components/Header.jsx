import React from 'react'
import arrow from '../png/arrow.svg'
import dandruff from '../png/dandruff.svg'

const Header = () => {
  return (
    <div className='flex w-[95%] h-[60px] justify-between items-center' >
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
        
        <div type className='flex justify-center items-center border w-[300px] h-[50px] py-1 bg-black/6 border-black/10 rounded-2xl'>
            <input className='w-[300px] h-[50px]' type="text" placeholder='Search something...' />
            <img className='w-4 h-4' src={dandruff} alt="" />
        </div>
    </div>
  )
}

export default Header