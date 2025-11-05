import React from 'react'
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import WelcomeSection from './components/WelcomeSection'
import Menu from './components/Menu.jsx'

const App = () => {
  return (
    <div className='w-full h-auto flex flex-col justify-center items-center' >
      <Header/>
      <Hero/>
      <WelcomeSection/>
      <Menu/>
    </div>
    
  )
}

export default App