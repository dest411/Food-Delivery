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
        // Шукаємо, чи такий товар вже є в кошику
        const isExist = prev.find((item) => item.name === newItem.name);

        if (isExist) {
          // Якщо є -> проходимось по масиву і збільшуємо count тільки цьому товару
          return prev.map((item) =>
            item.name === newItem.name
              ? { ...item, count: (item.count || 1) + 1 }
              : item
          );
        } else {
          // Якщо немає -> додаємо новий з count: 1
          return [...prev, { ...newItem, count: 1 }];
        }
      });
    };

    const removeFromBasket = (itemToRemove) => {
      setBasket((prev) => {
        // 1. Якщо кількість більше 1 -> зменшуємо на 1
        if (itemToRemove.count > 1) {
          return prev.map((item) =>
            item.name === itemToRemove.name
              ? { ...item, count: item.count - 1 }
              : item
          );
        } 
        // 2. Якщо кількість 1 (або менше) -> видаляємо товар з масиву повністю
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