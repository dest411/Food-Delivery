import React from 'react'
import Appetizer from '../png/ChoiseFood/Appetizer.svg'
import Dessert from '../png/ChoiseFood/Dessert.svg'
import Beverage from '../png/ChoiseFood/Beverage.svg'
import Wrapper from '../png/ChoiseFood/Wrapper.svg'

const ChoiseFood = () => {
  return (
    <div className='w-full h-auto flex justify-center'>
        <div className=' flex justify-between w-[95%] h-auto max-w-[1500px]'>
            <div className='relative cursor-pointer'>
                <img className='' src={Appetizer} alt="" />
                <p className='text-7xl absolute left-15 bottom-40 z-50 text-white' >Appetizer</p>
                <img className='absolute top-0' src={Wrapper} alt="" />
            </div>
            <div className='relative cursor-pointer'>
                <img src={Dessert} alt="" />
                <p className='text-7xl absolute left-15 bottom-40 z-50 text-white'>Dessert</p>
                <img className='absolute top-0' src={Wrapper} alt="" />
            </div>
            <div className='relative cursor-pointer'>
                <img src={Beverage} alt=""  />
                <p className='text-7xl absolute left-15 bottom-40 z-50 text-white'>Beverage</p>
                <img className='absolute top-0' src={Wrapper} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default ChoiseFood