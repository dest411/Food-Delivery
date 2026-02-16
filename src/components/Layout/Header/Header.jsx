import React from 'react';
import SearchSection from './SearchSection';
import BasketSection from './BasketSection';

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
            <div
                className="relative z-140 flex h-7 w-[95%] max-w-[1500px] items-center justify-between sm:h-10 md:h-10 lg:h-12 xl:h-16 2xl:h-18" //2xl:h-18
            >
                <div className="flex w-6/10 items-center gap-10 md:gap-20 lg:gap-25 2xl:gap-35">
                    <p
                        className="from-gray xs:text-2xl w-auto bg-linear-to-r to-[#C0C0C2] bg-clip-text text-lg font-bold text-transparent sm:text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl" //2xl:text-5xl
                    >
                        Naples
                    </p>

                    <nav className=" ">
                        <ul
                            className="xs:text-[10px] xs:gap-4 flex w-full items-center justify-between gap-3 text-[9px] sm:text-[15px] md:gap-4 md:text-[16px] lg:gap-10 lg:text-[19px] xl:text-[22px] 2xl:gap-13 2xl:text-[25px]" //2xl:text-[25px]
                        >
                            <li
                                className="cursor-pointer transition-all duration-200 hover:scale-110"
                                onClick={scrollToHome}
                            >
                                Home
                            </li>
                            <li className="cursor-pointer transition-all duration-200 hover:scale-110">
                                Menu
                            </li>
                            <li
                                className="cursor-pointer transition-all duration-200 hover:scale-110"
                                onClick={scrollToFooter}
                            >
                                Contact Us
                            </li>
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
