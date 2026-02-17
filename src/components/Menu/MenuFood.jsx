import React from 'react';
import Foods from '../../Food';
import { useStore } from '../../store/Store';

const MenuFood = () => {
    const activeMenu = useStore((state) => state.activeMenu);
    const addToBasket = useStore((state) => state.addToBasket);

    const foodItem = Foods.find((item) => item.name === activeMenu);
    if (!foodItem) {
        return <p className="text-4xl uppercase">Menu is not found</p>;
    }

    const name = foodItem.name;

    return (
        <div className="mx-auto w-full max-w-[1500px] lg:mt-10 xl:mt-20">
            <h1
                className="mx-auto w-[90%] text-3xl font-bold sm:text-3xl md:text-3xl lg:mb-15 lg:text-4xl xl:text-5xl 2xl:text-6xl" //2xl:text-6xl
            >
                Popular {name}s of Naples
            </h1>
            <div className="mt-10 flex flex-col gap-10 sm:gap-10 md:gap-12 lg:gap-12 xl:mt-20 xl:gap-18 2xl:gap-20">
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
                                            className={`absolute z-110 select-none ${
                                                activeMenu === 'Pizza'
                                                    ? '2xs:h-30 xxs:w-30 xs:w-34 xs:h-34 xs:top-[-30%] l:h-45 l:w-45 top-[-10%] -left-2.5 h-25 w-27 sm:top-[-30%] sm:h-40 sm:w-40 md:top-[-25%] md:h-40 md:w-40 lg:top-[-25%] lg:h-50 lg:w-50 xl:top-[-35%] xl:h-70 xl:w-70 2xl:h-80 2xl:w-80' // 2xl 80
                                                    : 'top-[-5%] h-30 w-35 sm:top-[-20%] sm:h-45 sm:w-50 md:h-53 md:w-58 lg:top-[-25%] lg:h-65 lg:w-85 xl:top-[-15%] xl:h-90 xl:w-105 2xl:h-105 2xl:w-130'
                                            } `}
                                            src={food.typePhoto}
                                            alt=""
                                        />
                                    )}

                                    <div className="bg-gray xxs:pl-[35%] xs:pl-[31%] flex w-full items-center justify-between pr-3 pl-[40%] text-white 2xl:py-1">
                                        <h1
                                            className="text-md sm:text-xl md:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl" // 2xl:text-5xl
                                        >
                                            {food.name}
                                        </h1>
                                        <h2 className="text-md sm:text-xl md:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl">
                                            {food.price}$
                                        </h2>
                                    </div>

                                    <div
                                        className="flex h-15 w-full sm:h-18 md:h-20 lg:h-25 xl:h-32 2xl:h-35" //2xl:h-35
                                    >
                                        <div className="xs:w-[30%] xxs:w-[35%] h-full w-[40%] bg-gray-100"></div>
                                        <ul className="xs:w-[70%] xxs:w-[65%] xxs:grid-rows-3 xs:text-[12px] relative grid h-full w-[60%] list-inside list-disc grid-flow-col grid-rows-4 bg-gray-100 p-2 text-[8px] sm:text-[13px] md:text-[15px] lg:text-[17px] xl:text-[23px] 2xl:text-[25px]">
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
                                                className="xs:h-5 xs:w-14 absolute right-2 bottom-2 flex h-4 w-12 cursor-pointer items-center justify-center rounded-md border-none bg-[#ba1c1c] text-white shadow-[0px_4px_0px_#7f1d1d] transition-all duration-100 ease-linear active:translate-y-[2px] active:shadow-none sm:h-7 sm:w-21 sm:rounded-xl md:h-7 md:w-22 lg:right-3 lg:bottom-3 lg:h-8 lg:w-28 xl:right-4 xl:bottom-4 xl:h-12 xl:w-35 2xl:right-3 2xl:bottom-3 2xl:h-13 2xl:w-40"
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
