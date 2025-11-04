import React from 'react'

const WelcomeSection = () => {
  return (
    <div className='text-4xl relative w-[95%] h-auto flex flex-col items-center' >
        <h1 className='font-[Caveat] text-9xl opacity-10 absolute mt-14'>Welcome to Naples</h1>
        <h2 className='text-8xl mt-30 opacity-75' >Welcome to Naples</h2>
        <p className='text-center opacity-60  text-5xl' >We started working in 2007 and in 2012 we were able to <br /> open our second branch and now we have several <br /> branches all over the country.</p>
        <div 
            className="w-[545px] h-[44px] bg-white flex items-center justify-center mt-10"
            aria-label="Zigzag Pattern Container"
            >
            <svg 
                className="w-full h-full" 
                viewBox="0 0 545 44" 
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                
                <polyline 
                points="0,4 54.5,40 109,4 163.5,40 218,4 272.5,40 327,4 381.5,40 436,4 490.5,40 545,4"
                style={{
                    fill: 'none',
                    stroke: '#E5EEED',
                    strokeWidth: 8,
                    strokeLinecap: 'round'
                }}
                />
            </svg>
        </div>
    </div>
  )
}

export default WelcomeSection