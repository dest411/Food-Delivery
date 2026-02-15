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
            className={`pointer-events-none fixed top-0 z-150 flex h-full w-full justify-center ${
                isModalBasketOpen
                    ? 'pointer-events-auto bg-black/40'
                    : 'pointer-events-none bg-transparent'
            }`}
        >
            <div className="flex h-screen w-full max-w-[1500px] items-center justify-center">
                <div
                    ref={basketRef}
                    className={`/* here */ xs:h-40 pointer-events-auto flex h-[150px] w-8/10 flex-col rounded-2xl border-none sm:h-65 md:h-60 lg:h-80 xl:h-120 ${
                        isModalBasketOpen
                            ? 'visible scale-100 opacity-100'
                            : 'invisible scale-90 opacity-0'
                    } bg-white px-3 py-2 transition-all duration-300 ease-in-out ${isModalBasketOpen ? 'right-0' : '-right-[3000px]'}`}
                >
                    {' '}
                    {/* <-- MAIN/ */}
                    {basket.length == 0 ? (
                        <p className="flex h-full items-center justify-center text-xl lg:text-5xl">
                            The basket is empty
                        </p>
                    ) : (
                        <div className="flex h-full flex-col overflow-hidden py-1">
                            {' '}
                            {/* MAIN */}
                            {/* LIST FOOD ID MODAL BASKET */}
                            <div className="custom-scrollbar xs:py-1 flex h-auto flex-1 flex-col gap-2 overflow-y-auto bg-amber-200 sm:gap-5 sm:py-3 md:gap-12 md:py-5 lg:gap-18 lg:py-8 xl:gap-30 xl:py-10 xl:pl-2 2xl:gap-35">
                                {basket.map((food) => {
                                    return (
                                        <div
                                            key={food.name}
                                            className="flex h-5 w-full shrink-0 items-center justify-between gap-2 rounded"
                                        >
                                            <div className="w-20b flex w-1/2 items-center gap-3 sm:w-1/3 lg:w-4/10">
                                                <img
                                                    className="xs:h-10 xs:w-10 h-7 w-7 sm:h-15 sm:w-15 md:h-20 md:w-20 lg:h-30 lg:w-30 xl:h-40 xl:w-40"
                                                    src={food.typePhoto}
                                                    alt="food photo"
                                                />
                                                <p
                                                    key={food.name}
                                                    className="xs:text-[13px] text-[10px] sm:text-lg md:text-xl lg:text-3xl xl:text-4xl"
                                                >
                                                    {food.name}
                                                </p>
                                            </div>

                                            <div className="xs:text-[14px] xs:gap-2 flex w-[15%] min-w-5 cursor-pointer items-center gap-1 bg-emerald-200 text-[10px] select-none sm:gap-4 sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl">
                                                <p
                                                    onClick={() =>
                                                        removeFromBasket(food)
                                                    }
                                                >
                                                    -
                                                </p>
                                                <p className="xs:text-[12px] flex h-3 w-auto min-w-3 items-center justify-center rounded border text-[10px] sm:h-5 sm:min-w-5 sm:text-lg md:text-xl lg:h-6 lg:w-6 lg:text-2xl xl:h-8 xl:w-8 xl:text-4xl">
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
                                                className="xs:h-3 xs:w-3 h-2 w-2 cursor-pointer sm:h-4 sm:w-4 md:h-5 md:min-w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8"
                                                src={garbage}
                                                alt=""
                                            />
                                            <p
                                                key={food.name}
                                                className="xs:text-[13px] w-[20%] text-[10px] sm:text-lg md:text-xl lg:text-3xl xl:text-4xl"
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
                            <div className="flex shrink-0 flex-col border-t border-black/20 sm:gap-3 xl:py-4">
                                <div className="xs:text-[14px] flex justify-between text-right text-[12px] font-bold sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl">
                                    <p className="">Total to order:</p>
                                    <p className="text-orange-400">
                                        {totalPrice}$
                                    </p>
                                </div>

                                <button
                                    onClick={proceedToCheckout}
                                    className="add-btn2 xs:text-[14px] xs:h-6! xs:w-22! lx:h-17! h-4! w-17! text-[10px] sm:h-8! sm:w-30! sm:text-lg md:h-10! md:w-40! md:text-xl lg:h-14! lg:w-55! lg:text-3xl xl:h-15! xl:w-65! xl:text-4xl"
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
