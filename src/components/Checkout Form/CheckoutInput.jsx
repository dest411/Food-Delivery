import React from 'react';

const CheckoutInput = ({ 
    label,          
    name,           
    value,          
    onChange,       
    type = "text",  
    required = false, 
    wasSubmitted,
    isValid,  
    errorMessage, 
    ...props 
}) => {

    const isError = wasSubmitted && !isValid;
    
    const inputClass = `w-full border p-3 rounded-xl focus:outline-none focus:border-orange-500 transition bg-white ${
        isError ? 'border-red-500 animate-pulse' : 'border-gray-300'
    }`;

    return (
        <div className="relative">
            <input 
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className={inputClass}
                placeholder=" "
                {...props}
            />
            <label className="absolute -top-3 left-3 bg-white px-1 text-sm text-gray-500 font-medium">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            
            {isError && (
                <p className="text-red-500 text-xs mt-1 ml-2">{errorMessage}</p>
            )}
        </div>
    );
};

export default CheckoutInput;