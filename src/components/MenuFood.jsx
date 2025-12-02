import React from 'react'
import Foods from '../Food';

const MenuFood = ({activeMenu}) => {
    const foodItem = Foods.find(item => item.name === activeMenu);
    const foodId = foodItem ? foodItem.id : null;

    if (!foodItem) {
        return <p>Меню не знайдено</p>;
    }
    console.log("render menu food");
    
    
    const name = foodItem.name;
  return (
    <div className='w-full max-w-[1500px] mx-auto ' >
        <h1 className='text-8xl font-bold ml-32' >Popular {name}s of Naples</h1>
        <div className='flex flex-col mt-10 gap-50'>
          {Object.values(foodItem.typeFood).map((food) => {
            return  <div className=' w-full relative ' key={food.name} >
                      <div className='flex items-center mx-auto  w-[90%]'>
                        
                        <div className='flex flex-col relative w-full pl-40 h-42 '>
                          {food.typePhoto == null ? 
                            <div className='skeleton' >PHOTO {food.name} <br /> (NOT LOADED)</div>
                            :
                            <img className='h-140 w-120 absolute z-110 left-0 top-[-170px]' src={food.typePhoto} alt="" />}
                          
                          <div className='flex w-full gap-30 items-center justify-between pl-80 pr-3 bg-gray text-white' >
                            <h1 className='text-6xl'>{food.name}</h1>
                            <h2 className='text-6xl' >{food.price}$</h2>
                          </div>

                          <ul className='relative text-3xl bg-gray-200 grid grid-rows-3 grid-flow-col pl-90 py-3  gap-y-1 list-disc list-inside'>
                            {food.ingredients.map((ing) => {
                              return <li key={ing} className='list-disc' >{ing}</li>
                            })}
                            <button className="add-btn">Add to Get</button>                          </ul>
                          
                        </div>
                      </div>
                    </div>
            
          })}
        </div>
        
        
       
    </div>
  )
}

export default MenuFood