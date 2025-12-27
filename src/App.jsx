import React, { useState, useCallback, useMemo } from 'react'
import './index.css'
import Foods from './Food.jsx'
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
import { useStore } from './store/Store.jsx'

const App = () => {

    const [activeMenu, setActiveMenu] = useState('Pizza') /* active menu in Menu.jsx (Pizza/Burger/Pasta) */
    const [basket, setBasket] = useState([]);
    const [searchItem, setSearchItem] = useState('')  /* input in header */
    const [checkout, openCheckout] = useState(false)

    const checkoutClick = () => {
      setModalBasket(false);
      openCheckout(true); 
    } 
    
    const clearBasket = () => setBasket([]);
    const totalCount = basket.reduce((acc, item) => acc + item.count, 0);
    const totalPrice = basket.reduce((acc, item) => acc + (parseFloat(item.price.replace(',', '.')) * item.count), 0).toFixed(2);

    const allDishes = useMemo(() => {    /* filter foods for input search */
      return Foods.flatMap(category => {
        return Object.values(category.typeFood).map(dish => ({
            ...dish,
            category: category.name
        }));
      });
    }, []);
   
    const filteredFoods = useMemo(() => { /* filter foods in input search */
      if (searchItem === "") return [];
      return allDishes.filter((item) => { 
        return item.name.toLowerCase().includes(searchItem.toLowerCase());
      })
    }, [searchItem, allDishes])

    

    const addToBasket = useCallback((newItem) => {  /* add item to basket */
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
    }, []);

    const removeFromBasket = useCallback((itemToRemove) => {    /* remove ONE item */
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
    }, []);

    const removeCompletely = useCallback((itemToRemove) => {  /* remove ALL item */
      setBasket((prev) => {
        return prev.filter((item) => item.name !== itemToRemove.name);
      })
    }, []);
    
    const [modalBasket, setModalBasket] = useState(false);
  
  return (
    <div className='w-full h-auto flex flex-col justify-center items-center ' >
      <Header
        basket = {basket}
        addToBasket = {addToBasket}
        setModalBasket= {setModalBasket}
        modalBasket= {modalBasket}
        setActiveMenu={setActiveMenu}
        //input search
        filteredFoods={filteredFoods}
        searchItem={searchItem}
        setSearchItem={setSearchItem}
      />
      {checkout && 
        <CheckoutForm
          closeForm={() => openCheckout(false)} 
          clearBasket={clearBasket}
          openCheckout= {openCheckout}
          totalCount={totalCount}
          totalPrice={totalPrice}
          basket={basket}
        />
      }
      
      <ModalBasket
        basket={basket}
        addToBasket={addToBasket}
        removeFromBasket={removeFromBasket}
        modalBasket = {modalBasket}
        removeCompletely = {removeCompletely}
        checkoutClick = {checkoutClick}
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
      <Footer/>
      
    </div>
    
  )
}

export default App