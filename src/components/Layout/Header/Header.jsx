import React from 'react';
import SearchSection from './SearchSection';
import BasketSection from './BasketSection';
import arrow from '../../../png/arrow.svg';

const Header = () => {
    const scrollToHome = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const scrollToFooter = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
        });
    };

    return (
        <header className="sticky top-0 z-200 flex w-full justify-center border-b border-gray-100 bg-white shadow-xl backdrop-blur-sm">
            <div className="not-[]:top-0 relative z-140 flex h-7 w-[95%] max-w-[1500px] items-center justify-between sm:h-12 md:h-14 lg:h-20 xl:h-23 2xl:h-27">
                <div className="flex w-6/10 items-center gap-10 md:gap-20 lg:gap-25 2xl:gap-35">
                    <p className="from-gray w-auto bg-linear-to-r to-[#C0C0C2] bg-clip-text text-lg font-bold text-transparent sm:text-3xl md:text-5xl lg:text-6xl 2xl:text-8xl">
                        Naples
                    </p>

                    <nav className=" ">
                        <ul className="flex w-full items-center justify-between gap-5 text-[10px] sm:text-[15px] md:gap-7 md:text-[20px] lg:gap-12 lg:text-[28px] 2xl:gap-15 2xl:text-[35px]">
                            <li
                                className="cursor-pointer"
                                onClick={scrollToHome}
                            >
                                Home
                            </li>
                            <li className="relative flex">Menu</li>
                            <li onClick={scrollToFooter}>Contact Us</li>
                        </ul>
                    </nav>
                </div>

                <div className="flex w-auto items-center justify-end gap-5 lg:gap-8 2xl:gap-10">
                    <SearchSection />
                    <BasketSection />
                </div>
            </div>
        </header>
    );
};

export default Header;
