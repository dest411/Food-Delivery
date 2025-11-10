import React, {useState} from 'react'
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import WelcomeSection from './components/WelcomeSection'
import Menu from './components/Menu.jsx'
import MenuFood from './components/MenuFood.jsx'

const App = () => {

    const [activeMenu, setActiveMenu] = useState('Pizza')


  return (
    <div className='w-full h-auto flex flex-col justify-center items-center' >
      <Header/>
      <Hero/>
      <WelcomeSection/>
      <Menu 
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu} 
      />
      <MenuFood
          activeMenu={activeMenu}
      />
    </div>
    
  )
}

export default App