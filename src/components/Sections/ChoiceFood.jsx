import React from 'react';
import Appetizer from '../../png/ChoiseFood/Appetizer.svg';
import Dessert from '../../png/ChoiseFood/Dessert.svg';
import Beverage from '../../png/ChoiseFood/Beverage.svg';
import Wrapper from '../../png/ChoiseFood/Wrapper.svg';

const ChoiseFood = () => {
    const getBackgroundStyle = (imageUrl) => ({
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    });
    return (
        <div className="flex h-auto w-full justify-center select-none">
            <div className="l:text-3xl flex w-[60%] max-w-[1500px] flex-col items-center justify-between gap-4 text-xl text-white md:w-[85%] md:flex-row md:text-2xl lg:text-4xl">
                <div
                    style={getBackgroundStyle(Appetizer)}
                    className="flex min-h-40 w-full cursor-pointer items-end-safe rounded-2xl bg-cover md:min-h-60"
                >
                    <p className="z-50 p-2">Appetizer</p>
                </div>
                <div
                    style={getBackgroundStyle(Dessert)}
                    className="flex min-h-40 w-full cursor-pointer items-end-safe rounded-2xl bg-cover md:min-h-60"
                >
                    <p className="z-50 p-2">Dessert</p>
                </div>
                <div
                    style={getBackgroundStyle(Beverage)}
                    className="flex min-h-40 w-full cursor-pointer items-end-safe rounded-2xl bg-cover md:min-h-60"
                >
                    <p className="z-50 p-2">Beverage</p>{' '}
                </div>
            </div>
        </div>
    );
};

export default ChoiseFood;
