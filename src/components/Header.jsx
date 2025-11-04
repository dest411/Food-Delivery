import React from 'react'

const Header = () => {
  return (
    <div className='flex bg-amber-400 w-[95%] h-auto justify-between ' >
        <div className='flex gap-25' >
            <p>LOGO</p>
            <nav>
                <ul className='flex gap-10' >
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
        </div>
        
        <input className='border' type="text" placeholder='Search something...' />
    </div>
  )
}

export default Header