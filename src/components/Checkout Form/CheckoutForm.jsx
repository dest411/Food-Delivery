import React, { useState } from 'react';
import { db } from '../../firebase.js'; // Переконайся, що шлях правильний
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 

const CheckoutForm = ({ basket, totalCount, totalPrice, closeForm, clearBasket }) => {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        paymentMethod: 'cash', // Додав вибір оплати
        comment: ''
    });

    const [isSending, setIsSending] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);

        try {
            // Відправка замовлення в колекцію "orders"
            await addDoc(collection(db, "orders"), {
                customer: {
                    name: formData.name,
                    phone: formData.phone,
                    address: formData.address,
                    comment: formData.comment
                },
                order: {
                    items: basket, // Список товарів
                    totalPrice: totalPrice,
                    totalCount: totalCount,
                    paymentMethod: formData.paymentMethod
                },
                status: 'new',
                createdAt: serverTimestamp() // Час сервера
            });

            alert(`Дякуємо, ${formData.name}! Оператор зв'яжеться з вами.`);
            
            clearBasket(); // Очистити кошик
            closeForm();   // Закрити вікно

        } catch (error) {
            console.error("Error: ", error);
            alert("Помилка при замовленні. Перевірте консоль.");
        } finally {
            setIsSending(false);
        }
    };

    return (
        // Задній фон (затемнення)
        <div className="fixed inset-0 bg-black/60 z-[300] flex justify-center items-center backdrop-blur-sm">
            
            {/* Саме вікно */}
            <div className="bg-white p-8 rounded-2xl w-[90%] max-w-[500px] relative shadow-2xl animate-in fade-in zoom-in duration-300">
                
                <button 
                    onClick={closeForm}
                    className="absolute top-4 right-5 text-gray-500 hover:text-red-500 text-3xl font-bold transition"
                >
                    &times;
                </button>

                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Checkout</h2>
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    
                    <div className="space-y-4">
                        <input 
                            type="text" name="name" placeholder="Ваше ім'я" required 
                            value={formData.name} onChange={handleInputChange}
                            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:border-orange-500 transition"
                        />
                        <input 
                            type="tel" name="phone" placeholder="Телефон" required 
                            value={formData.phone} onChange={handleInputChange}
                            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:border-orange-500 transition"
                        />
                        <input 
                            type="text" name="address" placeholder="Адреса доставки" required 
                            value={formData.address} onChange={handleInputChange}
                            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:border-orange-500 transition"
                        />
                        <textarea 
                            name="comment" placeholder="Коментар до замовлення (необов'язково)"
                            value={formData.comment} onChange={handleInputChange}
                            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:border-orange-500 transition h-24 resize-none"
                        />
                        
                        <select 
                            name="paymentMethod" 
                            value={formData.paymentMethod} onChange={handleInputChange}
                            className="w-full border border-gray-300 p-3 rounded-xl bg-white"
                        >
                            <option value="cash">Готівка</option>
                            <option value="card">Карта</option>
                        </select>
                    </div>

                    <div className="mt-4 pt-4 border-t border-dashed border-gray-300 flex justify-between text-xl font-bold">
                        <span>До сплати:</span>
                        <span className="text-orange-600">{totalPrice}$</span>
                    </div>

                    <button 
                        type="submit" 
                        disabled={isSending}
                        className={`mt-2 py-4 text-white text-xl font-bold rounded-xl transition shadow-lg transform active:scale-95
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