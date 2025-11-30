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
    <div className='w-full ' >
        <h1 className='text-6xl font-bold ml-32' >Popular {name}s of Naples</h1>
        
        {Object.values(foodItem.typeFood).map((food) => {
            return  <div className='flex items-center gap-10' key={food.name} >
                      <img className='h-70 w-70' src={food.pizzaPhoto} alt="" />
                      
                      <div className='flex flex-col w-100 h-42 bg-blue-200 '>
                        <div className='flex gap-30 justify-between ' >
                          <h1 className='text-4xl'>{food.name}</h1>
                          <h2 className='text-4xl' >{food.price}</h2>
                        </div>

                        <ul className='' >
                          {food.ingredients.map((ing) => {
                            return <li className='list-disc' >{ing}</li>
                          })}
                        </ul>
                      </div>
                      

              
                    </div>
            
        })}
        
       
    </div>
  )
}

export default MenuFood