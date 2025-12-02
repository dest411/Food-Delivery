import React, {useState} from 'react'
import Foods from '../Food'

const Menu = ({activeMenu, setActiveMenu}) => {
    console.log('render menu');
  return (
     <div className=' w-[95%]  max-w-[1500px] h-auto my-20 '>
        
        <div className='flex justify-between  w-full h-[120px]  '>

            <div
                className="absolute  left-0 rounded-snm bg-red-700   text-white  text-6xl 
                    font-semibold   px-6  py-7   w-1/6 text-center flex items-center justify-center
                    [clip-path:polygon(0%_0%,87%_0%,100%_50%,87%_100%,0%_100%)]"
                >
                Menu
            </div>

            <div className='w-1/3 h-[120px] '  ></div>

            <div className=' w-full flex justify-between  items-center'>

                {Foods.map(food => {
                    const isActive = food.name === activeMenu;
                    return (
                        <div className={`flex items-center gap-4 border  rounded-2xl box-shadow: -1px 0px 80px -3px rgba(0,0,0,0.75)
                             shadow-[0px_0px_20px_-3px_rgba(0,0,0,0.40)] 
                             py-5 px-8 cursor-pointer
                             ${isActive ? 'border-amber-600': 'border-black/7'}`}
                             key={food.id}
                             onClick={() => setActiveMenu(food.name)}
                             >
                            <img className='w-[100px] h-20' src={food.photo} alt="" />
                            <span className='w-px h-20 bg-black/10 ' ></span>
                            <p className='text-5xl' >{food.name}</p>
                        </div>
                    );
                })}
                
            </div>
            
            <div className='w-1/10 h-[120px'  ></div>

        </div>
    </div>
  )
}

export default Menu