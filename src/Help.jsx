import React from 'react'

const Help = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">How can we help you?</h2>
      <p className="text-gray-700 mb-4">
        Whether you have a question about our menu, delivery services, or anything else, we're here to help!
      </p>
      <ul className="divide-y divide-gray-200">
        <li className="py-2">
          <span className="text-gray-800 font-semibold">FAQs:</span> Visit our <span className="text-blue-500">FAQ page</span> for commonly asked questions.
        </li>
        <li className="py-2">
          <span className="text-gray-800 font-semibold">Contact Us:</span> Feel free to contact us at <span className="text-blue-500">+917544068193</span> if you can't find what you're looking for.
        </li>
        <li className="py-2">
          <span className="text-gray-800 font-semibold">Feedback:</span> We value your feedback! Let us know how we can improve your experience.
        </li>
      </ul>
      <div className="mt-4">
        <p className="text-gray-700">Our support team is available to assist you.</p>
        <p className="text-gray-700">Monday - Friday, 9:00 AM - 6:00 PM (IST)</p>
      </div>
    </div>
  )
}

export default Help;