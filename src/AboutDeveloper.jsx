import React from "react";

const AboutDeveloper = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
      <div className="flex items-center justify-center mb-6">
        <img
          src="/images/Himanshu.jpg"
          alt="Himanshu Kumar"
          className="w-24 h-24 rounded-full object-cover"
        />
      </div>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Himanshu Kumar
        </h2>
        <p className="text-sm text-gray-600">Full Stack Developer</p>
      </div>
      <p className="text-gray-700 mb-4 text-center">
        Hello! I'm Himanshu Kumar, a passionate Full Stack Developer dedicated
        to crafting beautiful and functional web applications.
      </p>
      <div className="flex justify-center space-x-4 mb-4">
        <a
          href="https://www.instagram.com/Imhimanshusingh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Instagram
        </a>
        <a
          href="https://www.twitter.com/mehimanshusingh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Twitter
        </a>
        <a
          href="https://www.linkedin.com/in/himanshu-singh-063829166/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          LinkedIn
        </a>
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-500">
          For inquiries, feel free to reach out via email at{" "}
          <a href="mailto:himanshukusingh007@gmail.com" className="text-blue-500 hover:underline">
            himanshukusingh007@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutDeveloper;
