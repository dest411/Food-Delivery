import React, {useState, useMemo} from 'react'

const ModalBasket = ({basket, addToBasket}) => {
    
    console.log(basket);
    
    
  return (
    <div className='w-full max-w-[1500px]  relative bg-amber-200' >
        <div className='absolute bg-white right-0 max-w-[1500px] p-5 top-0 w-150 min-h-60 h-auto border '  >
            {basket.length == 0 ? <p className='text-4xl flex items-center justify-center'>The basket is empty</p> :
            <div>
                {basket.map((food) => {
                    console.log(`food in basket: ${food}`);
                    return <div key={food.length} className='flex items-center justify-between gap-2' >
                        
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
                            Price:{food.price}$
                        </p>                            
                    </div> 
                })}
                <p>Total price: {() => totalPrice(food)} </p>
            </div> 
            }
        </div>
    </div>
  )
}

export default ModalBasket