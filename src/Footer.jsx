import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto text-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
          <div>
            <h5 className="text-lg font-semibold mb-4">Navigation</h5>
            <ul>
              <li><a href="#" className="hover:underline">Home</a></li>
              <li>
      <Link to="/about" className="hover:underline">
        About
      </Link>
    </li>
    <li>
      <Link to="/Contact" className="hover:underline">
        Contact
      </Link>
    </li>
    <li>
      <Link to="/aboutdeveloper" className="hover:underline">
        About Developer
      </Link>
    </li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold mb-4">Contact Us</h5>
            <ul>
              <li><span className="font-bold">Phone:</span> +917544068193</li>
              <li><span className="font-bold">Email:</span> himanshukusingh007@gmail.com</li>
              <li><span className="font-bold">Address:</span> Gopalganj (Bihar) India</li>
            </ul>
          </div>

        
          <div>
            <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
            <div className="flex justify-center space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-gray-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12.07c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.991 3.656 9.128 8.438 9.876v-6.987h-2.54v-2.889h2.54v-2.2c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.194 2.238.194v2.472h-1.259c-1.243 0-1.63.772-1.63 1.562v1.862h2.773l-.443 2.889h-2.33v6.987c4.782-.748 8.438-4.885 8.438-9.876z"/>
                </svg>
              </a>
              <a href="https://twitter.com/mehimanshusingh" aria-label="Twitter" className="hover:text-gray-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.83.656-2.825.775a4.918 4.918 0 0 0 2.163-2.724 9.86 9.86 0 0 1-3.127 1.195 4.903 4.903 0 0 0-8.36 4.482 13.914 13.914 0 0 1-10.11-5.137 4.903 4.903 0 0 0 1.518 6.544 4.897 4.897 0 0 1-2.222-.616v.061a4.902 4.902 0 0 0 3.933 4.807 4.905 4.905 0 0 1-2.217.084 4.906 4.906 0 0 0 4.577 3.41A9.864 9.864 0 0 1 0 21.54a13.905 13.905 0 0 0 7.548 2.212c9.057 0 14.01-7.514 14.01-14.01 0-.214-.005-.428-.015-.64a10.01 10.01 0 0 0 2.457-2.548z"/>
                </svg>
              </a>
              <a href="https://instagram.com/Imhimanshusingh" aria-label="Instagram" className="hover:text-gray-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.307.975.975 1.245 2.242 1.307 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.307 3.608-.975.975-2.242 1.245-3.608 1.307-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.307-.975-.975-1.245-2.242-1.307-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.307-3.608.975-.975 2.242-1.245 3.608-1.307 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.67.013-4.947.072-1.277.058-2.568.327-3.563 1.322-.996.996-1.265 2.286-1.322 3.563-.059 1.277-.072 1.688-.072 4.947s.013 3.67.072 4.947c.058 1.277.327 2.568 1.322 3.563.996.996 2.286 1.265 3.563 1.322 1.277.059 1.688.072 4.947.072s3.67-.013 4.947-.072c1.277-.058 2.568-.327 3.563-1.322.996-.996 1.265-2.286 1.322-3.563.059-1.277.072-1.688.072-4.947s-.013-3.67-.072-4.947c-.058-1.277-.327-2.568-1.322-3.563-.996-.996-2.286-1.265-3.563-1.322-1.277-.059-1.688-.072-4.947-.072z"/>
                  <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          &copy; 2024 Munchify. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
