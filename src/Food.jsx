import pizza from './png/pizza.svg'
import pasta from './png/pasta.svg'
import burger from './png/burger.svg'

import PepperoniPizza from './png/PizzaPhoto/PepperoniPizza.svg'
import VegetablesPizza from './png/PizzaPhoto/VegetablesPizza.svg'
import MargheritaPizza from './png/PizzaPhoto/MargheritaPizza.svg'

import doubleBeefBurger from './png/BurgersPhoto/doubleBeefBurger.png'
import chickenBurger from './png/BurgersPhoto/chickenBurger.png'
import cheeseBurger from './png/BurgersPhoto/cheeseBurger.png'

const Foods = [
    {
        id: 1,
        name: 'Pizza',
        photo: pizza,
        typeFood: {
            Pepperoni: {
                typePhoto: PepperoniPizza, 
                imgStyle: "w-[480px] h-[560px]",
                name: 'Pepperoni pizza',
                price: '15,00',
                ingredients: ['Pepperoni sausage', 'Cheese pizza', 'Red bell pepper', 'Ketchup', 'Thyme', 'Tomato']
            },
            Vegetables: {
                typePhoto: VegetablesPizza,
                imgStyle: "w-[480px] h-[560px]", 
                name: 'Vegetables pizza',
                price: '12,00',
                ingredients: ['Mushroom', 'Corn', 'Black olive', 'Tomato', 'Peas']
            },
            Margherita: {
                typePhoto: MargheritaPizza,
                imgStyle: "w-[480px] h-[560px]",
                name: 'Margherita pizza',
                price: '13,90',
                ingredients: ['Basil', 'Cheese pizza', 'Black pepper', 'Garlic', 'Thyme', 'Tomato']
            }
        }
    },
    {
        id: 2,
        name: 'Burger',
        photo: burger,
        typeFood: {
            Cheese: {
                typePhoto: cheeseBurger,
                imgStyle: "w-[400px] h-[280px] top-[-50px]!", 
                name: 'Cheese Burger',
                price: '6,00',
                ingredients: ['Beef patty', 'Cheddar cheese', 'Pickles', 'Onion', 'Mustard', 'Ketchup']
            },
            Chicken: {
                typePhoto: chickenBurger,
                imgStyle: "w-[500] h-[304px] top-[-50px]!", 
                name: 'Chicken Burger',
                price: '7,00',
                ingredients: ['Chicken fillet', 'Lettuce', 'Tomato', 'Mayonnaise', 'Sesame bun']
            },
            Double: {
                typePhoto: doubleBeefBurger,
                imgStyle: "w-[400px] h-[400px] top-[-120px]!",
                name: 'Double Beef Burger',
                price: '8,50',
                ingredients: ['Double beef patty', 'Bacon', 'BBQ sauce', 'Caramelized onion', 'Cheese']
            }
        }
    },
    {
        id: 3,
        name: 'Pasta',
        photo: pasta,
        typeFood: {
            Carbonara: {
                typePhoto: null,
                imgStyle: "w-[480px] h-[560px]", 
                name: 'Pasta Carbonara',
                price: '12,00',
                ingredients: ['Spaghetti', 'Bacon', 'Egg yolk', 'Parmesan cheese', 'Black pepper']
            },
            Bolognese: {
                typePhoto: null, 
                name: 'Pasta Bolognese',
                imgStyle: "w-[480px] h-[560px]",
                price: '18,00',
                ingredients: ['Tagliatelle', 'Minced beef', 'Tomato sauce', 'Carrot', 'Celery', 'Red wine']
            },
            Pesto: {
                typePhoto: null,
                imgStyle: "w-[480px] h-[560px]",
                name: 'Pasta Pesto',
                price: '16,00',
                ingredients: ['Penne', 'Basil pesto', 'Pine nuts', 'Olive oil', 'Parmesan cheese']
            }
        }
    }
]

export default Foods