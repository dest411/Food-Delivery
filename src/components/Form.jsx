import React from 'react'

const Form = () => {
  return (
    <div className='w-full h-auto my-50 flex justify-center items-center'>
        <div className=' w-full max-w-[1000px]'>
           <form className='bg-gray-200 rounded-2xl w-full py-8 flex flex-col justify-center items-center' action="">
                <p className='text-6xl text-center font-bold' >Share your opinion <br /> with us</p>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col py-8 gap-2'>
                        <input 
                            className='w-[380px] bg-white rounded-2xl p-4 py-5 placeholder:text-2xl placeholder:text-gray-400' 
                            type="text" 
                            placeholder='Your name' />
                        <input 
                            type="email" 
                            placeholder='Your email'
                            className='w-[380px] bg-white rounded-2xl p-4 py-5 placeholder:text-2xl placeholder:text-gray-400' /> 
                    </div>
                    <textarea 
                        placeholder='Write something...'
                        className='bg-white rounded w-[430px] h-[170px] placeholder: text-2xl placeholder:p-2 placeholder:text-gray-400'
                        ></textarea>
                        
                </div>
            </form> 
        </div>
        
    </div>
  )
}

export default Form