import React, { memo } from 'react';
import { db } from '../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useForm, useFormContext } from 'react-hook-form';

const Form = memo(() => {
    console.log('form render');

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({});

    const onSubmit = async (data) => {
        try {
            await addDoc(collection(db, 'feedbacks'), {
                name: data.name || 'Анонім',
                email: data.email,
                message: data.message,
                createdAt: serverTimestamp(),
            });

            alert('Дякуємо за ваш відгук!');
            reset();
        } catch (error) {
            console.error('Помилка відправки відгуку: ', error);
            alert('Щось пішло не так. Спробуйте пізніше.');
        }
    };

    return (
        <div className="w-full h-auto my-50 flex justify-center items-center">
            <div className="w-full max-w-[920px]">
                
                {/* onSubmit */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-gray-from rounded-2xl w-full py-8 flex flex-col justify-center items-center"
                >
                    <p className="text-6xl text-center font-bold">
                        Share your opinion <br /> with us
                    </p>

                    <div className="w-full h-35 my-8 px-10 flex justify-between">
                        <div className="flex flex-col justify-between gap-2">
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-[380px] focus:outline-none focus:border-0 bg-white rounded-2xl p-4 py-5 placeholder:text-2xl placeholder:text-gray-400"
                                type="text"
                                placeholder="Your name"
                            />
                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                type="email"
                                placeholder="Your email"
                                className="w-[380px] focus:outline-none focus:border-0 bg-white rounded-2xl p-4 py-5 placeholder:text-2xl placeholder:text-gray-400"
                            />
                        </div>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Write something..."
                            className="resize-none focus:outline-none focus:border-0 bg-white p-2 rounded-2xl w-[430px] h-full placeholder:text-2xl placeholder:text-gray-400"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={isSending}
                        className={`border-red-500 text-red-700 text-3xl font-bold border rounded-3xl w-[140px] h-[50px] cursor-pointer transition-transform duration-200 
                        ${isSending ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'}
                    `}
                    >
                        {isSending ? '...' : 'Send'}
                    </button>
                </form>
            </div>
        </div>
    );
});

export default Form;
