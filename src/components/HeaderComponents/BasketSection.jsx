import React from 'react'
import shoppingcart from "../../png/shoppingcart.png";
import { useStore } from '../../store/Store';

const BasketSection = () => {

    const basket = useStore((state) => state.basket);
    
    // Зверни увагу: в store ми назвали це setModalBasketOpen та isModalBasketOpen
    const setModalBasketOpen = useStore((state) => state.setModalBasketOpen);
    const isModalBasketOpen = useStore((state) => state.isModalBasketOpen);

    // 2. Рахуємо totalCount
    // Оскільки basket приходить зі стору, при його зміні компонент перерендериться і перерахує це число.
    const totalCount = basket.reduce((acc, item) => acc + item.count, 0);

    const handleBasketClick = () => {
        setModalBasketOpen(!isModalBasketOpen);
    }

    return (
        <div className='relative select-none' >
            <img onClick={handleBasketClick} src={shoppingcart} className='w-8 h-8 cursor-pointer' alt="shopingcart"  />
            {basket.length > 0 && 
                <div className='flex items-center justify-center ' >
                    <p className='text-4xl w-8 h-8 absolute -right-5 -bottom-6 bg-red-600 flex text-white items-center justify-center rounded-full' >{totalCount}</p>
                </div>
            }
        </div>
    )
}

export default BasketSection