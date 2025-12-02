import React from 'react'

const Form = () => {
  return (
    <div className='w-full h-auto my-50 flex justify-center items-center'>
        <div className=' w-full max-w-[1000px]'>
           <form className='bg-gray-200 w-full flex flex-col justify-center items-center' action="">
                <p className='text-6xl' >Share your opinion <br /> with us</p>

                <div className=''>
                    <div>
                        <input type="text" />
                        <input type="text" /> 
                    </div>
                    <textarea placeholder='Write something...'></textarea>
                </div>
            </form> 
        </div>
        
    </div>
  )
}

export default Form