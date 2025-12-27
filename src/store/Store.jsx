import { create } from "zustand";

export const useStore = create((set, get) => ({
  // --- СТАН (STATE) ---
  activeMenu: 'Pizza',
  basket: [],
  searchItem: '',
  
  // Стан для модальних вікон
  checkoutOpen: false,
  modalBasketOpen: false,

  // --- ДІЇ (ACTIONS) ---

  // Прості сетери
  setActiveMenu: (menu) => set({ activeMenu: menu }),
  setSearchItem: (term) => set({ searchItem: term }),
  setCheckoutOpen: (isOpen) => set({ checkoutOpen: isOpen }),
  setModalBasketOpen: (isOpen) => set({ modalBasketOpen: isOpen }),

  // Логіка переходу до оформлення (закрити кошик, відкрити чекаут)
  proceedToCheckout: () => set({ 
      modalBasketOpen: false, 
      checkoutOpen: true 
  }),

  // Логіка кошика (перенесена з App.js)
  addToBasket: (newItem) => set((state) => {
    const isExist = state.basket.find((item) => item.name === newItem.name);

    if (isExist) {
      return {
        basket: state.basket.map((item) =>
          item.name === newItem.name
            ? { ...item, count: (item.count || 1) + 1 }
            : item
        ),
      };
    } else {
      return { 
        basket: [...state.basket, { ...newItem, count: 1 }] 
      };
    }
  }),

  removeFromBasket: (itemToRemove) => set((state) => {
    if (itemToRemove.count > 1) {
      return {
        basket: state.basket.map((item) =>
          item.name === itemToRemove.name
            ? { ...item, count: item.count - 1 }
            : item
        ),
      };
    } else {
      return {
        basket: state.basket.filter((item) => item.name !== itemToRemove.name),
      };
    }
  }),

  removeCompletely: (itemToRemove) => set((state) => ({
    basket: state.basket.filter((item) => item.name !== itemToRemove.name)
  })),

  clearBasket: () => set({ basket: [] }),
}));