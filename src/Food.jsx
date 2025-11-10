import pizza from './png/pizza.svg'
import pasta from './png/pasta.svg'
import burger from './png/burger.svg'

const Foods = [
    {
        id: 1,
        name: 'Pizza',
        photo: pizza,
        typePizza: {
            Pepperoni: {
                name: 'Pepperoni pizza',
                price: '55,00',
                ingredients: [
                    'Pepperoni sausage',
                    'Cheese pizza',
                    'Red bell pepper',
                    'Ketchup',
                    'Thyme',
                    'Tomato'
                ]
            },
            Vegetables: {
                name: 'Vegetables pizza',
                price: '50,00',
                ingredients: [
                    'Mushroom',
                    'Corn',
                    'Black olive',
                    'Tomato',
                    'Peas'
                ]
            },
            Margherita: {
                name: 'Margherita pizza',
                price: '49,87',
                ingredients: [
                    'Basil',
                    'Cheese pizza',
                    'Black pepper',
                    'Garlic',
                    'Thyme',
                    'Tomato'
                ]
            }
        }
    },
    {
        id: 2,
        name: 'Burger',
        photo: burger
    },
    {
        id: 3,
        name: 'Pasta',
        photo: pasta
    }
]
export default Foods