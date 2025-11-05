import React from 'react'
import pizza from '../png/pizza.svg'
import pasta from '../png/pasta.svg'
import burger from '../png/burger.svg'



const Menu = () => {
    const clipPathStyle = 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)';
  return (
    <div className='bg-red-1 w-full h-auto my-20'>
        <div className='flex justify-between'>
            <div
                className="
                    rounded-snm
                    bg-red-700 
                    text-white
                    text-6xl 
                    font-semibold 
                    px-6 
                    py-7 
                    w-60
                    text-center
                    flex items-center justify-center
                    // Застосовуємо clip-path за допомогою довільного значення
                    [clip-path:polygon(0%_0%,87%_0%,100%_50%,87%_100%,0%_100%)]
                "
                >
                Menu
            </div>
            <div>
                <div className='flex justify-center items-center gap-4 border border-black/7 rounded-2xl box-shadow: -1px 0px 80px -3px rgba(0,0,0,0.75)
                    shadow-[-1px_0px_80px_-3px_rgba(0,0,0,0.20)] p-5' >
                    <img src={pizza} alt="" />
                    <span className='w-[1px] h-[80px] bg-black/10 ' ></span>
                    <p className='text-5xl' >Pizza</p>

                </div>
                <div></div>
                <div></div>
            </div>

        </div>
    </div>
  )
}

export default Menu