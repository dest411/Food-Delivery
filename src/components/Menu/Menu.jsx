import React, { useState, memo } from 'react';
import Foods from '../../Food';
import { useStore } from '../../store/Store';

const Menu = () => {
    const activeMenu = useStore((state) => state.activeMenu);
    const setActiveMenu = useStore((state) => state.setActiveMenu);

    console.log('render menu');

    return (
        <div
            id="menu-choise"
            className="my-5 mb-10 flex h-auto w-[95%] max-w-[1500px]"
        >
            <div className="l:gap-10 flex h-auto w-full items-center justify-between gap-3 bg-gray-200 sm:gap-5 lg:gap-7">
                <div className="flex w-1/4 items-center justify-center bg-red-700 px-6 text-center text-lg font-semibold text-white [clip-path:polygon(0%_0%,87%_0%,100%_50%,87%_100%,0%_100%)] sm:px-8 sm:py-3 sm:text-2xl md:px-15 md:text-4xl lg:mr-5 lg:py-4 lg:text-6xl xl:px-30 xl:py-10 xl:text-6xl">
                    Menu
                </div>

                {/* <div className="h-full w-1/3"></div> */}

                <div className="s:gap-2 flex w-full items-center justify-between gap-2 bg-amber-200 md:gap-3">
                    {Foods.map((food) => {
                        const isActive = food.name === activeMenu;
                        return (
                            <div
                                className={`box-shadow: -1px 0px 80px -3px rgba(0,0,0,0.75) xs:w-22 flex w-15 cursor-pointer items-center justify-center gap-1 rounded-lg border p-2 shadow-[0px_0px_20px_-3px_rgba(0,0,0,0.40)] transition-colors duration-300 sm:w-33 sm:gap-2 sm:rounded-2xl sm:px-4 sm:py-5 md:w-40 md:gap-2 lg:w-50 xl:w-70 ${isActive ? 'border-amber-600' : 'border-black/7'}`}
                                key={food.id}
                                onClick={() => setActiveMenu(food.name)}
                            >
                                <img
                                    className="xs:h-8 h-5 sm:h-10 md:h-13 lg:h-18 xl:h-23"
                                    src={food.photo}
                                    alt=""
                                />
                                <p className="xs:text-[15px] text-[12px] sm:text-[20px] md:text-3xl lg:text-4xl xl:text-5xl">
                                    {food.name}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="h-full w-2/12 bg-blue-200 sm:w-1/12 md:w-1/12 lg:w-1/14"></div>
            </div>
        </div>
    );
};

export default memo(Menu);
