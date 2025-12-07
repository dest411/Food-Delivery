import React, {useState} from 'react'
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import WelcomeSection from './components/WelcomeSection'
import Menu from './components/Menu.jsx'
import MenuFood from './components/MenuFood.jsx'
import Form from './components/Form.jsx'
import Hr from './components/Hr.jsx'
import ChoiseFood from './components/ChoiseFood.jsx'

const App = () => {

    const [activeMenu, setActiveMenu] = useState('Pizza')
    const [basket, addToBasket] = useState([]);
    const handleClick = (newItem) => {
      addToBasket((prev) => [...prev, newItem])
    }

  return (
    <div className='w-full h-auto flex flex-col justify-center items-center' >
      <Header
        basket = {basket}
      />
      <Hero/>
      <WelcomeSection/>
      <Menu 
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu} 
      />
      <MenuFood
          basket = {basket}
          addToBasket = {addToBasket}
          handleClick = {handleClick}
          activeMenu={activeMenu}
      />
      <Hr/>
      <ChoiseFood/>
      <Form/>
      
    </div>
    
  )
}

export default App