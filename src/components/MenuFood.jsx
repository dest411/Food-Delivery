import React from 'react'
import Foods from '../Food';

const MenuFood = ({activeMenu}) => {
    const foodItem = Foods.find(item => item.name === activeMenu);
    const foodId = foodItem ? foodItem.id : null;

    if (!foodItem) {
        return <p>Меню не знайдено</p>;
    }
    console.log(foodItem.typePizza);
    
    
  return (
    <div className='w-full bg-amber-500' >

        <h1 className='text-6xl font-bold ml-32' >Popular Pizzas of Naples</h1>
        
        {Object.values(foodItem.typePizza).map((piz) => {
            return <p key={piz.name} >{piz.name}</p>
        })}
       
    </div>
  )
}

export default MenuFood