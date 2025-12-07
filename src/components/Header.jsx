import React, {useMemo, memo} from 'react'
import arrow from '../png/arrow.svg'
import dandruff from '../png/dandruff.svg'
import shoppingcart from '../png/shoppingcart.png'


const Header = memo(({basket}) => {
    let basketOpen = true;
    const groupedBasket = useMemo(() => {
        const groups = {};
        
        basket.forEach(item => {
            // Якщо товар вже є в групі - збільшуємо лічильник
            if (groups[item.name]) {
                groups[item.name].count += 1;
                // Сумуємо ціну, якщо треба (але зазвичай ціна за шт.)
            } else {
                // Якщо немає - створюємо запис і ставимо лічильник 1
                groups[item.name] = { ...item, count: 1 };
            }
        });

        // Перетворюємо об'єкт назад у масив для відображення
        return Object.values(groups);
    }, [basket]);
    console.log('render header');

    console.log(`groupedBasket: ${groupedBasket}`);
    
    
  return (
    <div className='flex w-[95%] relative max-w-[1500px] h-20 justify-between  items-center' >
        <div className='flex gap-25 items-center ' >
            <p className="text-5xl font-bold bg-linear-to-r from-[#67666A] to-[#C0C0C2] bg-clip-text text-transparent">
                Naples  
            </p>

            <nav>
                <ul className='flex gap-25 text-3xl' >
                    <li>Home</li>
                    <li className='flex gap-1.5 relative' >Menu <img src={arrow} className='absolute right-[-22px] top-[40%]' alt="" /> </li>
                    <li>Contact Us</li>
                </ul>
            </nav>
        </div>
        
        <div className='flex items-center gap-8' >
            <div className='relative h-[50px] flex items-center justify-center border border-black/10 rounded-2xl px-3 bg-black/5 '>
            <input
                id='inputSearch' 
                className='w-[300px] h-[25px] 
                    placeholder:text-3xl placeholder:text-gray-500
                    flex items-center text-3xl leading-[50px] outline-none'                
                type="text" 
                placeholder='Search something...' 
            />
            <img className='absolute  w-5 h-5 right-5 top-[25%]' src={dandruff} alt="dandruff" />   
            </div>
            <div className='relative' >
                <img src={shoppingcart} className='w-8 h-8 cursor-pointer' alt="shopingcart"  />
                {basket.length > 1 && 
                    <div className='flex items-center justify-center ' >
                        <p className='text-4xl w-8 h-8 absolute -right-5 -bottom-6 bg-red-600 flex text-white items-center justify-center rounded-full' >{basket.length}</p>
                    </div>
                }
            </div>
        </div>
        {basketOpen && 
            <div className='absolute bg-white -right-[2.8%] p-5 top-20 w-150 min-h-60 h-auto border '  >
                {basket.length == 0 ? <p>Кошик пустий, добавте товар</p> :
                <div>
                    {groupedBasket.map((food) => {
                        console.log(food);
                        return <div className='flex items-center justify-between gap-2' >
                            
                            <div className='flex gap-3 items-center w-60'>
                                <img className='w-20 h-20' src={food.typePhoto}  alt="food photo"/>
                                <p key={food.name} className='text-2xl' >{food.name}</p>
                            </div>
                            
                            <div className='flex text-2xl gap-2 items-center cursor-pointer' >
                                <p>-</p>
                                <p className='border w-8 h-6 flex items-center justify-center rounded' >{food.count}</p>
                                <p onClick={() => food.count + 1} >+</p>
                            </div>
                            <p key={food.name} className='text-2xl' >Price: {food.price}$</p>
                            
                        </div> 
                    })}
                </div> 
                }
                
            </div>
        }
        
    </div>
  )
})

export default Header