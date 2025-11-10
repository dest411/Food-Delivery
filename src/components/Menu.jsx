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

  return (
    <div className='bg-red-1 w-[95%] h-auto my-20 '>
        
        <div className='flex justify-between  w-full h-[120px]  '>
            <div
                className="absolute  left-0 rounded-snm bg-red-700   text-white  text-6xl 
                    font-semibold   px-6  py-7   w-1/6 text-center flex items-center justify-center
                    [clip-path:polygon(0%_0%,87%_0%,100%_50%,87%_100%,0%_100%)]
                "
                >
                Menu
            </div>

            <div className='w-1/3 h-[120px] '  ></div>

            <div className=' w-full flex justify-between  items-center'>

                {Foods.map(food => {
                    return (
                        <div className='flex items-center gap-4 border border-black/7 rounded-2xl box-shadow: -1px 0px 80px -3px rgba(0,0,0,0.75)
                             shadow-[0px_0px_20px_-3px_rgba(0,0,0,0.40)] py-5 px-8 cursor-pointer' key={food.id}>
                            <img className='w-[100px] h-[80px]' src={food.photo} alt="" />
                            <span className='w-[1px] h-[80px] bg-black/10 ' ></span>
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