import React from 'react'
import Call from '../../png/png-for-footer/Call.svg';
import Envelope from '../../png/png-for-footer/envelope.svg';
import Instagram from '../../png/png-for-footer/instagram.svg';
import Facebook from '../../png/png-for-footer/facebook.svg';
import Twitter from '../../png/png-for-footer/twitter.svg';


const Footer = () => {
  return (
    <div className='bg-gray-50 w-full h-full select-none'>
        <div className='mx-auto max-w-[1400px] w-8/10 h-auto py-10 flex justify-between '>
            <div className='flex gap-30 w-7/10'>

                <div className='text-gray'>
                    <h1 className='text-4xl font-bold text-black '>Contact</h1>
                    <p className='flex gap-2 items-center5' > <img className=' w-5 h-5' src={Envelope} alt="" />Naples@email.com</p>
                    <p className='flex gap-2' > <img className=' w-5 h-5' src={Call} alt="" /> 573-8304-0830-246</p>
                </div>

                <div className='text-gray'>
                    <h1 className='text-4xl font-bold text-black'>Info</h1>
                    <p>About us</p>
                    <p>Our stores</p>
                    <p>Food recipes</p>
                    <p>Our chefs</p>
                </div>

                <div className='text-gray'>
                    <h1 className='text-4xl font-bold text-black'>Help</h1>
                    <p>Find a tasting </p>
                    <p>Take an order</p>
                    <p>Privacy policy</p>
                    <p>Terms and conditions</p>
                </div>

            </div>  
            <div className='flex flex-col' >
                <p className=" text-5xl font-bold bg-gradient-to-r from-gray-500 to-[#C0C0C2] bg-clip-text text-transparent">
                    Naples  
                </p>
                <div className='flex justify-center items-center gap-2' >
                    <img className='w-4 h-4' src={Instagram} alt="" />
                    <img className='w-4 h-4' src={Facebook} alt="" />   
                    <img className='w-4 h-4' src={Twitter} alt="" />   
                </div>
                            
            </div>
        </div>
    </div>
  )
}

export default Footer