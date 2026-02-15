import React, { useState, useEffect, useRef, useMemo } from 'react';
import dandruff from '../../../png/dandruff.svg';
import { useStore, allDishes } from '../../../store/Store';

const SearchSection = () => {
    const searchItem = useStore((state) => state.searchItem);
    const setSearchItem = useStore((state) => state.setSearchItem);
    const addToBasket = useStore((state) => state.addToBasket);
    const setActiveMenu = useStore((state) => state.setActiveMenu);

    const filteredFoods = useMemo(() => {
        if (searchItem === '') return [];
        return allDishes.filter((item) =>
            item.name.toLowerCase().includes(searchItem.toLowerCase()),
        );
    }, [searchItem]);

    const searchRef = useRef(null);
    const [showSearch, setShowSearch] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                searchRef.current &&
                !searchRef.current.contains(event.target)
            ) {
                setShowSearch(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleInputFocus = () => {
        if (searchItem.length > 0) setShowSearch(true);
    };

    useEffect(() => {
        if (searchItem.length > 0) setShowSearch(true);
    }, [searchItem]);

    const handleScrollToProduct = (item) => {
        setActiveMenu(item.category);
        setShowSearch(false);
        setSearchItem('');

        setTimeout(() => {
            const id = item.name.replace(/\s/g, '');
            const element = document.getElementById(id);

            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                });
            }
        }, 100);
    };

    return (
        <div ref={searchRef} className="flex w-auto select-none *:items-center">
            <div
                className="relative flex h-5 w-20 items-center justify-between rounded-2xl border border-black/5 bg-black/5 px-3 sm:h-7 sm:w-30 md:h-7 md:w-40 lg:h-7 lg:w-50 lg:rounded-2xl 2xl:h-10 2xl:w-70" // 2xl:h-10 2xl:w-80
            >
                <input
                    id="inputSearch"
                    className="flex h-4 w-15 items-center text-sm leading-[50px] text-black/70 outline-none placeholder:text-[8px] placeholder:text-gray-500 sm:w-18 sm:placeholder:text-[14px] md:w-30 md:text-2xl md:placeholder:text-[15px] lg:w-40 lg:text-2xl lg:placeholder:text-[px] 2xl:h-7 2xl:w-60 2xl:text-3xl 2xl:placeholder:text-[25px]"
                    type="text"
                    placeholder="Search something..."
                    value={searchItem}
                    onChange={(e) => setSearchItem(e.target.value)}
                    onFocus={handleInputFocus}
                />
                {showSearch && searchItem.length > 0 && (
                    <div className="xs:w-40 absolute top-7 -right-5 z-50 h-auto w-35 rounded-xl border border-gray-200 bg-white px-3 py-1 text-black shadow-lg sm:top-12 sm:w-50 md:w-55 lg:w-65 xl:top-15 xl:w-75 2xl:top-20">
                        {filteredFoods.length === 0 ? (
                            <p className="text-md text-center text-gray-500 lg:text-xl xl:text-2xl 2xl:text-3xl">
                                Nothing found
                            </p>
                        ) : (
                            filteredFoods.map((item, index) => (
                                <div
                                    key={item.name + index}
                                    onClick={() => handleScrollToProduct(item)}
                                    className="flex items-center justify-between border-b border-gray-200 last:border-0"
                                >
                                    <p className="xs:text-[10px] lg:text-[18px]S flex cursor-pointer items-center gap-2 py-1 text-[8px] transition hover:text-orange-500 sm:text-[14px] md:text-[16px] xl:text-[20px]">
                                        <img
                                            className="xs:w-7 xs:h-7 h-5 w-5 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16"
                                            src={item.typePhoto}
                                            alt=""
                                        />
                                        {item.name}
                                    </p>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            addToBasket(item);
                                        }}
                                        className="add-btn2 h-4! w-9! text-[8px]! sm:h-5! sm:w-11! sm:text-[10px]! md:h-6! md:w-12! md:text-[12px]! lg:h-7! lg:w-16! lg:text-[14px]! xl:h-8! xl:w-18! xl:text-[16px]!"
                                    >
                                        Add to get
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                )}

                <img
                    className="absolute right-2 h-2 w-2 sm:h-3 sm:w-3 md:h-3 md:w-3 lg:h-4 lg:w-4 2xl:h-7 2xl:w-6"
                    src={dandruff}
                    alt="dandruff"
                />
            </div>
        </div>
    );
};

export default SearchSection;
