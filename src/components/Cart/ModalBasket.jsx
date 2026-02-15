import React, { memo, useRef, useEffect } from 'react';
import garbage from '../../png/garbage.svg';
import { useStore } from '../../store/Store';

const ModalBasket = () => {
    console.log('render modalBasket');

    const basketRef = useRef(null);
    const basket = useStore((state) => state.basket);
    const isModalBasketOpen = useStore((state) => state.isModalBasketOpen);
    const setModalBasketOpen = useStore((state) => state.setModalBasketOpen);
    const addToBasket = useStore((state) => state.addToBasket);
    const removeFromBasket = useStore((state) => state.removeFromBasket);
    const removeCompletely = useStore((state) => state.removeCompletely);
    const proceedToCheckout = useStore((state) => state.openCheckout);
    const totalPrice = useStore((state) => state.getTotalPrice());

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                isModalBasketOpen &&
                basketRef.current &&
                !basketRef.current.contains(event.target)
            ) {
                setModalBasketOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isModalBasketOpen, setModalBasketOpen]);

    return (
        <div
            className={`pointer-events-none fixed top-0 z-150 flex h-full w-full justify-center ${isModalBasketOpen && 'bg-black/40'}`}
        >
            <div className="flex h-screen w-full max-w-[1500px] items-center justify-center">
                <div
                    ref={basketRef}
                    className={`/* here */ pointer-events-auto flex h-[150px] w-8/10 flex-col rounded-2xl border-none ${
                        isModalBasketOpen
                            ? 'visible scale-100 opacity-100'
                            : 'invisible scale-90 opacity-0'
                    } bg-white px-3 py-2 transition-all duration-300 ease-in-out ${isModalBasketOpen ? 'right-0' : '-right-[3000px]'}`}
                >
                    {' '}
                    {/* <-- MAIN/ */}
                    {basket.length == 0 ? (
                        <p className="flex h-full items-center justify-center text-xl">
                            The basket is empty
                        </p>
                    ) : (
                        <div className="flex h-full flex-col overflow-hidden py-1">
                            {' '}
                            {/* MAIN */}
                            {/* LIST FOOD ID MODAL BASKET */}
                            <div className="custom-scrollbar flex h-auto flex-1 flex-col gap-2 overflow-y-auto">
                                {basket.map((food) => {
                                    return (
                                        <div
                                            key={food.name}
                                            className="flex h-5 w-full shrink-0 items-center justify-between gap-2 rounded"
                                        >
                                            <div className="w-20b flex w-1/2 items-center gap-3">
                                                <img
                                                    className="xs:h-10 xs:w-10 h-7 w-7"
                                                    src={food.typePhoto}
                                                    alt="food photo"
                                                />
                                                <p
                                                    key={food.name}
                                                    className="text-[10px]"
                                                >
                                                    {food.name}
                                                </p>
                                            </div>

                                            <div className="flex w-[15%] min-w-5 cursor-pointer items-center gap-1 text-[10px] select-none">
                                                <p
                                                    onClick={() =>
                                                        removeFromBasket(food)
                                                    }
                                                >
                                                    -
                                                </p>
                                                <p className="flex h-3 w-auto min-w-3 items-center justify-center rounded border text-[10px]">
                                                    {food.count}
                                                </p>
                                                <p
                                                    onClick={() =>
                                                        addToBasket(food)
                                                    }
                                                >
                                                    +
                                                </p>
                                            </div>

                                            <img
                                                onClick={() =>
                                                    removeCompletely(food)
                                                }
                                                className="h-2 w-2 cursor-pointer"
                                                src={garbage}
                                                alt=""
                                            />
                                            <p
                                                key={food.name}
                                                className="w-[20%] text-[10px]"
                                            >
                                                Price:{' '}
                                                {(
                                                    parseFloat(
                                                        food.price.replace(
                                                            ',',
                                                            '.',
                                                        ),
                                                    ) * food.count
                                                ).toFixed(2)}
                                                $
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                            {/* FOOTER MODAL BASKET */}
                            <div className="flex shrink-0 flex-col border-t border-black/20">
                                <div className="flex justify-between">
                                    <p className="text-right text-[12px] font-bold">
                                        Total to order:
                                    </p>
                                    <p className="text-right text-[12px] font-bold text-orange-400">
                                        {totalPrice}$
                                    </p>
                                </div>

                                <button
                                    onClick={proceedToCheckout}
                                    className="add-btn2 h-4! w-17! text-[10px]"
                                >
                                    Proceed to checkout
                                </button>
                            </div>
                        </div>
                    )}{' '}
                    {/* <-- MAIN */}
                </div>
            </div>
        </div>
    );
};

export default ModalBasket;
