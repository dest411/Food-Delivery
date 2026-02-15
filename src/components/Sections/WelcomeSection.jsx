import React from 'react';

const WelcomeSection = () => {
    return (
        <div className="flex h-auto w-[95%] flex-col items-center justify-end py-10 select-none sm:py-15 md:py-20 lg:py-25">
            <div className="relative flex w-full justify-center">
                <h2
                    className="text-2xl opacity-75 sm:text-4xl md:text-4xl lg:text-6xl xl:text-6xl 2xl:text-7xl" //2xl:text-7xl
                >
                    Welcome to Naples
                </h2>{' '}
                {/* text-2xl  */}
                <h1
                    className="absolute bottom-2 font-[Caveat] text-4xl opacity-10 sm:bottom-3 sm:text-6xl md:bottom-4 md:text-5xl lg:bottom-4.5 lg:text-5xl 2xl:text-8xl" //2xl:text-8xl
                >
                    {' '}
                    {/* text-4xl  bottom-2 */}
                    Welcome to Naples
                </h1>
            </div>

            <p
                className="text-center text-sm leading-3 opacity-60 sm:text-lg sm:leading-4 md:text-sm md:leading-3 lg:text-xl lg:leading-5 xl:text-2xl 2xl:text-3xl" //2xl:text-3xl
            >
                {' '}
                {/* text-sm leading-3 */}
                We started working in 2007 and in 2012 we were able to <br />{' '}
                open our second branch and now we have several <br /> branches
                all over the country.
            </p>
            <div
                className="mt-5 flex h-3 w-35 items-center justify-center bg-white sm:h-5 sm:w-50 md:mt-5 md:h-5 md:w-60 lg:mt-10 lg:h-8 lg:w-75" //h-3 w-[145px]
                aria-label="Zigzag Pattern Container"
            >
                <svg
                    className="h-full w-full"
                    viewBox="0 0 545 44"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <polyline
                        points="0,4 54.5,40 109,4 163.5,40 218,4 272.5,40 327,4 381.5,40 436,4 490.5,40 545,4"
                        style={{
                            fill: 'none',
                            stroke: '#E5EEED',
                            strokeWidth: 8,
                            strokeLinecap: 'round',
                        }}
                    />
                </svg>
            </div>
        </div>
    );
};

export default WelcomeSection;
