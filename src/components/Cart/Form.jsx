import React, { memo } from 'react';
import { db } from '../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useForm } from 'react-hook-form';

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
        <div className="my-50 flex h-auto w-full items-center justify-center">
            <div className="w-full max-w-6/10">
                {/* onSubmit */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-gray-from flex w-full flex-col items-center justify-center rounded-2xl py-4"
                >
                    <p className="text-center text-lg leading-4 font-bold">
                        Share your opinion <br /> with us
                    </p>

                    <div className="my-5 flex h-auto w-full flex-col items-center justify-between gap-3 px-4">
                        <div className="flex w-full flex-col justify-between gap-1 text-xs">
                            <input
                                {...register('name')}
                                className="w-full rounded-md bg-white px-2 py-1 placeholder:text-xs placeholder:text-gray-400 focus:border-0 focus:outline-none"
                                type="text"
                                placeholder="Your name"
                            />
                            <input
                                {...register('email')}
                                type="email"
                                placeholder="Your email"
                                className="w-full rounded-md bg-white px-2 py-1 placeholder:text-xs placeholder:text-gray-400 focus:border-0 focus:outline-none"
                            />
                        </div>
                        <textarea
                            {...register('message', {
                                required: 'Please, write something',
                                minLength: {
                                    value: 5,
                                    message: 'Minimum 5 characters required',
                                },
                            })}
                            placeholder="Write something..."
                            className="h-full w-full resize-none rounded-md bg-white p-2 placeholder:text-xs placeholder:text-gray-400 focus:border-0 focus:outline-none"
                            required
                        ></textarea>
                    </div>
                    {errors.message && (
                        <p className="mt-2 text-sm font-bold text-red-500">
                            {errors.message.message}
                        </p>
                    )}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`h-7 w-40 cursor-pointer rounded-xl border border-red-500 text-lg font-bold text-red-700 transition-transform duration-200 ${isSubmitting ? 'cursor-not-allowed opacity-50' : 'hover:scale-110'} `}
                    >
                        {isSubmitting ? '...' : 'Send'}
                    </button>
                </form>
            </div>
        </div>
    );
});

export default Form;
