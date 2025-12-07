import React, {useMemo, memo, useState} from 'react'
import arrow from '../png/arrow.svg'
import dandruff from '../png/dandruff.svg'
import shoppingcart from '../png/shoppingcart.png'


const Header = memo(({basket, setModalBasket, modalBasket }) => {
    

    console.log('render header');
  return (
    <div className='flex w-[95%]  max-w-[1500px] h-20 justify-between  items-center' >
        <div className='flex gap-25 items-center ' >
            <p className="text-5xl font-bold bg-linear-to-r from-[#67666A] to-[#C0C0C2] bg-clip-text text-transparent">
                Naples  
            </p>

            <nav>
                <ul className='flex gap-25 text-3xl' >
                    <li>Home</li>
                    <li className='flex gap-1.5 relative' >Menu <img src={arrow} className='absolute right-[-22px] top-[40%]' alt="" /> </li>
                    <li>Contact Us</li>
                </ul>
            </nav>
        </div>
        
        <div className='flex items-center gap-8' >
            <div className='relative h-[50px] flex items-center justify-center border border-black/10 rounded-2xl px-3 bg-black/5 '>
            <input
                id='inputSearch' 
                className='w-[300px] h-[25px] 
                    placeholder:text-3xl placeholder:text-gray-500
                    flex items-center text-3xl leading-[50px] outline-none'                
                type="text" 
                placeholder='Search something...' 
            />
            <img className='absolute  w-5 h-5 right-5 top-[25%]' src={dandruff} alt="dandruff" />   
            </div>
            <div className='relative' >
                <img onClick={() => setModalBasket(!modalBasket)} src={shoppingcart} className='w-8 h-8 cursor-pointer' alt="shopingcart"  />
                {basket.length > 0 && 
                    <div className='flex items-center justify-center ' >
                        <p className='text-4xl w-8 h-8 absolute -right-5 -bottom-6 bg-red-600 flex text-white items-center justify-center rounded-full' >{basket.length}</p>
                    </div>
                }
            </div>
        </div>
        
    </div>
  )
})

export default Header