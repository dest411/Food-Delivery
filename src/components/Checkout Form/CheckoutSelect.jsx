import React from 'react';

const CheckoutSelect = ({ label, name, value, onChange, options }) => {
    return (
        <div className="relative">
            <select 
                name={name} 
                value={value} 
                onChange={onChange}
                className="w-full border border-gray-300 p-3 rounded-xl bg-white cursor-pointer focus:outline-none focus:border-orange-500"
            >
                {options.map(opt => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
            <label className="absolute -top-3 left-3 bg-white px-1 text-sm text-gray-500 font-medium">
                {label}
            </label>
        </div>
    );
};

export default CheckoutSelect;