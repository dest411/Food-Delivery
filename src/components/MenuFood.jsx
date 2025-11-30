import React from 'react'
import Foods from '../Food';

const MenuFood = ({activeMenu}) => {
    const foodItem = Foods.find(item => item.name === activeMenu);
    const foodId = foodItem ? foodItem.id : null;

    if (!foodItem) {
        return <p>Меню не знайдено</p>;
    }
    console.log(foodItem);
    
    const name = foodItem.name;
  return (
    <div className='w-full max-w-[1500px] mx-auto ' >
        <h1 className='text-8xl font-bold ml-32' >Popular {name}s of Naples</h1>
        <div className='flex flex-col mt-10 gap-100'>
          {Object.values(foodItem.typeFood).map((food) => {
            return  <div className=' w-full relative ' key={food.name} >
                      <div className='flex items-center mx-auto  w-[90%]'>
                        <img className='h-140 w-120 absolute ' src={food.pizzaPhoto} alt="" />
                      
                        <div className='flex flex-col w-full pl-40 h-42'>
                          <div className='flex w-full gap-30 items-center justify-between pl-80 bg-gray text-white' >
                            <h1 className='text-6xl'>{food.name}</h1>
                            <h2 className='text-6xl' >{food.price}$</h2>
                          </div>

                          <ul className='text-3xl bg-gray-200 grid grid-rows-3 grid-flow-col pl-90 py-3 gap-x-3 gap-y-1 list-disc list-inside'>
                            {food.ingredients.map((ing) => {
                              return <li key={ing} className='list-disc' >{ing}</li>
                            })}
                          </ul>
                        </div>
                        
                      </div>
                      
                      

              
                    </div>
            
          })}
        </div>
        
        
       
    </div>
  )
}

export default MenuFood