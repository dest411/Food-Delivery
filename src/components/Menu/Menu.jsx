import React, { useState, memo } from 'react';
import Foods from '../../Food';
import { useStore } from '../../store/Store';

const Menu = () => {
    const activeMenu = useStore((state) => state.activeMenu);
    const setActiveMenu = useStore((state) => state.setActiveMenu);

    console.log('render menu');

    return (
        <div id="menu-choise" className="my-5 h-auto w-[95%] max-w-[1500px]">
            <div className="flex h-auto w-full justify-between">
                <div className="absolute left-0 flex w-1/6 items-center justify-center bg-red-700 px-6 py-2 text-center text-xl font-semibold text-white [clip-path:polygon(0%_0%,87%_0%,100%_50%,87%_100%,0%_100%)] sm:px-8 sm:py-6 sm:text-2xl md:px-15 md:text-4xl">
                    Menu
                </div>

                <div className="h-[50px] w-1/3 sm:h-20 md:h-25"></div>

                <div className="flex w-full items-center justify-between gap-5">
                    {Foods.map((food) => {
                        const isActive = food.name === activeMenu;
                        return (
                            <div
                                className={`box-shadow: -1px 0px 80px -3px rgba(0,0,0,0.75) flex w-22 cursor-pointer items-center gap-1 rounded-xl border px-2 py-2 shadow-[0px_0px_20px_-3px_rgba(0,0,0,0.40)] transition-colors duration-300 sm:w-33 sm:gap-2 sm:rounded-2xl sm:px-4 sm:py-5 md:w-45 md:gap-4 ${isActive ? 'border-amber-600' : 'border-black/7'}`}
                                key={food.id}
                                onClick={() => setActiveMenu(food.name)}
                            >
                                <img
                                    className="h-8 sm:h-10 md:h-15"
                                    src={food.photo}
                                    alt=""
                                />
                                <p className="text-[15px] sm:text-[20px] md:text-3xl">
                                    {food.name}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* <div className="h-[120px w-1/10"></div> */}
            </div>
        </div>
    );
};

export default memo(Menu);
