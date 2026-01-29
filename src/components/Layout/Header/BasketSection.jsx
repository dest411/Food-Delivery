import React from 'react';
import shoppingcart from '../../../png/shoppingcart.png';
import { useStore } from '../../../store/Store';

const BasketSection = () => {
    const basket = useStore((state) => state.basket);

    const setModalBasketOpen = useStore((state) => state.setModalBasketOpen);
    const isModalBasketOpen = useStore((state) => state.isModalBasketOpen);

    const totalCount = basket.reduce((acc, item) => acc + item.count, 0);

    const handleBasketClick = () => {
        setModalBasketOpen(!isModalBasketOpen);
    };

    return (
        <div className="relative w-auto select-none">
            <img
                onClick={handleBasketClick}
                src={shoppingcart}
                className="h-4 w-4 cursor-pointer sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-10 lg:w-10"
                alt="shopingcart"
            />
            {basket.length > 0 && (
                <div className="flex items-center justify-center">
                    <p className="absolute -right-5 -bottom-6 flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-4xl text-white">
                        {totalCount}
                    </p>
                </div>
            )}
        </div>
    );
};

export default BasketSection;
