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
import ModalBasket from './components/ModalBasket.jsx'

const App = () => {

    const [activeMenu, setActiveMenu] = useState('Pizza')
    const [basket, setBasket] = useState([]);

    const addToBasket = (newItem) => {
      setBasket((prev) => {
        const isExist = prev.find((item) => item.name === newItem.name);

        if (isExist) {
          return prev.map((item) =>
            item.name === newItem.name
              ? { ...item, count: (item.count || 1) + 1 }
              : item
          );
        } else {
          return [...prev, { ...newItem, count: 1 }];
        }
      });
    };

    const removeFromBasket = (itemToRemove) => {
      setBasket((prev) => {
        if (itemToRemove.count > 1) {
          return prev.map((item) =>
            item.name === itemToRemove.name
              ? { ...item, count: item.count - 1 }
              : item
          );
        } 
        else {
          return prev.filter((item) => item.name !== itemToRemove.name);
        }
      });
    };
    
    const [modalBasket, setModalBasket] = useState(false);
  
  return (
    <div className='w-full h-auto flex flex-col justify-center items-center ' >
      <Header
        basket = {basket}
        addToBasket = {addToBasket}
        setModalBasket= {setModalBasket}
        modalBasket= {modalBasket}
      />
      
        < ModalBasket
        className=''
          basket={basket}
          addToBasket={addToBasket}
          removeFromBasket={removeFromBasket}
          modalBasket = {modalBasket}

          />
      
      
      <Hero/>
      <WelcomeSection/>
      <Menu 
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu} 
      />
      <MenuFood
          basket = {basket}
          setBasket = {setBasket}
          addToBasket = {addToBasket}
          activeMenu={activeMenu}
      />
      <Hr/>
      <ChoiseFood/>
      <Form/>
      
    </div>
    
  )
}

export default App