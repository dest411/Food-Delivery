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
        <div className="my-20 flex h-auto w-full items-center justify-center">
            <div className="w-full max-w-6/10">
                {/* onSubmit */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-gray-from flex w-full flex-col items-center justify-center rounded-2xl py-4"
                >
                    <p className="l:text-3xl l:leading-6 text-center text-lg leading-4 font-bold sm:text-2xl lg:text-4xl lg:leading-7">
                        Share your opinion <br /> with us
                    </p>

                    <div className="l:flex-row l:my-8 my-5 flex h-auto w-full flex-col justify-between gap-3 px-4 lg:my-10">
                        <div className="l:gap-4 l:w-1/2 flex w-full flex-col justify-between gap-1 text-xs">
                            <input
                                {...register('name')}
                                className="l:py-3 l:placeholder:text-2xl w-full rounded-md bg-white px-2 py-1 placeholder:text-xs placeholder:text-gray-400 focus:border-0 focus:outline-none sm:py-2 sm:placeholder:text-lg lg:py-4 lg:placeholder:text-3xl"
                                type="text"
                                placeholder="Your name"
                            />
                            <input
                                {...register('email')}
                                type="email"
                                placeholder="Your email"
                                className="l:py-3 l:placeholder:text-2xl w-full rounded-md bg-white px-2 py-1 placeholder:text-xs placeholder:text-gray-400 focus:border-0 focus:outline-none sm:py-2 sm:placeholder:text-lg lg:py-4 lg:placeholder:text-3xl"
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
                            className="l:w-1/2 l:placeholder:text-2xl w-full resize-none rounded-md bg-white p-2 placeholder:text-xs placeholder:text-gray-400 focus:border-0 focus:outline-none sm:py-2 sm:placeholder:text-lg lg:placeholder:text-3xl"
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
                        className={`h-7 w-40 cursor-pointer rounded-xl border border-red-500 text-lg font-bold text-red-700 transition-transform duration-200 sm:h-9 sm:w-45 sm:rounded-2xl sm:text-2xl lg:h-12 lg:w-55 lg:rounded-3xl lg:text-4xl ${isSubmitting ? 'cursor-not-allowed opacity-50' : 'hover:scale-110'} `}
                    >
                        {isSubmitting ? '...' : 'Send'}
                    </button>
                </form>
            </div>
        </div>
    );
});

export default Form;
