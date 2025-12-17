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
                bg-amber-100 border p-5 w-150 
                /* 1. Обмежуємо висоту вікна, щоб воно не вилазило за екран */
                h-auto max-h-[80vh] 
                /* 2. Робимо Flex-контейнер, щоб правильно розподілити місце */
                flex flex-col
                transition-all duration-300 ease-in-out 
                ${modalBasket ? 'right-0' : '-right-[3000px]'}`}>
                
                {basket.length == 0 ? <p className='text-4xl flex items-center justify-center h-full'>The basket is empty</p> :
                
                // Це обгортка для всього вмісту (список + футер)
                // Вона має займати 100% висоти батька
                <div className='flex flex-col h-full overflow-hidden'> 
                    
                    {/* --- СПИСОК ТОВАРІВ (СКРОЛИТЬСЯ) --- */}
                    {/* overflow-y-auto: вмикає скрол, коли товарів багато */}
                    {/* flex-1: займає все доступне місце, відштовхуючи футер вниз */}
                    <div className='flex-1 overflow-y-auto pr-2 custom-scrollbar flex flex-col gap-2'>
                        {basket.map((food) => {
                            return (
                                <div key={food.name} className='bg-emerald-500 flex w-full min-h-[80px] items-center justify-between gap-2 p-2 rounded shrink-0' >
                                    
                                    <div className='flex w-1/2 gap-3  items-center w-60b '>
                                        <img className='w-16 h-16 object-cover rounded' src={food.typePhoto}  alt="food photo"/>
                                        <p className='text-2xl truncate' title={food.name}>{food.name}</p>
                                    </div>
                                    
                                    <div className='flex text-2xl gap-2 items-center cursor-pointer min-w-20 select-none' >
                                        <p onClick={()=>removeFromBasket(food)} className="hover:scale-125 transition px-2">-</p>
                                        <p className='text-2xl border bg-white min-w-8 h-8 flex items-center justify-center rounded' >{food.count}</p>
                                        <p onClick={()=> addToBasket(food)} className="hover:scale-125 transition px-2">+</p>
                                    </div>

                                    <img onClick={() => removeCompletely(food)} className='w-5 h-5 cursor-pointer hover:rotate-12 transition' src={garbage} alt="" />
                                    
                                    <p className='text-xl w-[20%] text-right font-bold'>
                                        {(parseFloat(food.price.replace(',', '.')) * food.count).toFixed(2)}$
                                    </p>                            
                                </div> 
                            )
                        })}
                    </div>

                    {/* --- ФУТЕР (TOTAL + КНОПКА) - ЗАВЖДИ ЗНИЗУ --- */}
                    <div className='mt-2 pt-4 border-t border-black/20 shrink-0 bg-amber-100'>
                        <div className='flex justify-between items-center mb-4'>
                            <p className='text-3xl font-bold'>Total:</p>
                            <p className='text-4xl font-bold text-orange-600'>{totalBasket.toFixed(2)}$</p>
                        </div>
                        <button className="add-btn2 w-full text-2xl py-3 rounded-xl hover:bg-green-600 transition">
                            Proceed to checkout
                        </button>
                    </div>

                </div> 
                }
                
            </div>
        </div>
    </div>
    )
})

export default ModalBasket