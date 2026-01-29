import React,  {useState, useEffect, useRef, useMemo } from 'react'
import dandruff from '../../../png/dandruff.svg'
import { useStore, allDishes } from '../../../store/Store';

const SearchSection = () => {

    const searchItem = useStore((state) => state.searchItem);
    const setSearchItem = useStore((state) => state.setSearchItem);
    const addToBasket = useStore((state) => state.addToBasket);
    const setActiveMenu = useStore((state) => state.setActiveMenu);

    const filteredFoods = useMemo(() => {
        if (searchItem === "") return [];
        return allDishes.filter((item) => 
            item.name.toLowerCase().includes(searchItem.toLowerCase())
        );
    }, [searchItem])

    const searchRef = useRef(null);
    const [showSearch, setShowSearch] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
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
    }

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
                    block: 'center' 
                });
            }
        }, 100);
    };

    return (
        <div ref={searchRef} className='flex w-auto *:items-center select-none ' >
            <div className='relative w-20 sm:w-30 md:w-45 md:h-9 sm:h-8 h-7 flex items-center justify-between border border-black/10 rounded-2xl px-3 bg-black/5  '>
                <input
                    id='inputSearch' 
                    className='w-15 h-4 sm:placeholder:text-[14px] md:placeholder:text-[20px] md:w-30 sm:w-18 placeholder:text-[8px] placeholder:text-gray-500
                        flex items-center  text-xl leading-[50px] outline-none'                
                    type="text" 
                    placeholder='Search something...'
                    value={searchItem} 
                    onChange={(e) => setSearchItem(e.target.value)}
                    onFocus={handleInputFocus}
                />
                {showSearch && searchItem.length > 0 && (
                    <div className='absolute top-17 left-0 z-50 text-black rounded-3xl p-3 bg-white border border-gray-200 w-[330px] h-auto shadow-lg'>
                        
                        {filteredFoods.length === 0 ? (
                            <p className="text-2xl text-center text-gray-500">Nothing found</p>
                        ) : (
                            
                            filteredFoods.map((item, index) => (
                                <div key={item.name + index} onClick={() => handleScrollToProduct(item)} className='flex items-center justify-between border-gray-200 border-b last:border-0'>
                                    <p   className="flex gap-5 items-center text-2xl py-1   hover:text-orange-500 cursor-pointer transition">
                                        <img className='w-15 h-15' src={item.typePhoto} alt="" />
                                        {item.name}
                                    </p>
                                    <button onClick={(e) => {
                                        e.stopPropagation();
                                        addToBasket(item)}} className='add-btn2 w-15! h-8! text-[16px]! ' >Add to get</button>

                                </div>
                                
                                
                            ))
                        )}

                    </div>
                )}
                
                <img className='absolute md:w-4 md:h-4 sm:w-3 sm:h-3 w-2 h-2 right-2' src={dandruff} alt="dandruff" />   
            </div>

        </div>
    )
}

export default SearchSection