import React, {useState} from 'react'

const ModalBasket = ({basket}) => {
  return (
    <div>
        <div className='absolute bg-white -right-[2.8%] p-5 top-20 w-150 min-h-60 h-auto border '  >
            {basket.length == 0 ? <p className='text-4xl flex items-center justify-center'>The basket is empty</p> :
            <div>
                {groupedBasket.map((food) => {
                    console.log(food);
                    return <div key={food.name} className='flex items-center justify-between gap-2' >
                        
                        <div className='flex gap-3 items-center w-60'>
                            <img className='w-20 h-20' src={food.typePhoto}  alt="food photo"/>
                            <p key={food.name} className='text-2xl' >{food.name}</p>
                        </div>
                        
                        <div className='flex text-2xl gap-2 items-center cursor-pointer' >
                            <p>-</p>
                            <p className='border w-8 h-6 flex items-center justify-center rounded' >{food.count}</p>
                            <p onClick={()=> addToBasket(food)} >+</p>
                        </div>
                        <p key={food.name} className='text-2xl'>
                            Price: {(parseFloat(food.price.replace(',', '.')) * food.count).toFixed(2)}$
                        </p>                            
                    </div> 
                })}
            </div> 
            }
        </div>
    </div>
  )
}

export default ModalBasket