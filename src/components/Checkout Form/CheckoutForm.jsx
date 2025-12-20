import React, { useState } from 'react';
import { db } from '../../firebase.js'; 
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 

const CheckoutForm = ({ basket, totalCount, totalPrice, closeForm, clearBasket, openCheckout }) => {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        paymentMethod: 'cash',
        comment: ''
    });

    const [isSending, setIsSending] = useState(false);
    
    const [wasSubmitted, setWasSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setWasSubmitted(true);

        const isNameValid = formData.name.length >= 2;
        const isPhoneValid = formData.phone.match(/[0-9+\- ]{10,}/);
        const isAddressValid = formData.address.length >= 5;

        if (!isNameValid || !isPhoneValid || !isAddressValid) {
            return; 
        }

        setIsSending(true);

        const simplifiedBasket = basket.map(item => ({
            name: item.name,           
            price: item.price,         
            count: item.count          
        }));

        try {
            await addDoc(collection(db, "orders"), {
                customer: {
                    name: formData.name,
                    phone: formData.phone,
                    address: formData.address,
                    comment: formData.comment
                },
                order: {
                    items: simplifiedBasket, 
                    totalPrice: totalPrice,
                    totalCount: totalCount,
                    paymentMethod: formData.paymentMethod
                },
                status: 'new',
                createdAt: serverTimestamp()
            });

            alert(`Дякуємо, ${formData.name}! Оператор зв'яжеться з вами.`);
            clearBasket();
            closeForm();

        } catch (error) {
            console.error("Error: ", error);
            alert("Помилка при замовленні. Перевірте консоль.");
        } finally {
            setIsSending(false);
        }
    };

    const getInputClass = (isValid) => {
        const baseClass = "w-full border p-3 rounded-xl focus:outline-none focus:border-orange-500 transition bg-white";
        if (wasSubmitted && !isValid) {
            return `${baseClass} border-red-500 animate-pulse`;
        }
        return `${baseClass} border-gray-300`;
    };

    return (
        <div className="fixed inset-0 bg-black/60 z-300 flex justify-center items-center backdrop-blur-sm">
            
            <div className="bg-white p-8 rounded-2xl w-[90%] max-w-[500px] relative shadow-2xl animate-in fade-in zoom-in duration-300">
                
                <button 
                    onClick={() => openCheckout(false)}
                    className="absolute top-4 right-5 text-gray-500 hover:text-red-500 text-3xl font-bold transition"
                >
                    &times;
                </button>

                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Checkout</h2>
                
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                    
                    <div className="space-y-6">
                        
                        <div className="relative">
                            <input 
                                type="text" name="name" 
                                value={formData.name} onChange={handleInputChange}
                                className={getInputClass(formData.name.length >= 2)}
                                placeholder=" "
                            />
                            <label className="absolute -top-3 left-3 bg-white px-1 text-sm text-gray-500 font-medium">
                                Ваше ім'я <span className="text-red-500">*</span>
                            </label>
                            {wasSubmitted && formData.name.length < 2 && (
                                <p className="text-red-500 text-xs mt-1 ml-2">Введіть ім'я (мін. 2 літери)</p>
                            )}
                        </div>
                        
                        {/* INPUT: ТЕЛЕФОН */}
                        <div className="relative">
                            <input 
                                type="tel" name="phone"
                                value={formData.phone} onChange={handleInputChange}
                                className={getInputClass(formData.phone.match(/[0-9+\- ]{10,}/))}
                            />
                            <label className="absolute -top-3 left-3 bg-white px-1 text-sm text-gray-500 font-medium">
                                Телефон <span className="text-red-500">*</span>
                            </label>
                            {wasSubmitted && !formData.phone.match(/[0-9+\- ]{10,}/) && (
                                <p className="text-red-500 text-xs mt-1 ml-2">Введіть коректний номер</p>
                            )}
                        </div>
                        
                        {/* INPUT: АДРЕСА */}
                        <div className="relative">
                            <input 
                                type="text" name="address"
                                value={formData.address} onChange={handleInputChange}
                                className={getInputClass(formData.address.length >= 5)}
                            />
                            <label className="absolute -top-3 left-3 bg-white px-1 text-sm text-gray-500 font-medium">
                                Адреса доставки <span className="text-red-500">*</span>
                            </label>
                            {wasSubmitted && formData.address.length < 5 && (
                                <p className="text-red-500 text-xs mt-1 ml-2">Вкажіть адресу (вулиця, дім)</p>
                            )}
                        </div>
                        
                        {/* TEXTAREA: КОМЕНТАР */}
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
                        
                        {/* SELECT: ОПЛАТА */}
                        <div className="relative">
                             <select 
                                name="paymentMethod" 
                                value={formData.paymentMethod} onChange={handleInputChange}
                                className="w-full border border-gray-300 p-3 rounded-xl bg-white cursor-pointer focus:outline-none focus:border-orange-500"
                            >
                                <option value="cash">Готівка</option>
                                <option value="card">Карта</option>
                            </select>
                            <label className="absolute -top-3 left-3 bg-white px-1 text-sm text-gray-500 font-medium">
                                Спосіб оплати
                            </label>
                        </div>

                    </div>

                    <div className="pt-2 border-t border-dashed border-gray-300 flex justify-between text-xl font-bold">
                        <span>До сплати:</span>
                        <span className="text-orange-600">{totalPrice}$</span>
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