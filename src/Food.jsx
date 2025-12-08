import pizza from './png/pizza.svg'
import pasta from './png/pasta.svg'
import burger from './png/burger.svg'

import PepperoniPizza from './png/PizzaPhoto/PepperoniPizza.svg'
import VegetablesPizza from './png/PizzaPhoto/VegetablesPizza.svg'
import MargheritaPizza from './png/PizzaPhoto/MargheritaPizza.svg'

const Foods = [
    {
        id: 1,
        name: 'Pizza',
        photo: pizza,
        typeFood: {
            Pepperoni: {
                typePhoto: PepperoniPizza, 
                name: 'Pepperoni pizza',
                price: 15.00,
                ingredients: ['Pepperoni sausage', 'Cheese pizza', 'Red bell pepper', 'Ketchup', 'Thyme', 'Tomato']
            },
            Vegetables: {
                typePhoto: VegetablesPizza, 
                name: 'Vegetables pizza',
                price: 12.00,
                ingredients: ['Mushroom', 'Corn', 'Black olive', 'Tomato', 'Peas']
            },
            Margherita: {
                typePhoto: MargheritaPizza,
                name: 'Margherita pizza',
                price: 13.87,
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
                typePhoto: null, 
                name: 'Cheese Burger',
                price: '45,00',
                ingredients: ['Beef patty', 'Cheddar cheese', 'Pickles', 'Onion', 'Mustard', 'Ketchup']
            },
            Chicken: {
                typePhoto: null, 
                name: 'Chicken Burger',
                price: '42,00',
                ingredients: ['Chicken fillet', 'Lettuce', 'Tomato', 'Mayonnaise', 'Sesame bun']
            },
            Double: {
                typePhoto: null,
                name: 'Double Beef Burger',
                price: '65,00',
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
                name: 'Pasta Carbonara',
                price: '52,00',
                ingredients: ['Spaghetti', 'Bacon', 'Egg yolk', 'Parmesan cheese', 'Black pepper']
            },
            Bolognese: {
                typePhoto: null, 
                name: 'Pasta Bolognese',
                price: '48,00',
                ingredients: ['Tagliatelle', 'Minced beef', 'Tomato sauce', 'Carrot', 'Celery', 'Red wine']
            },
            Pesto: {
                typePhoto: null,
                name: 'Pasta Pesto',
                price: '46,00',
                ingredients: ['Penne', 'Basil pesto', 'Pine nuts', 'Olive oil', 'Parmesan cheese']
            }
        }
    }
]

export default Foods