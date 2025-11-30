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
            return  <div className='flex  ' key={food.name} >
                      <img className='h-50 w-50' src={food.pizzaPhoto} alt="" />
                      
                      <div className='flex flex-col '>
                        <div className='flex gap-30' >
                          <h1>{food.name}</h1>
                          <h2>{food.price}</h2>
                        </div>

                        <ul>
                          {food.ingredients.map((ing) => {
                            return <li>{ing}</li>
                          })}
                        </ul>
                      </div>
                      

              
                    </div>
            
        })}
        
       
    </div>
  )
}

export default MenuFood