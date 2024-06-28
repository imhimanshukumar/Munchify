import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:mr-8 mb-4 md:mb-0">
          <img
            src="/images/Logo.png"
            alt="Munchify Logo"
            className="rounded-lg shadow-md max-w-full h-auto"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Welcome to Munchify!
          </h2>
          <p className="text-gray-700 mb-4">
            Munchify is your ultimate destination for delicious food delivered
            right to your doorstep. Whether you're craving a hearty meal, a
            quick snack, or something sweet, we've got you covered.
          </p>
          <p className="text-gray-700 mb-4">
            Our mission is to make food delivery seamless and enjoyable. With a
            wide range of cuisines and restaurants to choose from, along with
            efficient delivery services, Munchify ensures that your food arrives
            fresh and on time.
          </p>
          <p className="text-gray-700 mb-4">
            Join thousands of satisfied customers who rely on Munchify for their
            daily culinary needs. Explore our menu, place your order, and let us
            take care of the rest.
          </p>
          <div className="flex items-center">
            <div className="bg-blue-500 text-white rounded-full px-4 py-2 mr-4 text-sm font-semibold">
              Download our App
            </div>
            <Link to="/contact" className="text-blue-500 underline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
