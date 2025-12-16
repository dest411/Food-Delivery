import React, { memo } from 'react'
import garbage from '../png/garbage.svg'

const ModalBasket = memo(({basket, addToBasket, modalBasket, removeFromBasket, removeCompletely}) => {

    console.log('render modalBasket');
    
    const totalBasket = basket.reduce((acc, food) => {
        const price = parseFloat(food.price.replace(',', '.'));
        return acc + (price * food.count);
    }, 0);

    return (
    <div className='fixed top-0 left-2 w-full h-full z-202 flex justify-center pointer-events-none'>
        
        <div className='w-full max-w-[1500px] relative h-full'>
            
            <div className={`
                absolute top-20 pointer-events-auto
                bg-white border p-5 w-150 min-h-60 h-auto 
                transition-all duration-300 ease-in-out 
                ${modalBasket ? 'right-0' : '-right-[3000px]'}`}>
                
                {basket.length == 0 ? <p className='text-4xl flex items-center justify-center'>The basket is empty</p> :
                <div>
                    {basket.map((food) => {
                        return <div key={food.name} className='flex w-full items-center justify-between gap-2' >
                            
                            <div className='flex gap-3 items-center w-60'>
                                <img className='w-20 h-20' src={food.typePhoto}  alt="food photo"/>
                                <p key={food.name} className='text-3xl' >{food.name}</p>
                            </div>
                            
                            <div className='flex text-2xl gap-2 items-center cursor-pointer w-auto min-w-20' >
                                <p onClick={()=>removeFromBasket(food)} >-</p>
                                <p className='text-2xl border w-auto min-w-8 h-6 flex items-center justify-center rounded' >{food.count}</p>
                                <p onClick={()=> addToBasket(food)} >+</p>
                            </div>
                            <img onClick={() => removeCompletely(food)} className='w-3 h-3 cursor-pointer' src={garbage} alt="" />
                            <p key={food.name} className='text-2xl'>
                                Price: {(parseFloat(food.price.replace(',', '.')) * food.count).toFixed(2)}$
                            </p>                            
                        </div> 
                    })}
                    <div className='mt-5 flex flex-col justify-end gap-2 items-center pt-5 border-t border-black'>
                        <p className='text-4xl font-bold text-right'>
                            Total to order: {totalBasket}$
                        </p>
                        <button className="add-btn2 text-2xl">Proceed to checkout</button>

                    </div>
                </div> 
                }
                
            </div>
        </div>
    </div>
    )
})

export default ModalBasket