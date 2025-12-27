import { create } from "zustand";
import Foods from "../Food";

export const allDishes = Foods.flatMap(category => {
  return Object.values(category.typeFood).map(dish => ({
      ...dish,
      category: category.name
  }));
});

export const useStore = create((set, get) => ({
  //STATE
  activeMenu: 'Pizza',
  basket: [],
  searchItem: '',
  
  // Стани видимості
  isModalBasketOpen: false,
  isCheckoutOpen: false,



  setActiveMenu: (menu) => set({ activeMenu: menu }),
  setSearchItem: (text) => set({ searchItem: text }),
  
  setModalBasketOpen: (isOpen) => set({ isModalBasketOpen: isOpen }),
  setCheckoutOpen: (isOpen) => set({ isCheckoutOpen: isOpen }),

  // закрити кошик і відкрити чекаут
  openCheckout: () => set({ isModalBasketOpen: false, isCheckoutOpen: true }),

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
      return { basket: [...state.basket, { ...newItem, count: 1 }] };
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


  getTotalCount: () => {
    return get().basket.reduce((acc, item) => acc + item.count, 0);
  },

  getTotalPrice: () => {
    return get().basket.reduce((acc, item) => 
      acc + (parseFloat(item.price.replace(',', '.')) * item.count), 0
    ).toFixed(2);
  }
}));