import React from 'react'
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'

const App = () => {
  return (
    <div className='w-full h-auto flex flex-col justify-center items-center' >
      <Header/>
      <Hero/>
      
    </div>
    
  )
}

export default App