import { memo } from "react"
import React from 'react'

const Form = memo(() => {
  console.log("form render");
  
  return (
    <div className='w-full h-auto my-50 flex justify-center items-center'>
        <div className=' w-full max-w-[920px]'>
           <form className='bg-gray-from rounded-2xl w-full py-8 flex flex-col justify-center items-center' action="">
                <p className='text-6xl text-center font-bold' >Share your opinion <br /> with us</p>
                <div className='w-full h-35 my-8  px-10 flex justify-between'>
                    <div className='flex  flex-col justify-between   gap-2'>
                        <input className='w-[380px] focus:outline-none focus:border-0 bg-white rounded-2xl p-4 py-5  placeholder:text-2xl placeholder:text-gray-400' type="text"  placeholder='Your name' />
                        <input type="email" placeholder='Your email' className='w-[380px] focus:outline-none focus:border-0 bg-white rounded-2xl p-4 py-5 placeholder:text-2xl  placeholder:text-gray-400' /> 
                    </div>
                    <textarea  placeholder='Write something...'className='resize-none focus:outline-none focus:border-0 bg-white p-2 rounded-2xl w-[430px] h-full placeholder:text-2xl  placeholder:text-gray-400 ' ></textarea>
                        
                </div>
                <button className='border-red-500 text-red-700 text-3xl font-bold border rounded-3xl w-[140px] h-[50px] cursor-pointer transition-transform duration-200 hover:scale-110'>Send</button>
            </form>  
        </div>
        
    </div>
  )
})

export default Form