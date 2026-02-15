import React from 'react';
import background from '../../png/bg.svg';

const Hero = React.memo(() => {
    console.log('hero render');
    const scrollToMenu = () => {
        const targetElement = document.getElementById('menu-choise');
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    return (
        <div
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${background})`,
            }}
            className="flex h-[150px] w-full flex-col items-center justify-center bg-cover bg-center py-20 text-center text-white sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[450px]"
        >
            <div className="flex flex-col items-center gap-3 md:gap-5 lg:gap-7 xl:gap-10 2xl:gap-7">
                <h1 className="text-2xl leading-4 sm:text-4xl sm:leading-6 md:text-6xl md:leading-9 lg:text-7xl lg:leading-12 xl:text-6xl xl:leading-18 2xl:text-6xl 2xl:leading-10">
                    The fastest delivery in <br /> your city
                </h1>
                <p className="text-[10px] leading-2 sm:text-sm sm:leading-4 md:text-xl md:leading-5 lg:text-2xl lg:leading-6 xl:text-4xl xl:leading-9 2xl:text-3xl 2xl:leading-7">
                    Visit our restaurant to taste our italian cuisine or <br />
                    simply order it from our website.
                </p>
                <button
                    onClick={scrollToMenu}
                    className="transform cursor-pointer rounded-lg border px-5 py-1 text-[14px] transition duration-300 hover:scale-110 hover:bg-white/15 active:scale-95 active:bg-white/25 sm:text-sm md:rounded-2xl md:px-10 md:text-2xl lg:text-4xl xl:rounded-4xl xl:px-13 xl:py-3 xl:text-5xl 2xl:rounded-4xl 2xl:px-8 2xl:py-2 2xl:text-3xl"
                >
                    Order now
                </button>
            </div>
        </div>
    );
});

export default Hero;
