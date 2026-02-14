import React, { memo } from 'react';
import garbage from '../../png/garbage.svg';
import { useStore } from '../../store/Store';

const ModalBasket = () => {
    console.log('render modalBasket');

    const basket = useStore((state) => state.basket);
    const isModalBasketOpen = useStore((state) => state.isModalBasketOpen);
    const addToBasket = useStore((state) => state.addToBasket);
    const removeFromBasket = useStore((state) => state.removeFromBasket);
    const removeCompletely = useStore((state) => state.removeCompletely);
    const proceedToCheckout = useStore((state) => state.openCheckout);

    const totalPrice = useStore((state) => state.getTotalPrice());

    return (
        <div
            className={`pointer-events-none fixed top-0 z-150 flex h-full w-full justify-center ${isModalBasketOpen && 'bg-black/40'}`}
        >
            <div className="flex h-screen w-full max-w-[1500px] items-center justify-center">
                <div
                    className={`pointer-events-auto flex h-auto w-8/10 flex-col rounded-2xl border-none ${
                        isModalBasketOpen
                            ? 'visible scale-100 opacity-100'
                            : 'invisible scale-90 opacity-0'
                    } bg-white p-5 transition-all duration-300 ease-in-out ${isModalBasketOpen ? 'right-0' : '-right-[3000px]'}`}
                >
                    {' '}
                    {/* <-- MAIN/ */}
                    {basket.length == 0 ? (
                        <p className="flex h-full items-center justify-center text-4xl">
                            The basket is empty
                        </p>
                    ) : (
                        <div className="flex h-full flex-col overflow-hidden">
                            {' '}
                            {/* MAIN */}
                            {/* LIST FOOD ID MODAL BASKET */}
                            <div className="custom-scrollbar flex flex-1 flex-col gap-2 overflow-y-auto">
                                {basket.map((food) => {
                                    return (
                                        <div
                                            key={food.name}
                                            className="flex h-[50px] min-h-20 w-full shrink-0 items-center justify-between gap-2 rounded"
                                        >
                                            <div className="w-60b flex w-1/2 items-center gap-3">
                                                <img
                                                    className="h-20 w-20"
                                                    src={food.typePhoto}
                                                    alt="food photo"
                                                />
                                                <p
                                                    key={food.name}
                                                    className="text-3xl"
                                                >
                                                    {food.name}
                                                </p>
                                            </div>

                                            <div className="flex w-[15%] min-w-20 cursor-pointer items-center gap-2 text-2xl select-none">
                                                <p
                                                    onClick={() =>
                                                        removeFromBasket(food)
                                                    }
                                                >
                                                    -
                                                </p>
                                                <p className="flex h-6 w-auto min-w-8 items-center justify-center rounded border text-2xl">
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
                                                className="h-3 w-3 cursor-pointer"
                                                src={garbage}
                                                alt=""
                                            />
                                            <p
                                                key={food.name}
                                                className="w-[20%] text-2xl"
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
                            <div className="mt-2 flex shrink-0 flex-col gap-5 border-t border-black/20 py-2 pt-4">
                                <div className="flex justify-between">
                                    <p className="text-right text-4xl font-bold">
                                        Total to order:
                                    </p>
                                    <p className="text-right text-4xl font-bold text-orange-400">
                                        {totalPrice}$
                                    </p>
                                </div>

                                <button
                                    onClick={proceedToCheckout}
                                    className="add-btn2 text-2xl"
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
