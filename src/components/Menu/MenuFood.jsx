import React from 'react';
import Foods from '../../Food';
import { useStore } from '../../store/Store';

const MenuFood = () => {
    const activeMenu = useStore((state) => state.activeMenu);
    const addToBasket = useStore((state) => state.addToBasket);

    console.log('render menu food');

    const foodItem = Foods.find((item) => item.name === activeMenu);
    if (!foodItem) {
        return <p className="text-4xl uppercase">Menu is not found</p>;
    }

    const name = foodItem.name;

    return (
        <div className="mx-auto w-full max-w-[1500px] lg:mt-10 xl:mt-20">
            <h1 className="lg:text-7x mx-auto w-[90%] text-3xl font-bold sm:text-5xl lg:mb-15 xl:text-7xl 2xl:text-8xl">
                Popular {name}s of Naples
            </h1>
            <div className="mt-10 flex flex-col gap-10 sm:gap-20 lg:gap-30 xl:mt-20 xl:gap-40">
                {Object.values(foodItem.typeFood).map((food) => {
                    return (
                        <div
                            id={food.name.replace(/\s/g, '')}
                            className="relative w-full"
                            key={food.name}
                        >
                            <div className="mx-auto flex w-[90%] items-center">
                                <div className="relative flex h-auto w-full flex-col">
                                    {food.typePhoto == null ? (
                                        <div className="skeleton">
                                            PHOTO {food.name} <br /> (NOT
                                            LOADED)
                                        </div>
                                    ) : (
                                        <img
                                            className={`absolute top-[-30%] left-[-15px] z-110 select-none sm:top-[-43%] lg:top-[-45%] xl:top-[-35%] ${'h-40 w-40 sm:h-60 sm:w-60 lg:h-85 lg:w-85 xl:h-115 xl:w-115 2xl:h-135 2xl:w-135' || 'top-[-170px] h-5 w-5'}`}
                                            src={food.typePhoto}
                                            alt=""
                                        />
                                    )}

                                    <div className="bg-gray flex w-full items-center justify-between pr-3 pl-[40%] text-white 2xl:py-1">
                                        <h1 className="text-xl sm:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                                            {food.name}
                                        </h1>
                                        <h2 className="text-xl sm:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                                            {food.price}$
                                        </h2>
                                    </div>

                                    <div className="flex h-18 w-full sm:h-24 lg:h-32 xl:h-50 2xl:h-60">
                                        <div className="h-full w-[40%] bg-gray-100"></div>
                                        <ul className="relative grid h-full w-[60%] list-inside list-disc grid-flow-col grid-rows-4 bg-gray-100 p-2 text-[13px] sm:text-[18px] lg:text-[26px] xl:text-[32px] 2xl:text-[38px]">
                                            {food.ingredients.map((ing) => {
                                                return (
                                                    <li key={ing} className="">
                                                        {ing}
                                                    </li>
                                                );
                                            })}
                                            <button
                                                onClick={() =>
                                                    addToBasket(food)
                                                }
                                                className="absolute right-2 bottom-2 flex h-5 w-20 cursor-pointer items-center justify-center rounded-xl border-none bg-[#ba1c1c] text-white shadow-[0px_4px_0px_#7f1d1d] transition-all duration-100 ease-linear active:translate-y-[2px] active:shadow-none sm:h-8 sm:w-25 lg:right-3 lg:bottom-3 lg:h-11 lg:w-32 xl:right-4 xl:bottom-4 xl:h-14 xl:w-40 2xl:right-6 2xl:bottom-6 2xl:h-18 2xl:w-50"
                                            >
                                                Add to Get
                                            </button>{' '}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MenuFood;
