import React from 'react'
import './index.css'

import Header from './components/Header'
import ModalBasket from './components/ModalBasket.jsx'
import Hero from './components/Hero'
import WelcomeSection from './components/WelcomeSection'
import Menu from './components/Menu.jsx'
import MenuFood from './components/MenuFood.jsx'
import Form from './components/Form.jsx'
import Hr from './components/Hr.jsx'
import ChoiseFood from './components/ChoiseFood.jsx'
import Footer from './components/Footer.jsx'
import CheckoutForm from './components/Checkout Form/CheckoutForm.jsx'

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