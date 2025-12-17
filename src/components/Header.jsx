import React, { memo } from 'react'
import SearchSection from './HeaderComponents/SearchSection';
import BasketSection from './HeaderComponents/BasketSection';
import arrow from '../png/arrow.svg'


const Header = memo(({ basket, setModalBasket, modalBasket, filteredFoods, searchItem, setSearchItem, addToBasket, setActiveMenu }) => {

    console.log('render header');

    return (
        <header className='shadow-xl sticky top-0 z-200 w-full bg-white backdrop-blur-sm shadow-sm border-b border-gray-100' >
            <div className='flex relative w-[95%] mx-auto top-0 z-140 bg-white  max-w-[1500px] h-20 justify-between  items-center' >
                <div className='flex gap-25 items-center ' >

                    <p className=" text-5xl font-bold bg-linear-to-r from-gray to-[#C0C0C2] bg-clip-text text-transparent">
                        Naples  
                    </p>

                    <nav>
                        <ul className='flex gap-25 text-3xl' >
                            <li>Home</li>
                            <li className='flex gap-1.5 relative' >Menu <img src={arrow} className='cursor-pointer transition-all ease-in duration-150 hover:rotate-180 absolute right-[-22px] top-[40%]' alt="" /> </li>
                            <li>Contact Us</li>
                        </ul>
                    </nav>

                </div>
                
                <div className='flex items-center gap-6'>

                    <SearchSection 
                        searchItem={searchItem}
                        setSearchItem={setSearchItem}
                        filteredFoods={filteredFoods}
                        addToBasket={addToBasket}
                        setActiveMenu={setActiveMenu}
                    />

                    <BasketSection 
                        basket={basket}
                        setModalBasket={setModalBasket}
                        modalBasket={modalBasket}
                        
                    />
                </div>
            </div> 
        </header>
    )
})

export default Header