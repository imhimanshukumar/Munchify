import React, { useState } from "react";
import { Link } from "react-router-dom";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [upiId, setUpiId] = useState("");

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleCardInputChange = (e) => {
    setCardDetails({
      ...cardDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpiInputChange = (e) => {
    setUpiId(e.target.value);
  };

  const validateCardDetails = () => {
    // Simple validation for demo purposes
    return (
      cardDetails.cardNumber.length === 16 &&
      cardDetails.expiryDate.match(/^\d{2}\/\d{4}$/) &&
      cardDetails.cvv.length === 3
    );
  };

  const validateUpiId = () => {
    // Simple validation for demo purposes
    return upiId.trim() !== "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (paymentMethod === "card" && validateCardDetails()) {
      console.log("Submitting card details:", cardDetails);
      // Perform card payment processing logic here
      // Redirect to success component or confirm order page
      // For demo, assuming redirection to OrderSuccess component after successful payment
      // You can replace '/order-success' with your actual route path
      // history.push('/order-success'); // if using useHistory hook
    } else if (paymentMethod === "upi" && validateUpiId()) {
      console.log("Submitting UPI ID:", upiId);
      // Perform UPI payment processing logic here
      // Redirect to success component or confirm order page
      // history.push('/order-success'); // if using useHistory hook
    } else {
      alert("Please enter valid payment details.");
    }
    // Clear form fields or navigate to success component or confirm order page
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          Payment Information
        </div>
        <div className="mt-4">
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="paymentCard"
              name="paymentMethod"
              value="card"
              checked={paymentMethod === "card"}
              onChange={() => handlePaymentMethodChange("card")}
              className="mr-2"
            />
            <label
              htmlFor="paymentCard"
              className="text-sm font-medium text-gray-700 cursor-pointer"
            >
              Credit/Debit Card
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="paymentUpi"
              name="paymentMethod"
              value="upi"
              checked={paymentMethod === "upi"}
              onChange={() => handlePaymentMethodChange("upi")}
              className="mr-2"
            />
            <label
              htmlFor="paymentUpi"
              className="text-sm font-medium text-gray-700 cursor-pointer"
            >
              UPI
            </label>
          </div>
        </div>
        {paymentMethod === "card" && (
          <form onSubmit={handleSubmit} className="mt-4">
            <div>
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={cardDetails.cardNumber}
                onChange={handleCardInputChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                maxLength="16"
                minLength="16"
                required
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="expiryDate"
                className="block text-sm font-medium text-gray-700"
              >
                Expiry Date (MM/YYYY)
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={cardDetails.expiryDate}
                onChange={handleCardInputChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="MM/YYYY"
                pattern="\d{2}/\d{4}"
                required
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="cvv"
                className="block text-sm font-medium text-gray-700"
              >
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={cardDetails.cvv}
                onChange={handleCardInputChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                maxLength="3"
                minLength="3"
                required
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded ${
                  validateCardDetails() ? "" : "opacity-50 cursor-not-allowed"
                }`}
              >
                Confirm Payment
              </button>
            </div>
          </form>
        )}
        {paymentMethod === "upi" && (
          <form onSubmit={handleSubmit} className="mt-4">
            <div>
              <label
                htmlFor="upiId"
                className="block text-sm font-medium text-gray-700"
              >
                UPI ID
              </label>
              <input
                type="text"
                id="upiId"
                name="upiId"
                value={upiId}
                onChange={handleUpiInputChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded ${
                  validateUpiId() ? "" : "opacity-50 cursor-not-allowed"
                }`}
              >
                Confirm Payment
              </button>
            </div>
          </form>
        )}
        {/* Done button to navigate to OrderSuccess component */}
        {paymentMethod !== "" && (
          <div className="mt-4">
            <Link to="/ordersuccess">
              <button className="w-full bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
                Done
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;






// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Payment = () => {
//   const [paymentMethod, setPaymentMethod] = useState("card");
//   const [cardDetails, setCardDetails] = useState({
//     cardNumber: "",
//     expiryDate: "",
//     cvv: "",
//   });
//   const [upiId, setUpiId] = useState("");

//   const handlePaymentMethodChange = (method) => {
//     setPaymentMethod(method);
//   };

//   const handleCardInputChange = (e) => {
//     setCardDetails({
//       ...cardDetails,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleUpiInputChange = (e) => {
//     setUpiId(e.target.value);
//   };

//   const validateCardDetails = () => {
//     // Simple validation for demo purposes
//     return (
//       cardDetails.cardNumber.length === 16 &&
//       cardDetails.expiryDate.match(/^\d{2}\/\d{4}$/) &&
//       cardDetails.cvv.length === 3
//     );
//   };

//   const validateUpiId = () => {
//     // Simple validation for demo purposes
//     return upiId.trim() !== "";
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (paymentMethod === "card" && validateCardDetails()) {
//       console.log("Submitting card details:", cardDetails);
//       // Perform card payment processing logic here
//       // Redirect to success component or confirm order page
//     } else if (paymentMethod === "upi" && validateUpiId()) {
//       console.log("Submitting UPI ID:", upiId);
//       // Perform UPI payment processing logic here
//       // Redirect to success component or confirm order page
//     } else {
//       alert("Please enter valid payment details.");
//     }
//     // Clear form fields or navigate to success component or confirm order page
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
//       <div className="p-8">
//         <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
//           Payment Information
//         </div>
//         <div className="mt-4">
//           <div className="flex items-center mb-4">
//             <input
//               type="radio"
//               id="paymentCard"
//               name="paymentMethod"
//               value="card"
//               checked={paymentMethod === "card"}
//               onChange={() => handlePaymentMethodChange("card")}
//               className="mr-2"
//             />
//             <label
//               htmlFor="paymentCard"
//               className="text-sm font-medium text-gray-700 cursor-pointer"
//             >
//               Credit/Debit Card
//             </label>
//           </div>
//           <div className="flex items-center mb-4">
//             <input
//               type="radio"
//               id="paymentUpi"
//               name="paymentMethod"
//               value="upi"
//               checked={paymentMethod === "upi"}
//               onChange={() => handlePaymentMethodChange("upi")}
//               className="mr-2"
//             />
//             <label
//               htmlFor="paymentUpi"
//               className="text-sm font-medium text-gray-700 cursor-pointer"
//             >
//               UPI
//             </label>
//           </div>
//         </div>
//         {paymentMethod === "card" && (
//           <form onSubmit={handleSubmit} className="mt-4">
//             <div>
//               <label
//                 htmlFor="cardNumber"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Card Number
//               </label>
//               <input
//                 type="text"
//                 id="cardNumber"
//                 name="cardNumber"
//                 value={cardDetails.cardNumber}
//                 onChange={handleCardInputChange}
//                 className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 maxLength="16"
//                 minLength="16"
//                 required
//               />
//             </div>
//             <div className="mt-4">
//               <label
//                 htmlFor="expiryDate"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Expiry Date (MM/YYYY)
//               </label>
//               <input
//                 type="text"
//                 id="expiryDate"
//                 name="expiryDate"
//                 value={cardDetails.expiryDate}
//                 onChange={handleCardInputChange}
//                 className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="MM/YYYY"
//                 pattern="\d{2}/\d{4}"
//                 required
//               />
//             </div>
//             <div className="mt-4">
//               <label
//                 htmlFor="cvv"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 CVV
//               </label>
//               <input
//                 type="text"
//                 id="cvv"
//                 name="cvv"
//                 value={cardDetails.cvv}
//                 onChange={handleCardInputChange}
//                 className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 maxLength="3"
//                 minLength="3"
//                 required
//               />
//             </div>
//             <div className="mt-6">
//               <button
//                 type="submit"
//                 className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded ${
//                   validateCardDetails() ? "" : "opacity-50 cursor-not-allowed"
//                 }`}
//               >
//                 Confirm Payment
//               </button>
//             </div>
//           </form>
//         )}
//         {paymentMethod === "upi" && (
//           <form onSubmit={handleSubmit} className="mt-4">
//             <div>
//               <label
//                 htmlFor="upiId"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 UPI ID
//               </label>
//               <input
//                 type="text"
//                 id="upiId"
//                 name="upiId"
//                 value={upiId}
//                 onChange={handleUpiInputChange}
//                 className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 required
//               />
//             </div>
//             <div className="mt-6">
//               <button
//                 type="submit"
//                 className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded ${
//                   validateUpiId() ? "" : "opacity-50 cursor-not-allowed"
//                 }`}
//               >
//                 Confirm Payment
//               </button>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Payment;
