import React, {useMemo, memo} from 'react'
import shoppingcart from "../../png/shoppingcart.png";

const BasketSection = memo(({basket,setModalBasket,modalBasket}) => {

    const totalCount = useMemo(() => {
            return basket.reduce((acc, item) => acc + item.count, 0);
        }, [basket]);

    return (
        <div className='relative' >
            <img onClick={() => setModalBasket(!modalBasket)} src={shoppingcart} className='w-8 h-8 cursor-pointer' alt="shopingcart"  />
            {basket.length > 0 && 
                <div className='flex items-center justify-center ' >
                    <p className='text-4xl w-8 h-8 absolute -right-5 -bottom-6 bg-red-600 flex text-white items-center justify-center rounded-full' >{totalCount}</p>
                </div>
            }
        </div>
    )
})

export default BasketSection