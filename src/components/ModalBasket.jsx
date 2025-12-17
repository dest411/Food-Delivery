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
                bg-white
                h-auto max-h-[80vh] border p-5 w-150 min-h-50'
                flex flex-col
                transition-all duration-300 ease-in-out 
                ${modalBasket ? 'right-0' : '-right-[3000px]'}`}>
                
                {basket.length == 0 ? <p className='text-4xl flex items-center justify-center h-full'>The basket is empty</p> :

                <div className='flex flex-col h-full overflow-hidden ' > {/* MAIN */}

                    <div className=' overflow-y-auto custom-scrollbar flex-1 flex flex-col gap-2 ' >

                        {basket.map((food) => {
                            return <div key={food.name} className='flex w-full h-[50px] min-h-20 items-center justify-between gap-2 rounded shrink-0' >                           
                                <div className=' flex w-1/2 gap-3  items-center w-60b '>
                                    <img className='w-20 h-20' src={food.typePhoto}  alt="food photo"/>
                                    <p key={food.name} className='text-3xl' >{food.name}</p>
                                </div>
                                
                                <div className='flex text-2xl gap-2 items-center cursor-pointer w-[15%]  min-w-20 select-none' >
                                    <p onClick={()=>removeFromBasket(food)} >-</p>
                                    <p className='text-2xl border w-auto min-w-8 h-6 flex items-center justify-center rounded' >{food.count}</p>
                                    <p onClick={()=> addToBasket(food)} >+</p>
                                </div>

                                <img onClick={() => removeCompletely(food)} className='w-3 h-3 cursor-pointer ' src={garbage} alt="" />
                                <p key={food.name} className='text-2xl w-[20%]'>
                                    Price: {(parseFloat(food.price.replace(',', '.')) * food.count).toFixed(2)}$
                                </p>                            
                            </div> 
                        })}
                    </div>

                    {/* FOOTER MODAL BASKET */}
                    <div className='mt-2 pt-4 flex flex-col gap-5 py-2 border-t border-black/20 shrink-0 '>
                        <div className='flex justify-between' >
                            <p className='text-4xl font-bold text-right' >Total to order:</p>
                            <p className='text-4xl text-orange-400 font-bold text-right'>{totalBasket}$</p> 
                        </div>
                        
                        <button className="add-btn2 text-2xl">Proceed to checkout</button>

                    </div>

                    

                </div>
                
                }{/* MAIN */}
                
            </div>
        </div>
    </div>
    )
})

export default ModalBasket