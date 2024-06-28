import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

const Delivery = () => {
  const [address, setAddress] = useState({
    street: '',
    city: '',
    zipcode: ''
  });

  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value
    });
  };

  const isAddressValid = address.street !== '' && address.city !== '' && address.zipcode !== '';

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-24 w-24 object-contain md:h-48 md:w-48" src="images/Logo.png" alt="Food Delivery" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Delivery Address</div>
          <div className="mt-2 text-xl leading-tight">Enter your delivery address</div>
          <form className="mt-4">
            <div>
              <label htmlFor="street" className="block text-sm font-medium text-gray-700">Street Address</label>
              <input type="text" id="street" name="street" value={address.street} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="mt-4">
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
              <input type="text" id="city" name="city" value={address.city} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="mt-4">
              <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700">Zip Code</label>
              <input type="text" id="zipcode" name="zipcode" value={address.zipcode} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
           
          </form>
          {isAddressValid && (
            <div className="mt-4">
              <Link to="/payment">
                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                  Proceed to Payment
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Delivery;
