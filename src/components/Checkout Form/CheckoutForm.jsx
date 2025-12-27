import React, { useState } from 'react';
import { db } from '../../firebase.js'; 
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import CheckoutInput from './CheckoutInput';
import CheckoutSelect from './CheckoutSelect';
import { useStore } from '../../store/Store.jsx';

const CheckoutForm = () => {

    const isCheckoutOpen = useStore((state) => state.isCheckoutOpen);
    const basket = useStore((state) => state.basket);
    const clearBasket = useStore((state) => state.clearBasket);
    const setCheckoutOpen = useStore((state) => state.setCheckoutOpen);
    const totalPrice = useStore((state) => state.getTotalPrice());
    const totalCount = useStore((state) => state.getTotalCount());
    const [formData, setFormData] = useState({


        name: '',
        phone: '',
        address: '',
        paymentMethod: 'cash',
        comment: ''
    });

    const [isSending, setIsSending] = useState(false);
    const [wasSubmitted, setWasSubmitted] = useState(false);

    if (!isCheckoutOpen) return null;

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const isNameValid = formData.name.length >= 2;
    const phoneRegex = /[0-9+\- ]{10,}/; 
    const isPhoneValid = !!formData.phone.match(phoneRegex);
    const isAddressValid = formData.address.length >= 5;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setWasSubmitted(true);

        if (!isNameValid || !isPhoneValid || !isAddressValid) return;

        setIsSending(true);

        const simplifiedBasket = basket.map(item => ({
            name: item.name, price: item.price, count: item.count
        }));

        try {
            await addDoc(collection(db, "orders"), {
                customer: formData,
                order: {
                    items: simplifiedBasket, 
                    totalPrice, totalCount, 
                    paymentMethod: formData.paymentMethod
                },
                status: 'new',
                createdAt: serverTimestamp()
            });

            alert(`Дякуємо, ${formData.name}! Оператор зв'яжеться з вами.`);
            clearBasket();
            setCheckoutOpen(false);
        } catch (error) {
            console.error("Error: ", error);
            alert("Помилка.");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/60 z-300 flex justify-center items-center backdrop-blur-sm">
            <div className="bg-white p-8 rounded-2xl w-[90%] max-w-[500px] relative shadow-2xl animate-in fade-in zoom-in duration-300">
                
                <button 
                    onClick={() => setCheckoutOpen(false)}
                    className="absolute top-4 right-5 text-gray-500 hover:text-red-500 text-3xl font-bold transition"
                >
                    &times;
                </button>

                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Checkout</h2>
                
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                    <div className="space-y-6">
                        

                        <CheckoutInput 
                            label="Ваше ім'я"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            wasSubmitted={wasSubmitted}
                            isValid={isNameValid}
                            errorMessage="Введіть ім'я (мін. 2 літери)"
                        />

                        <CheckoutInput 
                            label="Телефон"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            wasSubmitted={wasSubmitted}
                            isValid={isPhoneValid}
                            errorMessage="Введіть коректний номер"
                        />

                        <CheckoutInput 
                            label="Адреса доставки"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                            wasSubmitted={wasSubmitted}
                            isValid={isAddressValid}
                            errorMessage="Вкажіть адресу (вулиця, дім)"
                        />

                        <div className="relative">
                             <textarea 
                                name="comment"
                                value={formData.comment} onChange={handleInputChange}
                                className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:border-orange-500 transition h-24 resize-none bg-white"
                            />
                            <label className="absolute -top-3 left-3 bg-white px-1 text-sm text-gray-500 font-medium">
                                Коментар (необов'язково)
                            </label>
                        </div>

                        <CheckoutSelect 
                            label="Спосіб оплати"
                            name="paymentMethod"
                            value={formData.paymentMethod}
                            onChange={handleInputChange}
                            options={[
                                { value: 'cash', label: 'Готівка' },
                                { value: 'card', label: 'Карта' }
                            ]}
                        />
                    </div>

                    <div className="pt-2 border-t border-dashed border-gray-300 flex justify-between items-center text-xl font-bold">
                        <span>До сплати:</span> 
                        <span className="text-orange-600 text-3xl">{totalPrice}$</span>
                    </div>

                    <button 
                        type="submit" 
                        disabled={isSending}
                        className={`py-4 text-white text-xl font-bold rounded-xl transition shadow-lg transform active:scale-95
                            ${isSending ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600 hover:shadow-orange-500/30'}
                        `}
                    >
                        {isSending ? 'Обробка...' : 'Підтвердити замовлення'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CheckoutForm;