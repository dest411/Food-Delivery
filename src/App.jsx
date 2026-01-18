import React from 'react'
import './index.css'

import Header from './components/Layout/Header/Header.jsx'
import ModalBasket from './components/Cart/ModalBasket.jsx'
import Hero from './components/Sections/Hero.jsx'
import WelcomeSection from './components/Sections/WelcomeSection.jsx'
import Menu from './components/Menu/Menu.jsx'
import MenuFood from './components/Menu/MenuFood.jsx'
import Form from './components/Cart/Form.jsx'
import Hr from './components/UI/Hr.jsx'
import ChoiseFood from './components/Sections/ChoiceFood.jsx'
import Footer from './components/Layout/Footer.jsx'
import CheckoutForm from './components/Layout/Header/CheckoutForm/CheckoutForm.jsx'

const App = () => {

  return (
    <div className='w-full h-auto flex flex-col justify-center items-center ' >
      
      <Header/>
      <CheckoutForm />
      <ModalBasket />
      <Hero/>
      <WelcomeSection/>
      <Menu />
      <MenuFood />
      <Hr/>
      <ChoiseFood/>
      <Form/>
      <Footer/>
      
    </div>
    
  )
}

export default App