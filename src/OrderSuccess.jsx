import React from "react";

const OrderSuccess = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          Order Placed Successfully
        </div>
        <p className="mt-4 text-gray-700">
          Thank you for your order! Your order has been successfully placed.
        </p>
      </div>
    </div>
  );
};

export default OrderSuccess;
