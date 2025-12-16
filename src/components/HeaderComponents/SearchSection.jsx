import React, {useState, useEffect, useRef, memo} from 'react'
import dandruff from '../../png/dandruff.svg'

const SearchSection = memo(({searchItem,setSearchItem,filteredFoods,addToBasket}) => {

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

    const handleScrollToProduct = (productName) => {
        // 1. Робимо такий самий ID, як в MenuFood (прибираємо пробіли)
        const id = productName.replace(/\s/g, '');
        
        // 2. Шукаємо елемент
        const element = document.getElementById(id);
        
        if (element) {
            // 3. Скролимо до нього
            element.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' // Важливо: ставить елемент по центру екрану (щоб хедер не перекрив)
            });
            
            // 4. Закриваємо пошук і (опціонально) чистимо інпут
            setShowSearch(false);
            setSearchItem(''); 
        }
    };

    return (
        <div ref={searchRef} className='flex items-center gap-8' >
            <div className='relative h-[50px] flex items-center justify-center border border-black/10 rounded-2xl px-3 bg-black/5 '>
            <input
                id='inputSearch' 
                className='w-[300px] h-[25px] 
                    placeholder:text-3xl placeholder:text-gray-500
                    flex items-center text-3xl leading-[50px] outline-none'                
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
                            <div onClick={() => handleScrollToProduct(item.name)} className='flex items-center justify-between border-gray-200 border-b last:border-0'>
                                <p  key={item.name + index} className="flex gap-5 items-center text-2xl py-1   hover:text-orange-500 cursor-pointer transition">
                                    <img className='w-15 h-15' src={item.typePhoto} alt="" srcset="" />
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
            
            <img className='absolute  w-5 h-5 right-5 top-[25%]' src={dandruff} alt="dandruff" />   
            </div>

        </div>
    )
})

export default SearchSection