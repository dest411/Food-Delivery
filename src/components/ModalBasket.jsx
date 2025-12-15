import React, { memo } from 'react'

const ModalBasket = memo(({basket, addToBasket, modalBasket, removeFromBasket}) => {

    console.log('render modalBasket');
    
    const totalBasket = basket.reduce((acc, food) => {
        const price = parseFloat(food.price.replace(',', '.'));
        return acc + (price * food.count);
    }, 0);

    return (
    <div className='fixed top-0 left-0 w-full h-full z-100 flex justify-center pointer-events-none'>
        
        <div className='w-full max-w-[1500px] relative h-full'>
            
            <div className={`
                absolute top-20 pointer-events-auto
                bg-white border p-5 w-150 min-h-60 h-auto 
                transition-all duration-300 ease-in-out 
                ${modalBasket ? 'right-0' : '-right-[3000px]'}
            `}>
                
                {basket.length == 0 ? <p className='text-4xl flex items-center justify-center'>The basket is empty</p> :
                <div>
                    {basket.map((food) => {
                        return <div key={food.name} className='flex items-center justify-between gap-2' >
                            
                            <div className='flex gap-3 items-center w-60'>
                                <img className='w-20 h-20' src={food.typePhoto}  alt="food photo"/>
                                <p key={food.name} className='text-2xl' >{food.name}</p>
                            </div>
                            
                            <div className='flex text-2xl gap-2 items-center cursor-pointer' >
                                <p onClick={()=>removeFromBasket(food)} >-</p>
                                <p className='border w-8 h-6 flex items-center justify-center rounded' >{food.count}</p>
                                <p onClick={()=> addToBasket(food)} >+</p>
                            </div>
                            <p key={food.name} className='text-2xl'>
                                Price: {(parseFloat(food.price.replace(',', '.')) * food.count).toFixed(2)}$
                            </p>                            
                        </div> 
                    })}
                    <div className='mt-5 pt-5 border-t border-black'>
                        <p className='text-3xl font-bold text-right'>
                            Total:{totalBasket}$
                        </p>
                    </div>
                </div> }
                
            </div>
        </div>
    </div>
    )
})

export default ModalBasket