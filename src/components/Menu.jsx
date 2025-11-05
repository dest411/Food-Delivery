import React from 'react'
import pizza from '../png/pizza.svg'
import pasta from '../png/pasta.svg'
import burger from '../png/burger.svg'

const Foods = [
    {
        id: 1,
        name: 'Pizza',
        photo: pizza,
        typePizza: {
            Pepperoni: 'Pepperoni pizza',
            Vegetables: 'Vegetables pizza',
            Margherita: 'Margherita pizza'
        }
    },
    {
        id: 2,
        name: 'Burger',
        photo: burger
    },
    {
        id: 3,
        name: 'Pasta',
        photo: pasta
    }
]


const Menu = () => {

  const clipPathStyle = 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)';

  return (
    <div className='bg-red-1 w-[95%] h-auto my-20 '>
        
        <div className='flex gap-15 w-full h-[120px]'>
            <div
                className="absolute  left-0 rounded-snm bg-red-700   text-white  text-6xl 
                    font-semibold   px-6  py-6   w-60 text-center flex items-center justify-center
                    [clip-path:polygon(0%_0%,87%_0%,100%_50%,87%_100%,0%_100%)]
                "
                >
                Menu
            </div>

            <div className='w-[220px] h-[120px] bg-blue-950 '  ></div>

            <div className=' w-full flex justify-between items-center '>

                {Foods.map(food => {
                    return (
                        <div className='flex items-center gap-4 border border-black/7 rounded-2xl box-shadow: -1px 0px 80px -3px rgba(0,0,0,0.75)
                    shadow-[-1px_0px_80px_-3px_rgba(0,0,0,0.20)] p-3' key={food.id}>
                            <img className='w-[100px] h-[80px]' src={food.photo} alt="" />
                            <span className='w-[1px] h-[80px] bg-black/10 ' ></span>
                            <p className='text-5xl' >{food.name}</p>
                        </div>
                    );
                })}
                
            </div>

        </div>
    </div>
  )
}

export default Menu