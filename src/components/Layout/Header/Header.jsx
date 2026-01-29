import React from 'react';
import SearchSection from './SearchSection';
import BasketSection from './BasketSection';
import arrow from '../../../png/arrow.svg';

const Header = () => {

    const ScrollToHome = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <header className="shadow-xl sticky top-0 z-200 w-full bg-white backdrop-blur-sm flex justify-center border-b border-gray-100">
            <div className="flex relative w-[95%] not-[]:top-0 z-140  max-w-[1500px] h-20 justify-between items-center">
                <div className="w-6/10  lg:gap-25 flex gap-10 md:gap-20 items-center  ">
                    <p className="w-auto text-lg font-bold bg-linear-to-r sm:text-3xl lg:text-6xl md:text-5xl from-gray to-[#C0C0C2] bg-clip-text text-transparent">
                        Naples
                    </p>

                    <nav className=" ">
                        <ul className="flex items-center w-full lg:text-[28px] lg:gap-12 md:text-[20px] sm:text-[15px] gap-5 md:gap-7 sm justify-between text-[10px]">
                            <li
                                className="cursor-pointer"
                                onClick={ScrollToHome}
                            >
                                Home
                            </li>
                            <li className="flex relative ">
                                Menu
                            </li>
                            <li>Contact Us</li>
                        </ul>
                    </nav>
                </div>

                <div className="flex justify-end items-center gap-5 w-auto">
                    <SearchSection />
                    <BasketSection />
                </div>
            </div>
        </header>
    );
};

export default Header;
